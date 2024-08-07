import React from "react";

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
import skatekid from "../Ciseco images/skatekid.webp";
import logo from "../Ciseco images/Ciseco logo.svg";
import brownfull from "../Ciseco images/brownfull.webp";
import brown2 from "../Ciseco images/brown2.webp";
import brown1 from "../Ciseco images/brown1.webp";
import brown3 from "../Ciseco images/brown3.webp";

const SectionFive = () => {
  return (
    <div className="px-[62px] mt-16">
      <div className="bg-yellow-50 rounded-3xl flex items-center relative p-24">
        <div className="absolute left-0 bottom-0">
          <Image src={skatekid} width={0} height={0} className="w-[80%] " />
        </div>

        <div className="ml-auto">
          <div className="w-fit">
            <Image
              src={logo}
              alt="Ciseco logo"
              width={0}
              height={0}
              className="w-[7rem] object-cover"
            />
          </div>
          <h2 className="text-slate-900 text-5xl mt-10 font-bold">
            Special offer
            <br />
            in kind products
          </h2>
          <p className="text-slate-400 text-base mt-6">
            Fashion is a form of self-expression and autonomy at a<br />
            particular period and place.
          </p>
          <button className="py-[14px] px-6 text bg-slate-900 text-white rounded-full font-semibold shadow-xl hover:bg-opacity-95 mt-12">
            Discover more
          </button>
        </div>

        <span className="w-5 h-5 rounded-full bg-green-500 absolute top-14 right-16"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-500 absolute right-40 bottom-20"></span>
        <span className="w-4 h-4 rounded-full bg-purple-500 absolute"></span>
      </div>

      <div>
        <div className="mb-14">
          <h2 className="text-black text-4xl font-bold">
            Best Sellers.{" "}
            <span className="text-neutral-500">Best selling of the month</span>
          </h2>
        </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="px-[62px] py-[7rem] mt-16">
                <div className="bg-neutral-100">
                  <Image src={brownfull} width={0} height={0} />
                </div>
                <div className="flex gap-2.5 mt-2.5">
                  <div>
                    <Image src={brown1} width={0} height={0} />
                  </div>
                  <div>
                    <Image src={brown1} width={0} height={0} />
                  </div>
                  <div>
                    <Image src={brown1} width={0} height={0} />
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

export default SectionFive;
