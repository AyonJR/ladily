import { IoIosArrowForward } from "react-icons/io";
import React, { useCallback, useRef, useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { MdStar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/swiper-bundle.css";

const BestProducts = () => {
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
      <div>
        <div className="flex justify-between  custom-font lg:px-0">
          <h2 className="lg:text-4xl text-customBrown text-2xl font-bold lg:ml-32 md:ml-24 ml-11">
            Best Selling Products
          </h2>
        </div>
        {/* a line div */}
        <div className="flex justify-start ">
          <hr className="lg:w-[150px] md:w-[120px] w-[65px]  bg-opacity-50 bg-customBrown h-[4px] relative  " />
        </div>
        {/* slider button */}
        <div className="  lg:block hidden">
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
        {/* sliders div */}

        <div className="mt-3">
          <Swiper
            onSwiper={onSwiperInit}
            slidesPerView={3} 
            spaceBetween={18}
            pagination={{ clickable: true }}
            speed={500}
            loop={true}
            autoplay={{
              delay: 1000, 
              disableOnInteraction: true, 
              pauseOnMouseEnter: true, 
            }}
            breakpoints={{
              320: {
                // Mobile screens
                slidesPerView: 2,
                spaceBetween: 10, 
              },
              640: {
                
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                // Small tablets
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1500: {
                // Large screens
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                    30% <br />
                    Off
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/QDn8H2g/0000022-cerave-hydrating-facial-cleanser-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"
                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  CeraVe Hydrating Facial...
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="line-through lg:text-lg text-[12px] text-gray-500 mr-2">
                    2,790.00৳
                  </p>
                  <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                    1,953.00৳
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                    30% <br />
                    Off
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/TT37SQz/0000146-cerave-moisturizing-cream-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  CeraVe Moisturizing Cream
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="line-through lg:text-lg text-[12px] text-gray-500 mr-2">
                    3,450.00৳
                  </p>
                  <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                    2,415.00৳
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Additional slides */}
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                    50% <br />
                    Off
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/ZmY0Cmd/0000039-cetaphil-daily-facial-cleanser-415-1.jpg"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  Cetaphil Daily Facial Cleanser
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="line-through lg:text-lg text-[12px] text-gray-500 mr-2">
                    3,845.00৳
                  </p>
                  <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                    1,923.00৳
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                    50% <br />
                    Off
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/sq2bJRm/0000058-cerave-moisturizing-cream-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  CeraVe Moisturizing Cream
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  1,890.00৳
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                    50% <br />
                    Off
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/YhrnVvK/0000064-the-ordinary-glycolic-acid-7-exfoliating-toner-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  The Ordinary Glycolic Acid 7...
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  1,950.00৳
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                    New
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/nnqP3Cd/0000156-the-ordinary-multi-peptide-ha-serum-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  The Ordinary Multi-Peptide
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  3,150.00৳
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                    New
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/Jx9kVrq/0000089-the-ordinary-niacinamide-10-zinc-1-serum-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  The Ordinary Niacinamide...
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  1,550.00৳
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                    New
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/FWNTRZK/0000094-the-ordinary-aha-30-bha-2-peeling-solution-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  The Ordinary AHA 30% +...
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  1,990.00৳
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* New Badge */}
                  <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                    New
                  </span>

                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/D4q4v8t/0000101-the-ordinary-retinol-05-serum-415-1-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  The Ordinary Retinol 0.5%...
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  1,990.00৳
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                {/* Image Container */}
                <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative">
                  {/* Heart Icon */}
                  <div className="absolute top-2 right-2 hidden lg:block transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <LuHeart className="text-xl" />
                  </div>

                  {/* Product Image */}
                  <img
                    src="https://i.ibb.co.com/9s2Yf99/0000134-neutrogena-hydro-boost-sunscreen-spf-50-415-1.png"
                    alt="The Ordinary Retinol 0.5% Serum"
                    className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto mb-2"                  />

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                    <FiShoppingCart className="mr-2 text-xl" />
                    ADD TO CART
                  </button>
                </div>

                <h3 className="lg:text-lg text-sm pt-2 lg:pt-5 font-medium text-customBrown">
                  Neutrogena Hydro Boost...
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                      <span>
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-base text-sm">0 Reviews</p>
                  </div>
                </div>
                <p className="lg:text-lg text-[12px] font-medium text-customBrown">
                  2,150.00৳
                </p>
              </div>
            </SwiperSlide>

            <div className="mt-10"></div>
          </Swiper>
        </div>

        <div className="mt-10"></div>
      </div>
    </div>
  );
};

export default BestProducts;
