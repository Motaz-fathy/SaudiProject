import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const MobileNavbarLinks = () => {
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to the mobile menu

  const toggleNavLink = (index) => {
    setNavLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, open: !link.open } : { ...link, open: false }
      )
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close dropdown if click is outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false); // Close the mobile menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Hamburger Menu Button */}
      <div className="lg:hidden flex items-center justify-between ">
        <button onClick={toggleMobileMenu} className="text-white">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="lg:hidden  rounded-xl bg-white/20 backdrop-blur-lg  text-gray-200 w-[300px] absolute top-[60px] left-8 ">
          {navLinks.map((link, index) => (
            <div key={index} className="relative ">
              <button
                onClick={() => toggleNavLink(index)}
                className="flex items-center w-full px-4 py-2 text-left hover:text-green-800"
              >
                {link.label}
                {link.subLinks.length > 0 && (
                  link.open ? (
                    <ChevronUp className="ml-2 h-4 w-4 mx-2" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4 mx-2" />
                  )
                )}
              </button>

              {/* Sub Links Dropdown */}
              {link.open && link.subLinks.length > 0 && (
                <div className="">
                  {link.subLinks.map((subLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={subLink.href}
                      className="block px-4 py-2 hover:text-green-800 "
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbarLinks;
