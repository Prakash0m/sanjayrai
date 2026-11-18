import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Layers, Compass, Palette, Hammer, PenTool } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* SECTION 1: ARTIST PROFILE (Photo + Short Bio) */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#F8FBFF]">
        {/* Soft ethereal ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-12 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Artist Headline & Short Bio */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs text-[11px] font-mono tracking-widest text-stone-700 uppercase">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span>CONTEMPORARY SCULPTOR & PAINTER · KATHMANDU</span>
              </div>

              {/* Large Editorial Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink-900 leading-[1.08]">
                  SANJAY RAI <br />
                  <span className="italic font-normal text-stone-600 font-serif">(BANTAWA)</span>
                </h1>
                <p className="text-base sm:text-lg text-ink-600 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed pt-2">
                  Pioneering modern Nepalese figurative sculpture and contemplative drawing. Transmuting Himalayan stone, high-fired clay, and hand-beaten Lokta paper into monumental poetic form for over three decades.
                </p>
              </div>

              {/* Short Bio Block */}
              <div className="p-5 sm:p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-200/70 shadow-sm space-y-3 text-left">
                <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider text-sky-700 uppercase font-semibold">
                  <Compass className="w-3.5 h-3.5 text-sky-600" />
                  <span>Curatorial Biography</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-sans">
                  Born in Eastern Nepal and grounded in Kirat oral cosmology, Sanjay Rai (Bantawa) completed formative fine arts training at Lalit Kala Campus, Kathmandu. Over 30+ years of uninterrupted studio practice, his monumental granite monuments and introspective graphite life studies have been exhibited across Nepal, Japan, France, Germany, and the United States.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-[11px] font-mono text-stone-500 border-t border-stone-100">
                  <span>• 30+ Years Practice</span>
                  <span>• 500+ Documented Works</span>
                  <span>• 42+ National & Intl Exhibitions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/original-works"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-ink-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-black/10 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Original Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/commission"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-ink-900 text-xs sm:text-sm font-medium border border-stone-200/80 shadow-xs transition-all hover:scale-105"
                >
                  <span>Commission Work</span>
                </Link>

                <a
                  href={getWhatsAppUrl("Hello Sanjay Rai, I am visiting your portfolio and would like to connect.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                  aria-label="Direct WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Col: Artist Portrait Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-200/50 via-white to-amber-100/40 blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden bg-[#F5F2ED] shadow-2xl border border-stone-200/60 aspect-[3/4]">
                  <SmartImage
                    src="/images/artist/portrait.jpg"
                    alt="Sanjay Rai (Bantawa) in studio Kathmandu"
                    objectFit="contain"
                    className="w-full h-full"
                    imgClassName="object-contain w-full h-full"
                    priority={true}
                  />

                  {/* Scrim label */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase block">
                      ARTIST IN STUDIO · KATHMANDU
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Sanjay Rai (Bantawa)
                    </h3>
                    <p className="text-xs text-stone-200 font-sans">
                      Retrospective Archive 1994 – 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ARTIST STATEMENT — Full-width editorial, no images */}
      <section className="py-24 md:py-36 relative bg-[#0B0F17] overflow-hidden">

        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-amber-900/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Eyebrow */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-3">
              <div className="h-px w-12 bg-sky-500/50" />
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-[11px] font-mono tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Philosophy &amp; Ethos</span>
              </div>
              <div className="h-px w-12 bg-sky-500/50" />
            </div>
          </div>

          {/* Large centered heading */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight text-center mb-14">
            Artist Statement
          </h2>

          {/* Main pull-quote */}
          <div className="relative mb-14 px-4 md:px-16">
            <span className="absolute -top-8 left-0 text-[90px] leading-none text-sky-500/15 font-serif select-none">“</span>
            <blockquote className="text-center font-serif italic text-xl sm:text-2xl md:text-3xl text-stone-200 leading-relaxed relative z-10">
              The soul of form breathes in quiet observation. Art is not merely representation — it is the transmutation of silence into living form.
            </blockquote>
            <span className="absolute -bottom-12 right-0 text-[90px] leading-none text-sky-500/15 font-serif select-none rotate-180">“</span>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="h-px flex-1 max-w-[120px] bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            <div className="w-1 h-1 rounded-full bg-stone-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            <div className="h-px flex-1 max-w-[120px] bg-white/10" />
          </div>

          {/* Body text — 2-column on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-stone-400 text-sm sm:text-base leading-relaxed font-sans mb-14">
            <p>
              My work is rooted in the Kirati philosophy of animism and reverence for the natural order. In every figure — whether monumental or drawn on fragile Lokta bark paper — there exists a dialogue between gravity and weightlessness, between endurance and fleeting human grace.
            </p>
            <p>
              Sculpture teaches patience; drawing teaches humility. The contour lines are never arbitrary — they record the pulse of a living being holding stillness against the relentless flow of time. When the chisel meets granite, the artist must surrender ego and listen to the rhythm sleeping inside the stone.
            </p>
          </div>

          {/* Three philosophy pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {[
              { num: '01', title: 'Stone & Silence', desc: 'Listening to the ancient rhythm sleeping inside material — granite, clay, hand-beaten Lokta bark.' },
              { num: '02', title: 'Form & Spirit', desc: 'Every carved line carries the structural integrity of living bone and human sinew.' },
              { num: '03', title: 'Time & Memory', desc: 'Transmuting 30+ years of Himalayan witness into permanent, contemplative sculptural form.' },
            ].map((p) => (
              <div key={p.num} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all group cursor-default">
                <span className="text-[11px] font-mono text-sky-500 font-bold tracking-widest block mb-2">{p.num}</span>
                <h4 className="font-serif text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{p.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Attribution + CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block mb-0.5">— Written by the artist</span>
              <span className="font-serif text-white font-bold text-xl block">Sanjay Rai (Bantawa)</span>
              <span className="text-xs text-stone-500 font-mono">Kathmandu Studio · 2024</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <Link
                to="/media"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold tracking-wide transition-all hover:scale-105 shadow-lg shadow-sky-900/40"
              >
                <span>Read Essays &amp; Publications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/media"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-red-900/40 hover:bg-red-800/50 text-red-300 text-xs font-medium transition-all border border-red-700/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>Watch Documentary</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: ACADEMY STUDY (Text + 2 Image Boxes) */}
      <section className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-stone-200/60">
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
