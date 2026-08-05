import { Link } from "react-router";

const BARLOW_CONDENSED: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

// Reachable only since the root-base build stopped emitting 404.html: every
// path now rewrites to index.html, so an unknown URL reaches the router instead
// of being bounced to the homepage. Without a route to catch it, React Router
// renders its own developer error screen, which is the last thing a recruiter
// should see on a site whose first claim is that this person is technically
// real. Set like the case study heroes so a wrong turn still looks deliberate.
export function NotFound() {
  return (
    <main className="px-5 sm:px-8 pt-28 sm:pt-32 pb-24">
      <p className="text-xs uppercase tracking-[0.3em] text-brand mb-5" style={MONO}>
        404
      </p>
      <h1
        className="text-[clamp(56px,11vw,150px)] font-bold uppercase leading-[0.9] tracking-tight mb-8"
        style={BARLOW_CONDENSED}
      >
        Nothing here
      </h1>
      <p
        className="text-xl sm:text-2xl leading-snug text-foreground/80 max-w-3xl mb-14"
        style={{ fontWeight: 300 }}
      >
        This page doesn't exist. The work does, though.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-brand hover:text-foreground transition-colors border-b border-brand/40 pb-1"
          style={MONO}
        >
          ← Back to the work
        </Link>
        <Link
          to="/about"
          className="text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
          style={MONO}
        >
          About
        </Link>
      </div>
    </main>
  );
}
