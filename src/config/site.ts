export interface SiteConfig {
  artistName: string;
  artistSubtitle: string;
  artistHeritage: string;
  whatsAppNumber: string; // e.g. 97798XXXXXXXX
  whatsAppDefaultMessage: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  studioLocation: string;
  studioHours: string;
  websiteTitle: string;
  metaDescription: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  upcomingExhibition: {
    title: string;
    subtitle: string;
    curator: string;
    dates: string;
    venue: string;
    catalogDownloadUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  artistName: "Sanjay Rai (Bantawa)",
  artistSubtitle: "Sculptor, Painter & Contemporary Thinker",
  artistHeritage: "Bantawa Rai · Eastern Nepal & Kathmandu Valley",
  whatsAppNumber: "9779841000000", // Easily replaceable WhatsApp number
  whatsAppDefaultMessage: "Hello, I am interested in your artwork. I would like to know more.",
  email: "studio@sanjayrai.art",
  instagramUrl: "https://instagram.com/sanjayrai_art",
  facebookUrl: "https://facebook.com/sanjayrai.bantawa",
  studioLocation: "Patan Arts Precinct / Baluwatar, Kathmandu, Nepal",
  studioHours: "Sunday – Friday: 10:00 AM – 5:00 PM (NPT)",
  websiteTitle: "Sanjay Rai (Bantawa) — Sculptor, Painter & Contemporary Nepali Artist",
  metaDescription: "Official portfolio and archival retrospective of Sanjay Rai (Bantawa). Exploration into modern Nepali sculpture, terracotta, figurative drawings, and philosophical form.",
  stats: [
    { label: "Active Practice", value: "30+ Yrs", sublabel: "1994 — Present" },
    { label: "Archived Works", value: "500+", sublabel: "Sculpture & Ink" },
    { label: "Exhibitions", value: "42+", sublabel: "National & Intl" },
    { label: "Public Honors", value: "14+", sublabel: "Monuments & Laurels" },
  ],
  upcomingExhibition: {
    title: "Paper, Grace & Clay",
    subtitle: "A Four-Decade Survey of Sculptural Maquettes, Figurative Inks & Terracotta",
    curator: "Dr. Sangeeta Thapa",
    dates: "Nov 28 — Dec 18, 2026",
    venue: "Siddhartha Art Gallery, Baber Mahal Revisited, Kathmandu",
    catalogDownloadUrl: "#",
  }
};

/**
 * Builds direct WhatsApp URL with prefilled message
 */
export function getWhatsAppUrl(customMessage?: string, phoneOverride?: string): string {
  const phone = (phoneOverride || siteConfig.whatsAppNumber).replace(/[^0-9]/g, '');
  const message = encodeURIComponent(customMessage || siteConfig.whatsAppDefaultMessage);
  return `https://wa.me/${phone}?text=${message}`;
}

