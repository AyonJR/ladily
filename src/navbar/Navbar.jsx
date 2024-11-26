import { useEffect, useState } from "react";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);

  };

 

  const dropdownOptions = [
    ["Cleaner", "Toner", "Scrum", "Moisturizer", "Sunscreen"],
    ["Eyes Scrum", "Eyes Cream"],
    ["Hair Scrum", "Hair Mask", "Hair Treatment", "Hair Color"],
    ["Body Lotion", "Body Soap", "Body Scrub", "Powder", "Body Care Tools"],
  ];

  const categories = ["Face", "Eyes", "Hair", "Body Care"];

  return (
    <div className="container mx-auto px-0 xl:px-[24px] 2xl:px-[11px] lg:px-[8px] md:px-0">
  <header className="py-4 bg-white w-full">
    <div className="flex items-center justify-between lg:h-[30px] h-5">
          <a
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center  lg:pl-2 pl-[24px]"
          >
            <img
              className="lg:w-[100px] lg:h-[34px] h-[31px] w-[90px] lg:ml-0 ml-[1px] "
              src="https://i.ibb.co/CmB8H54/0000005-ladily.png"
              alt=""
            />
          </a>

          {/* Icons and hamburger for mobile view */}
          <div className="flex items-center lg:hidden xl:hidden   space-x-5   justify-end  flex-grow ">
            <a href="#">
              <FiUser className="text-lg" />
            </a>
            <div className="relative">
              <a href="#">
                <LuHeart className="text-lg " />
                <span className="absolute -top-2 -right-2  bg-customBrown text-white text-[10px]  rounded-full h-4 w-4 flex jost-font items-center justify-center">
                  0
                </span>
              </a>
            </div>
            <div className="relative">
              <a href="#">
                <FiShoppingCart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-customBrown text-white text-[10px] rounded-full h-4 w-4 flex jost-font items-center justify-center">
                  0
                </span>
              </a>
            </div>
            <button onClick={toggleDrawer} className="lg:p-4 py-4 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Icons for larger screens */}
          <ul className="hidden lg:flex gap-5 items-center lg:my-[6px] lg:mr-[2px]">
  <li className="flex items-center lg:mb-2 border-b border-customBrown w-[300px]">
    <input
      className="w-full py-[2px] pr-8 outline-none font-bold placeholder-black custom-font"
      type="search"
      name="Search"
      placeholder="Search in Ladily"
    />
    <RiSearchLine className="text-lg" />
  </li>
  <li className="flex items-center lg:ml-1">
    <a href="#">
      <FiUser className="text-lg" />
    </a>
  </li>
  <li className="relative flex items-center">
    <a href="#">
      <LuHeart className="text-lg" />
      <span className="absolute -top-2 -right-2 bg-customBrown text-white text-[10px] rounded-full h-4 w-4 flex items-center jost-font justify-center">
        0
      </span>
    </a>
  </li>
  <li className="relative flex items-center">
    <a href="#">
      <FiShoppingCart className="text-lg" />
      <span className="absolute -top-2 -right-2 bg-customBrown text-white text-[10px] rounded-full h-4 w-4 flex jost-font items-center justify-center">
        0
      </span>
    </a>
  </li>
</ul>

        </div>
      </header>

      {/* Mobile Drawer */}
      <div className="">
      <div
        className={`fixed z-50 top-0 left-0 h-full w-full bg-white shadow-lg transition-transform duration-500 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex items-center justify-between p-4 bg-customBrown text-white">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={toggleDrawer} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        {/* Search Box */}
        <div className="p-4 bg-customPink">
          <div className="flex items-center border-b border-customBrown w-full">
            <input
              className="w-full py-1 pr-8 outline-none bg-customPink font-bold placeholder-black custom-font"
              type="search"
              name="Search"
              placeholder="Search in Ladily"
            />
            <FiSearch className="text-lg" />
          </div>
        </div>

        {/* Dropdown Options */}
        <div className="p-4 space-y-4 ">
          {categories.map((category, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className="flex justify-between items-center w-full custom-font font-extrabold text-black text-xl py-2 border-b border-opacity-15 border-black"
              >
                {category}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Items */}
              {openDropdown === index && (
                <div className="pl-4 space-y-2">
                  {dropdownOptions[index].map((option, optionIndex) => (
                    <a
                      key={optionIndex}
                      href="#"
                      className="block custom-font font-extrabold text-black text-lg   rounded p-2"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
