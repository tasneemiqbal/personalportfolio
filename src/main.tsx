import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Restore the path stashed by public/404.html before the router reads the URL.
// See that file for why GitHub Pages needs this.
const redirect = sessionStorage.getItem("spa:redirect");
if (redirect) {
  sessionStorage.removeItem("spa:redirect");
  history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
