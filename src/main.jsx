import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  About,
  Contact,
  Home,
  User,
  Github,
} from "./components/totalimport.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import githubinfo from "./githubinfo.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubinfo} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
