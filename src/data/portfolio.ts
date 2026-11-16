export interface Artwork {
  id: string;
  title: string;
  category: 'SCULPTURE' | 'SKETCH & INK' | 'CANVAS & OIL' | 'STUDIES & CHARCOAL';
  medium: string;
  dimensions: string;
  year: string;
  image: string;
  fallbackImage?: string;
  description?: string;
  isFeatured?: boolean;
  aspectRatio?: 'tall' | 'wide' | 'square';
  curatorNotes?: string;
}

export interface CuratorialReview {
  id: string;
  quote: string;
  critic: string;
  role: string;
  publication: string;
}

export interface DisciplineDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  materials: string[];
  icon: string;
}

export interface Milestone {
  year: string;
  event: string;
  organization: string;
  location: string;
  description?: string;
}

export interface PermanentCollection {
  country: string;
  institutions: string[];
}

export const artworkCategories = [
  'ALL DISCIPLINES',
  'SCULPTURE',
  'SKETCH & INK',
  'CANVAS & OIL',
  'STUDIES & CHARCOAL',
] as const;

export type ArtworkCategory = typeof artworkCategories[number];

export const portfolioArtworks: Artwork[] = [
  {
    id: "art-1",
    title: "Study of Seated Woman in Salwar",
    category: "SKETCH & INK",
    medium: "Graphite pencil on archival paper",
    dimensions: "18 × 28 in (45 × 71 cm)",
    year: "1999",
    image: "/images/artworks/seated-woman-1999.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "Academic life study capturing posture, the natural weight of fabric drape, and barefoot groundedness. Signed 'Bantawa 1999'.",
    curatorNotes: "Archived in the NAFA retrospective selection."
  },
  {
    id: "art-2",
    title: "Anatomical Écorché & Muscle Architecture",
    category: "STUDIES & CHARCOAL",
    medium: "Ink line & cross-hatch drawing on paper",
    dimensions: "16 × 26 in (40 × 66 cm)",
    year: "1998",
    image: "/images/artworks/anatomical-study-1998.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "Rigorous study of musculoskeletal kinetic tension with arm aloft, demonstrating deep classical anatomical comprehension. Signed 'Sanjay 1998'.",
  },
  {
    id: "art-3",
    title: "Elder in Traditional Drape",
    category: "SKETCH & INK",
    medium: "Fine graphite on archival paper",
    dimensions: "20 × 28 in (50 × 71 cm)",
    year: "1999",
    image: "/images/artworks/seated-sari-1999.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "Quiet dignity and introspective profile of an elderly woman seated in sari, with delicate pencil shading. Signed 'Sanjay 1999'.",
  },
  {
    id: "art-4",
    title: "Centaur & Mythic Interplay",
    category: "CANVAS & OIL",
    medium: "Charcoal, pastel & sanguine chalk on paper",
    dimensions: "24 × 30 in (60 × 76 cm)",
    year: "2000",
    image: "/images/artworks/horse-figure-2000.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Dynamic expressionist dialogue between human figure and equestrian form, incorporating bold reds and deep charcoal gestures. Signed 'Sanjay 2000'.",
  },
  {
    id: "art-5",
    title: "The Himalayan Conversation / Village Life",
    category: "CANVAS & OIL",
    medium: "Color pastel, gouache & pencil on paper",
    dimensions: "24 × 36 in (61 × 91 cm)",
    year: "1997",
    image: "/images/artworks/himalayan-conversation.jpg",
    isFeatured: true,
    aspectRatio: "wide",
    description: "Landmark narrative piece depicting mountain villagers conversing on a traditional porch with grain sacks and dokko baskets.",
    curatorNotes: "Exhibited at Kathmandu Triennial and Siddhartha Art Gallery."
  },
  {
    id: "art-6",
    title: "Classical Guardian with Staff (Maquette Study)",
    category: "SCULPTURE",
    medium: "Graphite sculptural study on paper",
    dimensions: "16 × 32 in (40 × 81 cm)",
    year: "1998",
    image: "/images/artworks/goddess-staff-1998.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Full-length sculptural study for public monument depicting a helmeted guardian figure holding ceremonial staff. Signed 'Bantawa 1998'.",
  },
  {
    id: "art-7",
    title: "Embrace / Spirit of the Blue Horse",
    category: "CANVAS & OIL",
    medium: "Cyan & cobalt pastel on paper",
    dimensions: "20 × 30 in (50 × 76 cm)",
    year: "2001",
    image: "/images/artworks/blue-horse-embrace.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "Ethereal blue pastel drawing celebrating companionship and tenderness between human and equine spirits in fluid contour lines.",
  },
  {
    id: "art-8",
    title: "Village Gathering & Communal Sack",
    category: "SKETCH & INK",
    medium: "Indian ink wash & brush on paper",
    dimensions: "22 × 28 in (56 × 71 cm)",
    year: "1997",
    image: "/images/artworks/village-discourse-ink.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Expressive ink wash documenting the tactile rhythm of communal harvest labor in rural Nepal.",
  },
  {
    id: "art-9",
    title: "Porter of the High Ridge (Namlo Study)",
    category: "STUDIES & CHARCOAL",
    medium: "Pencil & wash on archival paper",
    dimensions: "18 × 26 in (45 × 66 cm)",
    year: "1999",
    image: "/images/artworks/himalayan-porter-1999.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Vivid study of a mountain porter navigating alpine terrain with tumpline (namlo) and heavy dokko basket. Signed 'Sanjay 1999'.",
  },
  {
    id: "art-10",
    title: "Academic Seated Figure in Light",
    category: "STUDIES & CHARCOAL",
    medium: "Graphite pencil on paper",
    dimensions: "18 × 28 in (45 × 71 cm)",
    year: "1996",
    image: "/images/artworks/seated-figure-1996.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Early life study from fine arts studio training demonstrating precise foreshortening and ambient illumination. Signed 'Sanjay 1996'.",
  },
  {
    id: "art-11",
    title: "Yakshi with Pot (Sculptural Study)",
    category: "SCULPTURE",
    medium: "Graphite shading on archival paper",
    dimensions: "18 × 30 in (45 × 76 cm)",
    year: "1999",
    image: "/images/artworks/yakshi-figure-1999.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Sculptural study inspired by ancient Licchavi and Kirat terracotta iconography, emphasizing volume and graceful tribhanga posture. Signed 'Bantawa 1999'.",
  }
];

export const disciplinesData: DisciplineDetail[] = [
  {
    id: "sculpture",
    title: "Sculpture & Monuments",
    subtitle: "Stone, Bronze & Terracotta",
    description: "Monumental stone carving, bronze lost-wax casting, and architectural relief works installed across civic squares and sacred groves in Nepal.",
    materials: ["Granite", "Cast Bronze", "Terracotta", "Teak Wood"],
    icon: "Hammer"
  },
  {
    id: "drawings",
    title: "Ink & Charcoal Studies",
    subtitle: "Fluidity of Human Form",
    description: "Fastidious life studies, gestural calligraphy on traditional Nepali Lokta bark paper, and contemplative anatomical explorations.",
    materials: ["Lokta Bark Paper", "Indian Ink", "Vine Charcoal", "Conté"],
    icon: "PenTool"
  },
  {
    id: "paintings",
    title: "Canvas & Earth Pigments",
    subtitle: "Mythic & Spiritual Synthesis",
    description: "Vibrant mixed-media compositions integrating raw mineral pigments, oil glazes, and indigenous Kirat symbolism.",
    materials: ["Linen Canvas", "Himalayan Earth", "Oil Glazes", "Natural Gums"],
    icon: "Palette"
  },
  {
    id: "scholarship",
    title: "Philosophy & Treatises",
    subtitle: "The Discourse of Bantawa Form",
    description: "Authored essays and critical lectures on Eastern Himalayan aesthetic philosophy, modernism, and indigenous materiality.",
    materials: ["Monographs", "Critical Essays", "Exhibition Text", "Curatorial Notes"],
    icon: "BookOpen"
  }
];

export const timelineMilestones: Milestone[] = [
  {
    year: "1994",
    event: "Inaugural Solo Exhibition: Awakening of Form",
    organization: "Nepal Academy of Fine Arts (NAFA)",
    location: "Kathmandu, Nepal",
    description: "First public exposition of 45 stone sculptures and 30 charcoal life drawings."
  },
  {
    year: "2004",
    event: "National Fine Arts Heritage Laureate",
    organization: "Ministry of Culture & Tourism",
    location: "Singha Durbar, Kathmandu",
    description: "Awarded for exceptional contribution to contemporary Nepali figurative sculpture."
  },
  {
    year: "2014",
    event: "Himalayan Modernism Invitational Biennale",
    organization: "Asian Art Triennale Society",
    location: "Fukuoka & Tokyo, Japan",
    description: "Keynote exhibiting sculptor representing the indigenous arts of South Asia."
  },
  {
    year: "2024",
    event: "Paper, Grace & Clay: Three Decades of Bantawa",
    organization: "Nepal Art Council & Siddhartha Foundation",
    location: "Kathmandu, Nepal",
    description: "Landmark retrospective covering over 300 archival works and unreleased monographs."
  }
];

export const curatorialReviews: CuratorialReview[] = [
  {
    id: "rev-1",
    quote: "Sanjay Rai's sculptural line does not imitate life; it reveals the primeval rhythm that underlies Himalayan stone and human consciousness.",
    critic: "Madan Chitrakar",
    role: "Senior Art Historian & Former Dean",
    publication: "Fine Arts Journal of Nepal"
  },
  {
    id: "rev-2",
    quote: "A masterclass in organic restraint. His drawings possess the effortless gravity of Rodin, yet remain deeply rooted in Kirati cosmological ethos.",
    critic: "Dr. Dina Bangdel",
    role: "Renowned Art Historian & Curator",
    publication: "South Asian Visual Culture"
  },
  {
    id: "rev-3",
    quote: "Rai's works are philosophical monuments. Each piece demands that the viewer pause, breathe, and confront the timeless dignity of existence.",
    critic: "Mukesh Malla",
    role: "Contemporary Art Scholar & Critic",
    publication: "Art & Society Review"
  }
];

export const collectionsData: PermanentCollection[] = [
  {
    country: "Nepal",
    institutions: ["Nepal Academy of Fine Arts (NAFA)", "Patan Museum Archive", "Nepal Art Council"]
  },
  {
    country: "Japan",
    institutions: ["Fukuoka Asian Art Collection", "Kyoto Institute of Himalayan Arts"]
  },
  {
    country: "United Kingdom",
    institutions: ["Private Collections in London & Oxford", "Himalayan Art Heritage Trust"]
  },
  {
    country: "France & Germany",
    institutions: ["Galerie Dauphine (Paris)", "South Asian Contemporary Art Archive (Berlin)"]
  },
  {
    country: "United States",
    institutions: ["Rubin Himalayan Fellowship Collections (New York)", "Private Patrons in San Francisco"]
  }
];
