"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
  "/Wedding/WhatsApp Image 2026-04-06 at 5.47.58 PM.jpeg",
  "/Wedding/WhatsApp Image 2026-04-06 at 5.50.08 PM.jpeg",
  "/Wedding/WhatsApp Image 2026-04-06 at 5.53.15 PM.jpeg",
  "/Wedding/WhatsApp Image 2026-04-06 at 5.50.04 PM.jpeg",
  "/Decor & Design/FB_IMG_1770890920042.jpg",
  "/Decor & Design/fb2.jpg",
  "/Decor & Design/FB_IMG_1770890938956.jpg",
  "/Corporate Events/corporate event1.jpeg",
  "/Birthday/enhanced_4.jpg",
  "/Birthday/enhanced_5.jpg",
  "/Birthday/enhanced_2.jpg",
];

// Sizes per card slot (cycles every 3)
const CARD_SIZES = [
  { w: 280, h: 400 },
  { w: 350, h: 480 },
  { w: 300, h: 440 },
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation on each card — small y so clipping is impossible
      const items = containerRef.current?.querySelectorAll(".carousel-item");
      items?.forEach((item, i) => {
        gsap.to(item, {
          y: i % 2 === 0 ? 12 : -12,
          duration: 3 + (i % 3) * 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Duplicate for seamless loop
  const allImages = [...IMAGES, ...IMAGES, ...IMAGES];

  return (
    <>
      {/* Inject keyframe once */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          animation: marquee 24s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        ref={containerRef}
        style={{
          /* overflow visible so floating cards are never clipped */
          overflow: "visible",
          position: "relative",
          paddingTop: "40px",
          paddingBottom: "40px",
          background: "transparent",
        }}
      >
        {/* Left / right fade masks — scoped to visible area */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: 160,
          background: "linear-gradient(to right, #fff 0%, transparent 100%)",
          zIndex: 10, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: 160,
          background: "linear-gradient(to left, #fff 0%, transparent 100%)",
          zIndex: 10, pointerEvents: "none",
        }} />

        {/* Marquee track — CSS animation handles the loop, zero flicker */}
        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: 0,
          }}
        >
          {allImages.map((src, index) => {
            const size = CARD_SIZES[index % 3];
            return (
              <div
                key={index}
                className="carousel-item"
                style={{ flexShrink: 0, padding: "0 14px" }}
              >
                <div
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
                    width: size.w,
                    height: size.h,
                    position: "relative",
                    cursor: "pointer",
                  }}
                  className="group"
                >
                  <img
                    src={src}
                    alt={`Royal Event ${(index % IMAGES.length) + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 1s cubic-bezier(0.16,1,0.3,1), filter 0.6s",
                      filter: "grayscale(12%)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)";
                      (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLImageElement).style.filter = "grayscale(12%)";
                    }}
                  />
                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)",
                    opacity: 0, transition: "opacity 0.5s",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                    padding: 28,
                  }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.opacity = "0")}
                  >
                    {/*<p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.2em", color: "#FF6B4A", textTransform: "uppercase", marginBottom: 6 }}>
                      Signature Series
                    </p>
                    <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.2rem", color: "#fff", lineHeight: 1.3 }}>
                      A Night of<br />Pure Elegance
                    </h3>*/}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
