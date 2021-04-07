import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTow,
  homeObjThree,
} from "../components/InfoSection/Data";
// import { teamObjOne } from "../components/Team/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import ClientsSection from "../components/ClientsSection";
import { clientObjOne } from "../components/ClientsSection/Data";
import Team from "../components/Team";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTow} />
      <Team />
      {/* <InfoSection {...homeObjThree} /> */}
      <Services />
      <ClientsSection {...clientObjOne} />
      <Footer />
    </>
  );
};

export default Home;
