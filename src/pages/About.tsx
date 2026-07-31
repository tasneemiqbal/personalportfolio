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
  ["Location", "Long Beach, CA"],
  ["Status", "Available for Associate PM roles, Spring 2027"],
];

const experience = [
  {
    period: "Jan 2026 to present",
    title: "Web Product Manager",
    company: "Beach Media · CSULB",
    current: true,
    bullets: [
      "Delivered 10+ website enhancements with zero downtime across 4 editorial teams and 30k+ readers",
      "Reprioritized homepage layout via Squarespace Analytics, lifting article click-through by 30%",
      "Launched Mailchimp signup flows and added 250 subscribers to a 2,300+ list by tabling",
      "Interviewed 3 editors 1:1 to scope pain points, cutting tech-request turnaround from 5 to 2 days",
    ],
    skills: ["User Interviews", "Product Analytics", "Lifecycle Marketing", "Cross-functional Leadership"],
  },
  {
    period: "Aug 2025 to Dec 2025",
    title: "Web Product Coordinator",
    company: "Beach Media · CSULB",
    stat: "LCP 2.1s · CLS 0 on LBCurrent",
    bullets: [
      "Wrote the performance spec that took LBCurrent to passing Core Web Vitals (LCP 2.1s, CLS 0)",
      "Partnered with editors and designers to standardize responsive components, cutting bug reports by 10%",
      "Improved discoverability across 5 articles by rewriting image alt text and sharpening headline clarity",
    ],
    skills: ["Core Web Vitals", "HTML", "CSS", "WordPress", "Squarespace", "Performance Optimization"],
  },
  {
    period: "Jun 2023 to Jun 2024",
    title: "Computer Science Teaching Assistant",
    company: "Microsoft TEALS",
    stat: "1 year mentoring high-school students",
    bullets: [
      "Ran weekly 1:1s with 15 students to surface where the curriculum lost them, feeding 2 changes weekly",
      "Co-taught 2 sections of Intro to Python with 90% of students completing the course",
      "Debugged student Python submissions and reframed recurring errors as concept gaps",
    ],
    skills: ["Python", "Communication", "Mentorship", "Debugging"],
  },
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
            className="text-[clamp(56px,10vw,130px)] font-black uppercase leading-none tracking-tight text-foreground/10"
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
                  className="text-xs uppercase tracking-[0.2em] text-white/80 bg-black/40 px-2 py-1"
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
              className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-8"
              style={MONO}
            >
              Long Beach, CA · Open to Associate PM roles for Spring 2027
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
              I am a computer science senior at CSULB and the Web Product Manager at Beach Media, where I own the
              websites behind Long Beach Current, DIG Magazine, and ENYE. The job is part product and part
              engineering: I talk to editors about what is slowing them down, decide what is worth building, and
              then go build it.
            </motion.p>

            <motion.dl variants={stagger.item} className="border-t border-border">
              {facts.map(([label, value]) => (
                <div key={label} className="py-4 border-b border-border flex flex-col sm:flex-row sm:gap-8">
                  <dt
                    className="text-xs uppercase tracking-[0.2em] text-foreground/40 sm:w-32 shrink-0 mb-1 sm:mb-0"
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

      {/* EXPERIENCE */}
      <section className="px-5 sm:px-8 mt-24 pt-16 border-t border-border">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-12" style={MONO}>
          Where I have worked
        </p>

        <div className="flex flex-col">
          {experience.map((role) => (
            <article key={role.title + role.period} className="border-t border-border last:border-b py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3" style={MONO}>
                    {role.period}
                    {role.current && " · Current"}
                  </p>
                  <h3
                    className="text-[clamp(24px,3vw,34px)] font-bold uppercase leading-none tracking-tight mb-2"
                    style={BARLOW_CONDENSED}
                  >
                    {role.title}
                  </h3>
                  <p className="text-sm text-foreground/50">{role.company}</p>
                  {role.stat && (
                    <p className="text-xs text-foreground/40 mt-3" style={MONO}>
                      {role.stat}
                    </p>
                  )}
                </div>

                <div className="md:col-span-7 md:col-start-6">
                  <ul className="flex flex-col mb-6">
                    {role.bullets.map((b) => (
                      <li
                        key={b}
                        className="py-3 border-b border-border last:border-none text-sm text-foreground/70 leading-relaxed"
                        style={{ fontWeight: 300 }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {role.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs uppercase tracking-[0.15em] text-foreground/40"
                        style={MONO}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-5 sm:px-8 mt-24 pt-16 border-t border-border">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-12" style={MONO}>
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
          className="text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
          style={MONO}
        >
          ← See my work
        </Link>
        <a
          href="mailto:tasneemiqbal417@gmail.com"
          className="text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
          style={MONO}
        >
          Get in touch →
        </a>
      </section>
    </main>
  );
}
