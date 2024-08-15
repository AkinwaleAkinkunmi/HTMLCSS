import React, { useState } from "react";

import { TbFilterSearch } from "react-icons/tb";
import { PiCaretDown } from "react-icons/pi";

const SectionSeven = () => {
  const [allItems, setAllItems] = useState(true);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kid, setKid] = useState(false);
  const [jewelry, setJewelry] = useState(false);

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
          <TbFilterSearch className="mr-2 text-lg" /> Filter <PiCaretDown className="ml-8 text-xl" />
        </button>
      </div>
      <hr className="mb-8"/>
    </div>
  );
};

export default SectionSeven;
