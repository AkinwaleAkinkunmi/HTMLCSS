import React from "react";
import Image from "next/image";

import filter from "../Ciseco images/filter.webp";
import addbag from "../Ciseco images/addbag.webp";
import alarm from "../Ciseco images/alarm.webp";
import product from "../Ciseco images/enjoy.webp";
import logo from "../Ciseco images/Ciseco logo.svg";
import money from "../Ciseco images/cisecomoney.webp"
import wavy from "../Ciseco images/wavy line.svg"

const SectionThree = () => {
  return (
    <div className="p-[62px] mt-16">
      <div className="flex relative">
        <div className="z-50">
          <div className="w-[140px] mx-auto mb-4">
            <Image src={filter} width={0} height={0} />
          </div>
          <p className="w-fit rounded-full bg-red-100 text-red-800 px-2.5 py-1 text-xs mx-auto mt-5">
            Step 1
          </p>
          <h2 className="text-base font-semibold text-slate-900 mt-5 text-center">
            Filter & Discover
          </h2>
          <p className="text-slate-400 text-sm font-base mt-5 text-center px-8">
            Smart filtering and suggestions make it easy to find
          </p>
        </div>
        <div className="z-50">
          <div className="w-[140px] mx-auto mb-4">
            <Image src={addbag} width={0} height={0} />
          </div>
          <p className="w-fit rounded-full bg-indigo-100 text-indigo-800 px-2.5 py-1 text-xs mx-auto mt-5">
            Step 2
          </p>
          <h2 className="text-base font-semibold text-slate-900 mt-5 text-center">
            Add to bag
          </h2>
          <p className="text-slate-400 text-sm font-base mt-5 text-center px-8">
            Easily select the correct items and add them to the cart
          </p>
        </div>
        <div className="z-50">
          <div className="w-[140px] mx-auto mb-4">
            <Image src={alarm} width={0} height={0} />
          </div>
          <p className="w-fit rounded-full bg-yellow-100 text-yellow-800 px-2.5 py-1 text-xs mx-auto mt-5">
            Step 3
          </p>
          <h2 className="text-base font-semibold text-slate-900 mt-5 text-center">
            Fast shipping
          </h2>
          <p className="text-slate-400 text-sm font-base mt-5 text-center px-8">
            The carrier will confirm and ship quickly to you
          </p>
        </div>
        <div className="z-50">
          <div className="w-[140px] mx-auto mb-4">
            <Image src={product} width={0} height={0} />
          </div>
          <p className="w-fit rounded-full bg-purple-100 text-purple-800 px-2.5 py-1 text-xs mx-auto mt-5">
            Step 4
          </p>
          <h2 className="text-base font-semibold text-slate-900 mt-5 text-center">
            Enjoy the product
          </h2>
          <p className="text-slate-400 text-sm font-base mt-5 text-center px-8">
            Have fun and enjoy your 5-star quality products
          </p>
        </div>
        <div className="absolute top-6">
            <Image src={wavy} width={0} height={0} className="w-[95%] z-0"/>
        </div>
      </div>

      <hr className="my-32" />

      <div className="flex mt-16 items-center">
        <div>
          <div className="w-fit">
            <Image
              src={logo}
              alt="Ciseco logo"
              width={0}
              height={0}
              className="w-[6rem] object-cover"
            />
          </div>
          <h2 className="text-slate-900 text-5xl mt-10 font-bold">Earn free money<br />with Ciseco</h2>
          <p className="text-slate-400 text-base mt-6">With Ciseco you will get freeship & savings combo...</p>
          <div className="flex mt-12 gap-5">
            <button className="py-[14px] px-6 text bg-slate-900 text-white rounded-full font-semibold shadow-xl hover:bg-opacity-95">Savings combo</button>
            <button className="py-[14px] px-6 border-[0.5px] border-slate-100 rounded-full font-semibold hover:bg-neutral-100">Discover more</button>
          </div>
        </div>
        <div className="ml-auto">
            <Image src={money} width={0} height={0}/>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
