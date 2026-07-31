import { motion } from "motion/react";
import { Link } from "react-router";

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

export function About() {
  return (
    <main className="pt-32 pb-24 px-8" style={BARLOW}>
      {/* BIG NAME */}
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="md:col-span-4"
        >
          <div className="relative overflow-hidden bg-muted" style={{ borderRadius: "2px" }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=760&fit=crop&auto=format&face=true"
              alt="Jordan Lee"
              className="w-full aspect-[3/4] object-cover object-top"
            />
            {/* subtle overlay with label */}
            <div className="absolute bottom-4 left-4">
              <span
                className="text-xs uppercase tracking-[0.2em] text-white/60 bg-black/30 px-2 py-1"
                style={MONO}
              >
                Jordan Lee, 2025
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text content */}
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
            Berkeley, CA · Open to SF / Remote
          </motion.p>

          <motion.p
            variants={stagger.item}
            className="text-2xl leading-snug text-foreground mb-6"
            style={{ fontWeight: 300 }}
          >
            I grew up watching my parents run a small restaurant — watching them iterate on a menu, manage staff,
            obsess over guests. That's where I learned product intuition before I had a word for it.
          </motion.p>

          <motion.p
            variants={stagger.item}
            className="text-base text-foreground/60 leading-relaxed mb-5"
            style={{ fontWeight: 300 }}
          >
            At UC Berkeley Haas, I found the vocabulary: discovery, prioritization, shipping. My internships at
            Shopify and Figma gave me the reps. I've written one-pagers at 11 PM, had a roadmap overturned by a
            single user interview, and shipped things I'm actually proud of.
          </motion.p>

          <motion.p
            variants={stagger.item}
            className="text-base text-foreground/60 leading-relaxed mb-12"
            style={{ fontWeight: 300 }}
          >
            I'm looking for an APM role — ideally fintech, edtech, or developer tools — where I can go deep on
            a real problem and grow into a PM who ships things that change how people work.
          </motion.p>

          {/* Traits */}
          <motion.div variants={stagger.item} className="border-t border-border pt-10 mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6" style={MONO}>
              What I care about
            </p>
            <div className="grid grid-cols-2 gap-0">
              {[
                ["Understanding users", "before building anything"],
                ["Ruthless prioritization", "saying no is a skill"],
                ["Writing clearly", "good docs = good thinking"],
                ["Speed + quality", "not a tradeoff if you're disciplined"],
              ].map(([title, sub]) => (
                <div key={title} className="py-4 border-b border-border">
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  <p className="text-xs text-foreground/40 mt-0.5" style={MONO}>{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={stagger.item} className="flex items-center gap-8">
            <Link
              to="/"
              className="text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
              style={MONO}
            >
              ← See my work
            </Link>
            <a
              href="mailto:jordan.lee@example.com"
              className="text-xs uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
              style={MONO}
            >
              Get in touch →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
