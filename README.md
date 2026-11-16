# Sanjay Rai (Bantawa) — Premium Artist Portfolio & Archival Website

An international-grade, Apple iOS-inspired glassmorphism artist portfolio and curated archival inventory for **Sanjay Rai (Bantawa)**, renowned Nepalese modern sculptor, painter, and thinker.

---

## 🌟 Key Features

- **Apple iOS-Inspired Glassmorphism**: Translucent floating glass cards, blur effects (`backdrop-blur-xl`), soft archival off-white background (`#FAF8F5`), and refined typography (`Cormorant Garamond` & `Plus Jakarta Sans`).
- **Full Archival Layout (Matching Reference Screenshot)**:
  1. **Floating Glass Navigation**: Responsive with mobile iOS drawer, section anchors, and WhatsApp quick CTA.
  2. **Hero Section**: Large editorial typography, philosophical quote box, 4 archival metric pills, video/studio discourse card, and treatise download.
  3. **Intellectual Reflection & Transmutation of Form (About)**: 2-column editorial layout with interactive *Table of Essays & Archives*.
  4. **Dual Discipline: The Arts of Bantawa**: 4 discipline cards (Sculpture, Ink/Charcoal, Canvas/Pigments, Scholarship) alongside an interactive chronological milestone timeline (1994–2024).
  5. **Selected Works Showcase**: Editorial spotlight of landmark masterpieces with quick carousel navigation.
  6. **Curated Archival Inventory (Gallery)**: Full category filtering (`SCULPTURE`, `SKETCH & INK`, `CANVAS & OIL`, `STUDIES & CHARCOAL`), hover micro-interactions, and high-res imagery.
  7. **Interactive Image Lightbox**: Fullscreen zoom, pan, previous/next keyboard shortcuts (arrow keys & ESC), metadata breakdown, and direct WhatsApp inquiry per artwork.
  8. **Upcoming Retrospective Banner**: Dark accent showcase for *"Paper, Grace & Clay"* at Siddhartha Art Gallery.
  9. **Global Footprints & Provenance**: Permanent collections (NAFA, Fukuoka, London, Paris, Berlin, NYC) and institutional honors.
  10. **Curatorial Commentary**: Testimonials and critical reviews from notable art historians (Madan Chitrakar, Dr. Dina Bangdel, Mukesh Malla).
  11. **Studio Inquiry & Contact**: Instant WhatsApp Click-to-Chat integration with pre-filled inquiry formatting.
  12. **Persistent Floating WhatsApp Widget**: iOS-style pill with pulsing active indicator.

---

## 🖼️ How to Add / Replace Artist Photographs & Artworks

All artworks and photographs are designed to be easily replaced by dropping your files into `public/images/`:

### 1. Artist Portrait:
- Put your image at:
  ```
  public/images/artist/portrait.jpg
  ```
  *(Supports `.jpg`, `.png`, and `.webp`)*.

### 2. Artwork Images:
- Drop your high-resolution photos into:
  ```
  public/images/artworks/artwork-1.jpg
  public/images/artworks/artwork-2.jpg
  ...
  ```
- Open `src/data/portfolio.ts` to configure titles, dimensions, years, and descriptions:
  ```typescript
  {
    id: "art-1",
    title: "Form and Being III",
    category: "CANVAS & OIL",
    medium: "Oil & mineral pigment on archival linen",
    dimensions: "48 × 60 in",
    year: "1998",
    image: "/images/artworks/artwork-1.jpg",
    ...
  }
  ```

---

## 📱 How to Change WhatsApp Number & Studio Info

Open `src/config/site.ts`:

```typescript
export const siteConfig = {
  artistName: "Sanjay Rai (Bantawa)",
  whatsAppNumber: "97798XXXXXXXX", // Replace with real phone number (with country code)
  email: "studio@sanjayrai.art",
  instagramUrl: "https://instagram.com/sanjayrai_art",
  facebookUrl: "https://facebook.com/sanjayrai.bantawa",
  studioLocation: "Patan Arts Precinct / Baluwatar, Kathmandu, Nepal",
  ...
};
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

