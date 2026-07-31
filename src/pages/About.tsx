import { motion } from "motion/react";
import { Link } from "react-router";

import portrait from "../assets/portrait.jpg";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const BARLOW: React.CSSProperties = { fontFamily: "'Barlow', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
  },
};

const facts = [
  ["Education", "B.S. Computer Science, CSULB. Graduating Dec 2026."],
  ["Location", "Los Angeles, CA"],
];

const skills = [
  [
    "Product",
    [
      "User Interviews",
      "Product Specs / PRDs",
      "Wireframing",
      "Information Architecture",
      "Competitive Analysis",
      "MVP Scoping",
    ],
  ],
  ["Programming", ["Python", "JavaScript", "C++", "Kotlin", "HTML", "CSS"]],
  [
    "Tools",
    [
      "Figma",
      "Claude Code",
      "Codex",
      "Cursor",
      "Git / GitHub",
      "Firebase",
      "Chart.js",
      "WordPress",
      "Squarespace",
      "Microsoft Excel",
      "Slack",
      "VS Code",
      "Android Studio",
    ],
  ],
] as const;

export function About() {
  return (
    <main className="pt-28 sm:pt-32 pb-24" style={BARLOW}>
      <div className="px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <h1
            className="text-[clamp(56px,10vw,130px)] font-bold uppercase leading-none tracking-tight text-brand-soft"
            style={BARLOW_CONDENSED}
          >
            About
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="md:col-span-4"
          >
            <div
              className="relative overflow-hidden bg-muted max-w-xs md:max-w-none"
              style={{ borderRadius: "2px" }}
            >
              <img
                src={portrait}
                alt="Tasneem Iqbal"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-xs uppercase tracking-[0.2em] text-white bg-black/60 px-2 py-1"
                  style={MONO}
                >
                  Tasneem Iqbal, 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            className="md:col-span-7 md:col-start-6"
            variants={stagger.container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={stagger.item}
              className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-8"
              style={MONO}
            >
              Los Angeles, CA
            </motion.p>

            <motion.p
              variants={stagger.item}
              className="text-2xl leading-snug text-foreground mb-6"
              style={{ fontWeight: 300 }}
            >
              I keep three student publications online, decide what actually ships, and sweat the details most
              people scroll past.
            </motion.p>

            <motion.p
              variants={stagger.item}
              className="text-base text-foreground/60 leading-relaxed mb-10"
              style={{ fontWeight: 300 }}
            >
              I am a CS senior at CSULB and the Web Product Manager at Beach Media, where I own the sites behind
              Long Beach Current, DIG Magazine, and ENYE. Part product, part engineering: I find out what is
              slowing editors down, decide what is worth building, then build it.
            </motion.p>

            <motion.dl variants={stagger.item} className="border-t border-border">
              {facts.map(([label, value]) => (
                <div key={label} className="py-4 border-b border-border flex flex-col sm:flex-row sm:gap-8">
                  <dt
                    className="text-xs uppercase tracking-[0.2em] text-foreground/60 sm:w-32 shrink-0 mb-1 sm:mb-0"
                    style={MONO}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm text-foreground/80">{value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </div>

      {/* SKILLS */}
      <section className="px-5 sm:px-8 mt-24 pt-16 border-t border-border">
        <p className="text-xs uppercase tracking-[0.3em] text-brand mb-12" style={MONO}>
          Skills &amp; tools
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map(([category, items]) => (
            <div key={category}>
              <h3
                className="text-2xl font-bold uppercase leading-none tracking-tight mb-5"
                style={BARLOW_CONDENSED}
              >
                {category}
              </h3>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="py-2.5 border-b border-border text-sm text-foreground/70"
                    style={{ fontWeight: 300 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 mt-24 pt-16 border-t border-border flex flex-wrap items-center gap-6 sm:gap-8">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
          style={MONO}
        >
          ← See my work
        </Link>
        <a
          href="mailto:tasneemiqbal417@gmail.com"
          className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
          style={MONO}
        >
          Get in touch →
        </a>
      </section>
    </main>
  );
}
