import React from 'react';
import { Hammer, PenTool, Palette, BookOpen, MapPin, Award } from 'lucide-react';
import { disciplinesData, timelineMilestones } from '../data/portfolio';

export const DualDiscipline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      default: return <Hammer className="w-5 h-5" />;
    }
  };

  return (
    <section id="discipline" className="py-20 md:py-28 relative bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span>PRACTICE · MEDIUMS &amp; METHODOLOGY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight">
            Dual Discipline: The Arts of Bantawa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed">
            In Sanjay Rai's artistic continuum, sculpture and drawing are not separate pursuits—they are dialectical reflections. The linear gesture on paper anticipates the monumental volume of carved stone.
          </p>
        </div>

        {/* 2-Column: 4 Disciplines Grid on Left, Milestones Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 4 Disciplines Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {disciplinesData.map((disc) => (
              <div
                key={disc.id}
                className="glass-card p-6 rounded-3xl border border-stone-200/80 hover:border-sky-300 transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-ink-800 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-sm">
                  {getIcon(disc.icon)}
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-wider text-sky-600 uppercase">
                    {disc.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink-900 mt-0.5">
                    {disc.title}
                  </h3>
                </div>

                <p className="text-xs text-ink-600 leading-relaxed font-sans">
                  {disc.description}
                </p>

                {/* Materials Tags */}
                <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {disc.materials.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-mono"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Chronological Engagements / Timeline */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-glass">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-mono tracking-widest text-ink-500 uppercase">
                    CHRONOLOGICAL ENGAGEMENTS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-ink-400">1994 – 2024</span>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                {timelineMilestones.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 border-white bg-sky-500 shadow-sm group-hover:scale-125 transition-transform" />
                    
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-sky-600">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-ink-900 mt-1 leading-snug">
                      {item.event}
                    </h4>

                    <p className="text-xs text-ink-500 font-sans mt-0.5 font-medium">
                      {item.organization}
                    </p>

                    {item.description && (
                      <p className="text-xs text-ink-600 font-sans mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-4 border-t border-stone-200 text-center">
                <p className="text-[11px] font-mono text-stone-500">
                  Full curatorial archive available upon institutional inquiry
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
