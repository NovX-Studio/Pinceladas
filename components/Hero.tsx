"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsappLogo, MapPin } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100dvh - 64px)" }}
    >
      {/* Full-bleed photo */}
      <Image
        src="/logo.png"
        alt="Pinceladas y algo más — librería y papelería en Córdoba"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay — dark at bottom for text, transparent at top */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(0.10 0.010 43 / 0.90) 0%, oklch(0.10 0.010 43 / 0.55) 35%, oklch(0.10 0.010 43 / 0.10) 70%, transparent 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-14 lg:px-20 pb-14 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full"
            style={{
              backgroundColor: "oklch(0.99 0.006 90 / 0.10)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid oklch(0.99 0.006 90 / 0.18)",
              color: "oklch(0.99 0.006 90 / 0.80)",
            }}
          >
            <MapPin size={13} weight="fill" />
            <span className="font-handwritten text-sm tracking-wide">
              Av. O&apos;Higgins 5671, local M · Córdoba
            </span>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none mb-3"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "oklch(0.99 0.006 90)",
              letterSpacing: "-0.03em",
            }}
          >
            Pinceladas
          </motion.h1>

          {/* Descriptor */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="font-display leading-tight mb-8"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
              color: "oklch(0.99 0.006 90 / 0.70)",
              letterSpacing: "-0.01em",
              fontWeight: 600,
            }}
          >
            Librería escolar, comercial y artística
          </motion.p>

          {/* Single CTA */}
          <motion.a
            href="https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.40, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm"
            style={{
              backgroundColor: "oklch(0.62 0.19 35)",
              color: "oklch(0.99 0.006 90)",
              boxShadow: "0 4px 24px oklch(0.62 0.19 35 / 0.45)",
            }}
          >
            <WhatsappLogo size={18} weight="fill" />
            Consultanos por WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-8 md:right-14 lg:right-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          className="w-px h-9 mx-auto"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.99 0.006 90 / 0.55), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
