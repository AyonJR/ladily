import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F2F1F0]  w-full">
        <div className="flex lg:flex-row flex-col lg:gap-[12px] gap-10 lg:mx-[108px] mx-4 py-10 ">
          {/* left div */}
          <div className="w-2/3 md:w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 lg:gap-4 gap-7">
              {/* first column */}
              <div className="flex flex-col gap-4 ">
                <img
                  className="lg:w-24 w-[85px]"
                  src="https://i.ibb.co/CmB8H54/0000005-ladily.png"
                  alt=""
                />
                <div className="flex space-x-3">
                  <div className="w-8 h-8 rounded-full bg-transparent border-2 border-customBrown flex items-center justify-center hover:bg-customBrown text-customBrown hover:text-[#F2F1F0] ">
                    <FiFacebook className="text-lg " />
                  </div>

                  <div className="w-8 h-8 rounded-full bg-transparent border-2 border-customBrown flex items-center justify-center hover:bg-customBrown text-customBrown hover:text-[#F2F1F0]">
                    <FiInstagram className="text-lg " />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-transparent border-2 border-customBrown flex items-center justify-center hover:bg-customBrown text-customBrown hover:text-[#F2F1F0]">
                    <FiYoutube className="text-lg " />
                  </div>
                </div>
              </div>
              {/* second column */}
              <div>
                <div className="flex flex-col lg:space-y-2 space-y-1 custom-font">
                  <h2 className="text-2xl text-customBrown font-bold ">
                    Quick Links
                  </h2>
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Shipping & returns
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#945615] transition-all duration-500 group-hover:text-[#945615] group-hover:w-full"></span>
                    </span>
                  </p>

                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Privacy Notice
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-0
                      group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"
                      ></span>
                    </span>
                  </p>

                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Conditions of Use
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>

                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      About us
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>

                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Contact us
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>
                </div>
              </div>
              {/* third column */}
              <div>
                <div className="flex flex-col lg:space-y-2 space-y-1 custom-font">
                  <h2 className="text-2xl text-customBrown font-bold">
                    Customer service
                  </h2>
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      News
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>{" "}
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Compare producst list
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      New products
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>{" "}
                </div>
              </div>
              {/* fourth column */}
              <div>
                <div className="flex flex-col lg:space-y-2 space-y-1 custom-font">
                  <h2 className="text-2xl text-customBrown font-bold">
                    My account
                  </h2>
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      My account
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Orders
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>{" "}
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Addresses
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>                <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Shipping cart
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>
                  <p className="text-lg font-medium relative group">
                    <span className="inline-block relative">
                      Wishlist
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:text-[#945615] bg-[#945615] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>                </div>
              </div>
            </div>
          </div>

          {/* right div */}
          <div className="lg:w-1/3  ">
            <div className="flex lg:flex-col md:flex-row flex-col gap-2 lg:gap-5">
              <h2 className="text-2xl custom-font font-bold">
                Be the First To Know, <br />
                Subscribe To Our Newsletter!
              </h2>
              <div className="flex  gap-3">
                <input
                  className=" py-2 px-3"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email here..."
                />
                <button className="bg-customBrown duration-300 hover:bg-black text-white px-4 py-3 font-normal jost-font">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright div */}
      <div className="bg-[#543310]">
        <div className="lg:mx-[108px] mx-4">
          <div className="flex lg:justify-between lg:flex-row flex-col justify-center items-center text-white py-[22px]">
            <p className="custom-font text-lg">
              Copyright © 2024 Ladily. All rights reserved.
            </p>
            <p className="jost-font lg:text-base text-sm">
              Powered by Nopcommerce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
