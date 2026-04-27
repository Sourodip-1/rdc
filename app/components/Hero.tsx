"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(titleRef.current, {
        y: 150,
        opacity: 0,
        duration: 1.8,
        delay: 0.5,
      })
      .from(subRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
      }, "-=1.2")
      .from(buttonsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
      }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden"
    >
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[15%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-[14vw] md:text-[9vw] lg:text-[8vw] font-premium font-black leading-[0.85] tracking-[-0.05em] text-foreground mb-12 select-none"
        >
          Crafting <span className="text-accent italic font-medium">Royal</span> <br />
          Moments.
        </h1>
        
        <div ref={subRef} className="max-w-3xl mx-auto">
          <p className="text-lg md:text-2xl text-foreground/50 font-medium tracking-tight mb-14 leading-relaxed px-4">
            The premier destination for luxury event management. We don't just plan events; we orchestrate masterpieces of celebration.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full"
        >
          <button className="group relative w-full sm:w-auto min-w-[240px] py-6 bg-foreground text-background rounded-full text-[14px] font-black tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl">
            <span className="relative z-10">BOOK NOW</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <button className="group w-full sm:w-auto min-w-[240px] py-6 border-2 border-foreground/10 text-foreground rounded-full text-[14px] font-black tracking-[0.25em] uppercase hover:border-accent transition-all duration-500 hover:scale-105 bg-transparent">
            <span className="group-hover:text-accent transition-colors">EXPLORE WORK</span>
          </button>
        </div>
      </div>
    </section>
  );
}
