import { motion } from "motion/react";
import { Link } from "react-router";

export const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
export const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

/** Shared shell for the case study pages: hero, sections, and the footer nav. */

export function CaseStudyHero({
  kicker,
  title,
  lede,
  meta,
  links,
}: {
  kicker: string;
  title: string;
  lede: string;
  meta: [string, string][];
  links: { label: string; href: string }[];
}) {
  return (
    <header className="px-5 sm:px-8 pt-28 sm:pt-32 pb-16">
      <Link
        to="/"
        className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
        style={MONO}
      >
        ← Back to the work
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-brand mt-12 mb-5" style={MONO}>
          {kicker}
        </p>
        <h1
          className="text-[clamp(56px,11vw,150px)] font-bold uppercase leading-[0.9] tracking-tight mb-8"
          style={BARLOW_CONDENSED}
        >
          {title}
        </h1>
        <p
          className="text-xl sm:text-2xl leading-snug text-foreground/80 max-w-3xl mb-14"
          style={{ fontWeight: 300 }}
        >
          {lede}
        </p>
      </motion.div>

      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border-y border-border">
        {meta.map(([label, value]) => (
          <div key={label} className="bg-background py-5 px-4 sm:px-5">
            <dt className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2" style={MONO}>
              {label}
            </dt>
            <dd className="text-sm text-foreground/80">{value}</dd>
          </div>
        ))}
      </dl>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-brand hover:text-foreground transition-colors border-b border-brand/40 pb-1"
              style={MONO}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// No eyebrow. A tracked uppercase label above every section is the scaffolding
// PRODUCT.md names as the thing not to be, and these headings are already
// written as claims ("The stories were good. Getting to them wasn't."). Left
// alone they carry the hierarchy themselves. The one kicker in CaseStudyHero
// stays: once per page, naming what the page is, is a system rather than a tic.
export function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-5 sm:px-8 py-16 border-t border-border">
      <h2
        className="text-[clamp(30px,5vw,58px)] font-bold uppercase leading-[0.95] tracking-tight mb-8 max-w-4xl text-balance"
        style={BARLOW_CONDENSED}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-3xl mb-5" style={{ fontWeight: 300 }}>
      {children}
    </p>
  );
}

export function CardGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mt-8">
      {items.map((c) => (
        <div key={c.title} className="bg-background p-6 min-h-[128px]">
          <h3 className="text-xl font-bold uppercase tracking-tight leading-none mb-3" style={BARLOW_CONDENSED}>
            {c.title}
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontWeight: 300 }}>
            {c.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-foreground pl-6 sm:pl-8 py-2 my-8 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-3" style={MONO}>
        {label}
      </p>
      <p className="text-lg sm:text-xl text-foreground leading-relaxed" style={{ fontWeight: 300 }}>
        {children}
      </p>
    </div>
  );
}

export function Stats({ items }: { items: { figure: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border my-8 max-w-2xl">
      {items.map((s) => (
        <div key={s.label} className="bg-background p-8">
          <div
            className="text-[clamp(44px,7vw,76px)] font-bold uppercase leading-none tracking-tight mb-3 text-brand"
            style={BARLOW_CONDENSED}
          >
            {s.figure}
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/60" style={MONO}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Both case studies argue by putting the old way next to the new one, so the
 * table is shared rather than inlined twice. The first column is the label and
 * the last is the outcome; anything between them is the state being replaced,
 * which is why the middle columns sit at a lower contrast than the last.
 */
export function ComparisonTable({
  headings,
  rows,
}: {
  headings: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto border border-border mt-8">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            {headings.map((h) => (
              <th
                key={h}
                className="p-4 text-xs uppercase tracking-[0.2em] text-foreground/60 font-normal align-bottom"
                style={MONO}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells) => (
            <tr key={cells[0]} className="border-b border-border last:border-none align-top">
              {cells.map((cell, i) => {
                if (i === 0) {
                  return (
                    <td key={i} className="p-4 text-sm text-foreground whitespace-nowrap">
                      {cell}
                    </td>
                  );
                }
                const last = i === cells.length - 1;
                return (
                  <td
                    key={i}
                    className={`p-4 text-sm ${last ? "text-foreground/80" : "text-foreground/60"}`}
                    style={{ fontWeight: 300 }}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Gallery({ columns = 2, children }: { columns?: 2 | 3; children: React.ReactNode }) {
  // Written out rather than interpolated so Tailwind's scanner sees both classes.
  const cols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return <div className={`grid grid-cols-1 ${cols} gap-8`}>{children}</div>;
}

/**
 * Third-party embed, sized by aspect ratio rather than the fixed width and
 * height an embed provider hands you, so it survives a phone. Everything else
 * on this site is self-contained; this is the one component that depends on
 * another origin being up, which is why the screens it sits with are also
 * shown as static figures.
 */
export function Embed({ src, title, caption }: { src: string; title: string; caption: string }) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden bg-muted border border-border" style={{ borderRadius: "2px" }}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allowFullScreen
          className="w-full block"
          style={{ aspectRatio: "16 / 9", border: 0 }}
        />
      </div>
      <figcaption className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-3" style={MONO}>
        {caption}
      </figcaption>
    </figure>
  );
}

export function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden bg-muted border border-border" style={{ borderRadius: "2px" }}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
      </div>
      <figcaption className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-3" style={MONO}>
        {caption}
      </figcaption>
    </figure>
  );
}

export function CaseStudyFoot({
  text,
  nextLabel,
  nextTo,
}: {
  text?: string;
  nextLabel: string;
  nextTo: string;
}) {
  return (
    <section className="px-5 sm:px-8 py-16 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      {text && (
        <p className="text-base text-foreground/60 max-w-md" style={{ fontWeight: 300 }}>
          {text}
        </p>
      )}
      {/* ml-auto so a foot with no text keeps its nav in the same place as one with text. */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 sm:ml-auto">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
          style={MONO}
        >
          ← Back to the work
        </Link>
        <Link
          to={nextTo}
          className="text-xs uppercase tracking-[0.2em] text-brand hover:text-foreground transition-colors border-b border-brand/40 pb-1"
          style={MONO}
        >
          {nextLabel} →
        </Link>
      </div>
    </section>
  );
}
