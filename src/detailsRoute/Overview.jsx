import { TiTick } from "react-icons/ti";

const Overview = () => {
  return (
    <div>
      {/* overview content */}
      <div className="lg:px-[240px] flex custom-font gap-[50px] ">
        <div className="border-b border-customBrown">
          <p className="text-[25px] font-bold text-customBrown">Description</p>
        </div>
        <div className="">
          <p className="text-[25px] font-bold text-slate-700">Usage Details</p>
        </div>
        <div className="">
          <p className="text-[25px] font-bold text-slate-700">Reviews</p>
        </div>
      </div>
      <div className=" mx-auto container">
        <hr className="w-full " />
      </div>
      <div className="">
        {/* overview contents */}
        <div className="flex w-full ">
          <div className="w-1/6 mt-10">
            <h2 className="text-3xl custom-font font-bold">Overview</h2>
          </div>
          <div className="border-l border-slate-200">
            <div className="w-5/6 pl-[18px] mt-10 mx-auto container">
              <p className="text-2xl font-semibold custom-font">Benefits</p>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                  Targets signs of aging
                </p>
              </div>
              {/* 2nd */}
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                Improves skin's elasticity, texture, and radiance                </p>
              </div>
              <p className="text-2xl mt-10 font-semibold custom-font">Formulated Without
              </p>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                 Alcohol             </p>
              </div>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                Gluten             </p>
              </div>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                Nuts             </p>
              </div>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                Silicone             </p>
              </div>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                Parabens
                </p>
              </div>
              <div className="flex items-center w-full gap-3 mt-3">
                <div className="bg-customPink p-[2px] rounded-full inline-flex items-center justify-center">
                  <TiTick className="text-customBrown text-xl" />
                </div>

                <p className="whitespace-nowrap jost-font">
                Sulfates             </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
