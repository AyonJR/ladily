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

const NewArrivals = () => {
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
      <div className="flex justify-between  custom-font lg:px-0">
        <h2 className="lg:text-4xl text-customBrown text-2xl font-bold lg:ml-32 md:ml-24 ml-16">
          New Arrivals
        </h2>
        <p className="text-customBrown text-lg font-bold">View All</p>
      </div>
      {/* a line div */}
      <div className="flex justify-start ">
        <hr className="lg:w-[150px] md:w-[120px] w-[80px]  bg-opacity-50 bg-customBrown h-[4px] relative  " />
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1500: {
              // Large screens
              slidesPerView: 4,
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

      <div className="mt-10"></div>
    </div>
  );
};

export default NewArrivals;

// lg:right-28 md:right-24 right-24
