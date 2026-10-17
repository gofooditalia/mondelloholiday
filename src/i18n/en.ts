import type { Translations } from './types';

export const en: Translations = {
  nav: {
    gallery: 'Gallery',
    booking: 'Book',
    location: 'Location',
    prices: 'Prices',
  },
  hero: {
    badge: 'Mondello, Palermo — Sicily',
    title: 'Your home steps from the sea',
    subtitle:
      'Two private units in the heart of Mondello, for couples and families, 900 metres from the beach.',
    ctaPrimary: 'Book now',
    ctaSecondary: 'Discover the rooms',
  },
  gallery: {
    title: 'The House',
    subtitle: 'Bright and welcoming spaces for your holiday in Sicily',
  },
  booking: {
    title: 'Choose your accommodation',
    subtitle:
      'Two private units in a first-floor apartment: Mini-Casa Clio, for 1–2 guests, with private bathroom and kitchenette, and Pellegrino, for up to 4 guests, with a double bedroom, a twin room and a private bathroom for exclusive use. The living room, lounge and back balcony are shared, so you may meet other guests. Book directly on Holidu or contact us for information.',
    bookOnline: 'Book on Holidu',
    comingSoon: 'Coming soon',
    emailCta: 'Send us an email',
  },
  location: {
    title: 'Location',
    subtitle: 'In the heart of Mondello, the pearl of the Mediterranean',
    description:
      "The apartment is just 900 metres from Mondello beach, with everything you need close at hand: restaurants, pharmacies, clothing shops, greengrocers and bakeries. Palermo city centre is reachable in just 25 minutes by public transport, and Falcone Borsellino airport is only 20 minutes away by car.",
    address: 'Via Martini, 5 — 90149 Palermo (PA)',
    openMap: 'Open in Google Maps',
  },
  prices: {
    title: 'Prices',
    subtitle: 'Up-to-date rates are available on Holidu. Book by email and get an exclusive discount.',
    platformCard: {
      label: 'Official rates',
      note: 'Prices vary by season and availability. Check Holidu for real-time updated rates.',
      cta: 'View prices on Holidu',
    },
    discountCard: {
      badge: 'Exclusive offer',
      title: 'Book by email, save more',
      desc: 'If your preferred dates are available and you book directly by email, we will apply a discount compared to the rates published online.',
      cta: 'Request the discount',
    },
    minStay: 'Minimum stay: 2 nights',
  },
  form: {
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    room: 'Accommodation',
    roomDefault: 'Choose an accommodation',
    checkin: 'Check-in date',
    checkout: 'Check-out date',
    message: 'Message (optional)',
    messagePlaceholder: 'Questions, special requests…',
    submit: 'Send request',
    submitting: 'Sending…',
    successTitle: 'Request sent!',
    successMsg: 'Thank you for writing to us. We will reply within 24 hours.',
    errorMsg: 'Something went wrong. Please try again or email us directly at info@gofood.it.',
  },
  footer: {
    tagline: 'Holiday home in Mondello, Palermo',
    contact: 'Contact',
    rights: `© ${new Date().getFullYear()} Mondello Holiday. All rights reserved.`,
  },
};
