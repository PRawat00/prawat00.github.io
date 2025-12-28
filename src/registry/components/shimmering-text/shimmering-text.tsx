"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ShimmeringTextProps {
  children: ReactNode;
  duration?: number;
  shimmerWidth?: number;
  shimmerColor?: string;
}

export function ShimmeringText({
  children,
  duration = 2,
  shimmerWidth = 100,
  shimmerColor = "rgba(255, 255, 255, 0.4)",
}: ShimmeringTextProps) {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          transparent 0%,
          ${shimmerColor} 50%,
          transparent 100%
        )`,
        backgroundSize: `${shimmerWidth}% 100%`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </motion.div>
  );
}
