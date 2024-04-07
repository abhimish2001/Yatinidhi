import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import BlogPage from "../src/pages/blog/BlogPage";
import AboutUs from "../src/pages/about/AboutUs";
import Testimonial from "../src/pages/testimonial/Testimonial";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/blogpage",
    element: <BlogPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
reportWebVitals();
