import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import SocialLinks from "./SocialLinks";
import EventInfo from "./EventInfo";
import Video from "../assets/NoOutro.mp4";
import Logo from "./Logo";
import useClickOutside from "../utilty/hooks/useClickOutside"; 
import StatisticsSection from "./StatisticsSection";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState(null);  // Add activeItem state

  const menuItems = [
    { title: "الرئيسية", items: [" عن المنتدى", "رسالة المنتدى ", "المتحدثون"  , "جلسات المنتدى " , "اسئلة عن المنتدى "] },
    {
      title: "المعرض",
      items: [" المعرض", " عن المعرض", " جلسات المعرض"]
    },
    {
      title: "جائزة المنتدى",
      items: ["  جائزة المنتدى", "الاسئلة الشائعة عن الجائزة"]
    },
    {
      title: "أخرى",
      items: ["حول العالم", "المركز الإعلامي", "فعاليات السعودية"]
    }
  ];

  const handleDropdownToggle = index => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMenuItemClick = (index, itemIndex) => {
    setActiveItem(itemIndex); // Set active item when clicked
  };


    // Using the custom hook in the mobile menu div
    const mobileMenuRef = useClickOutside(() => setIsMobileMenuOpen(false));

  return (
    <div className="relative min-h-screen bg-black text-white w-full">
      {/* الفيديو كخلفية */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.4)" }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col min-h-screen w-full ">
        {/* Navbar */}
        <div className="flex justify-center w-full h-[90px] items-center">
          <nav className="flex flex-col w-full  text-white  ">
            <div className="flex justify-between items-center w-full px-4 mx-auto">
              {/* Left Side */}
              <div className="flex items-center gap-3 lg:order-last">
                <Globe className="w-6 h-6 cursor-pointer hover:text-[#00FFB3]" />
                <button className="bg-[#006E62] text-white p-2 rounded-md hover:bg-[#005a51] transition max-md:hidden">
                  تسجيل الدخول
                </button>
              </div>

              {/* Logo */}
              <Logo />

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-4  ">
                {menuItems.map((menu, index) =>
                  <div key={index} className="relative group">
                    {/* Menu Button */}
                    <button className="text-white hover:text-[#3fdaab] transition duration-300 flex justify-center gap-2 items-center">
                      {menu.title}
                      <svg
                        className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Dropdown */}
                    <div className="absolute left-0 top-[20px] hidden group-hover:flex flex-col bg-white text-black hover:text-[#3fdaab] transition duration-300 shadow-lg rounded-md mt-2 w-40">
                      {menu.items.map((item, i) =>
                        <a
                          key={i}
                          href="#"
                          className="block px-2 py-2 hover:bg-gray-100 transition"
                        >
                          {item}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden mr-4"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen
                  ? <X className="w-6 h-6" />
                  : <Menu className="w-6 h-6" />}
              </button>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen &&
              <div ref={mobileMenuRef} className="fixed top-[70px] left-[20px] w-[250px] rounded-lg h-auto backdrop-blur-xl z-50 lg:hidden">
                <div className="p-4 space-y-4">
                  {menuItems.map((menu, index) =>
                    <div key={index} className="">
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className={`w-full flex justify-between items-center text-left px-4 py-2 text-white transition ${activeDropdown === index && "border-r border-[#006E62]"}`}
                      >
                        <span className="text-white hover:text-[#006E62]">
                          {menu.title}
                        </span>
                        <svg
                          className={`w-4 h-4 transform ${activeDropdown === index
                            ? "rotate-180"
                            : "rotate-0"} transition-transform`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === index &&
                        <div className="flex flex-col ">
                          {menu.items.map((item, i) =>
                            <a
                              key={i}
                              href="#"
                              onClick={() => handleMenuItemClick(index, i)}  // Set active item on click
                              className={`block px-2 py-2 text-white hover:text-[#006E62] transition-all duration-300 ${activeItem === i && "border-r border-[#006E62]"}`}
                            >
                              {item}
                            </a>
                          )}
                        </div>}
                    </div>
                  )}
                  <div className="">
                    <button className="w-full bg-[#006E62] p-2 text-white rounded-md hover:bg-[#005a51] transition">
                      تسجيل الدخول
                    </button>
                  </div>
                </div>
              </div>}
          </nav>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col items-center justify-center flex-grow  mt-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-center">
            الإعلام
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            في عالم يتشكل
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-[#006E62] text-white w-[250px] h-[70px] py-6 flex justify-center items-center px-2 rounded-[20px] hover:bg-[#005a51] transition">
             
              احجز مساحتك الآن
            </button>
            <button className="border-2 border-white rounded-[20px] text-white w-[250px] h-[70px] py-6 flex justify-center items-center px-2   hover:text-[#1B3B39] transition">
            سجل الآن
            </button>
          </div>
          <SocialLinks />
          <EventInfo />
          <StatisticsSection />

        </div>
      </div>

    </div>
  );
};

export default Header;
