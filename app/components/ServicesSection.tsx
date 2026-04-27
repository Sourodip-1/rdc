"use client";

import { motion, Variants } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Luxury Wedding Experiences",
    description: "Grand celebrations crafted with meticulous detail — from floral curation to orchestrated timelines.",
    tag: "Signature Series",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Corporate Event Experiences",
    description: "Executive-class productions that command presence, drive engagement, and leave lasting impressions.",
    tag: "Executive Series",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Private Celebrations & Parties",
    description: "Intimate gatherings elevated to bespoke affairs with curated themes and flawless execution.",
    tag: "Royal Collection",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Theme-Based Event Design",
    description: "Immersive worlds built from vision to reality — every element tells your story.",
    tag: "Bespoke Craft",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Kids Birthday Experiences",
    description: "Magical celebrations designed to spark wonder, joy, and memories that last a lifetime.",
    tag: "Little Royals",
    imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2071&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Elegant Baby Shower Celebrations",
    description: "Tender, refined gatherings that welcome new beginnings with warmth and elegance.",
    tag: "New Beginnings",
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "07",
    title: "Anniversary Celebrations",
    description: "Timeless tributes to love and legacy — every milestone deserves a royal moment.",
    tag: "Timeless Moments",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "08",
    title: "School & Institutional Events",
    description: "Professionally managed ceremonies and galas that honour achievement and community.",
    tag: "Legacy Series",
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "09",
    title: "Retirement & Milestone Celebrations",
    description: "Grand finales designed with dignity, warmth, and the grandeur a life well-lived deserves.",
    tag: "Grand Finale",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "#FDFBF7", padding: "120px 32px" }}>
      {/* Centered container */}
      <div style={{ maxWidth: 1600, margin: "0 auto", width: "100%" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            color: "#FF6B4A",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Curated Experiences
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
            Our{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#FF6B4A" }}>
              Services
            </em>
          </h2>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "1rem",
            color: "rgba(13,13,13,0.5)",
            lineHeight: 1.8,
            maxWidth: 520,
            margin: "0 auto",
          }}>
            From intimate family moments to grand royal spectacles — every
            experience is crafted with intention, precision, and heart.
          </p>
        </div>

        {/* ── Service Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          borderRadius: 32,
          overflow: "hidden",
        }}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover="hover"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 450,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                borderRadius: 24,
              }}
            >
              {/* ── Full Photo Background ── */}
              <motion.div
                variants={{ hover: { scale: 1.07 } }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                }}
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>

              {/* ── Full-card dark tint ── */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,10,10,0.35)",
                zIndex: 1,
              }} />

              {/* ── Bottom gradient ── */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)",
                zIndex: 2,
              }} />

              {/* ── Number + Tag ── */}
              <div style={{
                position: "absolute",
                top: 28,
                left: 28,
                right: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 3,
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1,
                }}>
                  {service.number}
                </span>
                <span style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "#FF6B4A",
                  textTransform: "uppercase",
                  background: "rgba(0,0,0,0.35)",
                  padding: "5px 12px",
                  borderRadius: 9999,
                  backdropFilter: "blur(6px)",
                }}>
                  {service.tag}
                </span>
              </div>

              {/* ── Text Content ── */}
              <div style={{
                position: "relative",
                zIndex: 3,
                padding: "28px",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem,1.4vw,1.35rem)",
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: 10,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}>
                  {service.description}
                </p>
                {/* Arrow */}
                <motion.div
                  variants={{ hover: { background: "#FF6B4A", x: 4 } }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    color: "#fff",
                  }}
                >
                  ↗
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
