import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { VscComment } from "react-icons/vsc";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import ProductSlider from "./ProductSlider";
import Overview from "./Overview";

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

    // Calculate mouse position relative to the image
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Ensure mouse is within the image boundaries to avoid jittering
    if (x < 0 || x > width || y < 0 || y > height) {
      setLensStyle((prev) => ({ ...prev, display: "none" })); // Hide lens when mouse is out
      return;
    }

    // Background position for zoom effect
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setLensStyle({
      display: "block",
      backgroundPosition: `${bgX}% ${bgY}%`,
      backgroundImage: `url(${img.src})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "300% 300%", // Adjust zoom level as needed
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
      <div className="w-full lg:flex  gap-5 lg:gap-5">
        {/* Left Section (Image with Hover Zoom Trigger) */}
        <div className="lg:w-1/2 relative">
          {/* Image */}
          <img
            className="lg:w-[500px] w-full mt-[10px] h-auto object-cover  transition-all duration-300 hover:brightness-75"
            src={selectedImage}
            alt="The Ordinary Retinol 0.5% Serum"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />

          {/* Zoom Lens Overlay */}
          <div className="lg:hidden">
            <div
              className={`absolute lg:right-[115px] lg:top-[10px] lg:w-[500px] lg:h-[500px] w-full h-full top-0 left-0`}
              style={{
                ...lensStyle,
                border: "1px solid gray",
                backgroundColor: "white",
                backgroundRepeat: "no-repeat",
                backgroundSize: "300% 300%", // Adjust zoom level
                zIndex: 20,
              }}
            ></div>
          </div>

          {/* Slider */}
          <div className="mt-5">
            <ProductSlider
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
            ></ProductSlider>
          </div>
        </div>

        {/* Right Section (Product Details) */}
        <div className="lg:w-1/2 relative">
          {/* Zoom Lens Overlay */}
          <div className="lg:block hidden">
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
          </div>

          <div className="lg:mt-2 mt-8 flex gap-10 items-start ">
            <h1 className="lg:text-3xl text-xl font-medium lg:font-bold jost-font">
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
            <p className="jost-font text-slate-700 lg:text-base text-sm">
              The Ordinary's Retinol 0.5% in Squalane Serum is a water-free
              formula containing 0.5% retinol. This oil-like serum (anhydrous)
              is great for experienced users of pure retinol products looking
              for solutions for textural irregularities and signs of aging.
            </p>
          </div>
          {/* Horizontal Line */}
          <hr className="w-full mt-5" />
          <div className="mt-5 gap-8 flex jost-font">
            <div>
              <div className="flex  gap-16">
                <div>
                  <p className="font-semibold">Targets</p>
                  <div className="mt-1 text-slate-700 lg:text-base text-sm">
                    <p>Signs of Aging, Dryness,</p>
                    <p>Textural Irregularities,</p>
                    <p>Uneven Skin Tone</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Format</p>
                  <div className="mt-1 text-slate-700 lg:text-base text-sm">
                    <p>Anhydrous Serum</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex lg:flex-row flex-col lg:gap-[138px] gap-4">
                <div>
                  <p className="font-semibold">Suited to</p>
                  <div className="mt-1 text-slate-700 lg:text-base text-sm">
                    <p>All Skin Types</p>
                  </div>
                </div>
                <div className="">
                  <p className="font-semibold">Key ingredients</p>
                  <div className="mt-1 text-slate-700 lg:text-base text-sm">
                    <p>Retinol, Squalane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal Line */}
          <hr className="w-full mt-7" />
          <div className="mt-7 jost-font">
            <div className="flex lg:justify-start justify-center">
              <div className="flex lg:flex-row flex-col items-center lg:items-center gap-5">
                {/* Price */}
                <div className="order-1 lg:order-none">
                  <h1 className="text-3xl text-customBrown font-medium">
                    1,990.00
                    <span className="lg:text-4xl font-semibold">৳</span>
                  </h1>
                </div>

                {/* Rating and Review */}
                <div className="flex flex-col lg:flex-row lg:items-center items-start gap-4 lg:gap-14 order-2 lg:order-none">
                  {/* Rating Section */}
                  <div className="flex lg:flex-row  gap-5 lg:gap-8">
                    <div className="flex  items-center gap-2">
                      <div className="flex justify-center lg:justify-start">
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                        <MdStar className="lg:text-lg text-lg text-[#CFCFCE]" />
                      </div>
                      <div>
                        <p className="lg:text-base text-sm">0.00</p>
                      </div>
                    </div>

                    {/* Review Section */}
                    <div className="bg-customPink px-3 py-2">
                      <div className="flex items-center gap-2 lg:gap-[13px]">
                        <div>
                          <VscComment className="text-xl" />
                        </div>
                        <div>
                          <p>0 Review</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="mt-7 ">
                <h2 className="font-semibold">
                  Availability :{" "}
                  <span className="text-slate-700 font-normal">In stock</span>
                </h2>
              </div>
            </div>
            <div>
              <hr className="w-full mt-7" />
            </div>
            <div className="mt-5">
              <div className="flex justify-center lg:justify-start">
                <div className=" lg:text-left">
                  <div className="flex justify-center lg:justify-start">
                    <p className="font-semibold">Size</p>
                  </div>
                  <div className="mt-3 bg-customPink  w-[120px]  flex items-center gap-4 mx-auto lg:mx-0 px-4 py-3">
                    {/* Checkbox-like Div */}
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-customBrown shrink-0">
                      <div className="w-3 h-3 rounded-full bg-customBrown"></div>
                    </div>
                    {/* Text */}
                    <p className="text-sm font-medium text-nowrap">30 ml</p>
                  </div>
                </div>
              </div>

              <div>
                <hr className="w-full lg:mt-5 lg:block hidden" />
              </div>
              {/* count and button */}
              <div className="mt-5 flex items-center lg:gap-4 gap-2 fixed bottom-0 left-0 w-full bg-white px-4 py-3 z-50 lg:static">
                {/* Quantity Selector */}
                <div className="bg-customPink w-[130px] lg:w-[170px]">
                  <div className="flex gap-2 px-4 py-2 items-center justify-between">
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
                {/* Add to Cart Button */}
                <div className="flex-grow">
                  <button className="flex items-center justify-center bg-customBrown text-white font-semibold py-3 w-full  lg:w-[280px]">
                    <FiShoppingCart className="mr-2 text-xl" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Overview></Overview>
      </div>
    </div>
  );
};

export default Product;
