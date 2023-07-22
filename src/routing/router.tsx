import { Router, Route, RootRoute } from "@tanstack/router";
import App from "../App";
import { Root } from "../pages/Root";
import { PrivateRoute } from "./PrivateRoute";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <PrivateRoute to="/home" />,
});

const appRoute = new Route({
  getParentRoute: () => indexRoute,
  path: "/home",
  component: App,
});

const routeTree = rootRoute.addChildren([indexRoute.addChildren([appRoute])]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
