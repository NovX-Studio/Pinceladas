"use client";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 1.8 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(34,197,94,0.6)] hover:bg-[#16a34a] transition-colors"
    >
      <WhatsappLogo size={28} weight="fill" />

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#22c55e] animate-ping opacity-20"
        aria-hidden="true"
      />
    </motion.a>
  );
}
