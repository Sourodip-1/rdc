"use client";

import React from "react";
import Navbar1 from "@/components/ui/navbar-1";
import Footer from "@/app/components/Footer";
import FloatingBookButton from "@/app/components/FloatingBookButton";
import BlogSection from "@/app/components/BlogSection";

const S = {
  bg: "#FDFBF7",
};

export default function BlogPage() {
  return (
    <main style={{ background: S.bg, minHeight: "100vh", overflowX: "hidden", display: "flex", flexDirection: "column" }}>
      <Navbar1 />
      
      {/* Page Header Spacer */}
      <div style={{ height: "140px", background: "#FDFBF7" }} />

      {/* Main Content & Footer Transition */}
      <div style={{ background: "#0D0D0D" }}>
        <div style={{ background: S.bg, borderRadius: "0 0 80px 80px", overflow: "hidden" }}>
          <BlogSection />
        </div>
        <Footer />
      </div>
      <FloatingBookButton />
    </main>
  );
}
