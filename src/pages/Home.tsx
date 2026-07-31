import { useState, useRef } from "react";
import { motion, useSpring } from "motion/react";
import { Link } from "react-router";

import schedaddleImg from "../assets/schedaddle.png";
import digImg from "../assets/digmag.jpg";
import pennypalImg from "../assets/pennypal.png";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

const RESUME = `${import.meta.env.BASE_URL}Tasneem_Iqbal_Resume.pdf`;

// The three live publications are the proof the whole page rests on, so they
// sit high enough that a recruiter can verify the claim in one click.
const publications = [
  {
    name: "Long Beach Current",
    domain: "lbcurrent.com",
    role: "Student newspaper · live",
    href: "https://lbcurrent.com/",
  },
  {
    name: "DIG Magazine",
    domain: "digmaglb.com",
    role: "Arts & culture · redesign in progress",
    href: "https://www.digmaglb.com/",
  },
  {
    name: "ENYE",
    domain: "enyelb.com",
    role: "Bilingual magazine · live",
    href: "https://www.enyelb.com/",
  },
];

const projects = [
  {
    id: "01",
    title: "Schedaddle",
    company: "CS Senior Project, CSULB · Product lead",
    year: "Jan 2026 to present",
    outcome: "Three interviews killed the chat feature we came in wanting to build.",
    detail:
      "A lightweight scheduling tool for small teams. It combines availability polling, shift scheduling, and announcements in one place, replacing the patchwork of When2Meet, Sheets, and group chats. On a team of 5, I ran user interviews, co-authored the spec, and drove the Figma prototype.",
    metrics: ["15-screen prototype", "5 modules specced", "Team of 5"],
    image: schedaddleImg,
    imageAlt: "Schedaddle Figma prototype screens",
    to: "/work/schedaddle",
  },
  {
    id: "02",
    title: "DIG Magazine",
    company: "Beach Media, CSULB · Product & engineering lead",
    year: "Jun 2026 to present",
    outcome: "Key content went from three clicks deep to one across six of eight sections.",
    detail:
      "Product and engineering lead on the redesign of CSULB's arts and culture magazine. I walked the old navigation and found key content sitting three clicks deep; the new structure gets it to one across six of eight sections. Now building the approved Figma design as a responsive site.",
    metrics: ["3 → 1 clicks", "6 / 8 sections", "Build in progress"],
    image: digImg,
    imageAlt: "DIG Magazine site preview",
    to: "/work/dig",
  },
  {
    id: "03",
    title: "PennyPal",
    company: "Personal project · Solo build",
    year: "May 2025",
    outcome: "A budgeting web app that shows where the money actually went.",
    detail:
      "A budgeting web app: log expenses, set limits per category, and see where the money actually went. Flask on the back, Firebase for auth, Chart.js for the breakdowns.",
    metrics: ["Flask + Firebase", "Chart.js breakdowns", "Solo build"],
    image: pennypalImg,
    imageAlt: "PennyPal budgeting app preview",
    href: "https://github.com/tasneemiqbal/PennyPal/tree/main",
  },
];

const contact = [
  { label: "Email", value: "tasneemiqbal417@gmail.com", href: "mailto:tasneemiqbal417@gmail.com" },
  { label: "LinkedIn", value: "in/tasneemiqbal89 ↗", href: "https://www.linkedin.com/in/tasneemiqbal89" },
  { label: "GitHub", value: "tasneemiqbal ↗", href: "https://github.com/tasneemiqbal" },
  { label: "Resume", value: "Download PDF ↗", href: RESUME },
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
      <section className="min-h-screen flex flex-col justify-between px-5 sm:px-8 pt-28 sm:pt-32 pb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="text-[clamp(64px,14vw,180px)] font-black uppercase leading-[0.9] tracking-tight"
            style={BARLOW_CONDENSED}
          >
            Tasneem
          </h1>
          <h1
            className="text-[clamp(64px,14vw,180px)] font-black uppercase leading-[0.9] tracking-tight text-foreground/20"
            style={BARLOW_CONDENSED}
          >
            Iqbal
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-3" style={MONO}>
                Product Manager. Engineer. DJ. Reader. Avid Movie Watcher.
              </p>
              <p className="text-base text-foreground/60 max-w-md leading-relaxed" style={{ fontWeight: 300 }}>
                Phew, so glad you found your way in.
                <br />
                I keep three student publications online, decide what actually ships, and sweat the details most
                people scroll past.
              </p>
            </div>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors self-start sm:self-end whitespace-nowrap"
              style={MONO}
            >
              About me →
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-8 gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/30" style={MONO}>
            Open to Associate PM roles for Spring 2027
          </span>
          <span className="text-xs text-foreground/30" style={MONO}>
            ↓
          </span>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="px-5 sm:px-8 py-20 border-t border-border">
        <div className="mb-10 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50" style={MONO}>
            Live and shipping
          </p>
          <p className="text-xs text-foreground/30" style={MONO}>
            3
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {publications.map((pub) => (
            <a
              key={pub.domain}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-6 flex flex-col justify-between min-h-[132px] hover:bg-secondary transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-2" style={MONO}>
                  {pub.domain} ↗
                </p>
                <h3
                  className="text-2xl font-bold uppercase leading-none tracking-tight"
                  style={BARLOW_CONDENSED}
                >
                  {pub.name}
                </h3>
              </div>
              <p className="text-sm text-foreground/50 mt-4" style={{ fontWeight: 300 }}>
                {pub.role}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="mb-12 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50" style={MONO}>
            The work
          </p>
          <p className="text-xs text-foreground/30" style={MONO}>
            {projects.length}
          </p>
        </div>

        <p className="text-base text-foreground/60 max-w-xl mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
          Two case studies and a side project. The case studies are where the product decisions live: what I chose
          to build, what I chose to leave out, and what I got wrong.
        </p>

        <div
          ref={listRef}
          className="relative flex flex-col"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* Floating cursor image, pointer devices only */}
          <motion.div
            className="absolute pointer-events-none z-20 hidden md:block"
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-60%" }}
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
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </motion.div>

          {projects.map((p) => {
            const isOpen = openProject === p.id;
            return (
              <div key={p.id} className="border-t border-border last:border-b">
                <button
                  className="w-full text-left py-7 group"
                  aria-expanded={isOpen}
                  onMouseEnter={() => setHoveredProject(p.id)}
                  onFocus={() => setHoveredProject(p.id)}
                  onClick={() => setOpenProject(isOpen ? null : p.id)}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-5 min-w-0">
                      <span className="text-xs text-foreground/30 shrink-0" style={MONO}>
                        {p.id}
                      </span>
                      <h3
                        className="text-[clamp(26px,3.5vw,40px)] font-bold uppercase leading-none tracking-tight group-hover:text-foreground/50 transition-colors duration-200"
                        style={BARLOW_CONDENSED}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <span
                      className="text-foreground/30 shrink-0 text-sm transition-transform duration-200"
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </div>
                  <p className="mt-2 ml-8 sm:ml-9 text-sm text-foreground/50" style={{ fontWeight: 300 }}>
                    {p.outcome}
                  </p>
                </button>

                <motion.div
                  initial={false}
                  animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="ml-8 sm:ml-9 pb-10">
                    <motion.div
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={
                        isOpen ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }
                      }
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.05 }}
                      className="w-full max-w-2xl h-52 sm:h-64 mb-8 overflow-hidden bg-muted"
                      style={{ borderRadius: "2px" }}
                    >
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-l border-border pl-6 sm:pl-8">
                      <div className="md:col-span-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3" style={MONO}>
                          {p.company} · {p.year}
                        </p>
                        <p
                          className="text-base text-foreground/70 leading-relaxed max-w-xl mb-6"
                          style={{ fontWeight: 300 }}
                        >
                          {p.detail}
                        </p>
                        {p.to ? (
                          <Link
                            to={p.to}
                            className="text-xs uppercase tracking-[0.2em] text-foreground hover:text-foreground/50 transition-colors border-b border-foreground/30 pb-1"
                            style={MONO}
                          >
                            Read the case study →
                          </Link>
                        ) : (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs uppercase tracking-[0.2em] text-foreground hover:text-foreground/50 transition-colors border-b border-foreground/30 pb-1"
                            style={MONO}
                          >
                            View on GitHub ↗
                          </a>
                        )}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-4" style={MONO}>
                          Where it stands
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
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 pt-1" style={MONO}>
              Contact
            </p>
          </div>
          <div className="md:col-span-4">
            <h2
              className="text-[clamp(44px,8vw,96px)] font-black uppercase leading-none tracking-tight mb-6"
              style={BARLOW_CONDENSED}
            >
              Say hi.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col">
            {contact.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="py-5 border-t border-border last:border-b flex items-center justify-between gap-4 hover:text-foreground/50 transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/40" style={MONO}>
                  {link.label}
                </span>
                <span className="text-sm text-right break-all">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
