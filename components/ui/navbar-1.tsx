"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Our Work", href: "/#work" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About Us", href: "/about" },
    { name: "Our Venues", href: "/#venues" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-[100] flex justify-center"
        style={{ padding: "20px 24px" }}
      >
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: scrolled
              ? "rgba(253,251,247,0.88)"
              : "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "9999px",
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(0,0,0,0.05)"
              : "0 4px 24px rgba(0,0,0,0.07), 0 1px 0 rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.06)",
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            padding: "10px 10px 10px 20px",
          }}
        >
          {/* ── Left: Logo ── */}
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/image.png"
                alt="Royal Desi Crew"
                style={{ height: "65px", width: "auto", objectFit: "contain" }}
              />
            </Link>
          </div>

          {/* ── Center: Nav Links ── */}
          <nav className="hidden lg:flex" style={{ gap: "0px" }}>
            {navLinks.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                <Link
                  href={item.href}
                  style={{
                    padding: "8px 18px",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "#0D0D0D",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s",
                    display: "block",
                    borderRadius: "9999px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0D0D0D")}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* ── Right: CTA Button ── */}
          <div className="flex" style={{ flex: 1, justifyContent: "flex-end" }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginRight: "16px" }}
            >
              <Link
                href="/book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 28px",
                  background: "#0D0D0D",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#0D0D0D")}
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#F5F2EE",
              border: "none",
              cursor: "pointer",
              marginRight: 4,
            }}
          >
            {isOpen ? (
              <X size={20} color="#0D0D0D" />
            ) : (
              <Menu size={20} color="#0D0D0D" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#FDFBF7",
              zIndex: 90,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: "140px 40px 40px 40px",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 700,
                      fontSize: "clamp(1.8rem, 6vw, 2.2rem)",
                      color: "#0D0D0D",
                      textDecoration: "none",
                      display: "block",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#0D0D0D")}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: "32px" }}
              >
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "18px 0",
                    background: "#0D0D0D",
                    color: "#fff",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar1;
