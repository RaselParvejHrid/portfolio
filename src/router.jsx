import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./components/ErrorPage";
import Portfolio from "./routes/Portfolio";
import Blog from "./routes/Blog";
import Project from "./routes/Portfolio/components/MyProjects/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "project/:projectID",
        element: <Project />,
      },
    ],
  },
]);

export default router;
