"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Royal Desi Crew turned our wedding into a fairy tale. The attention to detail was beyond anything we imagined.",
    by: "Priya & Rohan, Wedding Couple",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "The corporate gala was flawless. Professional, punctual, and highly creative. Truly the best in the business.",
    by: "David Chen, CEO at NexusCorp",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "Our anniversary party was spectacular. The decor, the food, the vibe—everything was just perfect.",
    by: "Sarah & Mark, Anniversary Celebration",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "Exceeded all expectations. They took our vision and made it even more grand. Highly recommended!",
    by: "Anita Desai, Event Planner",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "From the first meeting to the final celebration, the experience was seamless and truly royal.",
    by: "Kabir Singh, Entrepreneur",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "The most stress-free event I've ever hosted. They handled everything with such grace and precision.",
    by: "Elena Rodriguez, Socialite",
    imgSrc: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Simply breathtaking. The floral arrangements and the lighting design were out of this world.",
    by: "Zoya Khan, Fashion Designer",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#FF6B4A] text-white border-[6px] border-white shadow-2xl" 
          : "z-0 bg-white text-[#0D0D0D] border-[3px] border-[#0D0D0D]/10 hover:border-[#FF6B4A]/30"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.25) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(0,0,0,0.05)" : "0px 0px 0px 0px transparent"
      }}
    >
      <div className="relative w-full h-full flex flex-col" style={{ padding: '50px' }}>
        <span
          className="absolute block origin-top-right rotate-45 bg-[#0D0D0D]/10"
          style={{
            right: -2,
            top: 48,
            width: SQRT_5000,
            height: 2
          }}
        />
        <div className="flex flex-col h-full gap-8">
          <img
            src={testimonial.imgSrc}
            alt={`${testimonial.by.split(',')[0]}`}
            className="h-14 w-12 bg-gray-100 object-cover object-top rounded-sm"
            style={{
              boxShadow: "3px 3px 0px white"
            }}
          />
          <h3 className={cn(
            "text-base sm:text-xl font-medium font-playfair leading-tight",
            isCenter ? "text-white" : "text-[#0D0D0D]"
          )}>
            "{testimonial.testimonial}"
          </h3>
          <p className={cn(
            "absolute mt-2 text-sm italic font-montserrat",
            isCenter ? "text-white/80" : "text-gray-500"
          )}
          style={{ bottom: '50px', left: '50px', right: '50px' }}
          >
            - {testimonial.by}
          </p>
        </div>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#FDFBF7]"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length - 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all",
            "bg-white border-2 border-gray-200 text-[#0D0D0D] hover:bg-[#FF6B4A] hover:text-white hover:border-[#FF6B4A]",
            "rounded-full shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all",
            "bg-white border-2 border-gray-200 text-[#0D0D0D] hover:bg-[#FF6B4A] hover:text-white hover:border-[#FF6B4A]",
            "rounded-full shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
