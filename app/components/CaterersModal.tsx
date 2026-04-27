"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import caterers from "@/data/caterers.json";

export default function CaterersModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
            display: "block",
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
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(40px,6vw,72px)", color: "#fff", lineHeight: 1 }}>Premium Caterers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caterers.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", marginBottom: 20, position: "relative" }}>
                    <img
                      src={c.coverImage}
                      alt={c.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1s cubic-bezier(0.16,1,0.3,1)" }}
                      className="group-hover:scale-110"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 100%)" }} />
                  </div>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.15em", color: "#FF6B4A", textTransform: "uppercase", marginBottom: 8 }}>{c.tag}</p>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.4rem", color: "#fff", marginBottom: 12 }}>{c.name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{c.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
