import { useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  let closeTimeout;

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeout);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setOpenDropdown(null), 200);
  };

  // Dropdown options for each menu
  const dropdownOptions = [
    ["Cleaner", "Toner", "Scrum","Moisturizer","Sunscreen"],
    ["Eyes Scrum", "Eyes Cream"],
    ["Hair Scrum", "Hair Mask", "Hair Treatment","Hair Color"],
    ["Body Lotion", "Body Soap", "Body Scrub", "Powder", "Body Care Tools"],
  ];

  return (
    <div className="lg:h-[20px] h-0 custom-font lg:block hidden ">
      <div className="border-customBrown border-t border-opacity-20 ">
        <div className="flex justify-center gap-[51px] lg:py-[16px] p-0 lg:ml-[55px] 2xl:ml-[48px]">
          {["Face", "Eyes", "Hair", "Body Care"].map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center font-semibold text-black text-[20px] hover:text-opacity-80">
                {menu}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 ml-[9px] transition-transform ${
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
              {openDropdown === index && (
                <div
                  className="absolute top-full my-2 w-[260px] bg-white rounded shadow-md z-10"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="pt-2">
                    {dropdownOptions[index].map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`px-6 py-3 text-xl font-semibold hover:bg-customBrown hover:text-white ${
                          optionIndex === dropdownOptions[index].length - 1
                            ? ""
                            : "border-b border-customBrown"
                        }`}
                      >
                        <a href="#">{option}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
