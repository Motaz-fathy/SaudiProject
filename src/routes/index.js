import { lazy } from "react";

const routes = [

  {
    path: "/",
    isPrivate: false,
    component: lazy(() => import("../pages/Home/Home")),
  },

  {
    path: "*",
    component: lazy(() => import("../pages/Home/Home")),
  },

];

export default routes;
