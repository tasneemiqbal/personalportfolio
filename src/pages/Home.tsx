import { Link } from "react-router";

import schedaddleImg from "../assets/schedaddle.png";
import digImg from "../assets/digmag.jpg";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

const RESUME = `${import.meta.env.BASE_URL}Tasneem_Iqbal_Resume.pdf`;

// Optical alignment for the stacked name, measured rather than eyeballed. In
// Barlow Condensed 700 the ink of "I" starts 0.044em into its advance width
// while "T" starts at 0.024em, so IQBAL would otherwise sit 0.020em right of
// TASNEEM. Pulling it back by exactly that difference squares the left edge,
// and being em-based it holds at every size the clamp produces.
const IQBAL_OPTICAL: React.CSSProperties = { ...BARLOW_CONDENSED, marginLeft: "-0.02em" };

const projects = [
  {
    id: "01",
    title: "Schedaddle",
    category: "Case study",
    year: "2026",
    image: schedaddleImg,
    imageAlt: "Schedaddle Figma prototype screens",
    to: "/work/schedaddle",
  },
  {
    id: "02",
    title: "DIG Magazine",
    category: "Case study",
    year: "2026",
    image: digImg,
    imageAlt: "DIG Magazine site preview",
    to: "/work/dig",
  },
];

// Carried over from currently.txt on the archived v1 offline page, in Tasneem's
// own words. This block only works while it is true, so it wants updating when
// the answers change. That is the whole point of it.
const currently = [
  ["Listening", "ECLESIA - Album by Naika"],
  ["Watching", "Main Hoon Na"],
  ["Reading", "Cracking the PM Interview (No seriously)"],
  ["Building", "My personal DJ website, somewhere to upload my mixes"],
];

const contact = [
  { label: "Email", value: "tasneemiqbal417@gmail.com", href: "mailto:tasneemiqbal417@gmail.com" },
  { label: "LinkedIn", value: "in/tasneemiqbal89 ↗", href: "https://www.linkedin.com/in/tasneemiqbal89" },
  { label: "GitHub", value: "tasneemiqbal ↗", href: "https://github.com/tasneemiqbal" },
  { label: "Resume", value: "Download PDF ↗", href: RESUME },
];

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
      <div className="flex items-baseline gap-4">
        <span className="text-xs text-brand shrink-0" style={MONO}>
          {project.id}
        </span>
        <h3
          className="text-[clamp(24px,3vw,36px)] font-bold uppercase leading-none tracking-tight transition-colors group-hover:text-brand"
          style={BARLOW_CONDENSED}
        >
          {project.title}
        </h3>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-2 ml-8" style={MONO}>
        {project.category} · {project.year}
      </p>
    </Link>
  );
}

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <h1
          className="text-[clamp(64px,14vw,180px)] font-bold uppercase leading-[0.9] tracking-tight"
          style={BARLOW_CONDENSED}
        >
          Tasneem
        </h1>
        <h1
          className="text-[clamp(64px,14vw,180px)] font-bold uppercase leading-[0.9] tracking-tight text-brand-soft"
          style={IQBAL_OPTICAL}
        >
          Iqbal
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-8" style={MONO}>
          Product Manager. Engineer.
        </p>
      </section>

      {/* WORK */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="mb-12 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-brand" style={MONO}>
            Work
          </p>
          <p className="text-xs text-foreground/60" style={MONO}>
            {projects.length}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-warm mb-12" style={MONO}>
          Currently
        </p>
        <dl className="border-t border-border max-w-3xl">
          {currently.map(([label, value]) => (
            <div key={label} className="py-4 border-b border-border flex flex-col sm:flex-row sm:gap-8">
              <dt
                className="text-xs uppercase tracking-[0.2em] text-brand-warm sm:w-32 shrink-0 mb-1 sm:mb-0"
                style={MONO}
              >
                {label}
              </dt>
              <dd className="text-sm text-foreground/80">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CONTACT */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-brand pt-1" style={MONO}>
              Contact
            </p>
          </div>
          <div className="md:col-span-4">
            <h2
              className="text-[clamp(44px,8vw,96px)] font-bold uppercase leading-none tracking-tight mb-6"
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
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="py-5 border-t border-border last:border-b flex items-center justify-between gap-4 hover:text-brand transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60" style={MONO}>
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
