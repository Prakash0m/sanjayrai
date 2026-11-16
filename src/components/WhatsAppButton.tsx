import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { getWhatsAppUrl } from '../config/site';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after small scroll or 1.2s
    const timer = setTimeout(() => setIsVisible(true), 1000);
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end space-x-3 select-none">
      
      {/* iOS-Style Interactive Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2.5 py-2 px-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-2xl text-ink-900 text-xs animate-fade-in max-w-[230px]">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
          <span className="font-sans text-[11px] leading-tight text-ink-800">
            Chat directly with <strong>Sanjay Rai’s Studio</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-stone-400 hover:text-stone-700 ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Real WhatsApp Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-white/95"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" fill="currentColor" />
        
        {/* Pulsing notification ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 group-hover:opacity-60 animate-ping pointer-events-none" />
      </a>

    </div>
  );
};
