import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="lg:mt-10 z-0">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row  lg:gap-2 bg-customPink  lg:h-[78vh] h-[280px] w-full">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex lg:gap-2 gap-3 flex-col items-center lg:items-start justify-center lg:ml-[108px] lg:px-0 px-6 text-center lg:text-left  lg:mt-0 lg:mb-0 mt-auto mb-auto ">
              <h2 className="text-2xl  lg:text-[58px] mt-4 lg:mt-2 custom-font text-customBrown font-semibold leading-[1] lg:leading-[1.2]">
                Book An Appointment <br className="hidden lg:block" />
                To Schedule A Consultation With Sajia Tonny.
              </h2>

              <p className="jost-font lg:px-0  text-sm lg:text-lg lg:mt-5 ">
                Using skincare products can provide numerous benefits for <br className="hidden lg:block" />
                maintaining and improving the health and appearance of your{" "}
                <br className="hidden lg:block" /> skin.
              </p>

              <button
                className="group flex mt-5 items-center text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-4 border border-customBrown jost-font rounded-lg space-x-[8px]
                transition duration-500 hover:bg-customBrown hover:text-white"
              >
                <span className="font-semibold text-customBrown transition group-hover:text-white">
                  DISCOVER MORE
                </span>
                <span
                  className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 bg-customBrown text-white rounded-full transition duration-500
                  group-hover:bg-white group-hover:text-customBrown"
                >
                  <IoIosArrowForward className="text-xs lg:text-base" />
                </span>
              </button>
            </div>

            {/* Right Side Image - Hidden on Mobile */}
            <div className="w-full lg:mt-2 lg:w-1/2 hidden lg:flex lg:mr-24 items-center justify-center">
              <img
                src="https://i.ibb.co.com/8jkzyCj/3.png"
                alt="Banner"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Repeat for other SwiperSlides */}
        <SwiperSlide>
          <div className="flex flex-col lg:gap-2 lg:flex-row bg-customPink lg:h-[78vh] h-[280px] w-full">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 gap-3 flex flex-col items-center lg:items-start justify-center lg:ml-[108px] lg:px-0 px-6 text-center lg:text-left  mt-auto mb-auto">
              <h2 className="text-2xl lg:text-[58px]  custom-font text-customBrown font-semibold lg:leading-[1.2]">
                The Ordinary, The <br className="hidden lg:block" /> Balance Set.
              </h2>

              <p className="jost-font text-sm lg:text-lg lg:mt-5">
                This regimen balances the look of visible shine, reduces the look  <br className="hidden lg:block" />
                of enlarged pores, reduces the look of the textural irregularities, <br className="hidden lg:block" /> and enhances
                skin radiance.
              </p>

              <button
                className="group flex mt-5 items-center text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-4 border border-customBrown jost-font rounded-lg space-x-[8px]
                transition duration-500 hover:bg-customBrown hover:text-white"
              >
                <span className="font-semibold text-customBrown transition group-hover:text-white">
                  DISCOVER MORE
                </span>
                <span
                  className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 bg-customBrown text-white rounded-full transition duration-500
                  group-hover:bg-white group-hover:text-customBrown"
                >
                  <IoIosArrowForward className="text-xs lg:text-base" />
                </span>
              </button>
            </div>

            {/* Right Side Image - Hidden on Mobile */}
            <div className="w-full lg:w-1/2 hidden lg:flex lg:mr-24 items-center justify-center">
              <img
                src="https://i.ibb.co.com/Rh7MggB/2.png"
                alt="Banner"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Additional SwiperSlide */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row bg-customPink h-[280px] lg:h-[78vh] w-full">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:gap-[2px] gap-2 lg:mx-0  lg:ml-[108px] lg:px-0 px-6 text-center lg:text-left  mt-auto mb-auto">
              <h2 className="text-2xl lg:text-[58px] custom-font text-customBrown font-semibold lg:leading-[1.2] lg:mb-2">
                Stronger Collagen, <br className="hidden lg:block" /> Plumper
                Skin.
              </h2>
              <p className="jost-font text-sm lg:text-lg lg:mt-5">
                Strengthens the collagen you have, build the collagen you
                don't.<br className="hidden lg:block" /> Boost your skin dynamic barrier, cellular activity with our <br className="hidden lg:block" /> products.
              </p>

              <button
                className="group flex mt-5 lg:mt-7 items-center text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-4 border border-customBrown jost-font rounded-lg space-x-[8px]
                transition duration-500 hover:bg-customBrown hover:text-white"
              >
                <span className="font-semibold text-customBrown transition group-hover:text-white">
                  DISCOVER MORE
                </span>
                <span
                  className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 bg-customBrown text-white rounded-full transition duration-500
                  group-hover:bg-white group-hover:text-customBrown"
                >
                  <IoIosArrowForward className="text-xs lg:text-base" />
                </span>
              </button>
            </div>

            {/* Right Side Image - Hidden on Mobile */}
            <div className="w-full lg:w-1/2 hidden lg:flex lg:mr-24 items-center justify-center">
              <img
                src="https://i.ibb.co.com/drj3ByC/1.png"
                alt="Banner"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
