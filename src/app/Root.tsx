import { Outlet, NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";

const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const BARLOW: React.CSSProperties = { fontFamily: "'Barlow', sans-serif" };

const RESUME = `${import.meta.env.BASE_URL}Tasneem_Iqbal_Resume.pdf`;

const navLink = ({ isActive }: { isActive: boolean }) =>
  `text-xs tracking-[0.2em] uppercase transition-colors ${
    isActive ? "text-brand" : "text-foreground/60 hover:text-brand"
  }`;

// The email shows the address itself rather than a verb like "Get in touch".
// A mailto: does nothing at all on a machine with no mail client registered,
// so the label has to stay useful when the click fails: readable and copyable.
const contact = [
  { label: "tasneemiqbal417@gmail.com", href: "mailto:tasneemiqbal417@gmail.com" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/tasneemiqbal89" },
  { label: "GitHub ↗", href: "https://github.com/tasneemiqbal" },
  { label: "Resume ↗", href: RESUME },
];

export function Root() {
  const location = useLocation();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Every route change should start at the top. Without this, opening a case
  // study from halfway down the project list drops you into its middle.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      // No bg-background here on purpose: the cream lives on html so the
      // ambient field in theme.css can show through. An opaque background on
      // this wrapper would cover the whole thing.
      //
      // flex column so the footer is pinned to the bottom of the viewport on a
      // page too short to fill it. Cream showing underneath a dark footer would
      // read as a rendering bug; it did not matter while the footer was cream.
      className="min-h-screen flex flex-col text-foreground selection:bg-foreground selection:text-background"
      style={BARLOW}
    >
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between bg-background/80 backdrop-blur-sm">
        {/* Hidden below sm. The wordmark plus three tracked mono items needs
            about 490px, so on a phone it pushed Resume off the right edge and
            gave every page a horizontal scroll. Resume is the primary CTA and
            the reader is usually on a phone, so the wordmark is what gives way:
            Work goes to the same place, and the name is already in the hero and
            the footer. */}
        <NavLink
          to="/"
          className="hidden sm:block text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-brand transition-colors"
          style={MONO}
        >
          Tasneem Iqbal
        </NavLink>
        <nav className="flex items-center gap-5 sm:gap-8">
          <NavLink to="/" end className={navLink} style={MONO}>
            Work
          </NavLink>
          <NavLink to="/about" className={navLink} style={MONO}>
            About
          </NavLink>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-brand transition-colors"
            style={MONO}
          >
            Resume ↗
          </a>
        </nav>
      </header>

      <div className="flex-1">
        <Outlet />
      </div>

      {/* FOOTER, the only place contact lives, on every page, and the one
          committed surface on the site. The ink is a colour the site already
          owns; using it as a field rather than only as type gives the pages a
          second visual world and a definite end.

          The two blues swap roles here. --brand measures 2.78:1 on this ground
          and fails small text outright; --brand-soft measures 5.61:1 and
          passes. So the tone that is display-only on cream is the one that
          carries small text on ink, and vice versa. Cream at 60% is 6.42:1. */}
      <footer className="bg-accent text-background px-5 sm:px-8 py-14 sm:py-16">
        {/* Set in the accent rather than at /60, so the nudge reads before the
            links it is nudging you toward. */}
        <p className="text-xs text-brand-soft mb-6" style={MONO}>
          don't leave too soon, say hi!
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {contact.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs text-background/60 hover:text-background transition-colors"
                style={MONO}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-xs text-background/60" style={MONO}>
              © 2026 Tasneem Iqbal
            </p>
            <p className="text-xs text-background/60" style={MONO}>
              {time} Los Angeles, CA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
