"use client";

import { useState } from "react";
import Navbar1 from "@/components/ui/navbar-1";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import FloatingBookButton from "./components/FloatingBookButton";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import VenuesModal from "./components/VenuesModal";
import CaterersModal from "./components/CaterersModal";
import ArtistsModal from "./components/ArtistsModal";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import CheckoutBar from "./components/CheckoutBar";
import services from "@/data/services.json";

const S = {
  maxW: { maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 32px" },
  accent: "#FF6B4A",
  fg: "#0D0D0D",
  bg: "#FDFBF7",
};

const venues = [
  { id: "royal-palace", name: "The Royal Palace", tag: "Regal Elegance", coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" },
  { id: "crystal-ballroom", name: "Crystal Ballroom", tag: "Modern Luxury", coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" },
  { id: "garden-oasis", name: "Garden Oasis", tag: "Nature Inspired", coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" },
];

const caterers = [
  { id: "grand-feast", name: "The Grand Feast", tag: "Fine Dining", coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" },
  { id: "spice-route", name: "Spice Route", tag: "Traditional", coverImage: "https://images.unsplash.com/photo-1547928576-a4a33237eceb?q=80&w=1780&auto=format&fit=crop" },
  { id: "modern-bites", name: "Modern Bites", tag: "Fusion", coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" },
];

const artists = [
  { id: "symphony-strings", name: "Symphony Strings", tag: "Live Orchestra", img: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=2070&auto=format&fit=crop" },
  { id: "dj-maverick", name: "DJ Maverick", tag: "Elite Entertainment", img: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=2076&auto=format&fit=crop" },
  { id: "royal-sufi-troupe", name: "Royal Sufi Troupe", tag: "Traditional Excellence", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop" },
];

export default function Home() {
  const [isVenuesModalOpen, setIsVenuesModalOpen] = useState(false);
  const [isCaterersModalOpen, setIsCaterersModalOpen] = useState(false);
  const [isArtistsModalOpen, setIsArtistsModalOpen] = useState(false);

  const [selections, setSelections] = useState({
    service: "",
    venue: "",
    caterer: "",
    artist: "",
    pkg: ""
  });

  const updateSelection = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const clearSelection = (key: string) => {
    setSelections(prev => ({ ...prev, [key]: "" }));
  };

  return (
    <main style={{ background: S.bg, overflowX: "hidden" }}>
      <Navbar1 />
      <Hero />
      <Carousel />

      <div style={{ background: S.fg }}>
        <div style={{ borderRadius: "0 0 80px 80px", overflow: "hidden", position: "relative", zIndex: 10 }}>
          <ServicesSection 
            onSelect={(id) => updateSelection("service", id)} 
            selectedId={selections.service} 
          />
        </div>
      </div>

      {/* ── Philosophy ── */}
      <section style={{ padding: "120px 32px", background: S.fg, position: "relative", overflow: "hidden", zIndex: 5 }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(100px,18vw,280px)", color: "rgba(255,107,74,0.06)", letterSpacing: "-0.06em", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
          DESI
        </div>
        <div style={{ ...S.maxW, textAlign: "center", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 24 }}>
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(36px,5.5vw,72px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff", marginBottom: 40 }}>
            Why Choose<em style={{ fontStyle: "italic", fontWeight: 400, color: S.accent }}> Royal</em> Desi Crew ?
          </h2>
          <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 300, fontSize: "clamp(16px,1.8vw,22px)", color: "rgba(255,255,255,0.65)", maxWidth: 760, margin: "0 auto 48px", lineHeight: 1.8 }}>
            &ldquo;We’re not just an event company—we’re the team that brings your vision to life.&rdquo;
          </p>
          <div style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1.2rem", color: S.accent }}>— Royal Desi Crew Event & Entertainment.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 80 }}>
            {[
              { icon: "✦", title: "Vision", desc: "Every detail is curated with purpose and intention." },
              { icon: "◈", title: "Precision", desc: "Flawless execution, from concept to celebration." },
              { icon: "❋", title: "Legacy", desc: "Creating memories that last a lifetime and beyond." },
            ].map(c => (
              <div key={c.title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 40, textAlign: "left" }}>
                <div style={{ fontSize: "1.5rem", color: S.accent, marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.3rem", color: "#fff", marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <div style={{ background: S.fg, position: "relative", zIndex: 50 }}>
        <div style={{ background: S.bg, borderRadius: "80px 80px 0 0", overflow: "hidden" }}>
          <GallerySection />
        </div>
      </div>

      {/* Scoped background for inverse curve */}
      <div style={{ background: S.fg }}>
        {/* ── Venues ── */}
        <section id="venues" style={{ padding: "120px 32px", background: S.bg, position: "relative", zIndex: 1 }}>
          <div style={S.maxW}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, marginBottom: 72 }}>
              <div>
                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 20 }}>Handpicked Spaces</p>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(40px,5vw,68px)", letterSpacing: "-0.03em", color: S.fg, lineHeight: 1 }}>Our <em style={{ fontStyle: "italic", color: S.accent }}>Venues</em></h2>
              </div>
              <button 
                onClick={() => setIsVenuesModalOpen(true)}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: S.fg,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 0 8px 0",
                }}
              >
                VIEW ALL VENUES <span>→</span>
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {venues.map((v, i) => {
                const isSelected = selections.venue === v.id;
                return (
                  <div 
                    key={i} 
                    onClick={() => updateSelection("venue", v.id)}
                    style={{ 
                      borderRadius: 28, 
                      overflow: "hidden", 
                      aspectRatio: "3/4", 
                      position: "relative", 
                      cursor: "pointer", 
                      boxShadow: isSelected ? `0 24px 60px rgba(255,107,74,0.4)` : "0 24px 60px rgba(0,0,0,0.1)",
                      border: isSelected ? `4px solid ${S.accent}` : "none",
                      transition: "all 0.4s ease"
                    }}
                  >
                    <img src={v.coverImage} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position: "absolute", inset: 0, background: isSelected ? "rgba(255,107,74,0.3)" : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                    {isSelected && <div style={{ position: "absolute", top: 20, right: 20, background: S.accent, color: "#fff", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>}
                    <div style={{ position: "absolute", bottom: 0, left: 0, padding: "32px" }}>
                      <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", color: S.accent, textTransform: "uppercase", marginBottom: 8 }}>{v.tag}</p>
                      <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.5rem", color: "#fff" }}>{v.name}</h3>
                      <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 6, letterSpacing: "0.08em" }}>{isSelected ? "Selected ✓" : "Choose Venue ↗"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Caterers ── */}
        <section id="caterers" style={{ padding: "0 32px 120px 32px", background: S.bg, position: "relative", zIndex: 1 }}>
          <div style={S.maxW}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, marginBottom: 72 }}>
              <div>
                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 20 }}>Culinary Excellence</p>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(40px,5vw,68px)", letterSpacing: "-0.03em", color: S.fg, lineHeight: 1 }}>Our <em style={{ fontStyle: "italic", color: S.accent }}>Caterers</em></h2>
              </div>
              <button 
                onClick={() => setIsCaterersModalOpen(true)}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: S.fg,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 0 8px 0",
                }}
              >
                VIEW ALL CATERERS <span>→</span>
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {caterers.map((c, i) => {
                const isSelected = selections.caterer === c.id;
                return (
                  <div 
                    key={i} 
                    onClick={() => updateSelection("caterer", c.id)}
                    style={{ 
                      borderRadius: 28, 
                      overflow: "hidden", 
                      aspectRatio: "3/4", 
                      position: "relative", 
                      cursor: "pointer", 
                      boxShadow: isSelected ? `0 24px 60px rgba(255,107,74,0.4)` : "0 24px 60px rgba(0,0,0,0.1)",
                      border: isSelected ? `4px solid ${S.accent}` : "none",
                      transition: "all 0.4s ease"
                    }}
                  >
                    <img src={c.coverImage} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position: "absolute", inset: 0, background: isSelected ? "rgba(255,107,74,0.3)" : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                    {isSelected && <div style={{ position: "absolute", top: 20, right: 20, background: S.accent, color: "#fff", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>}
                    <div style={{ position: "absolute", bottom: 0, left: 0, padding: "32px" }}>
                      <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", color: S.accent, textTransform: "uppercase", marginBottom: 8 }}>{c.tag}</p>
                      <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.5rem", color: "#fff" }}>{c.name}</h3>
                      <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 6, letterSpacing: "0.08em" }}>{isSelected ? "Selected ✓" : "Explore Menu ↗"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Artists ── */}
        <section id="artists" style={{ padding: "0 32px 120px 32px", background: S.bg, position: "relative", zIndex: 1 }}>
          <div style={S.maxW}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, marginBottom: 72 }}>
              <div>
                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 20 }}>Elite Performers</p>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(40px,5vw,68px)", letterSpacing: "-0.03em", color: S.fg, lineHeight: 1 }}>Our <em style={{ fontStyle: "italic", color: S.accent }}>Artists</em></h2>
              </div>
              <button 
                onClick={() => setIsArtistsModalOpen(true)}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: S.fg,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 0 8px 0",
                }}
              >
                VIEW ALL ARTISTS <span>→</span>
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {artists.map((a, i) => {
                const isSelected = selections.artist === a.id;
                return (
                  <div 
                    key={i} 
                    onClick={() => updateSelection("artist", a.id)}
                    style={{ 
                      borderRadius: 28, 
                      overflow: "hidden", 
                      aspectRatio: "3/4", 
                      position: "relative", 
                      cursor: "pointer", 
                      boxShadow: isSelected ? `0 24px 60px rgba(255,107,74,0.4)` : "0 24px 60px rgba(0,0,0,0.1)",
                      border: isSelected ? `4px solid ${S.accent}` : "none",
                      transition: "all 0.4s ease"
                    }}
                  >
                    <img src={a.img} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position: "absolute", inset: 0, background: isSelected ? "rgba(255,107,74,0.3)" : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                    {isSelected && <div style={{ position: "absolute", top: 20, right: 20, background: S.accent, color: "#fff", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>}
                    <div style={{ position: "absolute", bottom: 0, left: 0, padding: "32px" }}>
                      <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", color: S.accent, textTransform: "uppercase", marginBottom: 8 }}>{a.tag}</p>
                      <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.5rem", color: "#fff" }}>{a.name}</h3>
                      <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 6, letterSpacing: "0.08em" }}>{isSelected ? "Selected ✓" : "Explore Talent ↗"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <PricingSection 
          onSelect={(id) => updateSelection("pkg", id)} 
          selectedId={selections.pkg} 
        />
      </div>

      <CheckoutBar selections={selections} clearSelection={clearSelection} />


      {/* Scoped Dark Background for Inverse Rounding transition */}
      <div style={{ background: S.fg }}>
        {/* ── Contact ── */}
        <section id="contact" style={{ padding: "120px 32px", background: "#fff", position: "relative", zIndex: 10 }}>
          <div style={{ ...S.maxW, maxWidth: 760 }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 24 }}>Get In Touch</p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.03em", color: S.fg, lineHeight: 1.05, marginBottom: 20 }}>
                Start Your <em style={{ fontStyle: "italic", fontWeight: 400, color: S.accent }}>Journey</em>
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "1rem", color: "rgba(13,13,13,0.5)", lineHeight: 1.75 }}>
                Tell us about your dream event, and let&apos;s make it a royal reality.
              </p>
            </div>
            <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, background: S.bg, padding: 48, borderRadius: 32, boxShadow: "0 32px 80px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}>
              {[
                { id: "name", label: "Full Name", placeholder: "John Doe", type: "text", col: 1 },
                { id: "email", label: "Email Address", placeholder: "john@example.com", type: "email", col: 1 },
                { id: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel", col: 1 },
              ].map(f => (
                <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label htmlFor={f.id} style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(13,13,13,0.45)" }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder}
                    style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1.5px solid rgba(0,0,0,0.09)", background: "#fff", fontFamily: "var(--font-montserrat)", fontSize: "0.95rem", color: S.fg, outline: "none", transition: "border-color 0.2s" }}
                    onFocus={e => (e.currentTarget.style.borderColor = S.accent)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)")}
                  />
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="event" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(13,13,13,0.45)" }}>Select Your Event</label>
                <select id="event" defaultValue=""
                  style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1.5px solid rgba(0,0,0,0.09)", background: "#fff", fontFamily: "var(--font-montserrat)", fontSize: "0.95rem", color: S.fg, outline: "none", transition: "border-color 0.2s" }}
                  onFocus={e => (e.currentTarget.style.borderColor = S.accent)}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)")}
                >
                  <option value="" disabled>Choose an event type...</option>
                  {services.map((s: any) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="message" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(13,13,13,0.45)" }}>Your Vision</label>
                <textarea id="message" placeholder="Describe your event..." rows={5}
                  style={{ width: "100%", padding: "16px 20px", borderRadius: 16, border: "1.5px solid rgba(0,0,0,0.09)", background: "#fff", fontFamily: "var(--font-montserrat)", fontSize: "0.95rem", color: S.fg, outline: "none", resize: "none", transition: "border-color 0.2s" }}
                  onFocus={e => (e.currentTarget.style.borderColor = S.accent)}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)")}
                />
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <button type="submit"
                  style={{ width: "100%", padding: "18px", background: S.fg, color: "#fff", border: "none", borderRadius: 9999, fontFamily: "var(--font-montserrat)", fontWeight: 800, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
                  onMouseEnter={e => { const b = e.currentTarget; b.style.background = S.accent; b.style.boxShadow = "0 12px 40px rgba(255,107,74,0.4)"; }}
                  onMouseLeave={e => { const b = e.currentTarget; b.style.background = S.fg; b.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)"; }}
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section style={{ padding: "120px 0 0 0", background: S.bg, borderRadius: "0 0 80px 80px", overflow: "hidden" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 20 }}>Voices of Royalty</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.03em", color: S.fg, lineHeight: 1 }}>Client Appreciations</h2>
          </div>
          <StaggerTestimonials />
        </section>

        {/* ── About Us & Footer Wrapper for Inverse Curve ── */}
        <div style={{ background: S.fg }}>
          <AboutSection />
          {/* ── Footer ── */}
          <Footer variant="light" />
        </div>
      </div>

      <FloatingBookButton />
      <VenuesModal isOpen={isVenuesModalOpen} onClose={() => setIsVenuesModalOpen(false)} />
      <CaterersModal isOpen={isCaterersModalOpen} onClose={() => setIsCaterersModalOpen(false)} />
      <ArtistsModal isOpen={isArtistsModalOpen} onClose={() => setIsArtistsModalOpen(false)} />
    </main>
  );
}
