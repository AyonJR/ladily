import Header from "../navbar/Header";
import Navbar from "../navbar/Navbar";
import { SlArrowRight } from "react-icons/sl";
import Product from "./Product";
import Overview from "./Overview";

const Details = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hidden lg:block">
        <Header></Header>
      </div>
      {/* details content */}
      <div className="lg:px-[32px] px-6 mx-auto container hidden lg:block   2xl:px-[40px] mt-20">
        <div className="flex custom-font  items-center gap-[20px]">
          <p className="font-bold text-lg">Home</p>
          <p>
            <SlArrowRight className="text-sm mt-1" />
          </p>
          <p className="font-bold text-lg">Face</p>
          <p>
            <SlArrowRight className="text-sm mt-1" />
          </p>
          <p className="font-bold text-lg">Serum</p>
          <p>
            <SlArrowRight className="text-sm mt-1" />
          </p>
          <p className="font-bold text-lg">
            The Ordinary Retinol 0.5% Serum
          </p>
        </div>
      </div>
      <div className="lg:px-[32px] mx-auto container">
        <hr className="w-full lg:mt-6" />
      </div>
      <div className="mt-4  px-6">
        <Product></Product>
      </div>
      
    </div>
  );
};

export default Details;
