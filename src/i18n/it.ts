import type { Translations } from './types';

export const it: Translations = {
  nav: {
    gallery: 'Galleria',
    booking: 'Prenota',
    location: 'Dove Siamo',
    prices: 'Prezzi',
  },
  hero: {
    badge: 'Mondello, Palermo — Sicilia',
    title: 'La tua casa a 2 passi dal mare',
    subtitle:
      'Due alloggi privati nel cuore di Mondello, per coppie e famiglie, a 900 metri dalla spiaggia.',
    ctaPrimary: 'Prenota ora',
    ctaSecondary: 'Scopri le camere',
  },
  gallery: {
    title: 'La Casa',
    subtitle: 'Spazi luminosi e accoglienti per le tue vacanze in Sicilia',
  },
  booking: {
    title: 'Scegli il tuo alloggio',
    subtitle:
      'Due alloggi privati in un appartamento al primo piano: la Mini-Casa Clio, per 1–2 ospiti, con bagno privato e angolo cottura, e Pellegrino, fino a 4 ospiti, con camera matrimoniale, camera doppia e bagno ad uso esclusivo. Soggiorno, salone e balcone retro sono in comune, quindi potresti incontrare altri ospiti. Prenota direttamente su Holidu o contattaci per informazioni.',
    bookOnline: 'Prenota su Holidu',
    comingSoon: 'In arrivo',
    emailCta: 'Scrivici un\'email',
  },
  location: {
    title: 'Dove Siamo',
    subtitle: 'Nel cuore di Mondello, la perla del Mediterraneo',
    description:
      'L\'appartamento si trova a soli 900 metri dalla spiaggia di Mondello, con tutti i servizi a portata di mano: ristoranti, farmacie, negozi di abbigliamento, fruttivendoli e panifici. Il centro di Palermo è raggiungibile in appena 25 minuti con i mezzi pubblici, mentre l\'aeroporto Falcone Borsellino dista solo 20 minuti in auto.',
    address: 'Via Martini, 5 — 90149 Palermo (PA)',
    openMap: 'Apri in Google Maps',
  },
  prices: {
    title: 'Prezzi',
    subtitle: 'Le tariffe aggiornate sono consultabili su Holidu. Prenota via email e ottieni uno sconto esclusivo.',
    platformCard: {
      label: 'Tariffe ufficiali',
      note: 'I prezzi variano in base alla stagione e alla disponibilità. Consulta Holidu per le tariffe aggiornate in tempo reale.',
      cta: 'Vedi i prezzi su Holidu',
    },
    discountCard: {
      badge: 'Offerta esclusiva',
      title: 'Prenota via email, risparmi di più',
      desc: 'Se le date che desideri sono disponibili e prenoti direttamente tramite email, applicheremo uno sconto rispetto alle tariffe pubblicate online.',
      cta: 'Richiedi lo sconto',
    },
    minStay: 'Soggiorno minimo: 2 notti',
  },
  form: {
    name: 'Nome',
    namePlaceholder: 'Il tuo nome',
    email: 'Email',
    emailPlaceholder: 'la-tua@email.com',
    room: 'Alloggio',
    roomDefault: 'Scegli un alloggio',
    checkin: 'Data di arrivo',
    checkout: 'Data di partenza',
    message: 'Messaggio (opzionale)',
    messagePlaceholder: 'Domande, richieste particolari…',
    submit: 'Invia richiesta',
    submitting: 'Invio in corso…',
    successTitle: 'Richiesta inviata!',
    successMsg: 'Grazie per averci scritto. Ti risponderemo entro 24 ore.',
    errorMsg: 'Si è verificato un errore. Riprova o scrivici direttamente a italiagofood@gmail.com.',
  },
  footer: {
    tagline: 'Casa vacanze a Mondello, Palermo',
    contact: 'Contatti',
    rights: `© ${new Date().getFullYear()} Mondello Holiday. Tutti i diritti riservati.`,
  },
};
