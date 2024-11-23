import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { VscComment } from "react-icons/vsc";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import ProductSlider from "./ProductSlider";

const Product = () => {
  const [lensStyle, setLensStyle] = useState({ display: "none" });
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  // Handle Decrement
  const handleDecrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };
  const handleMouseMove = (e) => {
    const img = e.target;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    // Background position for zoom effect
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setLensStyle({
      display: "block",
      backgroundPosition: `${bgX}% ${bgY}%`,
      backgroundImage: `url(${img.src})`,
    });
  };

  const handleMouseLeave = () => {
    setLensStyle({ display: "none" });
  };
  const [selectedImage, setSelectedImage] = useState(
    "https://i.ibb.co/RzB42Y2/0000101-the-ordinary-retinol-05-serum-415.png"
  );

  return (
    <div className="lg:px-[32px] mx-auto container relative">
      <div className="w-full flex gap-10">
        {/* Left Section (Image with Hover Zoom Trigger) */}
        <div className="w-1/2 relative">
          <img
            className="w-[500px] h-auto object-cover transition-all duration-300 hover:brightness-75"
            src={selectedImage}
            alt="The Ordinary Retinol 0.5% Serum"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          <div className=" mt-5">
            <ProductSlider setSelectedImage={setSelectedImage} selectedImage={selectedImage}></ProductSlider>
          </div>
        </div>

        {/* Right Section (Product Details) */}
        <div className="w-1/2 relative">
          {/* Zoom Lens Overlay */}
          <div
            className="absolute"
            style={{
              ...lensStyle,
              right: "115px", // Position of zoom lens
              top: "10px", // Adjust as needed
              width: "500px",
              height: "500px",
              border: "1px solid gray",
              backgroundColor: "white",
              backgroundRepeat: "no-repeat",
              backgroundSize: "300% 300%", // Adjust zoom level
              zIndex: 20,
            }}
          ></div>

          <div className="flex gap-10 items-start mt-2">
            <h1 className="text-4xl font-extrabold custom-font">
              The Ordinary Retinol 0.5% Serum
            </h1>
            <div className="flex items-center gap-2">
              <p className="bg-customPink font-bold">
                <IoShareSocialOutline className="text-customBrown text-xl m-2" />
              </p>
              <p className="bg-customPink font-bold">
                <LuHeart className="text-customBrown text-xl m-2" />
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="jost-font text-slate-700">
              The Ordinary's Retinol 0.5% in Squalane Serum is a water-free
              formula containing 0.5% retinol. This oil-like serum (anhydrous)
              is great for experienced users of pure retinol products looking
              for solutions for textural irregularities and signs of aging.
            </p>
          </div>
          {/* Horizontal Line */}
          <hr className="w-full lg:mt-5" />
          <div className="mt-5 gap-8 flex jost-font">
            <div>
              <p className="font-semibold">Targets</p>
              <div className="mt-1 text-slate-700">
                <p>Signs of Aging, Dryness,</p>
                <p>Textural Irregularities,</p>
                <p>Uneven Skin Tone</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Suited to</p>
                <div className="mt-1 text-slate-700">
                  <p>All Skin Types</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Format</p>
              <div className="mt-1 text-slate-700">
                <p>Anhydrous Serum</p>
              </div>
              <div className="mt-16">
                <p className="font-semibold">Key ingredients</p>
                <div className="mt-1 text-slate-700">
                  <p>Retinol, Squalane</p>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal Line */}
          <hr className="w-full lg:mt-5" />
          <div className="mt-7 jost-font">
            <div className="flex items-center gap-14">
              <div>
                <h1 className="text-3xl text-customBrown font-medium">
                  1,990.00<span className="text-4xl font-semibold">৳</span>
                </h1>
              </div>
              {/* rating and review flex */}
              <div className="flex items-center gap-14">
                <div className="flex  ">
                  <div>
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
                        <p className="lg:text-base text-sm">0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* review */}
                <div className="flex items-center gap-[13px]">
                  <div>
                    <p>
                      <VscComment className="text-xl" />
                    </p>
                  </div>
                  <div>
                    <p>0 Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <h2 className="font-semibold">
                Availability :{" "}
                <span className="text-slate-700 font-normal">In stock</span>
              </h2>
            </div>
            <div>
              <hr className="w-full lg:mt-5" />
            </div>
            <div className="mt-5">
              <p className="font-semibold">Size</p>
              <div className="mt-3 bg-customPink rounded-lg w-1/5 flex items-center gap-2">
                {/* Checkbox-like Div */}
                <div className="flex ml-6 my-3 items-center justify-center w-5 h-5 rounded-full border border-customBrown">
                  <div className="w-3 h-3 rounded-full bg-customBrown"></div>
                </div>
                {/* Text */}
                <p>30 ml</p>
              </div>
              <div>
                <hr className="w-full lg:mt-5" />
              </div>
              {/* count and button */}
              <div className="mt-5 flex items-center gap-4">
                <div className="flex">
                  {/* Button */}
                  <div className="bg-customPink">
                    <div className="flex gap-7 px-6 py-2">
                      <button onClick={handleDecrement}>
                        <AiOutlineMinus className="text-2xl" />
                      </button>
                      {/* Fixed-width container for count */}
                      <p className="text-[22px] w-[24px] text-center jost-font">
                        {count}
                      </p>
                      <button onClick={handleIncrement}>
                        <GoPlus className="text-3xl" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Add to cart button */}
                <div>
                  <button className="flex items-center justify-center bg-customBrown text-white font-semibold py-3 px-20">
                    <FiShoppingCart className="mr-2 text-xl" />
                    Add to cart
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48"></div>
    </div>
  );
};

export default Product;
