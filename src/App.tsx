import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// 5 Dedicated Page Views matching exact site map:
// Home | Original Works | Commission Work | Media | Contact
import { Home } from './pages/Home';
import { OriginalWorks } from './pages/OriginalWorks';
import { CommissionWork } from './pages/CommissionWork';
import { Media } from './pages/Media';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#FAF8F5] text-ink-900 selection:bg-sky-500/20 selection:text-sky-900 font-sans flex flex-col justify-between">
        
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Global Floating Glass Navigation with 5 exact items */}
        <Navbar />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/original-works" element={<OriginalWorks />} />
            <Route path="/commission" element={<CommissionWork />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Dark Archival Footer */}
        <Footer />

        {/* Persistent Floating Official WhatsApp Action Widget */}
        <WhatsAppButton />

      </div>
    </BrowserRouter>
  );
};

export default App;
