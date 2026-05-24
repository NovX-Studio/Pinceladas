"use client";

const brands = [
  "Faber-Castell",
  "Maped",
  "Canson",
  "Stabilo",
  "Winsor & Newton",
  "Liderpapel",
  "Staedtler",
  "Alba",
  "Crayola",
  "Pelikan",
];

// Dot separator between brands
const Dot = () => (
  <span
    aria-hidden="true"
    style={{
      display: "inline-block",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: "oklch(0.62 0.19 35)",
      margin: "0 28px",
      verticalAlign: "middle",
      flexShrink: 0,
    }}
  />
);

export default function BrandMarquee() {
  const items = [...brands, ...brands]; // duplicate for seamless loop

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        backgroundColor: "oklch(0.16 0.012 43)",
        borderTop: "1px solid oklch(0.99 0.006 90 / 0.06)",
        borderBottom: "1px solid oklch(0.99 0.006 90 / 0.06)",
      }}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((brand, i) => (
          <span
            key={i}
            className="inline-flex items-center font-display text-sm tracking-widest uppercase"
            style={{
              color: "oklch(0.99 0.006 90 / 0.55)",
              letterSpacing: "0.12em",
              flexShrink: 0,
            }}
          >
            {brand}
            <Dot />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
