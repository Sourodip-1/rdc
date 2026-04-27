"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Paintbrush, HeartHandshake, PartyPopper, Users, Star, MapPin } from "lucide-react";

const S = {
  maxW: { maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 32px" },
  accent: "#FF6B4A",
  fg: "#0D0D0D",
  bg: "#FDFBF7",
};

export default function AboutSection() {
  return (
    <section style={{ padding: "120px 0", background: S.fg, position: "relative", overflow: "hidden", zIndex: 5, borderRadius: "0 0 80px 80px" }}>
      {/* Background Text */}
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(100px,18vw,280px)", color: "rgba(255,107,74,0.03)", letterSpacing: "-0.06em", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
        ROYAL
      </div>

      <div style={{ ...S.maxW, position: "relative", zIndex: 1 }}>
        {/* Intro Split Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div style={{ position: "relative", borderRadius: 32, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
              <img
                src="/about.png"
                alt="About Royal Desi Crew"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 40, left: 40, right: 40 }}>
                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 8 }}>Est. 2017</p>
                <p style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.5rem", color: "#fff", lineHeight: 1.3 }}>
                  Based in Asansol, West Bengal
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            {/* <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: S.accent, textTransform: "uppercase", marginBottom: 20 }}>
              About Us
            </p> */}
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: 32 }}>
              We Don&rsquo;t Just Plan Events — We Create <em style={{ fontStyle: "italic", fontWeight: 400, color: S.accent }}>Unforgettable</em> Experiences
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                Royal Desi Crew Event & Entertainment is a prominent event planning and management company. Founded in 2017 by Ravikant Bharti, the firm is known for its grand and aesthetic approach to high-profile celebrations like weddings and corporate events.
              </p>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                At Royal Desi Crew Event & Entertainment, we believe every celebration deserves to be extraordinary. From intimate gatherings to grand productions, we bring your vision to life with a seamless, breathtaking experience.
              </p>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                Founded with a passion for creativity and precision, we have grown into a trusted name in event planning, delivering events that are not just well-executed but deeply memorable.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats / Impact Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, padding: "64px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", marginTop: "120px", marginBottom: "120px" }}>
          {[
            { icon: PartyPopper, value: "500+", label: "Events Delivered" },
            { icon: Users, value: "100+", label: "Happy Clients" },
            { icon: Star, value: "4.9", label: "Average Client Rating" },
            { icon: MapPin, value: "India", label: "Serving Across" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,107,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: S.accent }}>
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>{stat.value}</h4>
                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 8 }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What Makes Us Different */}
        <div style={{ marginBottom: "120px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)", color: "#fff" }}>
              What Makes Us <span style={{ color: S.accent }}>Different</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Sparkles, title: "Tailored for You", desc: "Every event is uniquely designed. No templates, no shortcuts. Your vision leads, we bring it to life." },
              { icon: CheckCircle2, title: "End-to-End Execution", desc: "From concept to completion, we handle every detail so you can enjoy your event stress-free." },
              { icon: Paintbrush, title: "Creative Excellence", desc: "From luxury weddings to corporate events, we blend design, technology, and storytelling to create impactful experiences." },
              { icon: HeartHandshake, title: "Trusted by Clients", desc: "Our growing list of happy clients and successful events reflects our commitment to quality and reliability." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: "40px 32px", transition: "all 0.3s" }}
                className="group hover:bg-white/5 hover:border-white/10"
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,107,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: S.accent, marginBottom: 24 }} className="group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h4 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.4rem", color: "#fff", marginBottom: 16 }}>{feature.title}</h4>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Journey Redesign */}
        <div className="relative border-t border-white/5" style={{ paddingTop: "120px", marginTop: "40px" }}>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(40px, 5vw, 64px)", color: "#fff", lineHeight: 1 }}>
                Our <span style={{ color: S.accent }}>Journey</span>
              </h3>
              <div style={{ width: 80, height: 4, background: S.accent, marginTop: 32 }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-12"
            >
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                What started as a passion for creating beautiful celebrations has evolved into a full-service event experience brand. Over the years, we&rsquo;ve successfully executed a wide range of events like weddings, corporate gatherings, private parties, and large-scale productions.
              </p>

              <div style={{ position: "relative", padding: "64px 48px", borderRadius: 32, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
                {/* Decorative Quote Mark */}
                <span style={{ position: "absolute", top: -20, right: 40, fontSize: 160, fontFamily: "serif", color: "rgba(255,255,255,0.03)", userSelect: "none" }}>
                  &ldquo;
                </span>

                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.8rem", color: S.accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
                  Our Mission
                </p>
                <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 900, fontStyle: "italic", color: "#fff", lineHeight: 1.3 }}>
                  To create moments that people remember for a lifetime.
                </h4>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
