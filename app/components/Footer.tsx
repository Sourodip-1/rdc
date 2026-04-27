"use client";

import React from "react";

const S = {
  maxW: { maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 32px" },
  accent: "#FF6B4A",
  fg: "#0D0D0D",
};

interface FooterProps {
  variant?: "dark" | "light";
}

export default function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";
  const bg = isLight ? "#FDFBF7" : S.fg;
  const textColor = isLight ? "#0D0D0D" : "rgba(255,255,255,0.45)";
  const subTextColor = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)";
  const borderColor = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)";

  return (
    <footer style={{ 
      padding: "120px 32px 40px", 
      background: bg, 
      marginTop: "0", 
      position: "relative", 
      zIndex: 1,
      boxShadow: isLight ? "0 -20px 60px rgba(0,0,0,0.05)" : "none"
    }}>
      <div style={{ ...S.maxW, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 48, marginBottom: 64 }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{ marginBottom: 20 }}>
            <img
              src="/image.png"
              alt="Royal Desi Crew"
              style={{ height: "75px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: textColor, lineHeight: 1.8 }}>
            The premier destination for luxury event management and royal desi experiences.
          </p>
        </div>
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          {[
            { title: "Contact", items: ["hello@royaldesicrew.com", "+1 (234) 567-890"] },
            { title: "Follow", items: ["Instagram", "Facebook", "YouTube"] },
            { title: "Company", items: ["Services", "Our Work", "About Us"] },
          ].map(col => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h4 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: S.accent }}>{col.title}</h4>
              {col.items.map(item => (
                <p key={item} style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: textColor, cursor: "pointer", transition: "color 0.2s" }}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ ...S.maxW, paddingTop: 32, borderTop: `1px solid ${borderColor}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", color: subTextColor }}>© 2026 Royal Desi Crew Event & Entertainment. ALL RIGHTS RESERVED.</p>
        <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", color: subTextColor }}>DESIGNED IN INDIA</p>
      </div>
    </footer>
  );
}
