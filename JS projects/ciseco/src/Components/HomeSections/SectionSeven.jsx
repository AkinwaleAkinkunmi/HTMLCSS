"use client";

import React, { useState } from "react";
import MockData from "../MockData";
import Image from "next/image";

import { TbFilterSearch } from "react-icons/tb";
import { PiCaretDown } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

const SectionSeven = () => {
  const [allItems, setAllItems] = useState(true);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kid, setKid] = useState(false);
  const [jewelry, setJewelry] = useState(false);
  const [favouriteData, setFavouriteData] = useState([MockData]);
  console.log(MockData);

  const toggleLike = (productId) => {  //setFavourites makes sure that when the user refreshes everything will be set back to normal unless you save to local storage or create an endpoint that will be updating a database
    setFavouriteData((prevFavourites) => { //prev favourites assuming that there is an original array to comapre to
      if (prevFavourites.includes(productId)) {
        return prevFavourites.filter((id) => id !== productId);
      } else {
        return [...prevFavourites, productId];
      }
    });
  };
  const toggleAllItems = () => {
    setMen(false);
    setWomen(false);
    setKid(false);
    setJewelry(false);
    setAllItems(true);
  };

  const toggleMen = () => {
    setAllItems(false);
    setWomen(false);
    setKid(false);
    setJewelry(false);
    setMen(true);
  };

  const toggleWomen = () => {
    setAllItems(false);
    setMen(false);
    setKid(false);
    setJewelry(false);
    setWomen(true);
  };

  const toggleKid = () => {
    setAllItems(false);
    setMen(false);
    setWomen(false);
    setJewelry(false);
    setKid(true);
  };

  const toggleJewelry = () => {
    setAllItems(false);
    setMen(false);
    setWomen(false);
    setKid(false);
    setJewelry(true);
  };

  return (
    <div className="px-[62px] mt-16">
      <div className="mb-14">
        <h2 className="text-slate-900 text-4xl font-bold">
          What's trending now
        </h2>
        <p className="mt-4 text-neutral-500 text-lg3 ">
          Discover the trending products in Ciseco
        </p>
      </div>

      <div className="flex mb-8">
        <ul className="flex bg-white w-fit rounded-full px-1 cursor-pointer py-1">
          {allItems === false ? (
            <li
              onClick={toggleAllItems}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-neutral-600 font-base items-center"
            >
              All Items
            </li>
          ) : (
            <li
              onClick={toggleAllItems}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-white bg-slate-900 font-base items-center"
            >
              All Items
            </li>
          )}

          {women === false ? (
            <li
              onClick={toggleWomen}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-neutral-600 font-base items-center"
            >
              Women
            </li>
          ) : (
            <li
              onClick={toggleWomen}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-white bg-slate-900 font-base items-center"
            >
              Women
            </li>
          )}

          {men === false ? (
            <li
              onClick={toggleMen}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-neutral-600 font-base items-center"
            >
              Men
            </li>
          ) : (
            <li
              onClick={toggleMen}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-white bg-slate-900 font-base items-center"
            >
              Men
            </li>
          )}

          {kid === false ? (
            <li
              onClick={toggleKid}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-neutral-600 font-base items-center"
            >
              Kids
            </li>
          ) : (
            <li
              onClick={toggleKid}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full  text-white bg-slate-900 font-base items-center"
            >
              Kids
            </li>
          )}

          {jewelry === false ? (
            <li
              onClick={toggleJewelry}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-neutral-600 font-base items-center"
            >
              Jewels
            </li>
          ) : (
            <li
              onClick={toggleJewelry}
              className="px-5 py-2 font-semibold flex gap-2 rounded-full text-white bg-slate-900 font-base items-center"
            >
              Jewels
            </li>
          )}
        </ul>

        <button className="flex items-center bg-slate-900 text-white font-semibold px-5 py-2 rounded-full ml-auto shadow-xl">
          <TbFilterSearch className="mr-2 text-lg" /> Filter
          <PiCaretDown className="ml-8 text-xl" />
        </button>
      </div>

      <hr className="mb-8" />

      <div className="grid grid-cols-4 gap-8">
        {MockData.map((data) => (
          <div>
            <div className="bg-slate-100 rounded-2xl relative">
              <Image src={data.image} alt={data.name} width={0} height={0} />

              <div
                onClick={() => toggleLike(data.id)}
                className="bg-white rounded-full px-2 py-2 absolute top-3 right-3 flex justify-center m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                {favouriteData.includes(data.id) ? (
                  <GoHeartFill className="text-red-500 text-xl" />
                ) : (
                  <AiOutlineHeart className="text-slate-900 text-xl" />
                )}
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

              <h2 className="text-lg text-slate-900 font-semibold ">
                {data.name}
              </h2>
              <p className="text-sm mt-0.5 text-neutral-500">
                {data.description}
              </p>

              <div className="flex items-center mt-3">
                <button className="px-2.5 py-1 border-green-500 border-2 rounded-lg text-sm font-bold">
                  <span className="text-green-500">${data.price}</span>
                </button>
                <p className="flex gap-1 items-center ml-auto text-neutral-400 text-sm">
                  <FaStar className="text-yellow-400 text-lg" /> 4.9 &#40;98 reviews&#41;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-auto w-fit">
        <button className="bg-slate-900 text-white text-lg mt-16 px-[24px] py-[14px] shadow-xl rounded-full">
          Show me more
        </button>
      </div>
    </div>
  );
};

export default SectionSeven;
