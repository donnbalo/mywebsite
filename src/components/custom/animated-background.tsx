"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.72 0.19 150 / 30%) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.72 0.19 150 / 30%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 150 / 8%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.15 170 / 6%) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 150 / 5%) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}

// Scroll-triggered animation wrapper
export function FadeInOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
