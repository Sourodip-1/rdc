"use client";

import { CreativePricing, type PricingTier } from "@/components/ui/creative-pricing";
import { Sparkles, Star, Trophy, Crown } from "lucide-react";

const sampleTiers: PricingTier[] = [
    {
        name: "Basic Package",
        icon: <Sparkles className="w-6 h-6" />,
        description: "Perfect for intimate gatherings and small celebrations.",
        color: "black",
        features: [
            "Up to 50 Guests",
            "Venue Selection Help",
            "Basic Decor Setup",
            "Standard Catering",
            "4 Hours Coverage",
        ],
    },
    {
        name: "Silver Package",
        icon: <Star className="w-6 h-6" />,
        description: "Elevate your event with premium services and decor.",
        color: "black",
        features: [
            "Up to 150 Guests",
            "Thematic Decor",
            "Premium Catering",
            "Professional Photography",
            "Full Day Coverage",
        ],
    },
    {
        name: "Gold Package",
        icon: <Trophy className="w-6 h-6" />,
        description: "A comprehensive luxury experience for grand events.",
        color: "amber",
        features: [
            "Up to 300 Guests",
            "Designer Floral Setup",
            "Multi-cuisine Buffet",
            "Cinematic Video",
            "Live Entertainment",
        ],
        popular: true,
    },
    {
        name: "Platinum Package",
        icon: <Crown className="w-6 h-6" />,
        description: "The ultimate royal treatment for your most special day.",
        color: "black",
        features: [
            "Unlimited Guests",
            "Royal Stage Design",
            "Gourmet Menu",
            "Drone Photography",
            "Personal Event Concierge",
            "VIP Guest Management",
        ],
    },
];

export function CreativePricingDemo() {
    return (
        <section id="pricing" className="py-10">
            <CreativePricing 
                tag="Our Exclusive Packages"
                title="Royal Event Plans"
                description="Choose the perfect tier for your extraordinary celebration. We handle every detail with royal precision."
                tiers={sampleTiers} 
            />
        </section>
    );
}
