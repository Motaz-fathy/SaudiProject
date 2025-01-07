import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import Logo from "./Logo";

const menuItems = [
  {
    title: "الرئيسية",
    items: ["نبذة عن المنتدى", "الأخبار", "الفعاليات"]
  },
  {
    title: "المعرض",
    items: ["معرض الصور", "معرض الفيديو", "المعارض السابقة"]
  },
  {
    title: "جائزة المنتدى",
    items: ["شروط الجائزة", "الفائزون", "لجنة التحكيم"]
  },
  {
    title: "أخرى",
    items: ["حول العالم", "المركز الإعلامي", "فعاليات السعودية"]
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = index => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className=" text-white py-4 px-6 shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-4 lg:order-last">
          <Globe className="w-6 h-6 cursor-pointer hover:text-[#00FFB3]" />
          <button className="bg-[#006E62] text-white px-6 py-2 rounded-md hover:bg-[#005a51] transition">
            تسجيل الدخول
          </button>
        </div>

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className=" lg:flex items-center space-x-6">
          {menuItems.map((menu, index) =>
            <div key={index} className="relative group">
              <button className="text-white hover:text-[#00FFB3] transition">
                {menu.title}
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded-md mt-2 w-40">
                {menu.items.map((item, i) =>
                  <a
                    key={i}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
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
        <div className="lg:hidden  md:block sm:block  bg-[#004F45] mt-4 shadow-md rounded-md">
          {menuItems.map((menu, index) =>
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="w-full text-left px-4 py-2 text-white hover:bg-[#005a51] transition"
              >
                {menu.title}
              </button>
              {activeDropdown === index &&
                <div className="bg-gray-50 text-black">
                  {menu.items.map((item, i) =>
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      {item}
                    </a>
                  )}
                </div>}
            </div>
          )}
          <div className="">
            <button className="w-full bg-[#006E62] text-white  rounded-md hover:bg-[#005a51] transition">
              تسجيل الدخول
            </button>
          </div>
        </div>}
    </nav>
  );
};

export default Navbar;
