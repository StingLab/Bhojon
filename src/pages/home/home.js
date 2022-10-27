import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="my-20">
        <Outlet />
      </main>

      <Footer />

      {/* scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
