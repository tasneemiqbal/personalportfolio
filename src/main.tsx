import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// The 404.html path restore deliberately does NOT live here. `import App` above
// evaluates routes.ts, which builds the router and snapshots location, before
// any statement in this file runs, so a restore here would always be too late.
// It is an inline script in index.html instead.

createRoot(document.getElementById("root")!).render(<App />);
