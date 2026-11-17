import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { siteConfig, getWhatsAppUrl } from '../config/site';

interface NavbarProps {
  onOpenWhatsApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Exact 5 main navigation items in the required order:
  // Home | Original Works | Commission Work | Media | Contact
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Original Works', path: '/original-works' },
    { label: 'Commission Work', path: '/commission' },
    { label: 'Media', path: '/media' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 border-b border-stone-200/50 shadow-sm'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Artist Brand with Portrait Avatar */}
            <Link
              to="/"
              className="group flex items-center space-x-3 text-ink-900 transition-opacity hover:opacity-85"
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
            </Link>

            {/* Desktop Navigation: Exactly 5 items in order */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/70 shadow-glass-sm">
              {navLinks.map((link) => {
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                        isActive
                          ? 'bg-ink-900 text-white shadow-sm font-semibold'
                          : 'text-ink-600 hover:text-ink-900 hover:bg-stone-100/70'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Action Buttons: WhatsApp & Inquire */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <a
                href={getWhatsAppUrl("Hello Sanjay Rai, I am inquiring regarding your original works and commissions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-ink-900 text-white hover:bg-black transition-all hover:shadow-sm"
              >
                Inquire
              </Link>
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
            <div className="flex flex-col space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-ink-400 uppercase px-3 mb-1">
                Portfolio Navigation
              </span>
              
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-ink-900 text-white font-semibold'
                        : 'text-ink-800 hover:bg-stone-100/90 active:bg-stone-200'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-xs opacity-60">→</span>
                </NavLink>
              ))}

              <div className="pt-4 border-t border-stone-200 space-y-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2.5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-sm shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3.5 rounded-2xl bg-ink-900 text-white font-medium text-sm"
                >
                  Get in Touch
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
