import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Schedaddle } from "../pages/Schedaddle";
import { Dig } from "../pages/Dig";
import { PennyPal } from "../pages/PennyPal";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "work/schedaddle", Component: Schedaddle },
        { path: "work/dig", Component: Dig },
        { path: "work/pennypal", Component: PennyPal },
        // Inside Root so a wrong URL still gets the nav and the footer.
        { path: "*", Component: NotFound },
      ],
    },
  ],
  {
    // Vite's BASE_URL is '/personalportfolio/' in production and '/' in dev.
    // React Router wants the basename without a trailing slash.
    basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  }
);
