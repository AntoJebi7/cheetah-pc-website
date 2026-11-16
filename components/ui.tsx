import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 xl:px-12 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[0.14em] ${dark ? "text-orange-300" : "text-orange-800"}`}
    >
      {children}
    </p>
  );
}

/** Decorative angled gradient and stripes for the edge of a section. */
export function SectionStripes({
  side = "right",
  fade = "to bottom",
}: {
  side?: "left" | "right";
  fade?: string;
}) {
  const pos = side === "right" ? "right-0" : "left-0";
  return (
    <div
      aria-hidden
      className={`section-stripes pointer-events-none absolute top-0 ${pos} h-48 w-full overflow-hidden sm:h-64 lg:w-1/2`}
      style={{ ["--fade" as string]: fade }}
    >
      <div className="section-stripes-gradient absolute inset-0" />
      <div className="section-stripe right-0 top-8 w-2/5 bg-[#fd6301]" style={{ animationDelay: "0.1s, 1.1s" }} />
      <div className="section-stripe right-[25%] top-[76px] w-1/4 bg-[#1e3a8a]" style={{ animationDelay: "0.2s, 1.4s" }} />
      <div className="section-stripe right-0 top-[124px] w-1/6 bg-[#22d3ee]" style={{ animationDelay: "0.3s, 1.7s" }} />
    </div>
  );
}

export function SafeBadge() {
  return (
    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-emerald-900">
      Safe
    </span>
  );
}
export function WarmBadge() {
  return (
    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-950">
      Warm
    </span>
  );
}
export function UnsafeBadge() {
  return (
    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-red-950">
      Unsafe
    </span>
  );
}
