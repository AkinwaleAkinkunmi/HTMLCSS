"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Components/Ciseco images/Ciseco logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = ({ isDark, toggleDark }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [showDropDown3, setShowDropDown3] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropDown2(false);
    setShowDropDown3(false);
    setShowDropdown(!showDropdown);
  };

  const handleDropdownToggle2 = () => {
    setShowDropDown3(false);
    setShowDropDown2(!showDropDown2);
  };

  const handleDropdownToggle3 = () => {
    setShowDropDown2(false);
    setShowDropDown3(!showDropDown3);
  };
  return (
    <section className="flex justify-between px-[5rem] items-center py-[20px] fixed z-50 bg-white w-screen">
      <Link href={"/"}>
        <div className="w-fit">
          <Image
            src={logo}
            alt="Ciseco logo"
            width={0}
            height={0}
            className="w-[8rem] object-cover"
          />
        </div>
      </Link>

      <div className="m-auto">
        <ul className="flex text-md  text-[15px] font-medium font-Poppins relative">
          <Link href={"/products"}>
            <li className="cursor-pointer hover:bg-neutral-200 hover:rounded-3xl py-2.5 px-4">
              Products
            </li>
          </Link>
          <li className="cursor-pointer hover:bg-neutral-200 hover:rounded-3xl py-2.5 px-4">
            Women
          </li>
          <li className="cursor-pointer hover:bg-neutral-200 hover:rounded-3xl py-2.5 px-4">
            Beauty
          </li>
          <li className="cursor-pointer hover:bg-neutral-200 hover:rounded-3xl py-2.5 px-4">
            Sport
          </li>
          <li className="flex items-center cursor-pointer hover:bg-neutral-200 hover:rounded-3xl py-2.5 px-4">
            Templates <IoIosArrowDown className="text-neutral-400 mt-[2px]" />
          </li>
          <li
            className="flex items-center cursor-pointer  hover:bg-neutral-200 hover:rounded-3xl py-2.5 px-4"
            onClick={handleDropdownToggle}
          >
            Explore <IoIosArrowDown className="text-neutral-400 mt-[2px]" />
          </li>
          {showDropdown && (
            <ul
              className="absolute bg-white text white top-12 right-[-7rem] px-1 py-2 w-[13rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-neutral-500"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                Home Demo 1
              </li>

              <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                Home Demo 2
              </li>

              <li
                className="px-4 py-2 flex items-center relative gap-3 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md"
                onClick={handleDropdownToggle2}
              >
                Category Pages <IoIosArrowDown className="text-neutral-400" />
              </li>

              {showDropDown2 == false ? (
                ""
              ) : (
                <ul
                  className="absolute bg-white text white top-[5.5rem] right-[-14rem] px-1 py-2 w-[13rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-neutral-500"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                    Category 1
                  </li>
                  <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                    Category 2
                  </li>
                </ul>
              )}

              <li
                className="px-4 py-2 flex items-center gap-3 relative hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md"
                onClick={handleDropdownToggle3}
              >
                Product Pages <IoIosArrowDown className="text-neutral-400" />
              </li>

              {showDropDown3 == false ? (
                ""
              ) : (
                <ul
                  className="absolute bg-white text white top-[7.9rem] right-[-14rem] px-1 py-2 w-[13rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-neutral-500"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                    Product 1
                  </li>
                  <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                    Product 2
                  </li>
                </ul>
              )}

              <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                Cart Page
              </li>

              <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                Checkout Page
              </li>

              <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                Search Page
              </li>

              <li className="px-4 py-2 hover:bg-neutral-200 hover:text-neutral-600 hover:rounded-md">
                Account Page
              </li>
            </ul>
          )}
        </ul>
      </div>

      <div className="flex gap-6 items-center">
        <div>
          <IoSearchOutline className="text-2xl" />
        </div>
        <div>
          <CiUser className="text-2xl" />
        </div>
        <div>
          <IoCartOutline className="text-2xl" />
        </div>
        <div onClick={toggleDark}>
          {isDark === false ? (
            <div>
              <FaMoon />
            </div>
          ) : (
            <div>
              <IoSunny />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
