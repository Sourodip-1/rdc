"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface ImageRevealProps {
    leftImage: string;
    middleImage: string;
    rightImage: string;
    categoryName: string;
    onClick?: () => void;
}

export default function ImageReveal({ leftImage, middleImage, rightImage, categoryName, onClick }: ImageRevealProps) {
    const containerVariants: Variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.1,
                staggerChildren: 0.1,
            }
        }
    };

    const leftImageVariants: Variants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: -8,
            x: -120,
            y: 10,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        },
        hover: {
            rotate: -12,
            x: -140,
            y: 5,
            scale: 1.05,
            transition: { type: "spring", stiffness: 200, damping: 15 }
        }
    };

    const middleImageVariants: Variants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: 4,
            x: 0,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        },
        hover: {
            rotate: 0,
            x: 0,
            y: -15,
            scale: 1.1,
            transition: { type: "spring", stiffness: 200, damping: 15 }
        }
    };

    const rightImageVariants: Variants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: -4,
            x: 120,
            y: 20,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        },
        hover: {
            rotate: 6,
            x: 140,
            y: 10,
            scale: 1.05,
            transition: { type: "spring", stiffness: 200, damping: 15 }
        }
    };

    return (
        <motion.div
            style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 300, height: 300, cursor: "pointer" }}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover="hover"
            onClick={onClick}
        >
            {/* Left Image */}
            <motion.div
                variants={leftImageVariants}
                style={{ position: "absolute", width: 220, height: 280, transformOrigin: "bottom right", zIndex: 10, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", background: "#fff", padding: 8 }}
            >
                <img src={leftImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
            </motion.div>

            {/* Right Image */}
            <motion.div
                variants={rightImageVariants}
                style={{ position: "absolute", width: 220, height: 280, transformOrigin: "bottom right", zIndex: 20, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", background: "#fff", padding: 8 }}
            >
                <img src={rightImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
            </motion.div>
            
            {/* Middle Image - Highest z-index */}
            <motion.div
                variants={middleImageVariants}
                style={{ position: "absolute", width: 240, height: 320, transformOrigin: "bottom left", zIndex: 30, borderRadius: 24, overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.2)", background: "#fff", padding: 8 }}
            >
                <img src={middleImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
                
                {/* Overlay Text inside Middle Image */}
                <div style={{ position: "absolute", inset: 8, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)", borderRadius: 16, display: "flex", alignItems: "flex-end", padding: 24 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.4rem", color: "#fff", lineHeight: 1.2 }}>
                        {categoryName}
                    </h3>
                </div>
            </motion.div>
        </motion.div>
    );
}
