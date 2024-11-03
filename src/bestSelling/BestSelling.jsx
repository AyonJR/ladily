import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const BestSelling = () => {
  return (
    <div className="lg:mx-0 mx-4">
      <div className="flex justify-between  custom-font lg:px-0">
        <h2 className="lg:text-4xl text-customBrown text-2xl font-bold lg:ml-32 md:ml-24 ml-16">
          Best Selling Categories
        </h2>
      </div>
      {/* a line div */}
      <div className="flex justify-start ">
        <hr className="lg:w-[150px] md:w-[120px] w-[80px]  bg-opacity-50 bg-customBrown h-[4px] relative  " />
      </div>

        {/* all cards div */}
      <div className="grid mt-3 lg:mt-10 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 gap-y-[24px] lg:gap-y-0">
        {/* first card */}
        <div>
          <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
            {/* Image Container */}
            <div className="bg-[#F7F7F7] w-full h-52 lg:h-80 flex items-center justify-center relative overflow-hidden">
              {/* New Badge */}
              <span className="absolute top-0 right-0 bg-customBrown text-white text-xs font-semibold p-3 z-10">
                <MdArrowOutward className="text-2xl" />
              </span>

              {/* Product Image */}
              <img
                src="https://i.ibb.co.com/ZgxqMvm/0000147-cleanser-800.jpg"
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-110"
                alt="Cleanser"
              />
            </div>

            <div>
              <h3 className="lg:text-xl text-sm font-medium  mt-2">Cleanser</h3>
            </div>
          </div>
        </div>

        {/* second card */}
        <div>
          <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
            {/* Image Container */}
            <div className="bg-[#F7F7F7] w-full h-52 lg:h-80 flex items-center justify-center relative overflow-hidden">
              {/* New Badge */}
              <span className="absolute top-0 right-0 bg-customBrown text-white text-xs font-semibold p-3 z-10">
                <MdArrowOutward className="text-2xl" />
              </span>

              {/* Product Image */}
              <img
                src="https://i.ibb.co.com/6yhX03V/0000151-face-800.jpg"
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-110"
                alt="Cleanser"
              />
            </div>

            <div>
              <h3 className="lg:text-xl text-sm font-medium  mt-2">Face</h3>
            </div>
          </div>
        </div>

        {/* third card */}
        <div>
          <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
            {/* Image Container */}
            <div className="bg-[#F7F7F7] w-full h-52 lg:h-80 flex items-center justify-center relative overflow-hidden">
              {/* New Badge */}
              <span className="absolute top-0 right-0 bg-customBrown text-white text-xs font-semibold p-3 z-10">
                <MdArrowOutward className="text-2xl" />
              </span>

              {/* Product Image */}
              <img
                src="https://i.ibb.co.com/Db4zbPN/0000149-sunscreen-800.jpg"
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-110"
                alt="Cleanser"
              />
            </div>

            <div>
              <h3 className="lg:text-xl text-sm font-medium  mt-2">Sunscreen</h3>
            </div>
          </div>
        </div>

        {/* fourth card */}
        <div>
          <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
            {/* Image Container */}
            <div className="bg-[#F7F7F7] w-full h-52 lg:h-80 flex items-center justify-center relative overflow-hidden">
              {/* New Badge */}
              <span className="absolute top-0 right-0 bg-customBrown text-white text-xs font-semibold p-3 z-10">
                <MdArrowOutward className="text-2xl" />
              </span>

              {/* Product Image */}
              <img
                src="https://i.ibb.co.com/g4c3jD2/0000148-moisturizer-800.jpg"
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-110"
                alt="Cleanser"
              />
            </div>

            <div>
              <h3 className="lg:text-xl text-sm font-medium  mt-2">Moisturizer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
