import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCallback, useRef, useState } from "react";

const ProductSlider = ({setSelectedImage , selectedImage}) => {
  
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const onSwiperInit = useCallback((swiper) => {
    swiperRef.current = swiper;
  }, []);

  const images = [
    "https://i.ibb.co/RzB42Y2/0000101-the-ordinary-retinol-05-serum-415.png",
    "https://i.ibb.co/C08tsdS/0000107-the-ordinary-retinol-05-serum.png",
    "https://i.ibb.co/pw6JvQn/0000106-the-ordinary-retinol-05-serum.png",
    "https://i.ibb.co/ySVXCwY/0000103-the-ordinary-retinol-05-serum.png",
    "https://i.ibb.co/vjg9Y0F/0000104-the-ordinary-retinol-05-serum.png",
    "https://i.ibb.co/CsQqpN6/0000102-the-ordinary-retinol-05-serum-100.png",
  ];

  return (
    <div className="flex items-center justify-between ">
      {/* Left Arrow Button */}
      <div className="">
        {" "}
        {/* Add margin on the left */}
        <button onClick={handlePrev}>
          <IoIosArrowBack className=" text-customBrown text-3xl" />
        </button>
      </div>

     {/* Swiper */}
     <Swiper
          onSwiper={onSwiperInit}
          slidesPerView={4}
          spaceBetween={5}
          pagination={{ clickable: true }}
          speed={500}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 4, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 15 },
            768: { slidesPerView: 6, spaceBetween: 10 },
            1024: { slidesPerView: 5, spaceBetween: 15 },
            1500: { slidesPerView: 5, spaceBetween: 15 },
          }}
          className="mySwiper w-full mx-auto container ml-2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
            <div
              className={`border-2 w-[80px] cursor-pointer ${
                selectedImage === image ? "border-customBrown" : "border-slate-300"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img className="w-full h-auto" src={image} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>

      {/* Right Arrow Button */}
      <div className="xl:mr-8 2xl:mr-8">
        {" "}
        {/* Add margin on the right */}
        <button onClick={handleNext}>
          <IoIosArrowForward className=" text-customBrown text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
