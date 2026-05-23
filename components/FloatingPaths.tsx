"use client";

import { motion } from "framer-motion";

// Brand paint palette — colorful, warm, on-brand
const COLORS = [
  "oklch(0.76 0.17 75)",   // amber
  "oklch(0.62 0.19 35)",   // coral
  "oklch(0.55 0.17 145)",  // jade
  "oklch(0.58 0.16 240)",  // sky
  "oklch(0.88 0.20 95)",   // sun
  "oklch(0.61 0.20 32)",   // hot
  "oklch(0.68 0.17 130)",  // lime
  "oklch(0.43 0.20 300)",  // plum
  "oklch(0.70 0.20 42)",   // tangerine
  "oklch(0.56 0.12 180)",  // teal
];

// Deterministic "random-ish" spread — no Math.random() to avoid hydration mismatch
const DURATION_SPREAD = [22, 26, 19, 28, 21, 24, 30, 18, 25, 23, 27, 20, 29, 22, 26, 19];
const DELAY_SPREAD    = [0, 1.2, 2.8, 0.6, 3.5, 1.8, 4.1, 0.3, 2.2, 3.9, 1.0, 4.7, 0.8, 3.1, 2.5, 1.5];

function PathLayer({ position, colorShift = 0 }: { position: number; colorShift?: number }) {
  const paths = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: COLORS[(i + colorShift) % COLORS.length],
    // viewBox is -400→690 x -250→875 ≈ 1090×1125 units
    // panel ~760px wide → 1 unit ≈ 0.70px → strokeWidth 3-9 = 2-6px rendered
    width: 3 + i * 0.38,
    baseOpacity: 0.07 + i * 0.012,
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="-400 -250 1090 1130"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke={path.color}
          strokeWidth={path.width}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0.3, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [
              path.baseOpacity * 0.4,
              path.baseOpacity,
              path.baseOpacity * 0.4,
            ],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: DURATION_SPREAD[path.id % DURATION_SPREAD.length],
            repeat: Infinity,
            ease: "linear",
            delay: DELAY_SPREAD[path.id % DELAY_SPREAD.length],
          }}
        />
      ))}
    </svg>
  );
}

export default function FloatingPaths() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <PathLayer position={1} colorShift={0} />
      <PathLayer position={-1} colorShift={5} />
    </div>
  );
}
