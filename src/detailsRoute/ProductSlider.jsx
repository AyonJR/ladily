import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCallback, useRef } from "react";

const ProductSlider = () => {
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

  return (
    <div className="flex items-center justify-between ">
      {/* Left Arrow Button */}
      <div className="ml-4">
        {" "}
        {/* Add margin on the left */}
        <button onClick={handlePrev}>
          <IoIosArrowBack className="text-xs text-customBrown lg:text-3xl" />
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
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1500: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mySwiper w-full mx-auto container ml-2"
      >
        <SwiperSlide>
          <div className="border-2 w-[100px] border-slate-300">
            <img
              className="w-[100px]"
              src="https://i.ibb.co.com/C08tsdS/0000107-the-ordinary-retinol-05-serum.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 w-[100px] border-slate-300">
            <img
              className="w-[100px]"
              src="https://i.ibb.co.com/pw6JvQn/0000106-the-ordinary-retinol-05-serum.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 w-[100px] border-slate-300">
            <img
              className="w-[100px]"
              src="https://i.ibb.co.com/ySVXCwY/0000103-the-ordinary-retinol-05-serum.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 w-[100px] border-slate-300">
            <img
              className="w-[100px]"
              src="https://i.ibb.co.com/vjg9Y0F/0000104-the-ordinary-retinol-05-serum.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 w-[100px] border-slate-300">
            <img
              className="w-[100px]"
              src="https://i.ibb.co.com/CsQqpN6/0000102-the-ordinary-retinol-05-serum-100.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Right Arrow Button */}
      <div className="xl:mr-2 2xl:mr-8">
        {" "}
        {/* Add margin on the right */}
        <button onClick={handleNext}>
          <IoIosArrowForward className="text-xs text-customBrown lg:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
