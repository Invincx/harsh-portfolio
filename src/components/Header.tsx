import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'education', label: 'Education' },
    { to: 'projects', label: 'Projects' },
    { to: 'publications', label: 'Publications' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium tracking-wide"
              activeClass="bg-blue-700"
              spy={true}
              offset={-80}
            >
              Get in Touch
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className={`relative text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm font-medium tracking-wide ${
                  isScrolled ? "text-gray-600" : "text-gray-600"
                }`}
                activeClass="text-blue-600"
                spy={true}
                offset={-80}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md rounded-lg shadow-sm mb-4">
            <div className="px-4 py-3 space-y-2">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium tracking-wide text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                activeClass="bg-blue-700"
                spy={true}
                offset={-80}
              >
                Get in Touch
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm font-medium tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="text-blue-600"
                  spy={true}
                  offset={-80}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;