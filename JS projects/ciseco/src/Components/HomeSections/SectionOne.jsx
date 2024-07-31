"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import cis1 from "../Ciseco images/hero-1.png";
import cis2 from "../Ciseco images/Ciseco beginning 2 nobg.png";
import cis3 from "../Ciseco images/hero-right-3.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const SectionOne = () => {
  const [showSectionOne, setShowSectionOne] = useState(true);
  const [showSectionTwo, setShowSectionTwo] = useState(false);
  const [showSectionThree, setShowSectionThree] = useState(false);

  const toggleSectionOne = () => {
    setShowSectionTwo(false);
    setShowSectionThree(false);
    setShowSectionOne(!showSectionOne);
  };

  const toggleSectionTwo = () => {
    setShowSectionOne(false);
    setShowSectionThree(false);
    setShowSectionTwo(!showSectionTwo);
  };

  const toggleSectionThree = () => {
    setShowSectionOne(false);
    setShowSectionTwo(false);
    setShowSectionThree(!showSectionThree);
  };

  return (
    <div className="relative pt-20">
      <span className="absolute left-8 top-[45%]">
        <PiCaretLeftLight className="text-5xl" />
      </span>
      <span className="absolute right-8 top-[45%]">
        <PiCaretRightLight className="text-5xl" />
      </span>
      <div className="flex items-center gap-3 justify-center m-auto right-0 left-0 absolute bottom-[20px] z-50">
        <p
          onClick={toggleSectionOne}
          className={`h-1 w-20 cursor-pointer ${
            showSectionOne === true ? "bg-black" : "bg-white"
          } rounded-full`}
        ></p>
        <p
          onClick={toggleSectionTwo}
          className={`h-1 w-20 cursor-pointer ${
            showSectionTwo === true ? "bg-black" : "bg-white"
          } rounded-full`}
        ></p>
        <p
          onClick={toggleSectionThree}
          className={`h-1 w-20 cursor-pointer ${
            showSectionThree === true ? "bg-black" : "bg-white"
          } rounded-full`}
        ></p>
      </div>

      {showSectionOne && (
        <section className="flex items-center px-16 bg-green-100 h-[100vh]">
          <div data-aos="fade-right" data-aos-duration="500">
            <div>
              <p className="text-[rgb(51, 65, 85)] text-[20px] font-medium">
                In this season, find the best 🔥
              </p>
              <h2 className="text-6xl text-[rgb(51, 65, 85)] font-bold mt-4">
                Exclusive collection <br />
                for everyone
              </h2>
            </div>
            <button className="py-5 px-9 bg-black text-white mt-14 rounded-full flex items-center text-md font-semibold">
              Explore now <CiSearch className="text-2xl ml-2.5 mt-1" />
            </button>
          </div>

          <div
            className="ml-auto"
            data-aos="zoom-out-up"
            data-aos-duration="500"
          >
            <Image
              src={cis1}
              alt="section-one"
              width={0}
              height={0}
              className="w-[40rem] pt-5 z-10"
            />
          </div>
        </section>
      )}

      {showSectionTwo && (
        <section className="flex items-center px-16 bg-green-100 h-[100vh]">
          <div data-aos="fade-right" data-aos-duration="500">
            <div>
              <p className="text-[rgb(51, 65, 85)] text-[20px] font-medium">
                In this season, find the best 🔥
              </p>
              <h2 className="text-6xl text-[rgb(51, 65, 85)] font-bold mt-4">
                Exclusive collection <br />
                for everyone
              </h2>
            </div>
            <button className="py-5 px-9 bg-black text-white mt-14 rounded-full flex items-center text-md font-semibold">
              Explore now <CiSearch className="text-2xl ml-2.5 mt-1" />
            </button>
          </div>

          <div
            className="ml-auto "
            data-aos="zoom-out-up"
            data-aos-duration="500"
          >
            <Image
              src={cis2}
              alt="section-one"
              width={0}
              height={0}
              className="w-[30rem] pt-5 z-10"
            />
          </div>
        </section>
      )}

      {showSectionThree && (
        <section className="flex items-center px-16 bg-green-100 h-[100vh]">
          <div data-aos="fade-right" data-aos-duration="500">
            <div>
              <p className="text-[rgb(51, 65, 85)] text-[20px] font-medium">
                In this season, find the best 🔥
              </p>
              <h2 className="text-6xl text-[rgb(51, 65, 85)] font-bold mt-4">
                Exclusive collection <br />
                for everyone
              </h2>
            </div>
            <button className="py-5 px-9 bg-black text-white mt-14 rounded-full flex items-center text-md font-semibold">
              Explore now <CiSearch className="text-2xl ml-2.5 mt-1" />
            </button>
          </div>

          <div
            className="ml-auto "
            data-aos="zoom-out-up"
            data-aos-duration="500"
          >
            <Image
              src={cis3}
              alt="section-one"
              width={0}
              height={0}
              className="w-[30rem] pt-5 z-10"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default SectionOne;
