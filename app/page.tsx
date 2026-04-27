"use client";

import { useState } from "react";

import Navbar1 from "@/components/ui/navbar-1";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import FloatingBookButton from "./components/FloatingBookButton";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import VenuesModal from "./components/VenuesModal";
import CaterersModal from "./components/CaterersModal";

const S = {
  maxW: { maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 32px" },
  accent: "#FF6B4A",
  fg: "#0D0D0D",
  bg: "#FDFBF7",
};
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import services from "@/data/services.json";
import caterers from "@/data/caterers.json";

export default function Home() {
  const [isVenuesModalOpen, setIsVenuesModalOpen] = useState(false);
  const [isCaterersModalOpen, setIsCaterersModalOpen] = useState(false);

  return (
    <main style={{ background: S.bg, overflowX: "hidden" }}>
      <Navbar1 />
      <Hero />
      <Carousel />

      <div style={{ background: S.fg }}>
        <div style={{ borderRadius: "0 0 80px 80px", overflow: "hidden", position: "relative", zIndex: 10 }}>
          <ServicesSection />
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

      {/* Scoped background for inverse curve */}
      <div style={{ background: S.fg }}>
        {/* ── Venues ── */}
        <section id="venues" style={{ padding: "120px 32px", background: S.bg, borderRadius: "80px 80px 0 0", position: "relative", zIndex: 10 }}>
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
              {[
                { name: "Grand Ballroom", tag: "Capacity: 800+", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" },
                { name: "Lakeside Garden", tag: "Outdoor Luxury", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" },
                { name: "Skyline Lounge", tag: "City Views", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
              ].map((v, i) => (
                <div key={i} style={{ borderRadius: 28, overflow: "hidden", aspectRatio: "3/4", position: "relative", cursor: "pointer", boxShadow: "0 24px 60px rgba(0,0,0,0.1)" }}>
                  <img src={v.img} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, padding: "32px" }}>
                    <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", color: S.accent, textTransform: "uppercase", marginBottom: 8 }}>{v.tag}</p>
                    <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.5rem", color: "#fff" }}>{v.name}</h3>
                    <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 6, letterSpacing: "0.08em" }}>Explore Venue ↗</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Caterers ── */}
        <section id="caterers" style={{ padding: "0 32px 120px 32px", background: S.bg, position: "relative", zIndex: 10 }}>
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
              {caterers.slice(0, 3).map((c, i) => (
                <div key={i} style={{ borderRadius: 28, overflow: "hidden", aspectRatio: "3/4", position: "relative", cursor: "pointer", boxShadow: "0 24px 60px rgba(0,0,0,0.1)" }}>
                  <img src={c.coverImage} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, padding: "32px" }}>
                    <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", color: S.accent, textTransform: "uppercase", marginBottom: 8 }}>{c.tag}</p>
                    <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.5rem", color: "#fff" }}>{c.name}</h3>
                    <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 6, letterSpacing: "0.08em" }}>Explore Menu ↗</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GallerySection />
        <PricingSection />
      </div>

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
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
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
          <section id="about">
            <AboutSection />
          </section>

          {/* ── Footer ── */}
          <Footer variant="light" />
        </div>
      </div>

      <FloatingBookButton />
      <VenuesModal isOpen={isVenuesModalOpen} onClose={() => setIsVenuesModalOpen(false)} />
      <CaterersModal isOpen={isCaterersModalOpen} onClose={() => setIsCaterersModalOpen(false)} />
    </main>
  );
}
