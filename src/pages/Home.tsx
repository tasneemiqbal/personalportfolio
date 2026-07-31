import { Link } from "react-router";

import schedaddleImg from "../assets/schedaddle.png";
import digImg from "../assets/digmag.jpg";
import pennypalImg from "../assets/pennypal.png";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

const RESUME = `${import.meta.env.BASE_URL}Tasneem_Iqbal_Resume.pdf`;

// The three live publications are the most verifiable thing on the page, so
// they stay as real links a recruiter can check in one click.
const publications = [
  { domain: "lbcurrent.com", href: "https://lbcurrent.com/" },
  { domain: "digmaglb.com", href: "https://www.digmaglb.com/" },
  { domain: "enyelb.com", href: "https://www.enyelb.com/" },
];

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
  {
    id: "03",
    title: "PennyPal",
    category: "Side project",
    year: "2025",
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

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const inner = (
    <>
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
          {project.href && " ↗"}
        </h3>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-2 ml-8" style={MONO}>
        {project.category} · {project.year}
      </p>
    </>
  );

  const className =
    "group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

  return project.to ? (
    <Link to={project.to} className={className}>
      {inner}
    </Link>
  ) : (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  );
}

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between px-5 sm:px-8 pt-28 sm:pt-32 pb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="text-[clamp(64px,14vw,180px)] font-bold uppercase leading-[0.9] tracking-tight"
            style={BARLOW_CONDENSED}
          >
            Tasneem
          </h1>
          <h1
            className="text-[clamp(64px,14vw,180px)] font-bold uppercase leading-[0.9] tracking-tight text-foreground/50"
            style={BARLOW_CONDENSED}
          >
            Iqbal
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-3" style={MONO}>
                Product Manager. Engineer.
              </p>
              <p className="text-base text-foreground/60 max-w-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                I keep three student publications online and decide what actually ships.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {publications.map((pub) => (
                  <a
                    key={pub.domain}
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.1em] text-brand hover:text-foreground transition-colors"
                    style={MONO}
                  >
                    {pub.domain} ↗
                  </a>
                ))}
              </div>
            </div>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-brand transition-colors self-start sm:self-end whitespace-nowrap"
              style={MONO}
            >
              About me →
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <span className="text-xs text-foreground/60" style={MONO} aria-hidden="true">
            ↓
          </span>
        </div>
      </section>

      {/* WORK */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="mb-12 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60" style={MONO}>
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

      {/* CONTACT */}
      <section className="px-5 sm:px-8 py-20 sm:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 pt-1" style={MONO}>
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
