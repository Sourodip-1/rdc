"use client"

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/blocks/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
]

export function HeroGalleryDemo() {
  return (
    <div id="our-work" className="relative">
      <ContainerScroll className="h-[300vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-6 gap-6">
          {IMAGES.map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-2xl shadow-2xl border border-white/10"
            >
              <img
                className="size-full object-cover object-center brightness-[0.85] group-hover:brightness-100 transition-all duration-500"
                src={imageUrl}
                alt={`Royal Desi Crew event ${index + 1}`}
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale className="relative z-50 text-center px-4">
          <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl">
            <h2 className="max-w-2xl text-5xl md:text-7xl font-premium font-black tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] mb-6">
              Our <span className="text-[#D4A853] italic">Royal</span> Gallery
            </h2>
            <p className="my-8 max-w-xl mx-auto text-base md:text-lg text-white/90 font-medium drop-shadow-md">
              A glimpse into the extraordinary events we craft — from breathtaking weddings to spectacular celebrations.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Button className="bg-[#D4A853] px-10 py-6 text-lg font-bold text-white hover:bg-[#c49a45] rounded-full shadow-xl transition-all hover:scale-105 active:scale-95">
                Explore Work
              </Button>
              <Button
                variant="ghost"
                className="text-white text-lg font-medium hover:bg-white/10 px-8 py-6 rounded-full"
              >
                Learn more
              </Button>
            </div>
          </div>
        </ContainerScale>
      </ContainerScroll>
    </div>
  )
}
