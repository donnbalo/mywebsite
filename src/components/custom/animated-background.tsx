"use client";

import { useEffect, useRef, useState } from "react";

/* ==============================
   CIRCUIT TRACES — Edge-mounted
   Curved PCB-style traces along
   left and right viewport edges.
   ============================== */

// Each trace: path, animation speed, delay, base opacity
interface Trace {
  d: string;
  dur: number;
  delay: number;
  op: number;
}

// Circle nodes at trace endpoints / junctions
interface Node {
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

// ── LEFT-SIDE traces (enter from left edge, extend rightward with S-curves) ──
const leftTraces: Trace[] = [
  // Top cluster
  { d: "M -5 60 L 40 60 L 60 80 L 160 80", dur: 24, delay: 0, op: 0.16 },
  { d: "M -5 110 L 60 110 L 90 140 L 200 140 L 220 120 L 300 120", dur: 30, delay: 2, op: 0.14 },
  { d: "M -5 170 L 30 170 L 60 200 L 130 200", dur: 22, delay: 5, op: 0.12 },

  // Mid cluster
  { d: "M -5 300 L 50 300 L 80 330 L 180 330 L 210 300 L 280 300", dur: 28, delay: 1, op: 0.15 },
  { d: "M -5 360 L 80 360 L 110 390 L 220 390", dur: 26, delay: 4, op: 0.12 },
  { d: "M -5 420 L 40 420 L 70 450 L 150 450 L 180 420 L 260 420", dur: 32, delay: 7, op: 0.10 },

  // Bottom cluster
  { d: "M -5 560 L 70 560 L 100 590 L 200 590", dur: 25, delay: 3, op: 0.14 },
  { d: "M -5 640 L 50 640 L 80 670 L 170 670 L 200 640 L 300 640", dur: 30, delay: 6, op: 0.12 },
  { d: "M -5 720 L 90 720 L 120 750 L 230 750", dur: 22, delay: 9, op: 0.11 },
  { d: "M -5 800 L 40 800 L 70 830 L 160 830", dur: 28, delay: 1.5, op: 0.14 },
  { d: "M -5 870 L 60 870 L 90 840 L 180 840 L 210 870 L 280 870", dur: 34, delay: 8, op: 0.09 },
];

// ── RIGHT-SIDE traces (enter from right edge, extend leftward with S-curves) ──
const rightTraces: Trace[] = [
  // Top cluster
  { d: "M 1005 80 L 960 80 L 930 50 L 830 50", dur: 26, delay: 1, op: 0.15 },
  { d: "M 1005 140 L 940 140 L 910 170 L 800 170 L 770 140 L 700 140", dur: 30, delay: 3, op: 0.14 },
  { d: "M 1005 210 L 950 210 L 920 240 L 840 240", dur: 24, delay: 6, op: 0.12 },

  // Mid cluster
  { d: "M 1005 340 L 930 340 L 900 370 L 790 370 L 760 340 L 690 340", dur: 28, delay: 2, op: 0.15 },
  { d: "M 1005 400 L 960 400 L 930 430 L 830 430", dur: 22, delay: 5, op: 0.12 },
  { d: "M 1005 470 L 940 470 L 910 440 L 810 440 L 780 470 L 720 470", dur: 32, delay: 8, op: 0.10 },

  // Bottom cluster
  { d: "M 1005 580 L 950 580 L 920 610 L 810 610", dur: 26, delay: 0, op: 0.14 },
  { d: "M 1005 660 L 930 660 L 900 690 L 800 690 L 770 660 L 700 660", dur: 30, delay: 4, op: 0.12 },
  { d: "M 1005 740 L 960 740 L 930 770 L 830 770", dur: 24, delay: 7, op: 0.11 },
  { d: "M 1005 820 L 940 820 L 910 790 L 820 790 L 790 820 L 720 820", dur: 28, delay: 2.5, op: 0.14 },
  { d: "M 1005 890 L 960 890 L 930 860 L 840 860", dur: 34, delay: 9, op: 0.09 },
];

// ── NODES (circle endpoints) ──
const leftNodes: Node[] = [
  { cx: 160, cy: 80, r: 2.5, delay: 0 },
  { cx: 300, cy: 120, r: 2, delay: 2 },
  { cx: 130, cy: 200, r: 2, delay: 5 },
  { cx: 280, cy: 300, r: 2.5, delay: 1 },
  { cx: 220, cy: 390, r: 2, delay: 4 },
  { cx: 200, cy: 590, r: 2, delay: 3 },
  { cx: 300, cy: 640, r: 2.5, delay: 6 },
  { cx: 230, cy: 750, r: 2, delay: 9 },
  { cx: 160, cy: 830, r: 2, delay: 1.5 },
];

const rightNodes: Node[] = [
  { cx: 830, cy: 50, r: 2.5, delay: 1 },
  { cx: 700, cy: 140, r: 2, delay: 3 },
  { cx: 840, cy: 240, r: 2, delay: 6 },
  { cx: 690, cy: 340, r: 2.5, delay: 2 },
  { cx: 830, cy: 430, r: 2, delay: 5 },
  { cx: 810, cy: 610, r: 2, delay: 0 },
  { cx: 700, cy: 660, r: 2.5, delay: 4 },
  { cx: 830, cy: 770, r: 2, delay: 7 },
  { cx: 720, cy: 820, r: 2, delay: 2.5 },
];

function CircuitSides() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 900"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animation: "circuit-gradient-shift 16s ease-in-out infinite" }}
    >
      <defs>
        {/* Left gradient — bright at edge, fading toward center */}
        <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.72 0.19 150)" stopOpacity="1" />
          <stop offset="40%" stopColor="oklch(0.65 0.16 160)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 150)" stopOpacity="0" />
        </linearGradient>

        {/* Right gradient — bright at edge, fading toward center */}
        <linearGradient id="rightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.72 0.19 150)" stopOpacity="1" />
          <stop offset="40%" stopColor="oklch(0.65 0.16 160)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 150)" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter for nodes */}
        <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── LEFT SIDE ── */}
      <g>
        {/* Static base traces */}
        {leftTraces.map((t, i) => (
          <path
            key={`lb-${i}`}
            d={t.d}
            fill="none"
            stroke="url(#leftGrad)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={t.op * 0.6}
          />
        ))}
        {/* Animated signal flow */}
        {leftTraces.map((t, i) => (
          <path
            key={`la-${i}`}
            d={t.d}
            fill="none"
            stroke="url(#leftGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={t.op * 1.5}
            strokeDasharray="100 40"
            style={{
              animation: `circuit-flow ${t.dur}s linear infinite`,
              animationDelay: `${t.delay}s`,
            }}
          />
        ))}
        {/* Junction nodes */}
        {leftNodes.map((n, i) => (
          <circle
            key={`ln-${i}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="oklch(0.72 0.19 150)"
            stroke="none"
            opacity="0.10"
            filter="url(#nodeGlow)"
            style={{
              animation: "circuit-node-pulse 5s ease-in-out infinite",
              animationDelay: `${n.delay}s`,
            }}
          />
        ))}
      </g>

      {/* ── RIGHT SIDE ── */}
      <g>
        {/* Static base traces */}
        {rightTraces.map((t, i) => (
          <path
            key={`rb-${i}`}
            d={t.d}
            fill="none"
            stroke="url(#rightGrad)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={t.op * 0.6}
          />
        ))}
        {/* Animated signal flow */}
        {rightTraces.map((t, i) => (
          <path
            key={`ra-${i}`}
            d={t.d}
            fill="none"
            stroke="url(#rightGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={t.op * 1.5}
            strokeDasharray="100 40"
            style={{
              animation: `circuit-flow-reverse ${t.dur}s linear infinite`,
              animationDelay: `${t.delay}s`,
            }}
          />
        ))}
        {/* Junction nodes */}
        {rightNodes.map((n, i) => (
          <circle
            key={`rn-${i}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="oklch(0.72 0.19 150)"
            stroke="none"
            opacity="0.10"
            filter="url(#nodeGlow)"
            style={{
              animation: "circuit-node-pulse 5s ease-in-out infinite",
              animationDelay: `${n.delay}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}

/* ==============================
   ANIMATED BACKGROUND
   ============================== */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Circuit traces along edges */}
      <CircuitSides />

      {/* Vignette — keeps center clean for content */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, oklch(0.13 0.01 240 / 40%) 100%)",
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
