import React, { useState } from "react";
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";
import { TbUserHexagon } from "react-icons/tb";
import { TbBarbellFilled } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
import { IoDiamond } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import Image from "next/image";

import bag from "../Ciseco images/green_bag-removebg-preview.png";
import illustOne from "../Ciseco images/explore 1.svg";
import green from "../Ciseco images/green_sweater-removebg-preview.png";

const SectionFour = () => {
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(false);
  const [kid, setKid] = useState(false);
  const [sport, setSport] = useState(false);
  const [beauty, setBeauty] = useState(false);
  const [jewelry, setJewelry] = useState(false);
  const [likeOne, setLikeOne] = useState(false);
  const [likeTwo, setLikeTwo] = useState(false);
  const [likeThree, setLikeThree] = useState(false);
  const [likeFour, setLikeFour] = useState(false);
  const [likeFive, setLikeFive] = useState(false);

  const handleLikeOne = () => {
    setLikeOne(!likeOne);
  };
  const handleLikeTwo = () => {
    setLikeTwo(!likeTwo);
  };
  const handleLikeThree = () => {
    setLikeThree(!likeThree);
  };
  const handleLikeFour = () => {
    setLikeFour(!likeFour);
  };
  const handleLikeFive = () => {
    setLikeFive(!likeFive);
  };

  const toggleMen = () => {
    setMen(true);
    setWomen(false);
    setKid(false);
    setSport(false);
    setBeauty(false);
    setJewelry(false);
  };

  const toggleWomen = () => {
    setMen(false);
    setWomen(true);
    setKid(false);
    setSport(false);
    setBeauty(false);
    setJewelry(false);
  };

  const toggleKid = () => {
    setMen(false);
    setWomen(false);
    setKid(true);
    setSport(false);
    setBeauty(false);
    setJewelry(false);
  };

  const toggleSport = () => {
    setMen(false);
    setWomen(false);
    setKid(false);
    setSport(true);
    setBeauty(false);
    setJewelry(false);
  };

  const toggleBeauty = () => {
    setMen(false);
    setWomen(false);
    setKid(false);
    setSport(false);
    setBeauty(true);
    setJewelry(false);
  };

  const toggleJewelry = () => {
    setMen(false);
    setWomen(false);
    setKid(false);
    setSport(false);
    setBeauty(false);
    setJewelry(true);
  };

  return (
    <div>
      <div className="bg-neutral-100 rounded-3xl px-[62px] py-[7rem] mt-16">
        <div>
          <h2 className="text-slate-900 text-center text-4xl font-bold mb-12">
            Start exploring.
          </h2>
          <ul className="flex bg-white w-fit m-auto mb-12 rounded-full px-1 cursor-pointer py-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
            {men === false ? (
              <li
                className="px-7 py-3 flex gap-2 text-neutral-600 font-base items-center"
                onClick={toggleMen}
              >
                <IoIosMale /> Men
              </li>
            ) : (
              <li
                className="bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center"
                onClick={toggleMen}
              >
                <IoIosMale /> Men
              </li>
            )}

            {women === false ? (
              <li
                className="px-7 py-3 flex gap-2 text-neutral-600 font-base items-center"
                onClick={toggleWomen}
              >
                <IoFemaleOutline /> Women
              </li>
            ) : (
              <li
                className="bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center"
                onClick={toggleWomen}
              >
                <IoFemaleOutline /> Women
              </li>
            )}

            {kid === false ? (
              <li
                className="px-7 py-3 flex gap-2 text-neutral-600 font-base items-center"
                onClick={toggleKid}
              >
                <TbUserHexagon /> Kids
              </li>
            ) : (
              <li
                className="bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center"
                onClick={toggleKid}
              >
                <TbUserHexagon /> Kids
              </li>
            )}

            {sport === false ? (
              <li
                className="px-7 py-3 flex gap-2 text-neutral-600 font-base items-center"
                onClick={toggleSport}
              >
                <TbBarbellFilled /> Sport
              </li>
            ) : (
              <li
                className="bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center"
                onClick={toggleSport}
              >
                <TbBarbellFilled /> Sport
              </li>
            )}

            {beauty === false ? (
              <li
                className="px-7 py-3 flex gap-2 text-neutral-600 font-base items-center"
                onClick={toggleBeauty}
              >
                <LuCrown /> Beauty
              </li>
            ) : (
              <li
                className="bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center"
                onClick={toggleBeauty}
              >
                <LuCrown /> Beauty
              </li>
            )}

            {jewelry === false ? (
              <li
                className="px-7 py-3 flex gap-2 text-neutral-600 font-base items-center"
                onClick={toggleJewelry}
              >
                <IoDiamond /> Jewelry
              </li>
            ) : (
              <li
                className="bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center"
                onClick={toggleJewelry}
              >
                <IoDiamond /> Jewelry
              </li>
            )}
          </ul>

          {men === true || kid === true || beauty === true ? (
            <div className="grid grid-cols-3 gap-7">
              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Cycling Shorts
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Cycling Jersey
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Car Coat
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Backpack
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    22 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Shoes
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Recycled blanket
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-7">
              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Backpack
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    22 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Shoes
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Recycled blanket
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Cycling Shorts
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Cycling Jersey
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 flex flex-col gap-14 relative shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-50 rounded-full w-20 h-20 pt-1">
                    <Image
                      src={bag}
                      width={0}
                      height={0}
                      className="object-cover w-[80%] m-auto"
                    />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold ml-auto">
                    155 products
                  </span>
                </div>
                <div>
                  <p className="text-sm mb-2 text-slate-500 font-base">
                    Manufacturer
                  </p>
                  <h2 className="text-3xl text-slate-900 font-bold z-50">
                    Car Coat
                  </h2>
                </div>
                <div>
                  <a href="" className="flex items-center gap-2">
                    See collection <GoArrowRight className="font-semibold" />
                  </a>
                </div>

                <div className="absolute z-0 bottom-0 right-[-5rem] opacity-75">
                  <Image
                    src={illustOne}
                    height={0}
                    width={0}
                    className="w-[80%]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-[62px] py-[7rem] mt-16">
        <div className="mb-14">
          <h2 className="text-black text-4xl font-bold">
            Best Sellers.{" "}
            <span className="text-neutral-500">Best selling of the month</span>
          </h2>
        </div>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={false}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="cursor-pointer">
                <div className="bg-blue-50 rounded-3xl w-[100%] mb-2.5 px-14 py-[28px] relative group">
                  <Image src={green} />
                  <div
                    onClick={handleLikeOne}
                    className="bg-white rounded-full px-2 py-2 absolute top-3 right-3 flex justify-center m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    {likeOne === false ? (
                      <AiOutlineHeart className="text-slate-900 text-xl" />
                    ) : (
                      <GoHeartFill className="text-red-500 text-xl" />
                    )}
                  </div>
                  <div>
                    <div
                      className="w-fit hidden absolute left-[30px] bottom-4 group-hover:block"
                      data-aos="fade-right"
                      data-aos-duration="500"
                    >
                      <div className="flex gap-2">
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XS
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          S
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          M
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          L
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2.5  flex flex-col gap-1 text-left">
                  <div className="flex gap-2 mb-2">
                    <p className="bg-black w-10 rounded-full h-[18px]"></p>
                    <p className="bg-blue-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-green-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-pink-300 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-purple-500 w-10 rounded-full h-[18px]"></p>
                  </div>

                  <p className="text-md font-bold">Leather gloves</p>
                  <p className="text-sm text-neutral-400">Perfect mint green</p>

                  <div className="flex items-center mt-3">
                    <button className="px-2.5 py-1 border-green-500 border-2 rounded-xl text-sm font-bold">
                      <span className="text-green-500">$42</span>
                    </button>
                    <p className="flex gap-1 items-center ml-auto text-neutral-400 text-sm">
                      <FaStar className="text-yellow-400 text-lg" /> 4.9 &#40;98
                      reviews&#41;
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cursor-pointer">
                <div className="bg-blue-50 rounded-3xl w-[100%] mb-2.5 px-14 py-[28px] relative group">
                  <Image src={green} />
                  <div
                    onClick={handleLikeTwo}
                    className="bg-white rounded-full px-2 py-2 absolute top-3 right-3 flex justify-center m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    {likeTwo === false ? (
                      <AiOutlineHeart className="text-slate-900 text-xl" />
                    ) : (
                      <GoHeartFill className="text-red-500 text-xl" />
                    )}
                  </div>
                  <div>
                    <div
                      className="w-fit hidden absolute left-[30px] bottom-4 group-hover:block"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div className="flex gap-2 ">
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XS
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          S
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          M
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          L
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1 text-left">
                  <div className="flex gap-2 mb-2">
                    <p className="bg-black w-10 rounded-full h-[18px]"></p>
                    <p className="bg-blue-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-green-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-pink-300 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-purple-500 w-10 rounded-full h-[18px]"></p>
                  </div>

                  <p className="text-md font-bold">Manhattan Toy WRT</p>
                  <p className="text-sm text-neutral-400">New design 2023</p>

                  <div className="flex items-center mt-3">
                    <button className="px-2.5 py-1 border-green-500 border-2 rounded-xl text-sm font-bold">
                      <span className="text-green-500">$30</span>
                    </button>
                    <p className="flex gap-1 items-center ml-auto text-neutral-400 text-sm">
                      <FaStar className="text-yellow-400 text-lg" /> 4.9 &#40;98
                      reviews&#41;
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cursor-pointer">
                <div className="bg-blue-50 rounded-3xl w-[100%] mb-2.5 px-14 py-[28px] relative group">
                  <Image src={green} />
                  <div
                    onClick={handleLikeThree}
                    className="bg-white rounded-full px-2 py-2 absolute top-3 right-3 flex justify-center m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    {likeThree === false ? (
                      <AiOutlineHeart className="text-slate-900 text-xl" />
                    ) : (
                      <GoHeartFill className="text-red-500 text-xl" />
                    )}
                  </div>
                  <div>
                    <div
                      className="w-fit hidden absolute left-[30px] bottom-4 group-hover:block"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div className="flex gap-2 ">
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XS
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          S
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          M
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          L
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1 text-left">
                  <div className="flex gap-2 mb-2">
                    <p className="bg-black w-10 rounded-full h-[18px]"></p>
                    <p className="bg-blue-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-green-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-pink-300 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-purple-500 w-10 rounded-full h-[18px]"></p>
                  </div>

                  <p className="text-md font-bold">Ella Leather Tote</p>
                  <p className="text-sm text-neutral-400">Cream Pink</p>

                  <div className="flex items-center mt-3">
                    <button className="px-2.5 py-1 border-green-500 border-2 rounded-xl text-sm font-bold">
                      <span className="text-green-500">$145</span>
                    </button>
                    <p className="flex gap-1 items-center ml-auto text-neutral-400 text-sm">
                      <FaStar className="text-yellow-400 text-lg" /> 4.9 &#40;98
                      reviews&#41;
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cursor-pointer">
                <div className="bg-blue-50 rounded-3xl w-[100%] mb-2.5 px-14 py-[28px] relative group">
                  <Image src={green} />
                  <div
                    onClick={handleLikeFour}
                    className="bg-white rounded-full px-2 py-2 absolute top-3 right-3 flex justify-center m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    {likeFour === false ? (
                      <AiOutlineHeart className="text-slate-900 text-xl" />
                    ) : (
                      <GoHeartFill className="text-red-500 text-xl" />
                    )}
                  </div>
                  <div>
                    <div
                      className="w-fit hidden absolute left-[30px] bottom-4 group-hover:block"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div className="flex gap-2 ">
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XS
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          S
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          M
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          L
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1 text-left">
                  <div className="flex gap-2 mb-2">
                    <p className="bg-black w-10 rounded-full h-[18px]"></p>
                    <p className="bg-blue-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-green-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-pink-300 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-purple-500 w-10 rounded-full h-[18px]"></p>
                  </div>

                  <p className="text-md font-bold">Jump Rope Kids</p>
                  <p className="text-sm text-neutral-400">Classic green</p>

                  <div className="flex items-center mt-3">
                    <button className="px-2.5 py-1 border-green-500 border-2 rounded-xl text-sm font-bold">
                      <span className="text-green-500">$42</span>
                    </button>
                    <p className="flex gap-1 items-center ml-auto text-neutral-400 text-sm">
                      <FaStar className="text-yellow-400 text-lg" /> 4.9 &#40;98
                      reviews&#41;
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cursor-pointer">
                <div className="bg-blue-50 rounded-3xl w-[100%] mb-2.5 px-14 py-[28px] relative group">
                  <Image src={green} />
                  <div
                    onClick={handleLikeFive}
                    className="bg-white rounded-full px-2 py-2 absolute top-3 right-3 flex justify-center m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    {likeFive === false ? (
                      <AiOutlineHeart className="text-slate-900 text-xl" />
                    ) : (
                      <GoHeartFill className="text-red-500 text-xl" />
                    )}
                  </div>
                  <div>
                    <div
                      className="w-fit hidden absolute left-[30px] bottom-4 group-hover:block"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div className="flex gap-2 ">
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XS
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          S
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          M
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          L
                        </div>
                        <div className="px-2 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-10 h-10 text-sm text-slate-900 font-semibold pt-2.5 hover:bg-slate-900 hover:text-white ease duration-200">
                          XL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1 text-left">
                  <div className="flex gap-2 mb-2">
                    <p className="bg-black w-10 rounded-full h-[18px]"></p>
                    <p className="bg-blue-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-green-500 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-pink-300 w-10 rounded-full h-[18px]"></p>
                    <p className="bg-purple-500 w-10 rounded-full h-[18px]"></p>
                  </div>

                  <p className="text-md font-bold">Jump Rope Kids</p>
                  <p className="text-sm text-neutral-400">Classic green</p>

                  <div className="flex items-center mt-3">
                    <button className="px-2.5 py-1 border-green-500 border-2 rounded-xl text-sm font-bold">
                      <span className="text-green-500">$42</span>
                    </button>
                    <p className="flex gap-1 items-center ml-auto text-neutral-400 text-sm">
                      <FaStar className="text-yellow-400 text-lg" /> 4.9 &#40;98
                      reviews&#41;
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default SectionFour;
