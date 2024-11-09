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
          <div className="bg-customPink w-full xl:h-[460px] 2xl:h-[72vh] lg:h-[370px] md:h-[270px] h-[280px] ">
            <div className="container mx-auto flex flex-col lg:flex-row gap-2 2xl:gap-0 h-full px-4 md:px-8 lg:px-4 xl:px-[34px] 2xl:px-5 xl:gap-[15px]  ">
              {/* Left Side Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left my-auto">
                <h2 className="text-xl md:text-[24px] lg:text-[42px] 2xl:mb-2 md:text-3xl xl:text-[58px] 2xl:text-[58px] mt-4 lg:mt-2 xl:mt-[1px] custom-font text-customBrown font-semibold leading-tight 2xl:mt-0 lg:leading-[1] xl:leading-[1.2]">
                  Book An Appointment To <br className="hidden 2xl:block" />
                   
                    Schedule A Consultation With Sajia Tonny.
                </h2>

                <p className="jost-font text-xs md:text-sm lg:text-sm xl:text-[18px] 2xl:text-[18px] leading-[1.6] xl:leading-[1.8] 2xl:leading-[2] mt-3 lg:mt-5">
  Using skincare products can provide numerous benefits for{" "}
  maintaining and <br className="hidden 2xl:block" />
  improving the health and appearance of your{" "} skin.
</p>


                <button
                  className="group flex mt-4 md:mt-5 items-center text-xs md:text-sm lg:text-base px-2 md:px-3 lg:px-4 py-2 lg:py-3 xl:py-4 border border-customBrown jost-font rounded-lg space-x-2 md:space-x-[8px]
        transition duration-500 hover:bg-customBrown hover:text-white"
                >
                  <span className="font-semibold text-customBrown transition group-hover:text-white">
                    DISCOVER MORE
                  </span>
                  <span
                    className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-customBrown text-white rounded-full transition duration-500
          group-hover:bg-white group-hover:text-customBrown"
                  >
                    <IoIosArrowForward className="text-xs md:text-sm lg:text-base" />
                  </span>
                </button>
              </div>

              {/* Right Side Image - Hidden on Mobile */}
              <div className="w-full  lg:w-1/2  hidden lg:flex items-center justify-center">
                <img
                  src="https://i.ibb.co.com/8jkzyCj/3.png"
                  alt="Banner"
                  className="h-full w-auto object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Repeat for other SwiperSlides */}
        <SwiperSlide>
          <div className="bg-customPink w-full xl:h-[460px]  2xl:h-[72vh] lg:h-[370px] md:h-[270px] h-[280px] ">
          <div className="container mx-auto flex flex-col lg:flex-row gap-2  2xl:gap-0 h-full px-4 md:px-8 lg:px-4 xl:xl:px-[34px] 2xl:px-5  ">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left my-auto">
              <h2 className="text-2xl md:text-[24px] lg:text-[42px] xl:text-[58px]   custom-font text-customBrown font-semibold lg:leading-[1.2]">
                The Ordinary, The <br className="hidden 2xl:hidden lg:block" /> Balance
                Set.
              </h2>

              <p className="jost-font xl:leading-[1.8] text-sm lg:text-sm xl:text-[18px]  lg:mt-5">
                This regimen balances the look of visible shine, reduces the
                look <br className="hidden lg:block" />
                of enlarged pores, reduces the look of the textural
                irregularities, <br className="hidden lg:block" /> and enhances
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
            <div className="w-full  lg:w-1/2 hidden lg:flex  items-center justify-center ">
              <img
                src="https://i.ibb.co.com/Rh7MggB/2.png"
                alt="Banner"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
          </div>
        </SwiperSlide>

        {/* Additional SwiperSlide */}
        <SwiperSlide>
         <div className="bg-customPink w-full xl:h-[460px]  2xl:h-[72vh] lg:h-[370px] md:h-[270px] h-[280px] ">
         <div className="container w-full xl:gap-40 lg:gap-32  mx-auto flex flex-col lg:flex-row gap-2  2xl:gap-0 h-full px-4 md:px-8 lg:px-4 xl:xl:px-[34px] 2xl:px-5  ">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2  flex flex-col items-center lg:items-start justify-center lg:gap-[2px] md:text-[24px] gap-2 lg:px-0 px-6 text-center lg:text-left  mt-auto mb-auto">
              <h2 className="text-2xl lg:text-[42px] xl:text-[58px]   custom-font text-customBrown font-semibold lg:leading-[1.2]">
                Stronger Collagen, Plumper  
                Skin.
              </h2>
              <p className="jost-font xl:leading-[1.8]  text-sm lg:text-sm xl:text-[18px]  lg:mt-5">
                Strengthens the collagen you have, build the collagen you don't.
                <br className="hidden  xl:hidden 2xl:hidden" /> Boost your skin dynamic
                barrier, cellular activity with our{" "}
                 products.
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
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
