"use client";

import { motion } from "framer-motion";
import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 lg:px-20"
      style={{
        backgroundColor: "oklch(0.97 0.010 80)",
        borderTop: "1px solid oklch(0.88 0.018 70)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="font-display text-xl"
              style={{ color: "oklch(0.16 0.012 43)", letterSpacing: "-0.03em" }}
            >
              Pinceladas y algo más
            </span>
            <span className="text-sm" style={{ color: "oklch(0.58 0.018 43)" }}>
              Av. Bernardo O&apos;Higgins 5671, local M — Córdoba, Argentina
            </span>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <a
              href="https://instagram.com/pinceladaslibreriaok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Pinceladas"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "oklch(0.92 0.018 70)",
                color: "oklch(0.16 0.012 43)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.62 0.19 35)";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.99 0.006 90)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.92 0.018 70)";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.16 0.012 43)";
              }}
            >
              <InstagramLogo size={20} weight="fill" />
            </a>
            <a
              href="https://tiktok.com/@pinceladas.libreria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Pinceladas"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "oklch(0.92 0.018 70)",
                color: "oklch(0.16 0.012 43)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.16 0.012 43)";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.99 0.006 90)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.92 0.018 70)";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.16 0.012 43)";
              }}
            >
              <TiktokLogo size={20} weight="fill" />
            </a>
          </motion.div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm"
          style={{
            borderTop: "1px solid oklch(0.88 0.018 70)",
            color: "oklch(0.58 0.018 43)",
          }}
        >
          <div className="flex items-center gap-4">
            <span>Pinceladas y algo más &copy; {new Date().getFullYear()}</span>
            <span style={{ color: "oklch(0.78 0.018 70)" }}>·</span>
            <a
              href="/aviso-legal"
              className="hover:underline underline-offset-2 transition-colors"
              style={{ color: "oklch(0.58 0.018 43)" }}
            >
              Aviso legal
            </a>
          </div>
          <span
            className="font-handwritten text-base"
            style={{ color: "oklch(0.72 0.018 70)" }}
          >
            hecho con amor en Córdoba
          </span>
        </div>
      </div>
    </footer>
  );
}
