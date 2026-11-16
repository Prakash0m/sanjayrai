import React, { useState } from 'react';
import { BookOpen, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

export const AboutArtist: React.FC = () => {
  const [activeEssay, setActiveEssay] = useState<number>(0);

  const essays = [
    {
      id: "01",
      title: "Silence Between the Lines",
      subtitle: "On Indian Ink, Gestural Tension & Lokta Negative Space",
      snippet: "To draw is not to delineate a boundary, but to allow the surrounding emptiness to breathe into form. Lokta paper from the high hills carries the memory of wild Daphne bark, requiring an intuitive patience.",
      date: "Spring Monograph, NAFA"
    },
    {
      id: "02",
      title: "Transmuting Stone into Spirit",
      subtitle: "On Monumental Granite, Marble & Himalayan Mass",
      snippet: "Granite resists the chisel until the sculptor listens to its inner fractures. Carving is an act of respectful excavation, uncovering the dormant posture that nature kept hidden for millennia.",
      date: "Fine Arts Symposium"
    },
    {
      id: "03",
      title: "The Poetics of Bantawa Clay",
      subtitle: "Kirat Cosmological Ethos & Terrene Warmth",
      snippet: "In Kirati mythology, soil and flesh originate from the same primeval pulse. High-fired terracotta retains the fingerprints of devotion and the indelible signature of fire and water.",
      date: "Curatorial Treatise"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span>ESSAY 01 · PHILOSOPHICAL FOUNDATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
            Intellectual Reflection &amp; The Transmutation of Form
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Prose */}
          <div className="lg:col-span-7 space-y-6 text-ink-700 leading-relaxed font-sans text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-ink-900 leading-snug italic font-normal border-l-2 border-sky-500 pl-4 py-1">
              “The journey begins with primordial clay and native stone—materials that retain the geological memory of the Himalayas. Through deliberate subtraction, the human condition is distilled to its spiritual essence.”
            </p>

            <p>
              Born with roots in eastern Nepal's Bantawa Rai community and grounded in the classical stone carving traditions of the Kathmandu Valley, Sanjay Rai has spent over three decades pioneering a distinctive modernist visual vocabulary. His works stand at the intersection of monumental weight and intimate poetic fragility.
            </p>

            <p>
              In his studio in Patan, Rai refuses the hurried mechanics of industrial art. Whether molding high-fired terracotta, carving unyielding granite boulders, or sweeping Chinese ink across fibrous handmade Lokta paper, his methodology is meditative. Every curve echoes the undulating ridges of the Mahabharata range, while every figure embodies the quiet dignity of agrarian life.
            </p>

            <p>
              In the Bantawa cultural worldview, the animate and inanimate share a continuous consciousness. Rai’s sculptures and drawings do not merely portray external anatomy; they question how weight, gravity, and breath inhabit physical space.
            </p>

            {/* Inquire on WhatsApp Link */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href={getWhatsAppUrl("Hello Sanjay Rai, I would like to request your Studio Monograph & Exhibition Catalogue.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-sky-600 hover:text-sky-700 group"
              >
                <span>Request Monograph &amp; Exhibition Catalogue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Table of Essays / Interactive Archive Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-glass space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-mono tracking-widest text-ink-500 uppercase">
                    TABLE OF ESSAYS / ARCHIVES
                  </span>
                </div>
                <span className="text-[11px] font-mono text-ink-400">3 Treatises</span>
              </div>

              {/* Essay List */}
              <div className="space-y-3">
                {essays.map((essay, index) => {
                  const isSelected = activeEssay === index;
                  return (
                    <div
                      key={essay.id}
                      onClick={() => setActiveEssay(index)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-white border-sky-400/80 shadow-sm'
                          : 'bg-stone-50/70 border-stone-200/60 hover:bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className={`text-[10px] font-mono tracking-wider font-semibold ${isSelected ? 'text-sky-600' : 'text-stone-400'}`}>
                          ESSAY {essay.id}
                        </span>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {essay.date}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-ink-900 mt-1">
                        {essay.title}
                      </h4>
                      <p className="text-xs text-ink-500 font-sans mt-0.5">
                        {essay.subtitle}
                      </p>
                      {isSelected && (
                        <p className="text-xs text-ink-600 font-serif italic mt-3 pt-3 border-t border-stone-100 leading-relaxed">
                          “{essay.snippet}”
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Monograph Request CTA inside Card */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex flex-col space-y-3">
                <div className="flex items-center space-x-2 text-sky-900 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Comprehensive 120-Page Retrospective Monograph</span>
                </div>
                <p className="text-[11px] text-sky-800 leading-relaxed">
                  Available for curators, museum directors, and institutional patrons.
                </p>
                <a
                  href={getWhatsAppUrl("Hello Sanjay Rai, I would like to request the 120-Page Retrospective Monograph PDF.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-ink-900 hover:bg-black text-white text-xs font-medium shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Request via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
