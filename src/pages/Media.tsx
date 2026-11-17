import React, { useState } from 'react';
import { mediaVideos, mediaPublications, monographCatalogue } from '../data/portfolio';
import { SmartImage } from '../components/SmartImage';
import { getWhatsAppUrl } from '../config/site';
import { WhatsAppIcon } from '../components/Icons';
import { Video, BookOpen, FileText, Download, ExternalLink, Play, User } from 'lucide-react';

export const Media: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

        {/* SUB-SECTION 1: VIDEO (Embedded or Linked Videos) */}
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
                Interviews, philosophical reflections, and casting footage from Patan foundries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaVideos.map((video) => (
              <div
                key={video.id}
                className="group rounded-3xl bg-white border border-stone-200/70 p-5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Video Player / Thumbnail Preview */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 mb-4 shadow-inner">
                  {activeVideo === video.id ? (
                    <iframe
                      src={`${video.embedUrl}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <SmartImage
                        src={video.thumbnail}
                        alt={video.title}
                        objectFit="cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <button
                          onClick={() => setActiveVideo(video.id)}
                          aria-label={`Play ${video.title}`}
                          className="w-14 h-14 rounded-full bg-white/95 hover:bg-white text-ink-900 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group-hover:bg-sky-500 group-hover:text-white"
                        >
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-white">
                        {video.duration}
                      </div>
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono text-ink-900 font-bold">
                        {video.year}
                      </div>
                    </>
                  )}
                </div>

                {/* Video Info */}
                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-sky-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs font-mono text-stone-400">
                    <span>{video.director}</span>
                    <span>•</span>
                    <span>{video.duration}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed pt-1">
                    {video.description}
                  </p>
                  
                  {video.youtubeUrl && (
                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                      
                      <button
                        onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                        className="text-xs font-mono text-sky-700 hover:text-sky-900 font-medium"
                      >
                        {activeVideo === video.id ? 'Close Player' : 'Play Here'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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

          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-ink-950 to-stone-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Catalogue Cover Preview */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-stone-800 rotate-1 hover:rotate-0 transition-transform duration-500">
                  <SmartImage
                    src={monographCatalogue.downloadUrl}
                    alt={monographCatalogue.title}
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-white text-center">
                    <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase block">
                      OFFICIAL MONOGRAPH
                    </span>
                    <span className="font-serif text-xs font-bold block">
                      1994 – 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Catalogue Metadata & Action Buttons */}
              <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-[10px] font-mono tracking-widest uppercase border border-white/10">
                  <span>CURATORIAL ARCHIVE</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  {monographCatalogue.title}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl">
                  {monographCatalogue.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left py-2 font-mono text-xs text-stone-300">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-stone-400 block">FORMAT</span>
                    <span className="font-semibold text-white">{monographCatalogue.pages}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-stone-400 block">ISBN</span>
                    <span className="font-semibold text-white">{monographCatalogue.isbn}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-stone-400 block">FILE SIZE</span>
                    <span className="font-semibold text-white">{monographCatalogue.fileSize}</span>
                  </div>
                </div>

                {/* Download / View Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href={monographCatalogue.downloadUrl}
                    download="Sanjay_Rai_Retrospective_Monograph.jpg"
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-ink-950 text-xs sm:text-sm font-semibold shadow-lg transition-all hover:scale-105 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Archival PDF Catalogue</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(`Hello Sanjay Rai, I am requesting a printed/institutional hardbound copy of your Retrospective Monograph Catalogue "${monographCatalogue.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105"
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
