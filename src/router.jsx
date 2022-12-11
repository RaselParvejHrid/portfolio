import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./components/ErrorPage";
import Portfolio from "./routes/Portfolio";
import Blog from "./routes/Blog";
import Project from "./routes/Portfolio/components/MyProjects/Project";
import ProjectDetail, { loader as projectLoader } from "./routes/ProjectDetail";

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
        loader: projectLoader,
        element: <ProjectDetail />,
      },
    ],
  },
]);

export default router;
