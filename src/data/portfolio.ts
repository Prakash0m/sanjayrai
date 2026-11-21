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
  youtubeUrl?: string;
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

// 11 Foundational Studies (Sketches, Paintings, Sculptures) displayed on Home Page under "Sketch · Painting · Sculpture"
export const sketchPaintingSculptureArtworks: Artwork[] = [
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
  },
];

// Original Works & Paintings (displayed on /original-works page)
export const portfolioArtworks: Artwork[] = [
  {
    id: "art-12",
    title: "Kathmandu Valley Festival & Dhime Rhythms",
    category: "CANVAS & OIL",
    medium: "Acrylic and oil on linen canvas",
    dimensions: "32 × 40 in (81 × 102 cm)",
    year: "2021",
    price: "NPR 380,000 / $2,850",
    image: "/images/artworks/kathmandu-valley-festival-dhime.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "A celebratory communal procession in the historic Kathmandu Valley featuring Newar and Kirat dancers, women in Haku Patasi with floral offerings, and festive Dhime drummers against ancient tiered temple skylines. Signed 'Sanjay 2021'.",
    curatorNotes: "Featured in the 2022 Nepal Heritage & Living Arts exhibition."
  },
  {
    id: "art-13",
    title: "Celestial Ascent: Kinetic Equus & Valley Spires",
    category: "CANVAS & OIL",
    medium: "Oil, acrylic and pigment splatter on canvas",
    dimensions: "28 × 42 in (71 × 107 cm)",
    year: "2014",
    price: "NPR 340,000 / $2,550",
    image: "/images/artworks/kinetic-horses-stupa-bells.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "Vertical ascension of mythical turquoise horses traversing ceremonial temple spires, stupa bells, and constellations of stippled pigment. Signed 'Sanjay 2014'."
  },
  {
    id: "art-14",
    title: "Kirat Ancestral Shaman & Sacred Chindo",
    category: "CANVAS & OIL",
    medium: "Oil, gouache and gold leaf on canvas",
    dimensions: "30 × 42 in (76 × 107 cm)",
    year: "2020",
    price: "NPR 420,000 / $3,150",
    image: "/images/artworks/kirat-shaman-peacock-headdress.jpg",
    isFeatured: true,
    aspectRatio: "wide",
    description: "Introspective portrait of a Kirati shaman elder adorned with a peacock-feather crown and beaded band. Flowing across his torso are sacred chindo gourds, dhyangro drums, and rivers of mythical fish. Signed 'Sanjay 2020'.",
    curatorNotes: "Core masterpiece from Sanjay Rai's Mundhum cosmology suite."
  },
  {
    id: "art-15",
    title: "Valley of the Four Temples: Equine Quadriptych",
    category: "CANVAS & OIL",
    medium: "Oil, acrylic and enamel on four-panel canvas",
    dimensions: "40 × 72 in (102 × 183 cm) - 4 panels",
    year: "2024",
    price: "NPR 750,000 / $5,600",
    image: "/images/artworks/quadriptych-equine-valley-pagodas.jpg",
    isFeatured: true,
    aspectRatio: "wide",
    description: "A monumental four-panel polyptych capturing thunderous herds of golden and ivory horses cascading through pagoda shrines, medieval temple squares, and cosmic color splatters. Signed 'Sanjay 2024'.",
    curatorNotes: "Studio acquisition centerpiece, 2024 retrospective."
  },
  {
    id: "art-16",
    title: "Danda Nach: Ritual Stick Dancers",
    category: "CANVAS & OIL",
    medium: "Acrylic and oil on canvas",
    dimensions: "30 × 44 in (76 × 112 cm)",
    year: "2020",
    price: "NPR 320,000 / $2,400",
    image: "/images/artworks/traditional-stick-dance-danda-nach.jpg",
    isFeatured: false,
    aspectRatio: "wide",
    description: "Four women performing the traditional ritual stick dance in white wraps with multicolored tassels, silver coin jewelry, and anklets against warm geometric folk patterns."
  },
  {
    id: "art-17",
    title: "Nocturne: Steed Rising from the Sacred Lake",
    category: "CANVAS & OIL",
    medium: "Oil and tempera on canvas",
    dimensions: "32 × 42 in (81 × 107 cm)",
    year: "2020",
    price: "NPR 360,000 / $2,700",
    image: "/images/artworks/horse-crescent-moon-waters.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "A brown steed emerges with quiet majesty from the rippling blue nocturnal lake, surrounded by a ribbon road, whitewashed Himalayan dwellings, swirling clouds, and a golden crescent moon. Signed 'Sanjay 2020'."
  },
  {
    id: "art-18",
    title: "Equine Reverie in Saffron & Vermilion",
    category: "CANVAS & OIL",
    medium: "Heavy oil impasto on canvas",
    dimensions: "36 × 40 in (91 × 102 cm)",
    year: "2019",
    price: "NPR 340,000 / $2,550",
    image: "/images/artworks/energy-horses-woman-saffron.jpg",
    isFeatured: true,
    aspectRatio: "tall",
    description: "Vibrant composition of a woman in yellow surrounded by energetic stallions, executed with bold palette-knife textures and saturated vermilion and cadmium yellow planes. Signed 'Sanjay 2019'."
  },
  {
    id: "art-19",
    title: "Silam Sakma: Chants of the Kirat Matriarch",
    category: "CANVAS & OIL",
    medium: "Acrylic, gold pigment and ink on canvas",
    dimensions: "30 × 44 in (76 × 112 cm)",
    year: "2007",
    price: "NPR 310,000 / $2,320",
    image: "/images/artworks/kirat-cymbals-sacred-fish.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "A Kirati elder woman playing ceremonial brass cymbals (jhyamta) draped in traditional handwoven attire and sacred ornaments, accompanied by a dhol player and cascading cosmic fish. Signed 'Sanjay 2007'."
  },
  {
    id: "art-20",
    title: "Equine Constellation Above Patan Spires",
    category: "CANVAS & OIL",
    medium: "Oil and acrylic on linen",
    dimensions: "32 × 40 in (81 × 102 cm)",
    year: "2022",
    price: "NPR 350,000 / $2,620",
    image: "/images/artworks/equine-constellation-temples.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "Spiraling herd of celestial horses encircling pagoda sanctums and stone spires of the Kathmandu Valley, illuminated by vibrant splatters of starlight pigment."
  },
  {
    id: "art-21",
    title: "Galloping Stallion in Scarlet Impasto",
    category: "CANVAS & OIL",
    medium: "Oil impasto and palette knife on canvas",
    dimensions: "30 × 30 in (76 × 76 cm)",
    year: "2018",
    price: "NPR 280,000 / $2,100",
    image: "/images/artworks/galloping-horse-impasto-fire.jpg",
    isFeatured: true,
    aspectRatio: "square",
    description: "High-energy expressionist canvas capturing the kinetic thrust of a galloping horse with blazing scarlet mane and knife-struck impasto strokes. Signed 'Sanjay 2018'."
  },
  {
    id: "art-22",
    title: "Nocturne with Blue Horse Spirits",
    category: "CANVAS & OIL",
    medium: "Oil and glaze on canvas",
    dimensions: "32 × 36 in (81 × 91 cm)",
    year: "2021",
    price: "NPR 330,000 / $2,480",
    image: "/images/artworks/night-solitude-horses.jpg",
    isFeatured: false,
    aspectRatio: "tall",
    description: "A serene midnight composition depicting an introspective female figure wrapped in traditional drape surrounded by two gentle white horse spirits in deep Prussian blues."
  },
  {
    id: "art-23",
    title: "Solar Cityscape & Crimson Horizon",
    category: "CANVAS & OIL",
    medium: "Oil and acrylic on canvas",
    dimensions: "24 × 24 in (61 × 61 cm)",
    year: "2021",
    price: "NPR 260,000 / $1,950",
    image: "/images/artworks/solar-cityscape-crimson-sun.jpg",
    isFeatured: false,
    aspectRatio: "square",
    description: "A luminous amber cityscape under a bold crimson sun, blending architectural forms, equestrian silhouettes, and warm golden washes. Signed 'Sanjay 2021'."
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
  },
  {
    id: "comm-5",
    title: "Valley of the Four Temples (Monumental Quadriptych)",
    type: "Institutional Atrium Installation",
    medium: "Oil, acrylic and enamel on four-panel canvas",
    year: "2024",
    location: "Kathmandu Heritage Atrium, Nepal",
    client: "Himalayan Hospitality & Arts Collection",
    image: "/images/artworks/quadriptych-equine-valley-pagodas.jpg",
    description: "A grand 4-panel architectural installation depicting the kinetic energy of galloping horses rushing past Kathmandu's historic pagoda shrines."
  },
  {
    id: "comm-6",
    title: "Dhime Rhythms & Valley Procession",
    type: "Civic Heritage Commission",
    medium: "Acrylic and oil on linen canvas",
    year: "2021",
    location: "Lalitpur Municipal Arts Pavilion, Patan",
    client: "Patan Heritage Conservation Trust",
    image: "/images/artworks/kathmandu-valley-festival-dhime.jpg",
    description: "Celebrating centuries of Newar and Kirat cultural unity, rhythmic drumming, and floral offerings in historic Patan."
  },
  {
    id: "comm-7",
    title: "The Shaman's Mundhum Invocation",
    type: "Indigenous Heritage Commission",
    medium: "Oil, gouache and gold leaf on canvas",
    year: "2020",
    location: "Kirat Cultural Archive & Museum, Dharan",
    client: "Kirat Indigenous Knowledge Trust",
    image: "/images/artworks/kirat-shaman-peacock-headdress.jpg",
    description: "Honoring ancestral oral traditions with ceremonial chindo vessels, peacock plumage, and sacred river fish symbolism."
  },
  {
    id: "comm-8",
    title: "Nocturne Steed of the Sacred Waters",
    type: "Private Estate Commission",
    medium: "Oil and tempera on canvas",
    year: "2020",
    location: "Fewalake Sanctuary Villa, Pokhara",
    client: "Private Contemporary Art Collector",
    image: "/images/artworks/horse-crescent-moon-waters.jpg",
    description: "Commissioned for an alpine lakeside residence, depicting tranquility, mountain moonlight, and the protective spirit of the horse."
  }
];

export const mediaVideos: MediaVideo[] = [
  {
    id: "vid-1",
    title: "Walking with Art | Short Documentary",
    director: "SandipR · Moment Invitational 2020",
    duration: "3:00",
    year: "2020",
    description: "An intimate and inspiring short documentary following sculptor and painter Sanjay Rai as he navigates daily life, studio practice, and profound creative devotion in Lalitpur.",
    embedUrl: "https://www.youtube.com/embed/iXJbW_5OV_M",
    thumbnail: "/images/artist/walking-with-art-thumb.jpg",
    youtubeUrl: "https://youtu.be/iXJbW_5OV_M"
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
