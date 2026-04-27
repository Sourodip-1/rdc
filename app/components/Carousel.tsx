"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=2070&auto=format&fit=crop",
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // For a truly infinite seamless loop, we can use the "marquee" pattern
    // but with GSAP we can do it more smoothly.
    
    const ctx = gsap.context(() => {
      const items = scrollContainer.querySelectorAll(".carousel-item");
      const totalWidth = scrollContainer.scrollWidth / 2; // Since we duplicate the images

      gsap.to(scrollContainer, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(scrollContainer, { x: 0 });
        }
      });

      // Individual floating animations with randomness
      items.forEach((item, i) => {
        gsap.to(item, {
          y: i % 2 === 0 ? 20 : -20,
          rotation: i % 2 === 0 ? 3 : -3,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-12 overflow-hidden bg-transparent">
      {/* Subtle overlay to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center" ref={scrollRef}>
        {[...IMAGES, ...IMAGES].map((src, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 px-4"
          >
            <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl bg-muted transition-all duration-700 hover:shadow-accent/20 ring-1 ring-black/5">
              <img
                src={src}
                alt={`Royal Event ${index}`}
                className={`
                  ${index % 3 === 0 ? "w-[280px] h-[400px]" : index % 3 === 1 ? "w-[350px] h-[480px]" : "w-[300px] h-[440px]"}
                  object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0
                `}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 text-left">
                <p className="text-accent font-medium text-xs tracking-[0.2em] uppercase mb-2">Signature Series</p>
                <h3 className="text-white font-premium text-xl font-bold leading-tight">A Night of <br/>Pure Elegance</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
