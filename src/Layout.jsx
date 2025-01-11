import { Footer, Header } from "./components/totalimport.js";
import { Outlet } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
