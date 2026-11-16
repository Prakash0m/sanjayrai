import React from 'react';
import { Quote } from 'lucide-react';
import { curatorialReviews } from '../data/portfolio';

export const CuratorialCommentary: React.FC = () => {
  return (
    <section id="commentary" className="py-20 md:py-28 relative bg-white border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span>CRITICAL ACCLAIM · CURATORIAL VOICES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
            Curatorial Commentary
          </h2>
          <p className="mt-3 text-base text-ink-600">
            Critical analysis and reflections on Sanjay Rai's contribution to modern Himalayan visual culture.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {curatorialReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-7 sm:p-8 rounded-3xl border border-stone-200/80 flex flex-col justify-between hover:shadow-xl transition-all relative group"
            >
              <Quote className="w-8 h-8 text-sky-400/40 mb-4 group-hover:text-sky-500 transition-colors" />

              <p className="font-serif italic text-base sm:text-lg text-ink-800 leading-relaxed mb-6">
                “{rev.quote}”
              </p>

              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-serif font-bold text-base text-ink-900">
                  {rev.critic}
                </h4>
                <p className="text-xs text-ink-500 font-sans mt-0.5 font-medium">
                  {rev.role}
                </p>
                <p className="text-[11px] text-stone-400 font-mono mt-0.5">
                  {rev.publication}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Curatorial Advisory Accent Strip */}
        <div className="mt-14 p-4 rounded-2xl glass-panel border border-stone-200/70 text-center">
          <p className="text-[11px] font-mono tracking-widest text-ink-500 uppercase">
            PRIVATE ART ADVISORY · INSTITUTIONAL ACQUISITIONS · COMMISSIONED SCULPTURES · RETROSPECTIVE ARCHIVE
          </p>
        </div>

      </div>
    </section>
  );
};

