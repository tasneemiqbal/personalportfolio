import { motion } from "motion/react";

import portrait from "../assets/portrait.jpg";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const BARLOW: React.CSSProperties = { fontFamily: "'Barlow', sans-serif" };

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
              className="overflow-hidden bg-muted max-w-xs md:max-w-none"
              style={{ borderRadius: "2px" }}
            >
              <img
                src={portrait}
                alt="Tasneem Iqbal"
                className="w-full aspect-[3/4] object-cover object-top"
              />
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
              className="text-2xl leading-snug text-foreground mb-6"
              style={{ fontWeight: 300 }}
            >
              Hi! I'm Tasneem
            </motion.p>

            <div className="space-y-5 text-base text-foreground/60 leading-relaxed">
              <motion.p variants={stagger.item} style={{ fontWeight: 300 }}>
                I'm currently an extern at BeReal. Before that I was the Web Product Manager at Beach
                Media, where I owned the three sites behind Long Beach Current, DIG Magazine, and
                ENYE: figuring out what was slowing editors down, deciding what was worth building,
                then building it. I specialize in shipping with very small teams and zero to one
                specs.
              </motion.p>

              {/* The lowercase i in "why am i building this" is hers and deliberate.
                  It is the one place her voice breaks the site's formality. */}
              <motion.p variants={stagger.item} style={{ fontWeight: 300 }}>
                I grew up fixing hardware for people. Fixing turned into coding, and coding kept
                running into the same question. Why am i building this, who is it for, what is it
                going to do. That question turned out to be the job. I work best at the intersection
                of people and technology, where what gets built is my call to make.
              </motion.p>

              <motion.p variants={stagger.item} style={{ fontWeight: 300 }}>
                On the side I also DJ! Building my personal radio station right now, stay tuned for
                the drop. You see it here first folks!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SKILLS, unlabelled on purpose. Three columns headed PRODUCT,
          PROGRAMMING and TOOLS do not need a fourth label above them saying
          skills and tools. */}
      <section className="px-5 sm:px-8 mt-24 pt-16 border-t border-border">
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

    </main>
  );
}
