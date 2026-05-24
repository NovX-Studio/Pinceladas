"use client";

import { motion, useMotionValue, useTransform, animate, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => String(Math.round(v)).padStart(2, "0"));
  const inView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      motionVal.set(value);
      return;
    }
    const controls = animate(motionVal, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay,
    });
    return () => controls.stop();
  }, [inView, motionVal, value, delay, prefersReduced]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const highlights = [
  {
    number: 1,
    title: "Variedad completa",
    body: "Útiles escolares, artísticos y de oficina. Cartucheras, mochilas, marcadores, papelería y regalos — todo en un solo lugar.",
  },
  {
    number: 2,
    title: "Atención personalizada",
    body: "Local de barrio con trato directo. Te ayudamos a encontrar lo que necesitás, sin vueltas.",
  },
  {
    number: 3,
    title: "Precios accesibles",
    body: "Precios competitivos en útiles escolares, artísticos y de oficina. Promos y ofertas para clientes frecuentes.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-28 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "oklch(0.97 0.010 80)" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="mb-20">
          {/* Rule — draws in scaleX */}
          <motion.div
            className="h-px w-full mb-10 origin-left"
            style={{ backgroundColor: "oklch(0.88 0.018 70)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-tight"
            style={{
              color: "oklch(0.16 0.012 43)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            ¿qué{" "}
            <span style={{ color: "oklch(0.62 0.19 35)" }}>brindamos?</span>
          </motion.h2>
        </div>

        {/* Three editorial items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: i * 0.12,
              }}
              className="flex flex-col gap-4"
            >
              {/* Large number — count-up */}
              <span
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: "oklch(0.62 0.19 35)",
                  letterSpacing: "-0.04em",
                }}
              >
                <AnimatedNumber value={item.number} delay={i * 0.14} />
              </span>

              {/* Short rule — draws in scaleX */}
              <motion.div
                className="h-px w-8 origin-left"
                style={{ backgroundColor: "oklch(0.62 0.19 35 / 0.35)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.14 + 0.1,
                }}
              />

              {/* Title */}
              <h3
                className="font-display leading-tight"
                style={{
                  color: "oklch(0.16 0.012 43)",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                }}
              >
                {item.title}
              </h3>

              {/* Body */}
              <p
                className="leading-relaxed text-sm md:text-base"
                style={{ color: "oklch(0.42 0.022 43)" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
