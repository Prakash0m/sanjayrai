export interface Artwork {
  id: string;
  title: string;
  category: 'SCULPTURE' | 'SKETCH & INK' | 'CANVAS & OIL' | 'STUDIES & CHARCOAL';
  medium: string;
  dimensions: string;
  year: string;
  price: string;
  image: string;
  fallbackImage?: string;
  description?: string;
  isFeatured?: boolean;
  aspectRatio?: 'tall' | 'wide' | 'square';
  curatorNotes?: string;
}

export interface CommissionItem {
  id: string;
  title: string;
  type: string;
  medium: string;
  year: string;
  location: string;
  client: string;
  image: string;
  description: string;
}

export interface MediaPublication {
  id: string;
  title: string;
  publication: string;
  author: string;
  year: string;
  date: string;
  summary: string;
  link: string;
  tag: string;
}

export interface MediaVideo {
  id: string;
  title: string;
  director: string;
  duration: string;
  year: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
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
    price: "NPR 185,000 / $1,400",
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
    price: "NPR 145,000 / $1,100",
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
    price: "NPR 220,000 / $1,650",
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
    price: "NPR 290,000 / $2,180",
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
    price: "NPR 350,000 / $2,650",
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
    price: "NPR 210,000 / $1,580",
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
    price: "NPR 260,000 / $1,950",
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
    price: "NPR 175,000 / $1,320",
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
    price: "NPR 160,000 / $1,200",
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
    price: "NPR 195,000 / $1,480",
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
    price: "NPR 240,000 / $1,800",
    image: "/images/artworks/yakshi-figure-1999.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Sculptural study inspired by ancient Licchavi and Kirat terracotta iconography, emphasizing volume and graceful tribhanga posture. Signed 'Bantawa 1999'.",
  }
];

export const pastCommissions: CommissionItem[] = [
  {
    id: "comm-1",
    title: "The Kirati Ancestral Guardian",
    type: "Public Monument",
    medium: "Chiseled Black Granite & Bronze Plaque",
    year: "2018",
    location: "Dharan Civic Heritage Square, Nepal",
    client: "Municipal Cultural Heritage Commission",
    image: "/images/artworks/goddess-staff-1998.jpg",
    description: "Monumental 12-foot public sculpture commemorating Kirat ancestral sovereignty, indigenous symbolism, and architectural poise."
  },
  {
    id: "comm-2",
    title: "Motherhood & Eternal Hearth (Yakshi)",
    type: "Architectural Relief & Garden Sculpture",
    medium: "High-fired Terracotta & Patinated Bronze",
    year: "2015",
    location: "Private Residence, Patan Heritage Enclave",
    client: "Private Collector & Diplomatic Envoy",
    image: "/images/artworks/yakshi-figure-1999.jpg",
    description: "Site-specific courtyard installation blending ancient Licchavi tribhanga aesthetics with contemporary domestic serenity."
  },
  {
    id: "comm-3",
    title: "Dialogue of the High Pass",
    type: "Corporate & Institutional Mural Collection",
    medium: "Mineral Earth Pigments on Archival Linen",
    year: "2020",
    location: "Himalayan Bank Corporate Headquarters, Kathmandu",
    client: "Himalayan Financial Heritage Trust",
    image: "/images/artworks/himalayan-conversation.jpg",
    description: "Panoramic triptych celebrating mountain pastoral solidarity, caravan traditions, and indigenous communal identity."
  },
  {
    id: "comm-4",
    title: "Equine Solace (Spirit of the Ridge)",
    type: "Private Salon Commission",
    medium: "Cobalt Wash & Natural Pigments",
    year: "2021",
    location: "Kowloon Art Residence, Hong Kong",
    client: "Private Asian Modernism Collector",
    image: "/images/artworks/blue-horse-embrace.jpg",
    description: "A commissioned intimate study exploring empathy, trans-species companionship, and spiritual release."
  }
];

export const mediaVideos: MediaVideo[] = [
  {
    id: "vid-1",
    title: "Studio Discourse: Form, Perception & Spirit",
    director: "Kathmandu Arts Documentary Collective",
    duration: "18:42",
    year: "2023",
    description: "An intimate documentary inside Sanjay Rai's studio in Kathmandu, discussing the transmutation of stone into living philosophical form.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/artist/discourse.jpg"
  },
  {
    id: "vid-2",
    title: "The Alchemy of Clay & Bronze: Lost-Wax Process in Patan",
    director: "Heritage Crafts Foundation Nepal",
    duration: "12:15",
    year: "2021",
    description: "Archival footage capturing Sanjay Rai overseeing the molten bronze casting of monumental public commission figures.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/artworks/goddess-staff-1998.jpg"
  }
];

export const mediaPublications: MediaPublication[] = [
  {
    id: "pub-1",
    title: "The Transmutation of Silence into Living Form: Sanjay Rai's Sculptural Language",
    publication: "Fine Arts Journal of Nepal (NAFA)",
    author: "Madan Chitrakar",
    year: "2022",
    date: "Autumn Issue 2022",
    summary: "A 16-page scholarly critique analyzing Sanjay Rai's synthesis of ancient Licchavi terracotta techniques with modern Kirat iconography.",
    link: "https://nafanepal.org/publications",
    tag: "Scholarly Essay"
  },
  {
    id: "pub-2",
    title: "Paper, Grace & Clay: Three Decades of Bantawa Retrospective",
    publication: "The Kathmandu Post - Arts & Culture",
    author: "Ritu Raj Joshi",
    year: "2024",
    date: "March 15, 2024",
    summary: "Front-page editorial covering the landmark retrospective exhibition of over 300 archival works at the Nepal Art Council.",
    link: "https://kathmandupost.com",
    tag: "Press Feature"
  },
  {
    id: "pub-3",
    title: "Quiet Monumentality: How Sanjay Rai Redefined Modern South Asian Sculpture",
    publication: "Asian Art Newspaper (London Edition)",
    author: "Dr. Dina Bangdel",
    year: "2020",
    date: "Vol. 23, No. 4",
    summary: "International profile examining the existential resonance of Rai's life studies on hand-beaten Lokta bark paper.",
    link: "https://asianartnewspaper.com",
    tag: "International Review"
  },
  {
    id: "pub-4",
    title: "Carving Identity: Indigenous Kirat Cosmology in Contemporary Nepal",
    publication: "ECS Nepal Heritage Magazine",
    author: "Mukesh Malla",
    year: "2023",
    date: "December 2023",
    summary: "Critical essay exploring tribal oral history and its transmutation into monumental bronze and granite public commissions.",
    link: "https://ecs.com.np",
    tag: "Critical Profile"
  }
];

export const monographCatalogue = {
  title: "Sanjay Rai (Bantawa): Paper, Grace & Clay",
  subtitle: "Three Decades of Sculpture, Life Studies, and Philosophical Form (1994 – 2024)",
  pages: "128 Pages · Full Color Quad-Tone Printing",
  publisher: "Nepal Art Council & Siddhartha Arts Foundation",
  isbn: "978-9937-0-9842-1",
  fileSize: "28.4 MB (Digital Archival Edition)",
  downloadUrl: "/images/artist/portrait.jpg", // high-res digital preview
  forewordBy: "Madan Chitrakar & Dr. Dina Bangdel",
  description: "The official comprehensive retrospective monograph cataloguing 300+ documented sculptures, Lokta paper life studies, commission maquettes, and previously unreleased studio essays from 1994 through 2024."
};

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
