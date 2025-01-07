import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavbarLinks = () => {
  const [navLinks, setNavLinks] = useState([
    {
      label: 'الرئيسية',
      href: '#',
      open: false,
      subLinks: [],
    },
    {
      label: 'الهيئات والادارات',
      href: '#',
      open: false,
      subLinks: [
        { label: 'Sub Link 1', href: '#/sub1' },
        { label: 'Sub Link 2', href: '#/sub2' },
      ],
    },
    {
      label: 'عن الموقع',
      href: '#',
      open: false,
      subLinks: [
        { label: 'Sub Link A', href: '#/subA' },
        { label: 'Sub Link B', href: '#/subB' },
      ],
    },
    {
      label: 'الخدمات',
      href: '#',
      open: false,
      subLinks: [],
    },
    {
      label: 'المركز إلاعلامى',
      href: '#',
      open: false,
      subLinks: [
        { label: 'Sub Link X', href: '#/subX' },
      ],
    },
    {
      label: 'البوبات والانظمة',
      href: '#',
      open: false,
      subLinks: [],
    },
    {
      label: 'اتصل بنا',
      href: '#',
      open: false,
      subLinks: [],
    },
  ]);

  const refs = useRef([]);

  const toggleNavLink = (index) => {
    setNavLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, open: !link.open } : { ...link, open: false }
      )
    );
  };

  // Handle click outside to close the dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (refs.current.every((ref) => ref && !ref.contains(event.target))) {
        setNavLinks((prevLinks) =>
          prevLinks.map((link) => ({ ...link, open: false }))
        );
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden md:flex">
      {navLinks.map((link, index) => (
        <div
          key={index}
          className="relative group"
          ref={(el) => (refs.current[index] = el)} // assign ref to each nav item
        >
          <button
            onClick={() => toggleNavLink(index)}
            className="flex items-center px-2 md:text-sm hover:text-green-200"
          >
            {link.label}
            {link.subLinks.length > 0 && ( // تحقق إذا كانت هناك روابط فرعية قبل عرض الأيقونات
              link.open ? (
                <ChevronUp className="ml-1 h-4 w-4 mx-1 " />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4 mx-1" />
              )
            )}
          </button>

          {/* Sub Links Dropdown */}
          {link.open && link.subLinks.length > 0 && (
            <div className="absolute bg-white text-gray-800 mt-1 rounded shadow-lg py-2 z-10 w-[200px]">
              {link.subLinks.map((subLink, subIndex) => (
                <a
                  key={subIndex}
                  href={subLink.href}
                  className="block px-4 py-2 hover:text-green-600"
                >
                  {subLink.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;
