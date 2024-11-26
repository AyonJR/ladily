import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

const OurBrands = () => {
  return (
    <div>
      <div className="bg-[#F2F1F0] lg:h-[630px] w-full">
        {/* content div */}
        <div className="lg:pt-20 pt-10 pb-10 md:py-8">
          {/* main content */}
          <div className="flex justify-between custom-font   lg:px-[33px] 2xl:px-[0px] px-6 mx-auto container ">
            <h2 className="lg:text-4xl text-customBrown  text-2xl font-bold lg:ml-[112px] md:ml-24 ml-16 ">
              Our Brands
            </h2>
            <p className="text-customBrown text-lg font-bold">View All</p>
          </div>

          {/* Divider line */}
          <div className="flex justify-start lg:px-[33px] 2xl:px-[0px] px-6 mx-auto container">
            <hr className="lg:w-[135px] md:w-[120px] w-[80px] bg-opacity-50 bg-customBrown h-[4px] relative" />
          </div>

          <div className="flex lg:flex-row flex-col w-full lg:gap-[100px] gap-5 lg:px-[33px] 2xl:px-[0px] px-6 mx-auto container">
            {/* list div */}
            <div className="lg:w-1/4 w-full lg:px-0 px-6 mt-10">
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
            <div className="lg:w-3/4 w-full lg:px-0 px-6 flex-1 mt-10 ">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 ">
                {/* first card */}
                <Link to={'/details'}>
                <div>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group ">
                    {/* Image Container */}
                    <div className="w-full flex items-center justify-center bg-[#F7F7F7] lg:py-10 relative lg:border-b-[35px] py-5 border-white ">
                      {/* New Badge */}
                      <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                        30% <br />
                        Off
                      </span>

                      {/* Heart Icon */}
                      <div className="absolute hidden lg:block top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                        <LuHeart className="text-xl" />
                      </div>

                      {/* Product Image */}
                      <img
                        src="https://i.ibb.co.com/hXLpFw4/0000022-cerave-hydrating-facial-cleanser-415-2.png"
                        alt="The Ordinary Retinol 0.5% Serum"
                        className="xl:w-[140px] lg:w-[140px] md:w-[140px] 2xl:w-[140px] w-[135px]  h-auto mb-2" 
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm pt-2 lg:pt-[16px] font-medium text-customBrown">
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
                </div></Link>

                {/* second card */}
               <Link to={'/details'}>
               <div>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                    {/* Image Container */}
                    <div className="w-full flex items-center justify-center bg-[#F7F7F7] lg:py-10 relative lg:border-b-[35px] py-5 border-white">
                      {/* New Badge */}
                      <span className="absolute rounded-full top-2 left-2 bg-customBrown text-white text-[10px] lg:text-xs px-3 py-2">
                        30% <br />
                        Off
                      </span>

                      {/* Heart Icon */}
                      <div className="absolute lg:block hidden top-2 right-2 transform translate-x-full bg-white text-customBrown p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                        <LuHeart className="text-xl" />
                      </div>

                      {/* Product Image */}
                      <img
                        src="https://i.ibb.co.com/TT37SQz/0000146-cerave-moisturizing-cream-415-1.png"
                        alt="The Ordinary Retinol 0.5% Serum"
                        className="xl:w-[140px] lg:w-[140px] md:w-[140px] 2xl:w-[140px] w-[135px]  h-auto mb-2" 
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute  bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm pt-2 lg:pt-[16px] font-medium text-customBrown">
                      CeraVe Moisturizing Cream{" "}
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
                </div></Link> 

                {/* third card */}
                <Link to={'/details'}>
                <div>
                  <div className="flex flex-col jost-font items-center text-center lg:space-y-2 space-y-1 group">
                    {/* Image Container */}
                    <div className="w-full flex items-center justify-center bg-[#F7F7F7] lg:py-10 relative lg:border-b-[35px] py-5 border-white">
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
                        className="xl:w-[140px] lg:w-[140px] md:w-[140px] 2xl:w-[140px] w-[135px]  h-auto mb-2" 
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-customBrown text-white font-semibold py-3 w-full px-4 transition-all duration-300 hover:bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:flex items-center justify-center">
                        <FiShoppingCart className="mr-2 text-xl" />
                        ADD TO CART
                      </button>
                    </div>

                    <h3 className="lg:text-lg text-sm pt-2 lg:pt-[16px] font-medium text-customBrown">
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
                        2,415.00৳
                      </p>
                  </div>
                </div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
