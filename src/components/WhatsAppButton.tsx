import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after small scroll or 1.5s
    const timer = setTimeout(() => setIsVisible(true), 1200);
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end space-x-3">
      
      {/* iOS-Style Interactive Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 py-2 px-3.5 rounded-2xl glass-panel border border-stone-200/80 shadow-xl text-ink-800 text-xs animate-fade-in max-w-[220px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="font-sans text-[11px] leading-tight">
            Chat directly with <strong>Sanjay Rai’s Studio</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-stone-400 hover:text-stone-700 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/80"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
      </a>

    </div>
  );
};
