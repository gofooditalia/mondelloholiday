// Richieste di prenotazione/contatto di mondelloholiday.it → email a info@gofood.it tramite Resend.
// Variabili su Vercel: RESEND_API_KEY (obbligatoria), CONTACT_FROM e CONTACT_TO (facoltative).

const FROM = process.env.CONTACT_FROM || 'Mondello Holiday <noreply@gofood.it>';
const TO = process.env.CONTACT_TO || 'info@gofood.it';

function clean(value, max) {
  return String(value || '').trim().slice(0, max);
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }

  // Campo nascosto: se è compilato è un bot, rispondiamo "ok" senza inviare nulla
  if (body.website) return res.status(200).json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    room: clean(body.room, 120),
    checkin: clean(body.checkin, 20),
    checkout: clean(body.checkout, 20),
    message: clean(body.message, 5000),
    lang: body.lang === 'en' ? 'en' : 'it',
    source: body.source === 'widget' ? 'Pulsante rapido' : 'Modulo prenotazione',
  };

  if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return res.status(400).json({ error: 'Dati mancanti o non validi' });
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY non impostata');
    return res.status(500).json({ error: 'Servizio non configurato' });
  }

  const rows = [
    ['Nome', data.name],
    ['Email', data.email],
    ['Alloggio', data.room],
    ['Arrivo', data.checkin],
    ['Partenza', data.checkout],
    ['Lingua', data.lang === 'en' ? 'Inglese' : 'Italiano'],
    ['Da', data.source],
  ].filter(([, v]) => v);

  const html =
    '<h2>Nuova richiesta da mondelloholiday.it</h2><table cellpadding="4">' +
    rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join('') +
    '</table>' +
    (data.message ? `<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>` : '');
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + (data.message ? `\n\n${data.message}` : '');
  const dates = data.checkin ? ` (${data.checkin}${data.checkout ? ' → ' + data.checkout : ''})` : '';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: `Richiesta Mondello Holiday – ${data.name}${dates}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error('[contact] Invio Resend non riuscito:', response.status, await response.text());
    return res.status(502).json({ error: 'Invio non riuscito' });
  }
  return res.status(200).json({ ok: true });
}
