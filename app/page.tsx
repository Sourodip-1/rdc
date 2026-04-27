import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ServicesSection from "./components/ServicesSection";
import { HeroGalleryDemo } from "@/components/blocks/HeroGalleryDemo";
import { CreativePricingDemo } from "@/components/CreativePricingDemo";
import FloatingBookButton from "./components/FloatingBookButton";
import Navbar1 from "@/components/ui/navbar-1";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar1 />

      
      <Hero />
      
      <Carousel />

      <ServicesSection />

      <HeroGalleryDemo />

      <CreativePricingDemo />

      {/* Philosophy Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-premium font-bold mb-12">The <span className="text-accent">Royal</span> Philosophy</h2>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed opacity-80">
            "We believe that every celebration is a story waiting to be told. Our mission is to write those stories with gold, elegance, and soul."
          </p>
          <div className="mt-16 text-accent font-premium text-2xl italic">— Royal Desi Crew</div>
        </div>
      </section>

      {/* Venus / Venues Preview */}
      <section className="py-32 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-premium font-bold mb-4">Our Venus</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Grand Ballroom", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" },
            { name: "Lakeside Garden", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" },
            { name: "Skyline Lounge", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" }
          ].map((venue, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
              <img src={venue.img} alt={venue.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-premium text-white">{venue.name}</h3>
                <p className="text-accent font-medium mt-2">Explore Venue</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-[#FDFBF7]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-premium font-bold mb-6">Start Your <span className="text-accent italic">Journey</span></h2>
            <p className="text-lg text-foreground/60">Tell us about your dream event, and let's make it a royal reality.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-border/30">
            <div className="space-y-3">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Full Name</label>
              <input 
                id="name"
                placeholder="John Doe" 
                className="w-full px-6 py-4 rounded-2xl bg-muted/30 border-border/50 focus:border-accent outline-none transition-all"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Email Address</label>
              <input 
                id="email"
                type="email"
                placeholder="john@example.com" 
                className="w-full px-6 py-4 rounded-2xl bg-muted/30 border-border/50 focus:border-accent outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Your Vision</label>
              <textarea 
                id="message"
                placeholder="Describe your event..." 
                className="w-full px-6 py-4 rounded-2xl bg-muted/30 border-border/50 focus:border-accent outline-none transition-all min-h-[150px] resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full py-5 bg-accent text-white rounded-full font-black tracking-[0.2em] uppercase hover:bg-foreground transition-all duration-500 shadow-xl shadow-accent/20">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-20 border-t border-border px-6">

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
             <span className="text-2xl font-premium font-bold text-foreground">
              ROYAL <span className="text-accent">DESI</span> CREW
            </span>
            <p className="mt-4 text-foreground/50 max-w-sm">
              The premier destination for luxury event management and royal desi experiences.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Contact</h4>
              <p className="text-sm">hello@royaldesicrew.com</p>
              <p className="text-sm">+1 (234) 567-890</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Follow</h4>
              <p className="text-sm">Instagram</p>
              <p className="text-sm">Facebook</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-10 border-t border-border flex justify-between items-center text-xs text-foreground/40">
          <p>© 2026 ROYAL DESI CREW. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY ANTIGRAVITY</p>
        </div>
      </footer>

      <FloatingBookButton />
    </main>
  );
}
