import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { VscComment } from "react-icons/vsc";

const Product = () => {
  const [lensStyle, setLensStyle] = useState({ display: "none" });

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

  return (
    <div className="lg:px-[32px] mx-auto container relative">
      <div className="w-full flex">
        {/* Left Section (Image with Hover Zoom Trigger) */}
        <div className="w-1/2 relative">
          <img
            className="w-[500px] h-auto object-cover transition-all duration-300 hover:brightness-75"
            src="https://i.ibb.co/RzB42Y2/0000101-the-ordinary-retinol-05-serum-415.png"
            alt="The Ordinary Retinol 0.5% Serum"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
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

          <div className="flex gap-10 items-start mt-10">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
