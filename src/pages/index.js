import React, { useState } from "react";
import ScrollUpButton from "react-scroll-up-button";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTow,
  // homeObjThree,
} from "../components/InfoSection/Data";
// import { teamObjOne } from "../components/Team/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import ClientsSection from "../components/ClientsSection";
import { clientObjOne } from "../components/ClientsSection/Data";
import Price from "../components/price";
// import Team from "../components/Team";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollUpButton style={{ backgroundColor: "#49a3da" }} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Price />
      <InfoSection {...homeObjTow} />
      {/* <Team /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      <ClientsSection {...clientObjOne} />
      <Footer />
    </>
  );
};

export default Home;
