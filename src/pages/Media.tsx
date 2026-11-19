import React, { useState } from 'react';
import { mediaVideos, mediaPublications, monographCatalogue } from '../data/portfolio';
import { SmartImage } from '../components/SmartImage';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';
import { Video, BookOpen, FileText, Download, ExternalLink, Play, User, X } from 'lucide-react';

export const Media: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const featuredVideo = mediaVideos[0];

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xs text-[11px] font-mono tracking-widest text-stone-700 uppercase">
            <Video className="w-3 h-3 text-sky-600" />
            <span>ARCHIVAL MEDIA · DISCOURSE & PRESS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-tight">
            Media & Publications
          </h1>

          <p className="text-sm sm:text-base text-ink-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Documentary films, studio discourse archives, scholarly publications, critical press reviews, and downloadable retrospective catalogues.
          </p>
        </div>

        {/* SUB-SECTION 1: VIDEO (Widescreen Cinema Presentation — Single Official Video) */}
        <section id="video" className="space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-9 h-9 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                1. Video Documentaries & Studio Footage
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Interviews, philosophical reflections, and archival documentary on Sanjay Rai's studio devotion.
              </p>
            </div>
          </div>

          {/* Grand Featured Cinema Card */}
          {featuredVideo && (
            <div className="w-full">
              
              {/* Cinema Screen Container (Widescreen Cinema Ratio) */}
              <div className="relative w-full aspect-[21/9] min-h-[260px] max-h-[520px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-black shadow-2xl ring-1 ring-black/10">
                {activeVideo === featuredVideo.id ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`${featuredVideo.embedUrl}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                      title={featuredVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 px-4 py-2 rounded-full bg-black/80 hover:bg-black text-white text-xs font-mono tracking-wider backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Close Screen</span>
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => setActiveVideo(featuredVideo.id)}
                    className="relative w-full h-full cursor-pointer group/screen overflow-hidden"
                  >
                    <SmartImage
                      src={featuredVideo.thumbnail}
                      alt={featuredVideo.title}
                      objectFit="cover"
                      className="w-full h-full object-cover group-hover/screen:scale-105 transition-transform duration-700 filter brightness-95"
                    />

                    {/* Subtle Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover/screen:via-black/10 transition-all duration-300" />

                    {/* Centered Clean White Pill Button (Second Image Reference - Simple & Visible) */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVideo(featuredVideo.id);
                        }}
                        className="inline-flex items-center space-x-2.5 px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-ink-900 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-current text-ink-900" />
                        <span>Play Video</span>
                      </button>
                    </div>

                    {/* Clean duration chip at bottom-right corner */}
                    <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 font-medium">
                      {featuredVideo.duration} · HD
                    </div>
                  </div>
                )}
              </div>

              {/* Documentary Meta & Controls Bar */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[10px] font-mono font-semibold uppercase">
                      Official Documentary
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {featuredVideo.director}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs font-mono text-stone-400">
                      Duration: {featuredVideo.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                    {featuredVideo.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed">
                    {featuredVideo.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => setActiveVideo(activeVideo === featuredVideo.id ? null : featuredVideo.id)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-ink-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{activeVideo === featuredVideo.id ? 'Close Player' : 'Play Screen Here'}</span>
                  </button>

                  {featuredVideo.youtubeUrl && (
                    <a
                      href={featuredVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-red-50 hover:bg-red-100 text-red-700 border border-red-200/80 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-red-600" />
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                    </a>
                  )}

                  <a
                    href={getWhatsAppUrl("Hello Sanjay Rai, I watched your documentary 'Walking with Art' and would like to learn more.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          )}
        </section>

        {/* SUB-SECTION 2: PUBLISH (Publications / Press Articles) */}
        <section id="publish" className="space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                2. Publish: Scholarly Articles & Press Reviews
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Critical monographs, national art journal essays, and international press coverage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaPublications.map((pub) => (
              <div
                key={pub.id}
                className="rounded-3xl bg-white p-6 border border-stone-200/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-[10px] font-mono font-semibold uppercase text-stone-700">
                      {pub.tag}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {pub.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ink-900 leading-snug">
                    {pub.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs font-mono text-sky-800">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    <span>Author: {pub.author}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed pt-1">
                    {pub.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-stone-400 text-[11px] truncate max-w-[200px]">
                    {pub.publication}
                  </span>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUB-SECTION 3: CATALOGUE (Downloadable or Viewable PDF Link) */}
        <section id="catalogue" className="space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-stone-200">
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                3. Retrospective Catalogue & Monograph (PDF)
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Official 120-page comprehensive retrospective exhibition book available for curators and collectors.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-stone-200/90 shadow-md p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left — Elegant standalone book frame with zoomed portrait */}
              <div className="lg:col-span-4 flex justify-center items-center">
                <div className="relative w-44 sm:w-52 aspect-[9/13.5] rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100 group transition-transform duration-300 hover:scale-[1.02]">
                  <SmartImage
                    src={monographCatalogue.downloadUrl}
                    alt={monographCatalogue.title}
                    objectFit="cover"
                    className="w-full h-full"
                    imgClassName="object-cover object-top w-full h-full scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-center">
                    <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase block font-semibold">
                      OFFICIAL MONOGRAPH
                    </span>
                    <span className="font-serif text-xs font-bold text-white block mt-0.5">
                      1994 – 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Right — content area */}
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-mono tracking-widest uppercase">
                  <span>CURATORIAL ARCHIVE</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                  {monographCatalogue.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl">
                  {monographCatalogue.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs py-1 text-left">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-[10px] text-stone-400 block mb-0.5">FORMAT</span>
                    <span className="font-semibold text-stone-800">{monographCatalogue.pages}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="text-[10px] text-stone-400 block mb-0.5">ISBN</span>
                    <span className="font-semibold text-stone-800">{monographCatalogue.isbn}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-stone-400 block mb-0.5">FILE SIZE</span>
                    <span className="font-semibold text-stone-800">{monographCatalogue.fileSize}</span>
                  </div>
                </div>

                {/* Download / View Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <a
                    href={monographCatalogue.downloadUrl}
                    download="Sanjay_Rai_Retrospective_Monograph.jpg"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Archival PDF Catalogue</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(`Hello Sanjay Rai, I am requesting a printed/institutional hardbound copy of your Retrospective Monograph Catalogue "${monographCatalogue.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Request Hardbound Monograph</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
