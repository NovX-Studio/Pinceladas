"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Inicio",     href: "#"           },
  { label: "Productos",  href: "#categorias" },
  { label: "Nosotros",   href: "#nosotros"   },
  { label: "Ubicación",  href: "#ubicacion"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("#");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", "")).filter(Boolean);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    setActive(href);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled
            ? "oklch(0.99 0.006 90)"
            : "oklch(0.99 0.006 90 / 0.82)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled
            ? "1px solid oklch(0.88 0.018 70 / 0.8)"
            : "1px solid oklch(0.88 0.018 70 / 0.3)",
          boxShadow: scrolled
            ? "0 2px 20px oklch(0.16 0.012 43 / 0.08)"
            : "none",
          transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">

          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleLink("#"); }}
            className="flex flex-col leading-none group"
            aria-label="Ir al inicio"
          >
            <span
              className="font-display text-lg leading-none"
              style={{ color: "oklch(0.16 0.012 43)", letterSpacing: "-0.03em" }}
            >
              Pinceladas
            </span>
            <span
              className="font-handwritten text-xs leading-none"
              style={{ color: "oklch(0.62 0.19 35)" }}
            >
              y algo más
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                  className="relative px-4 py-2 text-sm font-semibold rounded-full transition-colors"
                  style={{
                    color: isActive
                      ? "oklch(0.61 0.20 32)"
                      : "oklch(0.42 0.022 43)",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: "oklch(0.61 0.20 32 / 0.08)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* CTA */}
            <a
              href="https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{
                backgroundColor: "oklch(0.55 0.17 145)",
                color: "oklch(0.99 0.006 90)",
                boxShadow: "0 2px 10px oklch(0.55 0.17 145 / 0.30)",
              }}
            >
              Contacto
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors"
            style={{ color: "oklch(0.16 0.012 43)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              backgroundColor: "oklch(0.99 0.006 90)",
              borderBottom: "1px solid oklch(0.88 0.018 70 / 0.6)",
              boxShadow: "0 8px 32px oklch(0.16 0.012 43 / 0.10)",
            }}
          >
            <nav className="flex flex-col py-3 px-6" aria-label="Menú móvil">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                    className="flex items-center gap-3 py-3.5 text-base font-semibold border-b"
                    style={{
                      color: isActive ? "oklch(0.61 0.20 32)" : "oklch(0.16 0.012 43)",
                      borderColor: "oklch(0.88 0.018 70 / 0.5)",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.61 0.20 32)" }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
              <a
                href="https://wa.me/5493510000000?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20consultar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 mb-2 flex items-center justify-center py-3 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "oklch(0.55 0.17 145)",
                  color: "oklch(0.99 0.006 90)",
                }}
                onClick={() => setOpen(false)}
              >
                Escribinos por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so hero content isn't hidden under navbar */}
      <div style={{ height: "64px" }} aria-hidden="true" />
    </>
  );
}
