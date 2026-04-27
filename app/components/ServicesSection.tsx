"use client";

import { useEffect, useRef } from "react";
import { Heart, GraduationCap, PartyPopper, Palette, Baby, Cake, Briefcase, Church, Award } from "lucide-react";

const services = [
  {
    icon: <Church className="w-7 h-7" />,
    title: "Luxury Wedding Experiences",
    description: "From haldi to reception, we design and execute breathtaking weddings that reflect your story and leave a lasting impression on every guest.",
    accent: "#D4A853",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Corporate Event Experiences",
    description: "Make your brand stand out with seamless, high-impact corporate events designed to impress clients, teams, and stakeholders.",
    accent: "#4A90D9",
  },
  {
    icon: <PartyPopper className="w-7 h-7" />,
    title: "Private Celebrations & Parties",
    description: "From birthdays to anniversaries, we turn your special moments into unforgettable celebrations filled with style, energy, and joy.",
    accent: "#E85D75",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Theme-Based Event Design",
    description: "We create electrifying live experiences with professional production, artist coordination, and crowd-engaging performances.",
    accent: "#9B59B6",
  },
  {
    icon: <Cake className="w-7 h-7" />,
    title: "Kids Birthday Experiences",
    description: "Bring star power to your event with access to top artists, performers, and celebrity appearances managed end-to-end.",
    accent: "#FF9F43",
  },
  {
    icon: <Baby className="w-7 h-7" />,
    title: "Elegant Baby Shower Celebrations",
    description: "From stage design to lighting and sound, we handle every technical detail to deliver a flawless and visually stunning event.",
    accent: "#F8B4C8",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Anniversary Celebrations",
    description: "From stage design to lighting and sound, we handle every technical detail to deliver a flawless and visually stunning event.",
    accent: "#E74C3C",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "School & Institutional Events",
    description: "From stage design to lighting and sound, we handle every technical detail to deliver a flawless and visually stunning event.",
    accent: "#2ECC71",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Retirement & Milestone Celebrations",
    description: "From stage design to lighting and sound, we handle every technical detail to deliver a flawless and visually stunning event.",
    accent: "#1ABC9C",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const heading = sectionRef.current?.querySelector(".services-heading");
      if (heading) {
        gsap.fromTo(heading, 
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 85%" }
          }
        );
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    };
    loadGsap();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="w-full flex flex-col items-center justify-center py-32"
    >
      {/* Heading */}
      <div className="services-heading text-center mb-24 max-w-[800px] px-6">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-premium font-black text-[#1a1a1a] mb-6 leading-tight">
          What We <span className="italic" style={{ color: "#D4A853" }}>Provide</span>
        </h2>
        <p className="text-lg md:text-xl text-black/50 leading-relaxed">
          From intimate celebrations to grand productions, we bring every vision to life
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-[1300px] px-6 md:px-8 mx-auto">
        {services.map((service, i) => (
          <div
            key={service.title}
            ref={(el) => { if (el) cardsRef.current[i] = el; }}
            className="group bg-white rounded-3xl p-10 md:p-12 cursor-pointer transition-all duration-500 hover:-translate-y-3 border border-black/5 hover:border-transparent hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col relative overflow-hidden"
          >
            {/* Icon */}
            <div 
              className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]"
              style={{ 
                backgroundColor: `${service.accent}15`,
                color: service.accent 
              }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-[1.25rem] font-bold text-[#1a1a1a] mb-4 leading-snug">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[0.95rem] leading-[1.8] text-black/55 flex-grow">
              {service.description}
            </p>

            {/* Bottom accent line */}
            <div 
              className="mt-6 h-[3px] w-0 group-hover:w-full rounded-full transition-all duration-700 ease-out"
              style={{ backgroundColor: service.accent }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
