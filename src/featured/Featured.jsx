import { IoIosArrowForward } from "react-icons/io";
import React, { useCallback, useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdStar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/swiper-bundle.css";

const Featured = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const onSwiperInit = useCallback((swiper) => {
    swiperRef.current = swiper;
  }, []);

  return (
    <div>
      <div className="flex justify-center custom-font ">
        <h2 className="lg:text-2xl text-lg font-bold">Featured Categories</h2>
      </div>
      {/* a line div */}
      <div className="flex justify-center ">
        <hr className="w-[83px]  bg-opacity-50 bg-customBrown h-[3px] relative lg:right-28 md:right-24 right-24 " />
      </div>
      <div className="lg:mt-8 mt-6">
        <div className="flex justify-center lg:px-4  custom-font">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
            Treat Your Skin Concern with Hanbang + Modern Ingredients
          </h2>
        </div>

        {/* tab */}
        <div className="lg:mt-8 mt-6 ">
          <div className="flex items-center lg:gap-12 gap-8  overflow-x-auto overflow-y-hidden justify-center flex-wrap custom-font font-bold lg:text-xl text-lg  dark:text-black">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0  px-0 py-[1px] border-b dark:border-customBrown "
            >
              Face
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-0 py-[1px]  "
            >
              Eyes
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0  px-0 py-[1px]  "
            >
              Hair
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0  px-0 py-[1px]  "
            >
              Body Care
            </a>
          </div>
        </div>

        {/* slider button */}
        <div className="mt-2 lg:mx-24 lg:block hidden">
          <div className="flex justify-end">
            <div className="flex gap-2">
              <div>
                <button onClick={handlePrev}>
                  <IoIosArrowBack className="text-xs text-customBrown lg:text-3xl" />
                </button>
              </div>
              <div>
                <button onClick={handleNext}>
                  <IoIosArrowForward className="text-xs text-customBrown lg:text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* sliders */}
        <div className="mt-3 lg:mx-24 ">
          {/* flex div */}
          <div className="flex lg:flex-row flex-col w-full gap-5 ">
            {/* image div */}
            <div className="lg:w-1/4 w-full lg:px-0 px-4 ">
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/TWs3VKr/0000151-face.jpg"
                  alt=""
                  className="w-full lg:h-auto h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>

                {/* Center Button on mobile, align bottom on large screens */}
                <div className="absolute inset-0 flex items-center justify-center lg:items-end lg:justify-center pb-0 lg:pb-4">
                  <button
                    className="group flex items-center text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-4 jost-font rounded-xl space-x-2 bg-white
          transition duration-500 hover:bg-transparent hover:text-white hover:border hover:border-white"
                  >
                    <span className="font-semibold text-customBrown transition group-hover:text-white">
                      VIEW PRODUCTS
                    </span>
                    <span
                      className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 bg-customBrown text-white rounded-full transition duration-500
            group-hover:bg-white group-hover:text-customBrown"
                    >
                      <IoIosArrowForward className="text-xs lg:text-base" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* swiper slider div */}
            <div className="lg:w-3/4 w-full  lg:px-0 px-4">
              <Swiper
                onSwiper={onSwiperInit}
                slidesPerView={3} // Default view for larger screens
                spaceBetween={18}
                pagination={{ clickable: true }}
                speed={1000}
                loop={true}
                breakpoints={{
                  320: {
                    // Mobile screens
                    slidesPerView: 2,
                    spaceBetween: 10, // Smaller gap for mobile
                  },
                  640: {
                    // Slightly larger mobile devices
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  768: {
                    // Small tablets
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    // Larger tablets or small desktops
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1500: {
                    // Large screens
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper w-full"
              >
                <SwiperSlide>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                        New
                      </span>

                      {/* Heart Icon */}
                      <div className="absolute top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                        <LuHeart className="text-xl" />
                      </div>

                      {/* Product Image */}
                      <img
                        src="https://i.ibb.co.com/YbdsSGM/0000101-the-ordinary-retinol-05-serum-415.png"
                        alt="The Ordinary Retinol 0.5% Serum"
                        className="w-40 h-auto"
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                      The Ordinary Retinol 0.5%...
                    </h3>
                    <div className="flex lg:flex-row flex-col items-center gap-2">
                      <div>
                        <div className="flex items-center">
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="lg:text-base text-sm">0 Reviews</p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-sm font-medium text-customBrown">
                      1,990.00
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                        New
                      </span>

                      {/* Heart Icon */}
                      <div className="absolute top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                        <LuHeart className="text-xl" />
                      </div>

                      {/* Product Image */}
                      <img
                        src="https://i.ibb.co.com/YbdsSGM/0000101-the-ordinary-retinol-05-serum-415.png"
                        alt="The Ordinary Retinol 0.5% Serum"
                        className="w-40 h-auto"
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                      The Ordinary Retinol 0.5%...
                    </h3>
                    <div className="flex lg:flex-row flex-col items-center gap-2">
                      <div>
                        <div className="flex items-center">
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="lg:text-base text-sm">0 Reviews</p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-sm font-medium text-customBrown">
                      1,990.00
                    </p>
                  </div>
                </SwiperSlide>

                {/* Additional slides */}
                <SwiperSlide>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                        New
                      </span>

                      {/* Heart Icon */}
                      <div className="absolute top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                        <LuHeart className="text-xl" />
                      </div>

                      {/* Product Image */}
                      <img
                        src="https://i.ibb.co.com/YbdsSGM/0000101-the-ordinary-retinol-05-serum-415.png"
                        alt="The Ordinary Retinol 0.5% Serum"
                        className="w-40 h-auto"
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                      The Ordinary Retinol 0.5%...
                    </h3>
                    <div className="flex lg:flex-row flex-col items-center gap-2">
                      <div>
                        <div className="flex items-center">
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="lg:text-base text-sm">0 Reviews</p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-sm font-medium text-customBrown">
                      1,990.00
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                        New
                      </span>

                      {/* Heart Icon */}
                      <div className="absolute top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                        <LuHeart className="text-xl" />
                      </div>

                      {/* Product Image */}
                      <img
                        src="https://i.ibb.co.com/YbdsSGM/0000101-the-ordinary-retinol-05-serum-415.png"
                        alt="The Ordinary Retinol 0.5% Serum"
                        className="w-40 h-auto"
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                      The Ordinary Retinol 0.5%...
                    </h3>
                    <div className="flex lg:flex-row flex-col items-center gap-2">
                      <div>
                        <div className="flex items-center">
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                          <span>
                            <MdStar className="lg:text-lg text-sm text-[#CFCFCE]" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="lg:text-base text-sm">0 Reviews</p>
                      </div>
                    </div>
                    <p className="lg:text-lg text-sm font-medium text-customBrown">
                      1,990.00
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <div className="mt-10"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
