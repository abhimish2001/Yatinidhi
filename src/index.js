import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Testimonial from "./components/Testimonial";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import BlogPage from "./components/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "blogpage",
    element: <BlogPage />,
  },
  {
    path: "testimonial",
    element: <Testimonial />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
reportWebVitals();
