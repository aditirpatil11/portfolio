import React, { Suspense, lazy } from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

// Lazy load pages
const About = lazy(() => import("./pages/AboutPage"));
const Projects = lazy(() => import("./pages/ProjectsPage"));
const Skills = lazy(() => import("./pages/SkillsPage"));
const Experience = lazy(() => import("./pages/ExperiencePage"));
const Certifications = lazy(() => import("./pages/CertificationsPage"));
const Publications = lazy(() => import("./pages/PublicationsPage"));
const Contact = lazy(() => import("./pages/ContactPage"));

// Simple loading component
const Loading = () => <div className="p-4 text-center">Loading...</div>;

// Error Page
const ErrorPage = () => <div className="p-4 text-center">Something went wrong</div>;

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: "projects", element: <Suspense fallback={<Loading />}><Projects /></Suspense> },
      { path: "skills", element: <Suspense fallback={<Loading />}><Skills /></Suspense> },
      { path: "experience", element: <Suspense fallback={<Loading />}><Experience /></Suspense> },
      { path: "certifications", element: <Suspense fallback={<Loading />}><Certifications /></Suspense> },
      { path: "publications", element: <Suspense fallback={<Loading />}><Publications /></Suspense> },
      { path: "contact", element: <Suspense fallback={<Loading />}><Contact /></Suspense> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
