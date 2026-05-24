"use client";

import { motion } from "framer-motion";
import { InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react";
import { ElementType } from "react";

const socials: {
  label: string;
  href: string;
  icon: ElementType;
  bg: string;
  shadow: string;
}[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar",
    icon: WhatsappLogo,
    bg: "oklch(0.52 0.17 152)",
    shadow: "oklch(0.52 0.17 152 / 0.45)",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/pinceladaslibreriaok",
    icon: InstagramLogo,
    bg: "oklch(0.62 0.19 35)",
    shadow: "oklch(0.62 0.19 35 / 0.40)",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@pinceladas.libreria",
    icon: TiktokLogo,
    bg: "oklch(0.20 0.012 43)",
    shadow: "oklch(0.20 0.012 43 / 0.35)",
  },
];

export default function SocialSidebar() {
  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Redes sociales"
    >
      {socials.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ x: -64, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 16,
            delay: 1.6 + i * 0.12,
          }}
          className="relative flex items-center group"
        >
          {/* Icon button */}
          <motion.a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            className="relative w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: s.bg,
              color: "oklch(0.99 0.006 90)",
              boxShadow: `0 4px 18px -4px ${s.shadow}`,
            }}
          >
            <s.icon size={22} weight="fill" />

            {/* Pulse ring — WhatsApp only */}
            {s.label === "WhatsApp" && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: s.bg }}
                aria-hidden="true"
              />
            )}
          </motion.a>

          {/* Hover label — slides right */}
          <span
            className="absolute left-[calc(100%+10px)] whitespace-nowrap px-2.5 py-1 rounded-lg text-xs font-semibold pointer-events-none
              opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0
              transition-all duration-200"
            style={{
              backgroundColor: s.bg,
              color: "oklch(0.99 0.006 90)",
            }}
            aria-hidden="true"
          >
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
