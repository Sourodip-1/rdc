"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Venue {
  name: string;
  tag: string;
  img: string;
  desc?: string;
}

const ALL_VENUES: Venue[] = [
  { name: "Grand Ballroom", tag: "Capacity: 800+", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop", desc: "Our flagship ballroom for the most prestigious events." },
  { name: "Lakeside Garden", tag: "Outdoor Luxury", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop", desc: "Romantic outdoor setting with stunning water views." },
  { name: "Skyline Lounge", tag: "City Views", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", desc: "Modern rooftop lounge perfect for corporate mixers." },
  { name: "Royal Palace Hall", tag: "Heritage Charm", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop", desc: "A majestic hall that echoes with historical grandeur." },
  { name: "Heritage Courtyard", tag: "Al Fresco", img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", desc: "Traditional open-air courtyard for cultural celebrations." },
  { name: "Modern Glasshouse", tag: "Sun-drenched", img: "https://images.unsplash.com/photo-1473177104440-ffe2f376098c?q=80&w=2071&auto=format&fit=crop", desc: "A contemporary glass structure surrounded by lush greenery." },
  { name: "Vintage Wine Cellar", tag: "Intimate", img: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop", desc: "Cozy and sophisticated cellar for private tastings and dinners." },
  { name: "Beachfront Pavilion", tag: "Coastal Bliss", img: "https://images.unsplash.com/photo-1520939817315-0af0ebb3a02a?q=80&w=2070&auto=format&fit=crop", desc: "Stunning beach views for the ultimate destination wedding." },
];

export default function VenuesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(13,13,13,0.95)",
            backdropFilter: "blur(20px)",
            padding: "40px 20px",
            overflowY: "auto",
            overflowX: "hidden",
            display: "block", // Changed from flex to block to ensure natural scrolling
            WebkitOverflowScrolling: "touch"
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "fixed",
              top: 40,
              right: 40,
              background: "white",
              border: "none",
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10000,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
          >
            <X size={24} color="#0D0D0D" />
          </button>

          <div style={{ maxWidth: 1200, width: "100%", paddingBottom: 80, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 60, marginTop: 40 }}>
              <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.25em", color: "#FF6B4A", textTransform: "uppercase", marginBottom: 16 }}>Our Full Catalog</p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(40px,6vw,72px)", color: "#fff", lineHeight: 1 }}>Majestic Venues</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ALL_VENUES.map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", marginBottom: 20, position: "relative" }}>
                    <img
                      src={v.img}
                      alt={v.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1s cubic-bezier(0.16,1,0.3,1)" }}
                      className="group-hover:scale-110"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 100%)" }} />
                  </div>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.15em", color: "#FF6B4A", textTransform: "uppercase", marginBottom: 8 }}>{v.tag}</p>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.4rem", color: "#fff", marginBottom: 12 }}>{v.name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
