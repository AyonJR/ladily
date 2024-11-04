import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { MdStar } from "react-icons/md";

const OurBrands = () => {
  return (
    <div>
      <div className="bg-[#F2F1F0] lg:h-[100vh] w-full">
       {/* content div */}
       <div className="lg:pt-20 pt-10 pb-10 md:py-8">
         {/* main content */}
         <div className="flex justify-between custom-font   lg:mx-24 mx-4 ">
          <h2 className="lg:text-4xl text-customBrown  text-2xl font-bold lg:ml-32 md:ml-24 ml-16 ">
            Our Brands
          </h2>
          <p className="text-customBrown text-lg font-bold">View All</p>
        </div>

        {/* Divider line */}
        <div className="flex justify-start lg:mx-24 mx-4">
          <hr className="lg:w-[150px] md:w-[120px] w-[80px] bg-opacity-50 bg-customBrown h-[4px] relative" />
        </div>

        <div className="flex lg:flex-row flex-col w-full lg:gap-28 gap-5 lg:px-24">
          {/* list div */}
          <div className="lg:w-1/4 w-full lg:px-0 px-4 mt-10">
            <div className="flex lg:flex-col flex-wrap lg:flex-nowrap gap-5 custom-font text-lg lg:text-2xl justify-center text-center lg:text-start">
              <h2 className="font-semibold text-customBrown border-b border-customBrown w-fit">
                CeraVe
              </h2>
              <h2 className="font-semibold w-fit">Cetaphil</h2>
              <h2 className="font-semibold w-fit">Neutrogena</h2>
              <h2 className="font-semibold w-fit">The Ordinary</h2>
              <h2 className="font-semibold w-fit">Differin</h2>
            </div>
          </div>

          {/* Swiper slider div */}
          <div className="lg:w-3/4 w-full lg:px-0 px-4 flex-1 mt-10 ">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 ">
              {/* first card */}
              <div>
                <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                  {/* Image Container */}
                  <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                    {/* New Badge */}
                    <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-xs  px-3 py-2">
                      30% <br />off
                    </span>

                    {/* Heart Icon */}
                    <div className="absolute hidden lg:block top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                      <LuHeart className="text-xl" />
                    </div>

                    {/* Product Image */}
                    <img
                      src="https://i.ibb.co.com/QDn8H2g/0000022-cerave-hydrating-facial-cleanser-415-1.png"
                      alt="The Ordinary Retinol 0.5% Serum"
                      className="w-40 h-auto"
                    />

                    {/* Add to Cart Button */}
                    <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                      <FiShoppingCart className="mr-2 text-xl" />
                      ADD TO CART
                    </button>
                  </div>

                  <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                  CeraVe Moisturizing Cream                  </h3>
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
                  <div className="flex items-center">
                      <p className="line-through lg:text-lg text-sm text-gray-500 mr-2">2790.00৳</p>
                      <p className="lg:text-lg text-sm font-medium text-customBrown">1,953.00৳</p>
                    </div>
                </div>
              </div>
              {/* second card */}
              <div>
                <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                  {/* Image Container */}
                  <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                    {/* New Badge */}
                    <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-xs  px-3 py-2">
                      30% <br />off
                    </span>

                    {/* Heart Icon */}
                    <div className="absolute lg:block hidden top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                      <LuHeart className="text-xl" />
                    </div>

                    {/* Product Image */}
                    <img
                      src="https://i.ibb.co.com/TT37SQz/0000146-cerave-moisturizing-cream-415-1.png"
                      alt="The Ordinary Retinol 0.5% Serum"
                      className="w-40 h-auto"
                    />

                    {/* Add to Cart Button */}
                    <button className="absolute  bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                      <FiShoppingCart className="mr-2 text-xl" />
                      ADD TO CART
                    </button>
                  </div>

                  <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                  CeraVe Moisturizing Cream                  </h3>
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
                  <div className="flex items-center">
                      <p className="line-through lg:text-lg text-sm text-gray-500 mr-2">3450.00৳</p>
                      <p className="lg:text-lg text-sm font-medium text-customBrown">
                        2,415.00৳</p>
                    </div>
                </div>
              </div>

              {/* third card */}
              <div>
                <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                  {/* Image Container */}
                  <div className="bg-[#F7F7F7] w-full flex items-center justify-center py-12 relative">
                    {/* New Badge */}
                    <span className="absolute top-0 left-0 bg-customBrown text-white text-xs font-semibold px-4 py-2">
                      New
                    </span>

                    {/* Heart Icon */}
                    <div className="absolute hidden lg:block top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                      <LuHeart className="text-xl" />
                    </div>

                    {/* Product Image */}
                    <img
                      src="https://i.ibb.co.com/sq2bJRm/0000058-cerave-moisturizing-cream-415-1.png"
                      alt="The Ordinary Retinol 0.5% Serum"
                      className="w-40 h-auto"
                    />

                    {/* Add to Cart Button */}
                    <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                      <FiShoppingCart className="mr-2 text-xl" />
                      ADD TO CART
                    </button>
                  </div>

                  <h3 className="lg:text-lg text-sm font-medium text-customBrown">
                  CeraVe Moisturizing Cream
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
                    1,890.00৳
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>

     
    </div>
  );
};

export default OurBrands;
