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
import { Link } from "react-router-dom";

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
      <div className="flex justify-center custom-font lg:ml-[5px] ">
        <h2 className="lg:text-[25px] text-lg font-bold">
          Featured Categories
        </h2>
      </div>
      {/* a line div */}
      <div className="flex justify-center ">
        <hr className="w-[80px]  bg-opacity-50 bg-customBrown h-[3px] relative lg:right-[120px] md:right-24 right-24 " />
      </div>
      <div className="lg:mt-6 mt-6">
        <div className="flex justify-center lg:px-4  custom-font">
          <h2 className="text-xl md:text-2xl lg:ml-2 lg:text-4xl font-bold text-center">
            Treat Your Skin Concern with Hanbang + Modern Ingredients
          </h2>
        </div>

        {/* tab */}
        <div className="lg:mt-[22px] mt-6 ">
          <div className="flex items-center lg:ml-[8px] lg:gap-[42px] gap-[30px]  overflow-x-auto overflow-y-hidden justify-center flex-wrap custom-font font-semibold lg:text-xl text-lg  dark:text-black">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0  px-0 py-[1px] border-b dark:border-customBrown "
            >
              Face
            </a>
            <p className=" relative group">
              <span className="inline-block relative">
                Eyes
                <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:text-[#945615] bg-customBrown transition-all duration-500 group-hover:w-full"></span>
              </span>
            </p>
            <p className=" relative group">
              <span className="inline-block relative">
                Hair
                <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:text-[#945615] bg-customBrown transition-all duration-500 group-hover:w-full"></span>
              </span>
            </p>
            <p className=" relative group">
              <span className="inline-block relative">
                Body Care
                <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:text-[#945615] bg-customBrown transition-all duration-500 group-hover:w-full"></span>
              </span>
            </p>
          </div>
        </div>

        {/* slider button */}
        <div className="mt-2 lg:px-[33px] 2xl:px-[0px] px-6 mx-auto container lg:block hidden">
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
        <div className="mt-3 lg:px-[33px] 2xl:px-[0px] mx-auto container  ">
          {/* flex div */}
          <div className="flex lg:flex-row flex-col w-full gap-[10px] lg:gap-5 ">
            {/* image div */}
            <div className="lg:w-[27%] w-full lg:px-0 px-[25px] ">
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/TWs3VKr/0000151-face.jpg"
                  alt=""
                  className=" w-full lg:h-auto h-32 2xl:h-[430px] object-cover"
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
            <div className="lg:w-[73%] w-full  lg:px-0 px-[25px]">
              <Swiper
                onSwiper={onSwiperInit}
                slidesPerView={3} // Default view for larger screens
                spaceBetween={18}
                pagination={{ clickable: true }}
                speed={500}
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
                    slidesPerView: 3,
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
                  <Link to={'/details'}>
                  <div className="flex  flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px] h-auto"
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
                  </div></Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to={'/details'}>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs  px-3 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </div></Link>
                </SwiperSlide>

                {/* Additional slides */}
                <SwiperSlide>
                 <Link to={'/details'}>
                 <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs  px-3 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </div></Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to={'/details'}>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs  px-3 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                 <Link to={'/details'}>
                 <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </div></Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={'/details'}>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-[10px] lg:text-xs font-semibold px-4 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </div></Link>
                </SwiperSlide>
                <SwiperSlide>
                 <Link to={'/details'}>
                 <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-[10px] lg:text-xs font-semibold px-4 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </div></Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={'/details'}>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-[10px] lg:text-xs font-semibold px-4 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </div></Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={'/details'}>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-[4px] space-y-1 group">
                    {/* Image Container */}
                    <div className="bg-[#F7F7F7] w-full  flex items-center justify-center lg:py-12 py-6 relative overflow-hidden">
                      {/* New Badge */}
                      <span className="absolute top-0 left-0 bg-customBrown text-white text-[10px] lg:text-xs font-semibold px-4 py-2">
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
                        className="xl:w-[170px] lg:w-[170px] md:w-[170px] 2xl:w-[170px] w-[135px]  h-auto"
                      />

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
                  </Link>
                </SwiperSlide>
                <div className="mt-11 lg:mt-12"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
