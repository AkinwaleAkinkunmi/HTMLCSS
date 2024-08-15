import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import travel from "../Ciseco images/travel kit.webp";
import beauty from "../Ciseco images/Beauty products.webp";
import pets from "../Ciseco images/Pets foods.webp";
import sport from "../Ciseco images/Sport kits.webp";
import green from "../Ciseco images/green man.webp";

const SectionSix = () => {
  return (
    <div className="px-[62px] mt-16">
      <div>
        <div className="mb-14">
          <h2 className="text-slate-900 text-4xl font-bold">
            Shop by department
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="bg-indigo-100 rounded-2xl w-[100%]">
              <Image
                src={travel}
                width={0}
                height={0}
                className="h-[16rem] object-cover"
              />
            </div>
            <h2 className="mt-5 text-lg text-slate-900 font-semibold text-center">
              Travel kits
            </h2>
            <p className="text-sm mt-0.5 text-neutral-500 text-center">
              20+ categories
            </p>
          </div>

          <div>
            <div className="bg-slate-100 rounded-2xl w-[100%]">
              <Image
                src={beauty}
                width={0}
                height={0}
                className="h-[16rem] object-cover"
              />
            </div>
            <h2 className="mt-5 text-lg text-slate-900 font-semibold text-center">
              Beauty products
            </h2>
            <p className="text-sm mt-0.5 text-neutral-500 text-center">
              10+ categories
            </p>
          </div>

          <div>
            <div className="bg-orange-100 rounded-2xl w-[100%]">
              <Image
                src={pets}
                width={0}
                height={0}
                className="h-[16rem] object-cover"
              />
            </div>
            <h2 className="mt-5 text-lg text-slate-900 font-semibold text-center">
              Pet's Food
            </h2>
            <p className="text-sm mt-0.5 text-neutral-500 text-center">
              34+ categories
            </p>
          </div>

          <div>
            <div className="bg-sky-100 rounded-2xl w-[100%]">
              <Image
                src={sport}
                width={0}
                height={0}
                className="h-[16rem] object-cover"
              />
            </div>
            <h2 className="mt-5 text-lg text-slate-900 font-semibold text-center">
              Sports kits
            </h2>
            <p className="text-sm mt-0.5 text-neutral-500 text-center">
              12+ categories
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-3xl flex items-center relative p-24 mt-20">
        <div>
          <h2 className="text-slate-900 text-5xl mt-10 font-bold">
            Don't miss out on
            <br />
            special offers
          </h2>

          <p className="text-slate-400 text-base mt-6">
            Register to receive news about the latest, savings combos,
            <br />
            discount codes...
          </p>

          <ul className="mt-10">
            <li className="flex gap-4 items-center">
              <span className="py-1 px-2.5 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
                01
              </span>
              <p className="text-base text-slate-900 font-medium">
                Savings combos
              </p>
            </li>

            <li className="flex gap-4 items-center mt-4">
              <span className="py-1 px-2.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                02
              </span>
              <p className="text-base text-slate-900 font-medium">Freeship</p>
            </li>

            <li className="flex gap-4 items-center mt-4">
              <span className="py-1 px-2.5 rounded-full bg-red-100 text-red-800 text-xs font-medium">
                03
              </span>
              <p className="text-base text-slate-900 font-medium">
                Premium magazines
              </p>
            </li>
          </ul>

          <form action="" className="mt-10 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-[25rem] rounded-full border border-neutral-200 h-11"
            />
            <button className="w-9 h-9 rounded-full bg-slate-900 text-white absolute right-[50px] top-[4px]">
              <FiArrowRight className="text-2xl ml-[5px]"/>
            </button>
          </form>
        </div>

        <div className="absolute right-0 bottom-0 mr-auto w-[30rem]">
          <Image src={green} width={0} height={0} className="object-cover" />
        </div>

        {/* <span className="w-5 h-5 rounded-full bg-green-500 absolute top-14 right-16"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-500 absolute right-40 bottom-20"></span>
        <span className="w-4 h-4 rounded-full bg-purple-500 absolute"></span> */}
      </div>
    </div>
  );
};

export default SectionSix;
