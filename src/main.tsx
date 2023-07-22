import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routing/router.tsx";
import TanStackRouterDevtools from "./routing/TanStackRouterDevtools.tsx";
import { RouterProvider } from "@tanstack/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </React.StrictMode>
);
