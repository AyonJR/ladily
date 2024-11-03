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
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true}>
      <SwiperSlide>
          <div className="flex flex-col lg:flex-row bg-customPink lg:h-[75vh] h-[60vh] w-full">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:ml-24 lg:px-0 px-4 text-center lg:text-left  mt-auto mb-auto">
              <h2 className="text-2xl lg:text-6xl mt-4 lg:mt-0 custom-font text-customBrown font-semibold leading-[1.2]">
                Book An Appointment  <br className="hidden lg:block" />
                To Schedule A Consultation With Sajia Tonny.
              </h2>

              <p className="jost-font text-sm lg:text-lg lg:mt-5">
                Using skincare products can provide numerous benefits for{" "}
                maintaining and improving the health and appearance of your{" "}
                skin.
              </p>

              <button
                className="group flex mt-5 items-center text-sm lg:text-lg px-3 py-2 lg:px-4 lg:py-4 border border-customBrown jost-font rounded-xl space-x-2
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
                src="https://i.ibb.co.com/Zdj4jB6/images-50-removebg-preview.png"
                alt="Banner"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Repeat for other SwiperSlides */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row bg-customPink lg:h-[75vh] h-[60vh] w-full">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:ml-24 lg:px-0 px-4 text-center lg:text-left  mt-auto mb-auto">
              <h2 className="text-2xl lg:text-6xl custom-font text-customBrown font-semibold leading-[1.2]">
                The Ordinary, The <br className="hidden lg:block" /> Balance Set
              </h2>

              <p className="jost-font text-sm lg:text-lg lg:mt-5">
                The regimen balances the look of visible shine, reduces the look of enlarged pores, 
                reduces textural irregularities, and enhances skin radiance.
              </p>

              <button
                className="group flex mt-5 items-center text-sm lg:text-lg px-3 py-2 lg:px-4 lg:py-4 border border-customBrown jost-font rounded-xl space-x-2
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
                src="https://i.ibb.co.com/QpMbVFr/images-51-removebg-preview.png"
                alt="Banner"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Additional SwiperSlide */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row bg-customPink h-[60vh] lg:h-[75vh] w-full">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:ml-24 lg:px-0 px-4 text-center lg:text-left  mt-auto mb-auto">
              <h2 className="text-2xl lg:text-6xl custom-font text-customBrown font-semibold leading-[1.2]">
                Stronger Collagen <br className="hidden lg:block" /> Plumper Skin
              </h2>
              <p className="jost-font text-sm lg:text-lg lg:mt-5">
                Strengthen the collagen you have, and build the collagen you don't. 
                Boost your skin's dynamic barrier with our products.
              </p>

              <button
                className="group flex mt-5 items-center text-sm lg:text-lg px-3 py-2 lg:px-4 lg:py-4 border border-customBrown jost-font rounded-xl space-x-2
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
                src="https://i.ibb.co.com/kSQ9m0X/3636f88b4d6c1224dd9b5b72cff79469-removebg-preview.png"
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
