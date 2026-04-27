"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 600px of scroll
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button
            className="group relative flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-foreground hover:text-background transition-all duration-500 overflow-hidden"
            onClick={() => alert("Booking System Coming Soon!")}
          >
            <span className="relative z-10">BOOK YOUR EVENT</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
