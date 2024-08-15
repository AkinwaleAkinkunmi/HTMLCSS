"use client";
import React, { useRef, useState } from "react";
import SectionOne from "@/Components/HomeSections/SectionOne";
import SectionTwo from "@/Components/HomeSections/SectionTwo";
import SectionFour from "@/Components/HomeSections/SectionFour";
import SectionThree from "@/Components/HomeSections/SectionThree";
import SectionFive from "@/Components/HomeSections/SectionFive";
import SectionSix from "@/Components/HomeSections/SectionSix";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
    </div>
  );
};

export default Home;
