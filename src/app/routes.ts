import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
      ],
    },
  ],
  {
    // Vite's BASE_URL is '/personalportfolio/' in production and '/' in dev.
    // React Router wants the basename without a trailing slash.
    basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  }
);
