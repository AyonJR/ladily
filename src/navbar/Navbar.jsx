import { useState } from "react";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";

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
    <div className="">
      <header className="py-4 lg:px-0 px-4 bg-white w-full ">
        <div className="container flex items-center justify-between lg:h-8 h-6  ">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              className="lg:w-24 w-[85px]"
              src="https://i.ibb.co/CmB8H54/0000005-ladily.png"
              alt=""
            />
          </a>

          {/* Icons and hamburger for mobile view */}
          <div className="flex items-center space-x-5 md:hidden justify-end flex-grow">
            <a href="#">
              <FiUser className="text-lg" />
            </a>
            <div className="relative">
              <a href="#">
                <LuHeart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-customBrown text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
            <div className="relative">
              <a href="#">
                <FiShoppingCart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-customBrown text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
            <button onClick={toggleDrawer} className="p-4">
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
          <ul className="hidden md:flex gap-5 items-center">
            <li className="flex items-center border-b border-customBrown w-[280px]">
              <input
                className="w-full py-1 pr-8 outline-none font-bold placeholder-black custom-font"
                type="search"
                name="Search"
                placeholder="Search in Ladily"
              />
              <FiSearch className="text-lg" />
            </li>
            <li className="flex items-center">
              <a href="#">
                <FiUser className="text-lg" />
              </a>
            </li>
            <li className="relative flex items-center">
              <a href="#">
                <LuHeart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-customBrown text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </a>
            </li>
            <li className="relative flex items-center">
              <a href="#">
                <FiShoppingCart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-customBrown text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
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
        <div className="p-4 space-y-4">
          {categories.map((category, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className="flex justify-between items-center w-full custom-font font-extrabold text-black text-xl py-2"
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
