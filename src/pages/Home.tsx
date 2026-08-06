import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";

import schedaddleImg from "../assets/schedaddle.png";
import digImg from "../assets/dig-home.jpg";
// Cropped to the card's own 4:3 rather than reusing the case study's 16:10
// screenshot, which object-cover would trim through the middle of the sidebar.
import pennypalImg from "../assets/pennypal-card.jpg";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

// Optical alignment for the stacked name, measured rather than eyeballed. In
// Barlow Condensed 700 the ink of "I" starts 0.044em into its advance width
// while "T" starts at 0.024em, so IQBAL would otherwise sit 0.020em right of
// TASNEEM. Pulling it back by exactly that difference squares the left edge,
// and being em-based it holds at every size the clamp produces.
const IQBAL_OPTICAL: React.CSSProperties = { ...BARLOW_CONDENSED, marginLeft: "-0.02em" };

// The line under each project is the outcome, not "Case study · 2026". A
// recruiter deciding in under a minute never opens the case study; whatever
// the card fails to say does not get said. Both of these are claims the case
// study actually substantiates.
const projects = [
  {
    title: "Schedaddle",
    outcome: "15-screen prototype, 5-module spec",
    image: schedaddleImg,
    imageAlt: "Schedaddle Figma prototype screens",
    to: "/work/schedaddle",
  },
  {
    title: "DIG Magazine",
    outcome: "Category nav from two levels to one",
    image: digImg,
    imageAlt: "The redesigned DIG Magazine homepage",
    to: "/work/dig",
  },
  {
    title: "PennyPal",
    outcome: "Four of five brief features cut to ship",
    image: pennypalImg,
    imageAlt: "The PennyPal budgeting dashboard",
    to: "/work/pennypal",
  },
];

const EASE = [0.23, 1, 0.32, 1] as const;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      to={project.to}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <div className="overflow-hidden bg-muted aspect-[4/3] mb-5" style={{ borderRadius: "2px" }}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <h3
        className="text-[clamp(24px,3vw,36px)] font-bold uppercase leading-none tracking-tight transition-colors group-hover:text-brand"
        style={BARLOW_CONDENSED}
      >
        {project.title}
      </h3>
      <p className="text-xs text-foreground/60 mt-2" style={MONO}>
        {project.outcome}
      </p>
    </Link>
  );
}

export function Home() {
  const reduced = useReducedMotion();

  // The name arrives as two masked lines rather than a fade, because the two
  // lines are the one place on the site where type is the entire composition.
  // Everything after it is a plain rise, so the hero keeps the only flourish.
  const line = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <h1 className="sr-only">Tasneem Iqbal</h1>

        {/* Uppercase has no descenders, so the mask can sit flush to the
            baseline without clipping anything. */}
        <div aria-hidden className="overflow-hidden">
          <motion.div
            className="text-[clamp(64px,14vw,180px)] font-bold uppercase leading-[0.9] tracking-tight"
            style={BARLOW_CONDENSED}
            {...line(0.05)}
          >
            Tasneem
          </motion.div>
        </div>
        <div aria-hidden className="overflow-hidden">
          <motion.div
            className="text-[clamp(64px,14vw,180px)] font-bold uppercase leading-[0.9] tracking-tight text-brand-soft"
            style={IQBAL_OPTICAL}
            {...line(0.13)}
          >
            Iqbal
          </motion.div>
        </div>

        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-8"
          style={MONO}
          {...rise(0.5)}
        >
          Product Manager. Engineer.
        </motion.p>
      </section>

      {/* WORK, with no "Work" label. Project cards under a rule are legible as
          work without being told, and the label was the same tracked-eyebrow
          scaffolding that came off every other section. */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
