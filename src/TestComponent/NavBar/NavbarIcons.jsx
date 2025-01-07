import { useState } from 'react';
import { Search, User, Phone, Mail } from 'lucide-react';
import useClickOutside from '../../utilty/hooks/useClickOutside';

const NavbarIcons = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleCloseDropdown = () => setOpenDropdown(null);
  const dropdownRef = useClickOutside(() => {
    handleCloseDropdown();
  });

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const icons = [
    { id: 'profile', icon: <User />, label: 'Profile' },
    { id: 'phone', icon: <Phone />, label: 'Phone' },
    { id: 'email', icon: <Mail />, label: 'Email' },
    { id: 'search', icon: <Search />, label: 'Search' },
  ];

  return (
    <div className="flex items-center space-x-4">
      {icons.map((item) => (
        <div key={item.id} ref={dropdownRef} className="relative">
          <button
            onClick={() => toggleDropdown(item.id)}
            className="p-2 hover:bg-green-600 rounded"
          >
            {item.icon}
          </button>
          {openDropdown === item.id && (
            <div className="absolute bg-green-600 text-white mt-1 rounded shadow-lg py-2 z-10 transition-all duration-200 transform scale-100">
              <div className="px-4 py-2">{item.label} Dropdown</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarIcons;
