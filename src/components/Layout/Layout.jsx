import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Common/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
