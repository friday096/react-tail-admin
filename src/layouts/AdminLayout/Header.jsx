import HamburgerIcon from "../../icons/HambergurIcon";
import { useState, useEffect, useRef } from 'react';

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to track the dropdown element

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown if click is outside of it
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className=" text-white h-16 flex items-center justify-between px-4 border-b">
      <button onClick={toggleSidebar}>
        <HamburgerIcon className='text-black' width={30} height={30} />
      </button>

      <nav>
        {/* Dropdown Button */}
        <div className="relative inline-block text-left" ref={dropdownRef}>
        <div className="flex items-center">
        {/* Avatar in a circle */}
        <img src="/avatar.png" height={35} width={35} className=" rounded-full" alt="User Avatar" />

        {/* Dropdown Button */}
        <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
        >
            John Doe
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
        </button>
        </div>


          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Account settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Support</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">License</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign out</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
