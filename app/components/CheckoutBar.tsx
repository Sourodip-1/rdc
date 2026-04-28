"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShoppingCart, ArrowRight, X } from "lucide-react";

interface Selection {
  service?: string;
  venue?: string;
  caterer?: string;
  artist?: string;
  pkg?: string;
}

export default function CheckoutBar({ selections, clearSelection }: { selections: Selection, clearSelection: (key: keyof Selection) => void }) {
  const router = useRouter();
  const hasSelection = Object.values(selections).some(v => v);

  if (!hasSelection) return null;

  const count = Object.values(selections).filter(v => v).length;

  const handleCheckout = () => {
    const params = new URLSearchParams();
    if (selections.service) params.set("service", selections.service);
    if (selections.venue) params.set("venue", selections.venue);
    if (selections.caterer) params.set("caterer", selections.caterer);
    if (selections.artist) params.set("artist", selections.artist);
    if (selections.pkg) params.set("package", selections.pkg);
    
    router.push(`/book?${params.toString()}`);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        style={{
          position: "fixed",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "90%",
          maxWidth: "800px",
        }}
      >
        <div style={{
          background: "rgba(13, 13, 13, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.1)",
          gap: 20
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, overflowX: "auto", paddingBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
              <div style={{ background: "#FF6B4A", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>
                {count}
              </div>
              <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>Items Selected</span>
            </div>
            
            <div style={{ height: 24, width: 1, background: "rgba(255,255,255,0.2)" }} />

            <div style={{ display: "flex", gap: 12 }}>
              {Object.entries(selections).map(([key, value]) => {
                if (!value) return null;
                return (
                  <div key={key} style={{ background: "rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: 12, display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", fontFamily: "var(--font-montserrat)" }}>{key}:</span>
                    <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 600, fontFamily: "var(--font-montserrat)", whiteSpace: "nowrap" }}>{value.length > 15 ? value.substring(0, 15) + "..." : value}</span>
                    <button 
                      onClick={() => clearSelection(key as keyof Selection)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "rgba(255,255,255,0.4)" }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, background: "#FF6B4A" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckout}
            style={{
              background: "#FF6B4A",
              color: "#fff",
              border: "none",
              borderRadius: "16px",
              padding: "12px 24px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
              boxShadow: "0 8px 20px rgba(255,107,74,0.3)"
            }}
          >
            Checkout <ArrowRight size={18} />
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
