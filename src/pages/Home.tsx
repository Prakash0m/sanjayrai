import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, Compass, Palette, Hammer, PenTool, ChevronDown, ChevronUp, Sparkles, Quote } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';

export const Home: React.FC = () => {
  const [statementExpanded, setStatementExpanded] = useState(false);

  return (
    <div className="space-y-0">
      
      {/* SECTION 1: ARTIST PROFILE (Photo + Short Bio) */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#F8FBFF]">
        {/* Soft ethereal ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-12 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Artist Headline & Short Bio */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-8 text-center lg:text-left">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs text-[10px] sm:text-[11px] font-mono tracking-widest text-stone-700 uppercase max-w-full">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shrink-0" />
                <span className="truncate">CONTEMPORARY SCULPTOR &amp; PAINTER · KATHMANDU</span>
              </div>

              {/* Large Editorial Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink-900 leading-[1.12]">
                  SANJAY RAI <br />
                  <span className="italic font-normal text-stone-600 font-serif text-2xl sm:text-4xl md:text-5xl">(BANTAWA)</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-ink-700 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed pt-1">
                  Pioneering modern Nepalese figurative sculpture and contemplative drawing. Transmuting Himalayan stone, high-fired clay, and hand-beaten Lokta paper into monumental poetic form for over three decades.
                </p>
              </div>

              {/* Short Bio Block */}
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-xl border border-stone-200/80 shadow-sm space-y-3 text-left">
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono tracking-wider text-sky-700 uppercase font-semibold">
                  <Compass className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Curatorial Biography</span>
                </div>
                <p className="text-[13px] sm:text-sm text-ink-800 leading-relaxed font-sans">
                  Born in Eastern Nepal and grounded in Kirat oral cosmology, Sanjay Rai (Bantawa) completed formative fine arts training at Lalit Kala Campus, Kathmandu. Over 30+ years of uninterrupted studio practice, his monumental granite monuments and introspective graphite life studies have been exhibited across Nepal, Japan, France, Germany, and the United States.
                </p>
                <div className="flex flex-wrap gap-2 pt-2.5 border-t border-stone-100">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-[11px] sm:text-xs font-mono text-stone-700 font-medium">
                    • 30+ Years Practice
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-[11px] sm:text-xs font-mono text-stone-700 font-medium">
                    • 500+ Documented Works
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-[11px] sm:text-xs font-mono text-stone-700 font-medium">
                    • 42+ Exhibitions
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 sm:pt-2 w-full">
                <Link
                  to="/original-works"
                  className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-ink-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-black/10 transition-all hover:scale-105 active:scale-95 text-center"
                >
                  <span>Explore Original Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-3">
                  <Link
                    to="/commission"
                    className="inline-flex items-center justify-center px-4 py-3 sm:py-3.5 rounded-full bg-white hover:bg-stone-50 text-ink-900 text-xs sm:text-sm font-medium border border-stone-200/80 shadow-xs transition-all hover:scale-105 text-center"
                  >
                    <span>Commission</span>
                  </Link>

                  <a
                    href={getWhatsAppUrl("Hello Sanjay Rai, I am visiting your portfolio and would like to connect.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-500/20 transition-all hover:scale-105 text-center"
                    aria-label="Direct WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col: Artist Portrait Photo (Full uncropped view with clean gallery caption below) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
                {/* Decorative border ambient glow */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-200/50 via-white to-amber-100/40 blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-stone-200/70 p-3 sm:p-4 flex flex-col">
                  {/* Photo Frame: Full uncropped view, zero cut-off */}
                  <div className="relative w-full aspect-[9/14] sm:aspect-[9/13.5] rounded-2xl overflow-hidden bg-[#F5F2ED] flex items-center justify-center p-2.5">
                    <SmartImage
                      src="/images/artist/portrait.jpg"
                      alt="Sanjay Rai (Bantawa) in studio Kathmandu"
                      objectFit="contain"
                      className="w-full h-full flex items-center justify-center bg-transparent"
                      imgClassName="object-contain w-full h-full filter drop-shadow-xs"
                      priority={true}
                    />
                  </div>

                  {/* Clean Editorial Caption (Outside photo area so zero obstruction) */}
                  <div className="pt-3 pb-1 px-1 flex flex-col space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-sky-700 uppercase font-semibold">
                        ARTIST IN STUDIO · KATHMANDU
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">1994 – 2024</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink-900 leading-tight">
                      Sanjay Rai (Bantawa)
                    </h3>
                    <p className="text-xs text-stone-500 font-sans">
                      Contemporary Sculptor &amp; Thinker · Kathmandu Studio
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ARTIST STATEMENT — Professional Editorial Layout */}
      <section className="py-12 sm:py-20 md:py-32 relative bg-white border-t border-stone-200/60 overflow-hidden">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Heading + Decorative Rule ──────────────────────── */}
          <div className="mb-6 sm:mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase mb-3">
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>PHILOSOPHY &amp; ETHOS</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight mb-4 sm:mb-6">
              Artist Statement
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-stone-300 to-transparent" />
              <span className="text-[9px] font-mono text-stone-400 tracking-widest uppercase shrink-0">1994 – 2024</span>
            </div>
          </div>

          {/* ── Pull Quote Card ─────────────────────────────────── */}
          <div className="relative mb-6 sm:mb-12 p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <Quote className="w-4 h-4" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="font-serif italic text-base sm:text-2xl md:text-3xl text-ink-900 leading-snug">
                  "For me, colours are a language through which the diverse experiences and possibilities of life are expressed."
                </p>
                <span className="block text-[10px] sm:text-[11px] font-mono text-stone-500 tracking-wider uppercase">— Sanjay Rai (Bantawa)</span>
              </div>
            </div>
          </div>

          {/* ── Body Text — Adaptive Reader: Collapsible on Mobile, Full 2-col on Desktop ── */}
          <div className="relative">
            <div 
              className={`columns-1 lg:columns-2 gap-8 lg:gap-12 text-sm sm:text-[15px] text-ink-700 leading-relaxed sm:leading-[1.85] font-sans space-y-4 sm:space-y-5 [column-rule:1px_solid_#e7e5e4] ${
                !statementExpanded ? 'max-h-[300px] lg:max-h-none overflow-hidden' : ''
              }`}
            >

              {/* Para 1 — drop cap */}
              <p className="break-inside-avoid">
                <span className="float-left font-serif text-[3.5rem] sm:text-[4.5rem] leading-[0.75] mr-2.5 sm:mr-3 mt-1 text-ink-900 font-bold">F</span>
                or me, art is not merely a medium for expressing the emotions, thoughts, and experiences that arise within me. It is also a process of intellectual and philosophical reflection, through which emotions and ideas are explored and transformed into meaningful artistic forms. My fascination with colours began in childhood, when I would become so absorbed in playing with colours that I lost track of time. This natural attraction gradually led me towards painting. My life experiences, social surroundings, and personal circumstances have continuously inspired and shaped my artistic journey.
              </p>

              <p className="break-inside-avoid">
                Throughout my studies and artistic practice, I have explored various subjects, mediums, and styles. In the early stages of my career, I depicted rural landscapes, natural environments, and everyday village life. Later, I moved towards symbolic compositions and portraiture. Following my postgraduate studies, my artistic lines became more dynamic and expressive. Through the figures of horses and women, I began exploring themes of strength, struggle, energy, resistance, and the journey of life. Gradually, I incorporated horse figures into compositions featuring monasteries, temples, and traditional architecture, seeking to explore the relationship between time, movement, and cultural continuity.
              </p>

              <p className="break-inside-avoid">
                In recent years, Nepali traditional culture, cultural memory, and mythology have become central to my artistic practice. In particular, I have been exploring the disappearing cultural symbols, traditions, and myths of Nepal’s indigenous Kirat communities through the language of contemporary painting. The Kirat community’s deep respect for nature, understanding of cultural identity, and philosophy of life, which considers nature an inseparable part of human existence, have profoundly influenced my work. I do not view this cultural heritage merely as a memory of the past, but as a living artistic resource capable of engaging in dialogue with contemporary society.
              </p>

              <p className="break-inside-avoid">
                I believe that lines play a particularly significant role in painting. Lines do not simply construct forms; they also communicate movement, emotions, and ideas. For me, colours are a language through which the diverse experiences and possibilities of life are expressed. Combining traditional symbols with new compositions, lines, colours, and contemporary artistic approaches is an essential part of my creative practice, allowing me to discover new meanings and perspectives within cultural heritage.
              </p>

              <p className="break-inside-avoid">
                I do not believe that art should be limited to the creation of beautiful objects. In my view, art is an independent space for creative freedom, ideas, and critical reflection. Through my paintings, I hope to encourage viewers to think in new ways, reconsider their own cultural identities, and understand the relationship between tradition and contemporary society from fresh perspectives. For me, painting is an ongoing process of exploration, self-expression, and a means of keeping cultural memory alive through new artistic interpretations.
              </p>

            </div>

            {/* Mobile Gradient Fade Out */}
            {!statementExpanded && (
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
            )}

            {/* Mobile Expand / Collapse Button */}
            <div className="lg:hidden mt-4 relative z-10 flex justify-center">
              <button
                type="button"
                onClick={() => setStatementExpanded(!statementExpanded)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-black text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>{statementExpanded ? 'Show Less' : 'Read Full Statement (3 More Paras)'}</span>
                {statementExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* ── Footer Actions ─────────────────────────────────── */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200/60 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6">
            <Link
              to="/media"
              className="group inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-sky-700 hover:text-sky-900 transition-colors font-semibold"
            >
              <span className="w-5 sm:w-7 h-px bg-sky-500 group-hover:w-10 transition-all duration-300" />
              <span>Read Studio Treatises &amp; Essays</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/media"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-700 text-xs font-medium transition-colors border border-red-200/80 shadow-sm w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span>Watch “Walking with Art” Documentary</span>
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 3: ACADEMY STUDY (Text + 2 Image Boxes) */}
      <section className="py-14 sm:py-20 md:py-28 relative bg-[#FAF8F5] border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: 2 Image Boxes of Academic Life Studies */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
              
              {/* Image Box 1: Anatomical Écorché */}
              <div className="group rounded-3xl overflow-hidden bg-white p-3 shadow-md hover:shadow-xl transition-all border border-stone-200/60 flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] mb-3">
                  <SmartImage
                    src="/images/artworks/anatomical-study-1998.jpg"
                    alt="Anatomical Écorché & Muscle Architecture"
                    objectFit="contain"
                    className="w-full h-full p-2 bg-[#F5F2EB]"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-ink-900/80 backdrop-blur-md text-[9px] font-mono text-white">
                    ACADEMY ARCHIVE · 1998
                  </div>
                </div>
                <div className="px-1.5 space-y-1">
                  <h4 className="font-serif text-base font-bold text-ink-900 group-hover:text-sky-600 transition-colors">
                    Anatomical Écorché
                  </h4>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Ink line & cross-hatch drawing · Musculoskeletal kinetic tension study.
                  </p>
                </div>
              </div>

              {/* Image Box 2: Academic Seated Figure in Light */}
              <div className="group rounded-3xl overflow-hidden bg-white p-3 shadow-md hover:shadow-xl transition-all border border-stone-200/60 flex flex-col sm:-translate-y-6">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] mb-3">
                  <SmartImage
                    src="/images/artworks/seated-figure-1996.jpg"
                    alt="Academic Seated Figure in Light"
                    objectFit="contain"
                    className="w-full h-full p-2 bg-[#F5F2EB]"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-ink-900/80 backdrop-blur-md text-[9px] font-mono text-white">
                    STUDIO LIFE STUDY · 1996
                  </div>
                </div>
                <div className="px-1.5 space-y-1">
                  <h4 className="font-serif text-base font-bold text-ink-900 group-hover:text-sky-600 transition-colors">
                    Academic Seated Figure
                  </h4>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Graphite pencil on paper · Exact foreshortening & atmospheric illumination.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Col: Academy Study Text */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-stone-700 text-[11px] font-mono tracking-widest uppercase border border-stone-200/60">
                <BookOpen className="w-3 h-3 text-sky-600" />
                <span>PEDAGOGY & RIGOR</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
                Academy Study & Formative Practice
              </h2>

              <p className="text-base text-ink-700 leading-relaxed font-sans">
                Before Sanjay Rai embarked upon monumental stone carving, his visual vocabulary was forged through relentless academic study. In the studios of Lalit Kala Campus during the mid-1990s, the artist executed hundreds of fastidious anatomical écorchés, life drawings, and tonal chiaroscuro exercises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/70 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-700 uppercase">
                    Anatomical Mastery
                  </div>
                  <p className="text-xs text-ink-600">
                    Understanding skeletal leverage and muscle articulation to ensure sculptural weight is authentic and grounded.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/70 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-700 uppercase">
                    Lokta Paper Exploration
                  </div>
                  <p className="text-xs text-ink-600">
                    Pioneering ink and graphite work on high-altitude Daphne bark paper, achieving rich organic tooth and texture.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                This academic foundation allowed the artist to transition seamlessly from two-dimensional drawing to three-dimensional public monuments—each carved form carrying the precise structural integrity of living bone and sinew.
              </p>

              <div className="pt-2">
                <Link
                  to="/original-works"
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-700 hover:text-sky-900 transition-colors font-semibold"
                >
                  <span>Browse All Academic & Archival Works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: SKETCH / PAINTING / SCULPTURE (Small 3-Category Gallery Preview) */}
      <section className="py-20 md:py-32 relative bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-3">
                <Layers className="w-3 h-3 text-sky-600" />
                <span>CORE MEDIUMS & DISCIPLINES</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
                Sketch · Painting · Sculpture
              </h2>
              <p className="mt-3 text-base text-ink-600 max-w-xl">
                Explore the tripartite disciplines of Sanjay Rai. Click any category to view available original pieces and archival portfolios.
              </p>
            </div>

            <Link
              to="/original-works"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-ink-900 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3-Category Preview Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1: Sketch & Life Studies */}
            <Link
              to="/original-works?category=SKETCH%20%26%20INK"
              className="group block rounded-3xl bg-[#FAF8F5] p-5 border border-stone-200/70 hover:border-sky-300 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-5 shadow-xs">
                <SmartImage
                  src="/images/artworks/seated-woman-1999.jpg"
                  alt="Sketch & Life Studies"
                  objectFit="contain"
                  className="w-full h-full p-3 bg-[#F5F2EB] group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono text-ink-900 font-bold shadow-2xs">
                  SKETCH & INK
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sky-700">
                    <PenTool className="w-4 h-4" />
                    <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">DISCIPLINE 01</span>
                  </div>
                  <span className="text-xs font-mono text-stone-500">4 Works Listed</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-sky-600 transition-colors">
                  Sketches & Life Studies
                </h3>
                <p className="text-xs text-ink-600 font-sans leading-relaxed line-clamp-2">
                  Fastidious life drawings on hand-beaten Lokta bark paper capturing gesture, draping cloth, and serene human posture.
                </p>
                <div className="pt-3 flex items-center space-x-1.5 text-xs font-semibold text-ink-900 group-hover:text-sky-600 transition-colors">
                  <span>Explore Sketches & Ink</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Category 2: Canvas & Painting */}
            <Link
              to="/original-works?category=CANVAS%20%26%20OIL"
              className="group block rounded-3xl bg-[#FAF8F5] p-5 border border-stone-200/70 hover:border-sky-300 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-5 shadow-xs">
                <SmartImage
                  src="/images/artworks/himalayan-conversation.jpg"
                  alt="Canvas & Earth Pigments"
                  objectFit="contain"
                  className="w-full h-full p-3 bg-[#F5F2EB] group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono text-ink-900 font-bold shadow-2xs">
                  CANVAS & OIL
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sky-700">
                    <Palette className="w-4 h-4" />
                    <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">DISCIPLINE 02</span>
                  </div>
                  <span className="text-xs font-mono text-stone-500">3 Works Listed</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-sky-600 transition-colors">
                  Paintings & Earth Pigments
                </h3>
                <p className="text-xs text-ink-600 font-sans leading-relaxed line-clamp-2">
                  Rich narrative canvases incorporating natural Himalayan earth colors, cyan pastels, and indigenous Kirat cosmological motifs.
                </p>
                <div className="pt-3 flex items-center space-x-1.5 text-xs font-semibold text-ink-900 group-hover:text-sky-600 transition-colors">
                  <span>Explore Paintings</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Category 3: Sculpture & Monuments */}
            <Link
              to="/commission"
              className="group block rounded-3xl bg-[#FAF8F5] p-5 border border-stone-200/70 hover:border-sky-300 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-5 shadow-xs">
                <SmartImage
                  src="/images/artworks/goddess-staff-1998.jpg"
                  alt="Sculpture & Monuments"
                  objectFit="contain"
                  className="w-full h-full p-3 bg-[#F5F2EB] group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono text-ink-900 font-bold shadow-2xs">
                  SCULPTURE
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sky-700">
                    <Hammer className="w-4 h-4" />
                    <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">DISCIPLINE 03</span>
                  </div>
                  <span className="text-xs font-mono text-stone-500">Commissions</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-900 group-hover:text-sky-600 transition-colors">
                  Sculptures & Monuments
                </h3>
                <p className="text-xs text-ink-600 font-sans leading-relaxed line-clamp-2">
                  Chiseled black granite monuments, lost-wax cast bronze figures, and high-fired architectural terracotta reliefs.
                </p>
                <div className="pt-3 flex items-center space-x-1.5 text-xs font-semibold text-ink-900 group-hover:text-sky-600 transition-colors">
                  <span>View Commission Portfolios</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};
