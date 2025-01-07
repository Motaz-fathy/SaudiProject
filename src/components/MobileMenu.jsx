/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MobileMenu = ({ isOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (title) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const menuItems = [
    {
      title: 'الرئيسية',
      items: ['نبذة عن المنتدى', 'الأخبار', 'الفعاليات']
    },
    {
      title: 'المعرض',
      items: ['معرض الصور', 'معرض الفيديو', 'المعارض السابقة']
    },
    {
      title: 'جائزة المنتدى',
      items: ['شروط الجائزة', 'الفائزون', 'لجنة التحكيم']
    },
    {
      title: 'أخرى',
      items: ['حول العالم', 'المركز الإعلامي', 'فعاليات السعودية']
    }
  ];
  

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-[#1B3B39] ">
      <div className="h-full overflow-y-auto py-4 px-6">
        <div className="space-y-4">
          {menuItems?.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => toggleDropdown(item.title)}
                className="flex items-center justify-between w-full py-2 text-white"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openDropdowns.includes(item.title) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdowns.includes(item.title) && (
                <div className="pr-4 space-y-2">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block py-2 text-white/80 hover:text-white"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <a href="#" className="block py-2 text-white">حول العالم</a>
            <a href="#" className="block py-2 text-white">المركز الإعلامي</a>
            <a href="#" className="block py-2 text-white">فعاليات السعودية</a>
            <a href="#" className="block py-2 text-white">تسجيل الدخول</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;