import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';

interface NavbarProps {
  onOpenWhatsApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'discipline', 'gallery', 'selected', 'exhibitions', 'commentary', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Philosophy', href: '#about' },
    { label: 'Discipline', href: '#discipline' },
    { label: 'Archival Works', href: '#gallery' },
    { label: 'Footprints', href: '#exhibitions' },
    { label: 'Commentary', href: '#commentary' },
    { label: 'Inquiries', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 border-b border-stone-200/50 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Artist Brand / Monogram */}
            <a
              href="#hero"
              className="group flex items-center space-x-3 text-ink-900 transition-opacity hover:opacity-80"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-stone-200/90 shadow-sm flex-shrink-0 bg-stone-900">
                <img
                  src="/images/artist/avatar.jpg"
                  alt="Sanjay Rai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-ink-900 uppercase">
                  {siteConfig.artistName}
                </span>
                <span className="text-[10px] tracking-widest text-ink-500 uppercase font-sans -mt-0.5">
                  Archival Retrospective
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/60 shadow-glass-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? 'bg-ink-900 text-white shadow-sm'
                        : 'text-ink-600 hover:text-ink-900 hover:bg-stone-100/70'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: WhatsApp & Inquire */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={getWhatsAppUrl("Hello Sanjay Rai, I am inquiring regarding your artwork catalogue.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-600/90 hover:bg-emerald-600 text-white shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-ink-900 text-white hover:bg-black transition-all hover:shadow-md"
              >
                Inquire
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl text-ink-700 hover:text-ink-900 hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (iOS Glass style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden pt-20 pb-6 px-4 bg-stone-900/40 backdrop-blur-md animate-fade-in">
          <div className="glass-panel rounded-3xl p-6 shadow-2xl border border-white/80 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-ink-400 uppercase px-3">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-medium text-ink-800 hover:bg-stone-100/90 active:bg-stone-200 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-ink-400 text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 border-t border-stone-200 space-y-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-emerald-600 text-white font-medium text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3.5 rounded-2xl bg-ink-900 text-white font-medium text-sm"
                >
                  Inquire Regarding Works
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

