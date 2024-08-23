"use client";
import React, { useRef, useState } from "react";
import Navbar from "@/Components/Navbar";
import SectionOne from "@/Components/HomeSections/SectionOne";
import SectionTwo from "@/Components/HomeSections/SectionTwo";
import SectionFour from "@/Components/HomeSections/SectionFour";
import SectionThree from "@/Components/HomeSections/SectionThree";
import SectionFive from "@/Components/HomeSections/SectionFive";
import SectionSix from "@/Components/HomeSections/SectionSix";
import SectionSeven from "@/Components/HomeSections/SectionSeven";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  const [isDark, setIsDark] = useState(false)
    
  const toggleDarkMode = () => {
      setIsDark(!isDark);
  }
  return (
    <div className={`${isDark ? 'dark' : 'light'} overflow-x-hidden`}>
      <Navbar isDark={isDark} toggleDark={toggleDarkMode} />
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
    </div>
  );
};

export default Home;
