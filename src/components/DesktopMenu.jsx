import { ChevronDown, ChevronUp } from 'lucide-react';

const DesktopMenu = () => {

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

  
  return (
    <div className="hidden lg:flex items-center space-x-8 ml-8">
      {menuItems?.map((item) => (
        <div key={item.title} className="group relative">
          <button className="flex items-center space-x-1 hover:text-[#4CAF50]">
            <span>{item.title}</span>
            <ChevronDown className="w-4 h-4 group-hover:hidden" />
            <ChevronUp className="w-4 h-4 hidden group-hover:block" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="py-2">
              {item.items.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block px-4 py-2 text-right text-gray-800 hover:bg-gray-100"
                >
                  {subItem}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;