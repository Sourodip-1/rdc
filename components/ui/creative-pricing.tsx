import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Exclusive Packages",
    title = "Luxury Event Management",
    description = "Tailored experiences for your most royal moments",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full flex flex-col items-center justify-center py-24">
            {/* Heading */}
            <div className="text-center mb-16 max-w-[800px] px-6">
                <div className="font-bold tracking-[0.2em] uppercase text-sm mb-4" style={{ color: "#D4A853" }}>
                    {tag}
                </div>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-premium font-black text-[#1a1a1a] mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-lg text-black/50 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-[1300px] px-6 md:px-8 mx-auto">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1.5deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-1deg]",
                            index === 3 && "rotate-[1.5deg]"
                        )}
                    >
                        {/* Shadow layer */}
                        <div
                            className={cn(
                                "absolute inset-0 bg-white border-2 border-[#1a1a1a] rounded-xl",
                                "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
                                "transition-all duration-300",
                                "group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-8 flex flex-col h-full">
                            {tier.popular && (
                                <div
                                    className="absolute -top-3 -right-3 bg-amber-400 text-black 
                                    font-bold px-4 py-1.5 rounded-full rotate-12 text-xs border-2 border-black z-20 shadow-lg"
                                >
                                    Popular!
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-full mb-6 flex items-center justify-center border-2 border-[#1a1a1a]"
                                style={{ color: "#D4A853" }}
                            >
                                {tier.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-[1.4rem] font-bold text-[#1a1a1a] mb-2">
                                {tier.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-black/50 leading-relaxed mb-8">
                                {tier.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-[0.95rem] font-medium text-black/75">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <Button
                                className={cn(
                                    "w-full h-14 text-sm font-bold relative uppercase rounded-lg",
                                    "border-2 border-[#1a1a1a] transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                                    "hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? "bg-amber-400 text-black hover:bg-amber-300"
                                        : "bg-white text-[#1a1a1a] hover:bg-gray-50"
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier }
