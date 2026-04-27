"use client";

import { useEffect, useRef, useState } from "react";

/* ==============================
   FLOATING PARTICLES — CSS-only
   ============================== */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${seededRandom(i * 7 + 1) * 100}%`,
    size: seededRandom(i * 7 + 2) * 3 + 1,
    duration: seededRandom(i * 7 + 3) * 20 + 15,
    delay: seededRandom(i * 7 + 4) * 20,
    opacity: seededRandom(i * 7 + 5) * 0.4 + 0.1,
    reverse: i % 3 === 0,
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: `-${p.size * 2}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `oklch(0.72 0.19 150 / ${p.opacity})`,
            animation: `${p.reverse ? 'float-particle-reverse' : 'float-particle'} ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

/* ==============================
   ANIMATED BACKGROUND
   ============================== */
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

      {/* Gradient orbs — larger and more visible */}
      <div
        className="absolute -top-20 -right-20 h-[700px] w-[700px] rounded-full animate-drift"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 150 / 12%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[800px] w-[800px] rounded-full animate-drift"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.15 170 / 10%) 0%, transparent 70%)",
          animationDelay: "-7s",
          animationDuration: "25s",
        }}
      />
      <div
        className="absolute -bottom-20 right-1/4 h-[600px] w-[600px] rounded-full animate-drift"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 150 / 8%) 0%, transparent 70%)",
          animationDelay: "-14s",
          animationDuration: "30s",
        }}
      />
      {/* Extra orb for depth */}
      <div
        className="absolute top-2/3 right-0 h-[500px] w-[500px] rounded-full animate-drift"
        style={{
          background:
            "radial-gradient(circle, oklch(0.60 0.17 155 / 6%) 0%, transparent 70%)",
          animationDelay: "-10s",
          animationDuration: "22s",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.13 0.01 240 / 60%) 100%)",
        }}
      />
    </div>
  );
}

/* ==============================
   SCROLL-TRIGGERED ANIMATION
   ============================== */
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
