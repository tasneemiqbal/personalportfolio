import { Outlet, NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";

const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const BARLOW: React.CSSProperties = { fontFamily: "'Barlow', sans-serif" };

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

  const isAbout = location.pathname === "/about";

  return (
    <div
      className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background"
      style={BARLOW}
    >
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors"
          style={MONO}
        >
          Jordan Lee
        </NavLink>
        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xs tracking-[0.2em] uppercase transition-colors ${isActive && !isAbout ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`
            }
            style={MONO}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-xs tracking-[0.2em] uppercase transition-colors ${isActive ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`
            }
            style={MONO}
          >
            About
          </NavLink>
          <a
            href="#"
            className="text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors"
            style={MONO}
          >
            Resume ↗
          </a>
        </nav>
      </header>

      <Outlet />

      {/* FOOTER */}
      <footer className="px-8 py-8 border-t border-border flex items-center justify-between">
        <p className="text-xs text-foreground/30" style={MONO}>
          © 2025 Jordan Lee
        </p>
        <p className="text-xs text-foreground/30" style={MONO}>
          {time} PST
        </p>
      </footer>
    </div>
  );
}
