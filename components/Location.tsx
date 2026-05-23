"use client";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

const HOURS = [
  { day: "Lunes a viernes", time: "9:00 – 19:00" },
  { day: "Sábados", time: "9:00 – 14:00" },
  { day: "Domingos", time: "Cerrado" },
];

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="py-24 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "oklch(0.96 0.015 80)" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Heading — direct, no kicker label */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="font-display text-4xl md:text-5xl leading-tight mb-14"
          style={{ color: "oklch(0.16 0.012 43)" }}
        >
          Vení a visitarnos.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Info — no identical card wrappers; clean text list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="flex flex-col"
          >
            {/* Address */}
            <div
              className="pb-7 mb-7"
              style={{ borderBottom: "1px solid oklch(0.84 0.018 70)" }}
            >
              <p
                className="font-display leading-snug mb-1"
                style={{
                  color: "oklch(0.16 0.012 43)",
                  fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
                  fontWeight: 900,
                }}
              >
                Av. Bernardo O&apos;Higgins 5671
              </p>
              <p style={{ color: "oklch(0.42 0.022 43)" }}>
                local M, Córdoba, Argentina
              </p>
            </div>

            {/* Hours */}
            <div
              className="pb-7 mb-7"
              style={{ borderBottom: "1px solid oklch(0.84 0.018 70)" }}
            >
              <p
                className="font-display text-base mb-3"
                style={{ color: "oklch(0.16 0.012 43)", fontWeight: 800 }}
              >
                Horarios
              </p>
              {HOURS.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-1.5 text-sm"
                >
                  <span style={{ color: "oklch(0.42 0.022 43)" }}>{day}</span>
                  <span
                    style={{
                      color:
                        time === "Cerrado"
                          ? "oklch(0.68 0.012 43)"
                          : "oklch(0.16 0.012 43)",
                      fontWeight: time === "Cerrado" ? 400 : 700,
                    }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5493510000000?text=Hola!%20Quiero%20consultar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 self-start group"
              style={{ color: "oklch(0.55 0.17 145)" }}
            >
              <WhatsappLogo
                size={22}
                weight="fill"
                className="transition-transform group-hover:scale-110"
              />
              <span
                className="font-display text-base"
                style={{
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "oklch(0.55 0.17 145 / 0.35)",
                }}
              >
                +54 9 351 000-0000
              </span>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
            className="rounded-[var(--radius-card)] overflow-hidden h-80 lg:h-full min-h-[360px]"
            style={{
              boxShadow: "0 8px 32px -12px oklch(0.16 0.012 43 / 0.15)",
              border: "1px solid oklch(0.84 0.018 70)",
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Av+Bernardo+O'Higgins+5671+C%C3%B3rdoba+Argentina&hl=es&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Pinceladas y algo más"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
