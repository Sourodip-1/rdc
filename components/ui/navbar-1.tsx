"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Our Work", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Our Venus", href: "#" },
  ];

  return (
    <div className="fixed top-10 left-0 w-full z-[100] flex justify-center px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center justify-between px-10 py-5 bg-white rounded-full shadow-2xl w-full max-w-7xl relative z-10 transition-all duration-700 ${
          isScrolled ? "scale-[0.98] shadow-3xl bg-white/95" : "scale-100"
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Logo Circle */}
          <motion.div
            className="w-12 h-12 flex-shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          <Link href="/" className="text-2xl font-premium font-black tracking-tight text-foreground whitespace-nowrap hidden md:block">
            ROYAL <span className="text-accent">DESI</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-x-10 px-8">
          {navLinks.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2 }}
            >
              <Link 
                href={item.href} 
                className="text-[15px] text-gray-900 hover:text-accent transition-colors font-bold whitespace-nowrap tracking-wide"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300 font-bold whitespace-nowrap shadow-xl"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="lg:hidden flex items-center p-3 rounded-full bg-gray-50" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          {isOpen ? <X className="h-7 w-7 text-gray-900" /> : <Menu className="h-7 w-7 text-gray-900" />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-32 px-10 lg:hidden pointer-events-auto"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-bold text-gray-900 hover:text-accent transition-colors block"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <Link
                  href="#"
                  className="inline-block w-full py-6 bg-black text-white text-center rounded-full font-bold text-xl shadow-2xl"
                  onClick={toggleMenu}
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar1;
