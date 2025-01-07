import NavbarLinks from './NavbarLinks';
import NavbarIcons from './NavbarIcons';
import MobileNavbarLinks from './MobileNavbarLinks';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="lg:flex items-center space-x-4 hidden">
            <img src="https://www.reshot.com/preview-assets/icons/GE2JYXASCZ/spotify-GE2JYXASCZ.svg" alt="Logo" className="h-8" />
            {/* Navigation Links */}
            <NavbarLinks />
          </div>

          <div className='lg:hidden flex'>
          <img src="https://www.reshot.com/preview-assets/icons/GE2JYXASCZ/spotify-GE2JYXASCZ.svg" alt="Logo" className="h-8" />
          </div>
          {/* Icons */}
          <NavbarIcons />
          <div className='lg:hidden flex'>
           <MobileNavbarLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
