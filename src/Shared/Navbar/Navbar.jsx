import { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICE', path: '/service' },
    { name: 'PROJECT', path: '/projects' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
      <div className={`bg-white max-w-7xl mx-auto flex justify-between items-center py-4 px-6 transition-all duration-700 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>  
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Safe solution International" className="w-10 h-10" />
          <div>
            <h1 className="text-lg font-semibold">Safe solution International</h1>
            <p className="text-sm text-gray-500">Build Your Dreams</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <div className="border border-green-500 rounded-full p-2">
              <FaPhone className="text-green-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Phone</p>
              <p className="text-gray-600">98 9875 5968 54</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="border border-green-500 rounded-full p-2">
              <FaHome className="text-green-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Address</p>
              <p className="text-gray-600">your address goes here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-green-500 z-50 transition-all duration-700 ${isScrolled ? 'fixed top-0 py-4 w-full mx-auto flex justify-center space-x-6' : 'relative py-2'}`}>
        <div className="w-full mx-auto flex justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
