"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FloatingBookButton() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          onClick={() => router.push("/book")}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 28px",
            background: "#FF6B4A",
            color: "#fff",
            border: "none",
            borderRadius: 9999,
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            fontSize: "0.875rem",
            letterSpacing: "0.08em",
            cursor: "pointer",
            boxShadow: "0 8px 32px rgba(255,107,74,0.45)",
            textTransform: "uppercase",
          }}
          whileHover={{ scale: 1.06, boxShadow: "0 12px 48px rgba(255,107,74,0.55)" }}
          whileTap={{ scale: 0.96 }}
        >
          <span>Book Event</span>
          <span style={{ fontSize: "1.1rem" }}>✦</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
