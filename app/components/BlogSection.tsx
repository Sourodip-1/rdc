"use client";

import { motion } from "framer-motion";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Art of Grand Royal Weddings: A 2026 Trend Report",
    excerpt: "Discover the latest trends in luxury wedding design, from immersive digital floral walls to sustainable royal banquets.",
    category: "Trends",
    date: "April 24, 2026",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Top 5 Venues in London for High-Profile Corporate Galas",
    excerpt: "A curated list of London's most prestigious spaces for your next executive event.",
    category: "Venues",
    date: "April 20, 2026",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Crafting the Perfect Anniversary Surprise",
    excerpt: "How to plan a celebration that tells your unique love story.",
    category: "Planning",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "The Science of Event Lighting: Setting the Royal Mood",
    excerpt: "Techniques we use to transform ordinary spaces into magical realms.",
    category: "Production",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    title: "Memorable Kids Parties: Theme Ideas for 2026",
    excerpt: "From deep-sea adventures to space odysseys, we explore the best themes for little ones.",
    category: "Inspiration",
    date: "April 05, 2026",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop",
    gridClass: "md:col-span-3 md:row-span-1",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" style={{ padding: "120px 32px", background: "#FDFBF7" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            color: "#FF6B4A",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Royal Insights
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
              fontSize: "clamp(36px,5vw,64px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#0D0D0D",
            }}>
              From the <em style={{ fontStyle: "italic", fontWeight: 400, color: "#FF6B4A" }}>Journal</em>
            </h2>
            <motion.button
              whileHover={{ x: 8 }}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#0D0D0D",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              VIEW ALL POSTS <span>→</span>
            </motion.button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6" style={{ height: "auto" }}>
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-[32px] cursor-pointer ${post.gridClass}`}
              style={{ minHeight: 300 }}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-4 mb-4">
                  <span style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 800,
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "#FF6B4A",
                    textTransform: "uppercase",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    padding: "4px 12px",
                    borderRadius: 999,
                  }}>
                    {post.category}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 500,
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.6)",
                    padding: "4px 0",
                  }}>
                    {post.date}
                  </span>
                </div>
                
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: post.gridClass.includes("row-span-2") ? "1.8rem" : "1.2rem",
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>
                  {post.title}
                </h3>
                
                {post.gridClass.includes("row-span-2") && (
                  <p style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    maxHeight: 0,
                    overflow: "hidden",
                    transition: "all 0.5s ease",
                  }} className="group-hover:max-h-40 group-hover:mb-4">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#FF6B4A]">
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
