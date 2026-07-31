import { Outlet, NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";

const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const BARLOW: React.CSSProperties = { fontFamily: "'Barlow', sans-serif" };

const RESUME = `${import.meta.env.BASE_URL}Tasneem_Iqbal_Resume.pdf`;

const navLink = ({ isActive }: { isActive: boolean }) =>
  `text-xs tracking-[0.2em] uppercase transition-colors ${
    isActive ? "text-brand" : "text-foreground/60 hover:text-brand"
  }`;

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
      className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background"
      style={BARLOW}
    >
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between bg-background/80 backdrop-blur-sm">
        <NavLink
          to="/"
          className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-brand transition-colors"
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

      <Outlet />

      {/* FOOTER */}
      <footer className="px-5 sm:px-8 py-8 border-t border-border flex items-center justify-between gap-4">
        <p className="text-xs text-foreground/60" style={MONO}>
          © 2026 Tasneem Iqbal
        </p>
        <p className="text-xs text-foreground/60" style={MONO}>
          {time} Long Beach, CA
        </p>
      </footer>
    </div>
  );
}
