import { useState, useRef } from "react";
import { motion, useSpring } from "motion/react";
import { Link } from "react-router";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const BARLOW: React.CSSProperties = { fontFamily: "'Barlow', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

const projects = [
  {
    id: "01",
    title: "Checkout Drop-off Audit",
    category: "Discovery · Roadmapping · A/B Testing",
    company: "Shopify — Product Intern",
    year: "2024",
    outcome: "34% drop-off reduction across 12 merchant segments.",
    detail:
      "Led end-to-end discovery for a checkout friction audit. Synthesized 60+ user interviews and Hotjar recordings into an opportunity map. Prioritized a 3-sprint roadmap that shipped address auto-fill and a guest-to-account nudge — moved conversion 2.1×.",
    metrics: ["34% drop-off ↓", "2.1× conversion lift", "Shipped in 6 weeks"],
    image: "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?w=700&h=480&fit=crop&auto=format",
    imageAlt: "Online checkout screen with payment details",
  },
  {
    id: "02",
    title: "B2B Onboarding Redesign",
    category: "JTBD · Prototyping · Retention",
    company: "UC Berkeley Capstone — Fintech Partner",
    year: "2024",
    outcome: "Day-7 churn dropped from 68% to 41% after redefining the aha moment.",
    detail:
      "Diagnosed a 68% D7 churn problem at a fintech startup. Ran a full JTBD sprint, pinpointed the aha moment, and redesigned onboarding from 11 steps to 4. Validated across 3 rounds of prototype testing before handoff.",
    metrics: ["D7 churn 68% → 41%", "NPS +22 pts", "Solo PM lead"],
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=700&h=480&fit=crop&auto=format",
    imageAlt: "Mobile fintech app interface on white surface",
  },
  {
    id: "03",
    title: "AI Study Tool — 0→1 Spec",
    category: "Market Research · PRD · Strategy",
    company: "Personal Project",
    year: "2025",
    outcome: "Full PRD written. 3 design partners secured for a Q3 2025 pilot.",
    detail:
      "Identified that AI study tools optimize for generation, not retention. Wrote a product spec for an active recall layer on top of LLM summaries. Ran competitive teardowns of 8 tools and defined success metrics tied to learning outcomes — not engagement.",
    metrics: ["Full PRD", "3 design partners", "Pilot Q3 2025"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=700&h=480&fit=crop&auto=format",
    imageAlt: "Person studying with headphones at a laptop",
  },
];

export function Home() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const springX = useSpring(0, { stiffness: 100, damping: 20 });
  const springY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    springX.set(e.clientX - rect.left);
    springY.set(e.clientY - rect.top);
  };

  const activeImage = projects.find((p) => p.id === hoveredProject);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between px-8 pt-32 pb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="text-[clamp(72px,14vw,180px)] font-black uppercase leading-[0.9] tracking-tight"
            style={BARLOW_CONDENSED}
          >
            Jordan
          </h1>
          <h1
            className="text-[clamp(72px,14vw,180px)] font-black uppercase leading-[0.9] tracking-tight text-foreground/20"
            style={BARLOW_CONDENSED}
          >
            Lee
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2" style={MONO}>
                Associate Product Manager · New Grad
              </p>
              <p className="text-base text-foreground/60 max-w-sm leading-relaxed" style={{ fontWeight: 300 }}>
                I ask "why" until there's nowhere left to go —<br />
                then turn the answer into a roadmap.
              </p>
            </div>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors self-end"
              style={MONO}
            >
              About me →
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-8">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/30" style={MONO}>
            Open to work · Summer 2025
          </span>
          <span className="text-xs text-foreground/30" style={MONO}>↓</span>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-8 py-24 border-t border-border">
        <div className="mb-12 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50" style={MONO}>
            Case Studies
          </p>
          <p className="text-xs text-foreground/30" style={MONO}>3</p>
        </div>

        {/* List with cursor-following image */}
        <div
          ref={listRef}
          className="relative flex flex-col"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* Floating cursor image */}
          <motion.div
            className="absolute pointer-events-none z-20"
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-60%",
            }}
          >
            <motion.div
              animate={{
                opacity: hoveredProject ? 1 : 0,
                scale: hoveredProject ? 1 : 0.88,
                rotate: hoveredProject ? -2 : 0,
              }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="w-[340px] h-[230px] overflow-hidden bg-muted shadow-2xl"
              style={{ borderRadius: "2px" }}
            >
              {activeImage && (
                <motion.img
                  key={activeImage.id}
                  src={activeImage.image}
                  alt={activeImage.imageAlt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </motion.div>

          {/* Project rows */}
          {projects.map((p) => (
            <div key={p.id} className="border-t border-border last:border-b">
              <button
                className="w-full text-left py-7 group"
                onMouseEnter={() => setHoveredProject(p.id)}
                onClick={() => setOpenProject(openProject === p.id ? null : p.id)}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-5 min-w-0">
                    <span className="text-xs text-foreground/30 flex-shrink-0" style={MONO}>
                      {p.id}
                    </span>
                    <h3
                      className="text-[clamp(22px,3.5vw,40px)] font-bold uppercase leading-none tracking-tight group-hover:text-foreground/50 transition-colors duration-200"
                      style={BARLOW_CONDENSED}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <span
                    className="text-foreground/30 flex-shrink-0 text-sm transition-transform duration-200"
                    style={{
                      display: "inline-block",
                      transform: openProject === p.id ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </div>
                <p className="mt-1.5 ml-9 text-sm text-foreground/40" style={{ fontWeight: 300 }}>
                  {p.outcome}
                </p>
              </button>

              {/* Expanded detail */}
              <motion.div
                initial={false}
                animate={openProject === p.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div className="ml-9 pb-10">
                  {/* Image reveal */}
                  <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={
                      openProject === p.id
                        ? { clipPath: "inset(0 0% 0 0)" }
                        : { clipPath: "inset(0 100% 0 0)" }
                    }
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.05 }}
                    className="w-full max-w-2xl h-64 mb-8 overflow-hidden bg-muted"
                    style={{ borderRadius: "2px" }}
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-l border-border pl-8">
                    <div className="md:col-span-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3" style={MONO}>
                        {p.company} · {p.year}
                      </p>
                      <p
                        className="text-base text-foreground/70 leading-relaxed max-w-xl"
                        style={{ fontWeight: 300 }}
                      >
                        {p.detail}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-4" style={MONO}>
                        Outcomes
                      </p>
                      {p.metrics.map((m) => (
                        <div
                          key={m}
                          className="py-3 border-b border-border last:border-none text-sm text-foreground"
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-8 py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 pt-1" style={MONO}>
              Contact
            </p>
          </div>
          <div className="md:col-span-4">
            <h2
              className="text-[clamp(48px,8vw,96px)] font-black uppercase leading-none tracking-tight mb-6"
              style={BARLOW_CONDENSED}
            >
              Let's talk.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col">
            {[
              { label: "Email", value: "jordan.lee@example.com", href: "mailto:jordan.lee@example.com" },
              { label: "LinkedIn", value: "jordanlee-pm", href: "#" },
              { label: "Resume", value: "Download PDF ↗", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-5 border-t border-border last:border-b flex items-center justify-between group hover:text-foreground/50 transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/40" style={MONO}>
                  {link.label}
                </span>
                <span className="text-sm">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
