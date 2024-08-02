"use client";

import React, { useState } from "react";
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
import yellow from "../Ciseco images/yellow_sweater.png";
import green from "../Ciseco images/green_sweater-removebg-preview.png";

const SectionTwo = () => {
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

  return (
    <div className="p-[62px] mt-16 relative">
      <div className="mb-14">
        <h2 className="text-black text-4xl font-bold">
          Discover more.{" "}
          <span className="text-neutral-500">
            Good things are waiting for you
          </span>
        </h2>
      </div>

      <div className="mb-14">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center text-left p-4 bg-pink-50 rounded-lg w-[100%]">
                <div>
                  <p className="text-neutral-600 text-sm text-left mb-2">
                    Explore new arrivals
                  </p>
                  <h2 className="text-2xl font-semibold text-left">
                    Shop the latest <br />
                    from top brands
                  </h2>
                  <button className="bg-white py-3.5 px-6 mt-[60px] rounded-full text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
                    Show me all
                  </button>
                </div>

                <div className="w-[50%]">
                  <Image src={yellow} height={0} width={0} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center text-left p-4 bg-pink-100 rounded-lg w-[100%]">
                <div>
                  <p className="text-neutral-600 text-sm text-left mb-2">
                    Explore new arrivals
                  </p>
                  <h2 className="text-2xl font-semibold text-left">
                    Shop the latest <br />
                    from top brands
                  </h2>
                  <button className="bg-white py-3.5 px-6 mt-[60px] rounded-full text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
                    Show me all
                  </button>
                </div>

                <div className="w-[50%]">
                  <Image src={yellow} height={0} width={0} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center text-left p-4 bg-blue-50 rounded-lg w-[100%]">
                <div>
                  <p className="text-neutral-600 text-sm text-left mb-2">
                    Explore new arrivals
                  </p>
                  <h2 className="text-2xl font-semibold text-left">
                    Shop the latest <br />
                    from top brands
                  </h2>
                  <button className="bg-white py-3.5 px-6 mt-[60px] rounded-full text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
                    Show me all
                  </button>
                </div>

                <div className="w-[50%]">
                  <Image src={yellow} height={0} width={0} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center text-left p-4 bg-blue-50 rounded-lg w-[100%]">
                <div>
                  <p className="text-neutral-600 text-sm text-left mb-2">
                    Explore new arrivals
                  </p>
                  <h2 className="text-2xl font-semibold text-left">
                    Shop the latest <br />
                    from top brands
                  </h2>
                  <button className="bg-white py-3.5 px-6 mt-[60px] rounded-full text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
                    Show me all
                  </button>
                </div>

                <div className="w-[50%]">
                  <Image src={yellow} height={0} width={0} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <br />
          <br />
          <br />
          <br />
        </>

        <div className="mb-14">
          <h2 className="text-black text-4xl font-bold">
            New Arrivals.{" "}
            <span className="text-neutral-500">REY backpacks & bags</span>
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
          <hr className="mt-32" />
        </>
      </div>
    </div>
  );
};

export default SectionTwo;
