"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageReveal from "@/components/ui/image-tiles";
import { FramerThumbnailCarousel } from "@/components/ui/framer-thumbnail-carousel";

const GALLERY_CATEGORIES = [
  {
    id: "weddings",
    name: "Luxury Weddings",
    items: [
      { id: 1, url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000", title: "Royal Vows in Gold" },
      { id: 2, url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000", title: "Eternal Floral Mandap" },
      { id: 3, url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000", title: "Grand Ballroom Waltz" },
      { id: 4, url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000", title: "The Royal Walkway" },
      { id: 5, url: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1000", title: "Candlelight Dinner" },
    ]
  },
  {
    id: "corporate",
    name: "Corporate Events",
    items: [
      { id: 1, url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000", title: "Executive Summit 2026" },
      { id: 2, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000", title: "Tech Innovation Gala" },
      { id: 3, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000", title: "Future Horizons Conference" },
      { id: 4, url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000", title: "Strategic Planning Meet" },
      { id: 5, url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000", title: "Networking Under the Stars" },
    ]
  },
  {
    id: "birthdays",
    name: "Birthday Celebrations",
    items: [
      { id: 1, url: "https://images.unsplash.com/photo-1530103862676-de3c9de59a9e?q=80&w=1000", title: "A Fairytale First Birthday" },
      { id: 2, url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000", title: "Sweet Sixteen Sparkles" },
      { id: 3, url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000", title: "Golden Jubilee Bash" },
      { id: 4, url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000", title: "Garden Party Joy" },
      { id: 5, url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000", title: "Night of Neon Lights" },
    ]
  },
  {
    id: "decor",
    name: "Decor & Designs",
    items: [
      { id: 1, url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000", title: "Velvet & Gold Accents" },
      { id: 2, url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000", title: "Cascading Orchid Decor" },
      { id: 3, url: "https://images.unsplash.com/photo-1522413452208-996906271a56?q=80&w=1000", title: "Modern Minimalist Chic" },
      { id: 4, url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1000", title: "Bohemian Dreamscape" },
      { id: 5, url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000", title: "Baroque Grandeur" },
    ]
  }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<typeof GALLERY_CATEGORIES[0] | null>(null);

  // Lock scroll and hide navbar when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCategory]);

  return (
    <section id="work" style={{ padding: "120px 32px", background: "#FDFBF7", position: "relative", zIndex: 10 }}>
      {/* Hide Navbar globally when modal is open */}
      {selectedCategory && (
        <style>{`
          div[class*="fixed top-0 left-0"] { 
            display: none !important; 
          }
        `}</style>
      )}
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 120 }}>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            color: "#FF6B4A",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            A Visual Journey
          </p>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
            fontSize: "clamp(40px,5vw,68px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#0D0D0D",
            marginBottom: 24,
          }}>
            Our <em style={{ fontStyle: "italic", fontWeight: 400, color: "#FF6B4A" }}>Gallery</em>
          </h2>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "1rem",
            color: "rgba(13,13,13,0.5)",
            lineHeight: 1.8,
            maxWidth: 520,
            margin: "0 auto",
          }}>
            Explore our curated collections of past events. Click on any category to immerse yourself in the magic.
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "80px 40px", placeItems: "center" }}>
          {GALLERY_CATEGORIES.map((category) => (
            <ImageReveal 
              key={category.id}
              categoryName={category.name}
              leftImage={category.items[0].url}
              middleImage={category.items[1].url}
              rightImage={category.items[2].url}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>

      {/* Popup Island / Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999, // Super high z-index
              background: "rgba(13, 13, 13, 0.85)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                background: "#FDFBF7",
                width: "100%",
                maxWidth: 1200,
                maxHeight: "90vh",
                borderRadius: 32,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Modal Header */}
              <div style={{ padding: "32px 40px", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "2rem", color: "#0D0D0D", letterSpacing: "-0.02em" }}>
                    {selectedCategory.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.85rem", color: "rgba(0,0,0,0.5)", marginTop: 4 }}>
                    Curated collection of our finest work
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(0,0,0,0.1)",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0D0D0D";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#0D0D0D";
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Modal Carousel Section */}
              <div style={{ flex: 1, padding: "20px 0", overflowY: "auto", background: "#FDFBF7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FramerThumbnailCarousel items={selectedCategory.items} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
