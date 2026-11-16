import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutArtist } from '../components/AboutArtist';
import { DualDiscipline } from '../components/DualDiscipline';
import { SelectedWorks } from '../components/SelectedWorks';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { SoloExhibitionBanner } from '../components/SoloExhibitionBanner';
import { GlobalFootprints } from '../components/GlobalFootprints';
import { CuratorialCommentary } from '../components/CuratorialCommentary';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-ink-900 selection:bg-sky-500/20 selection:text-sky-900 font-sans">
      {/* Floating Apple iOS-inspired Glass Navigation */}
      <Navbar />

      {/* Main Page Flow Matching the Reference Archival Image */}
      <main>
        <Hero />
        <AboutArtist />
        <DualDiscipline />
        <SelectedWorks />
        <PortfolioGallery />
        <SoloExhibitionBanner />
        <GlobalFootprints />
        <CuratorialCommentary />
        <Contact />
      </main>

      {/* Sleek Dark Archival Footer */}
      <Footer />

      {/* Floating Persistent WhatsApp Chat Widget */}
      <WhatsAppButton />
    </div>
  );
};
