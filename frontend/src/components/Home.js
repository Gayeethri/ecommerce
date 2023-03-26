import React from "react";
import Navbar from "./Navbar";
import Hoverbar from "./Hoverbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import EtsyBody from "./EtsyBody";
import AboutFooter from "./AboutFooter";
import FooterBanner from "./FooterBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <EtsyBody /> 
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default Home;
