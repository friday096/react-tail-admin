import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../icons/DashboardIcon';
import UserIcon from '../../icons/UserIcon';
import SettingIcon from '../../icons/SettingIcon';
import CloseIcon from '../../icons/CloseIcon';
import ChevronDown from '../../icons/ChevronDown';
import ChevronUp from '../../icons/ChevronUp';

const navItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'Users',
    path: '/users',
    icon: UserIcon,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: SettingIcon,
  },
  {
    name: 'Profile',
    icon: UserIcon,
    dropdown: [
      { name: 'Password', path: '/profile/password' },
      { name: 'Account', path: '/profile/account' },
    ],
  },
];

const Sidebar = ({ isCollapsed, toggleSidebar, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // State for open dropdown

  return (
    <aside className={`text-black h-full py-4 border-r transition-all duration-300`}>
      <div className="aside-tools mb-5 flex justify-between items-center px-9 py-2">
        <span className="text-xl">{'Logo'}</span>
        {isMobile && (
          <button onClick={toggleSidebar} aria-label="Close Sidebar">
            <CloseIcon width={24} height={24} color="#000000" />
          </button>
        )}
      </div>

      <ul>
        {navItems.map(({ name, path, icon: Icon, dropdown }) => (
          <li key={name} className="mb-3">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center px-6 py-2 hover:bg-primary ${isActive && !dropdown ? 'border-r-2 bg-primary border-activeColor' : ''}`
              }
              onClick={() => {
                if (dropdown) {
                  setOpenDropdown(openDropdown === name ? null : name); // Toggle dropdown
                }
              }}
            >
              {({ isActive }) => (
                <>
                  {/* Change icon color only when dropdown is open */}
                  <Icon
                    className={`${!isCollapsed ? 'w-4 h-5' : 'w-14 h-5'}`}
                    fill={openDropdown === name ? 'rgb(22,119,255)' : '#000000'}
                  />
                  {(!isCollapsed || isMobile) && (
                    <span className={`ml-2 text-lg ${openDropdown === name ? 'text-activeColor' : 'text-black'}`}>
                      {name}
                    </span>
                  )}
                  {/* Chevron icons for dropdown */}
                  {dropdown && (
                    <span className="ml-auto">
                      {openDropdown === name ? (
                        <ChevronUp width={16} height={16} className="text-activeColor" />
                      ) : (
                        <ChevronDown width={16} height={16} className="text-black" />
                      )}
                    </span>
                  )}
                </>
              )}
            </NavLink>

            {/* Render dropdown if it exists and is open */}
            {dropdown && openDropdown === name && (
              <ul className="ml-6 mt-2">
                {dropdown.map(({ name, path }) => (
                  <li key={name} className="mb-2">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 hover:bg-primary ${isActive ? 'border-r-2 bg-primary border-activeColor' : ''}`
                      }
                    >
                      <span className="text-lg">{name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
