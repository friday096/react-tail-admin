import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AdminLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initialize based on window size
  const sidebarRef = useRef(null); // Reference to the sidebar element

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarCollapsed(false); // Ensure sidebar is open on desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the sidebar is not collapsed and we click outside the sidebar, collapse it
      if (isSidebarCollapsed && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarCollapsed(false);
      }
    };

    // Add click event listener only on mobile
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Cleanup the event listener on component unmount or when `isMobile` changes
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isSidebarCollapsed]);

  return (
    <div className="min-h-screen grid grid-cols-12">
      {/* Sidebar */}
      {isMobile ? ( // If it's mobile, render the sidebar as an overlay
        <div
          ref={sidebarRef} // Attach ref to sidebar
          className={`fixed top-0 left-0 h-full transition-all duration-300 z-50 bg-white ${
            isSidebarCollapsed ? 'w-72' : 'w-0 overflow-hidden'
          }`}
        >
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            toggleSidebar={toggleSidebar}
            isMobile={isMobile}
          />
        </div>
      ) : ( // On desktop, render the sidebar normally
        <div
          className={`transition-all duration-300 ${
            isSidebarCollapsed ? 'col-span-1' : 'col-span-2'
          }`}
        >
          <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        </div>
      )}

      {/* Main content */}
      <div
        className={`flex flex-col transition-all duration-300 ${
          isMobile ? 'col-span-12' : isSidebarCollapsed ? 'col-span-11' : 'col-span-10'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
