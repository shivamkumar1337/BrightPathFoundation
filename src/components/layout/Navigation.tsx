import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const location = useLocation();

  const workCategories = [
    { name: 'Education', href: '/work/education', icon: '📚' },
    { name: 'Disaster Relief', href: '/work/disaster-relief', icon: '🚨' },
    { name: 'Sports', href: '/work/sports', icon: '⚽' },
    { name: 'Food Distribution', href: '/work/food-distribution', icon: '🍽️' },
  ];

  const navItems = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'About', href: ROUTES.ABOUT },
    { 
      name: 'Our Work', 
      href: ROUTES.WORK,
      hasDropdown: true,
      dropdownItems: workCategories
    },
    { name: 'Gallery', href: ROUTES.GALLERY },
    { name: 'Contact Us', href: ROUTES.CONTACT },
  ];

  const isActiveRoute = (href: string) => {
    if (href === ROUTES.HOME) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Strip */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 text-sm overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between animate-fade-in">
            {/* Left side - Email */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 animate-slide-in-left">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>brightpfoundation@gmail.com</span>
              </div>
              <div className="hidden md:block animate-slide-in-left animation-delay-200">
                <span className="text-orange-200">|</span>
                <span className="ml-4">Welcome to Bright Path Foundation</span>
              </div>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline animate-slide-in-right">Follow Us On:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="hover:text-orange-200 transition-colors transform hover:scale-110 animate-bounce-in animation-delay-300"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="hover:text-orange-200 transition-colors transform hover:scale-110 animate-bounce-in animation-delay-400"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="hover:text-orange-200 transition-colors transform hover:scale-110 animate-bounce-in animation-delay-500"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.897 1.387 2.048 1.387 3.345s-.49 2.448-1.297 3.323c-.897.897-2.048 1.387-3.345 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.897-1.387-2.048-1.387-3.345s.49-2.448 1.297-3.323c.897-.897 2.048-1.387 3.345-1.387s2.448.49 3.323 1.297c.897.897 1.387 2.048 1.387 3.345s-.49 2.448-1.297 3.323c-.897.897-2.048 1.387-3.345 1.387z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="hover:text-orange-200 transition-colors transform hover:scale-110 animate-bounce-in animation-delay-600"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 animate-slide-down">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={ROUTES.HOME} className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.png" 
                alt="Bright Path Foundation" 
                className="h-25 w-auto animate-fade-in"
              />
            </Link>

            {/* <div className="hidden lg:block"> */}
  <div className="flex items-center space-x-3">
    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse">
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-s font-medium text-orange-600 uppercase tracking-wide">Call Anytime</span>  
      <span className="text-m font-bold text-gray-800 transition-colors duration-200">+91 98210 65827</span>  
    </div>
  </div>
{/* </div> */}
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsWorkDropdownOpen(true)}
                      onMouseLeave={() => setIsWorkDropdownOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center py-3 px-5 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${
                          isActiveRoute(item.href)
                            ? 'text-orange-600 bg-orange-50 shadow-md'
                            : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`ml-2 w-5 h-5 transition-transform duration-300 ${isWorkDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border py-3 z-50 transition-all duration-300 transform ${
                        isWorkDropdownOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                      }`}>
                        <Link
                          to={item.href}
                          className="block px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b transition-colors duration-200 transform hover:translate-x-2"
                        >
                          <div className="font-semibold text-lg">All Our Work</div>
                          <div className="text-base text-gray-500">View all programs</div>
                        </Link>
                        
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 transform hover:translate-x-2"
                            style={{ animationDelay: `${dropdownIndex * 50}ms` }}
                          >
                            <div className="flex items-center animate-fade-in-right">
                              <span className="text-xl mr-4 transform hover:scale-125 transition-transform duration-200">{dropdownItem.icon}</span>
                              <span className="text-lg font-medium">{dropdownItem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-semibold text-lg py-3 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        isActiveRoute(item.href)
                          ? 'text-orange-600 bg-orange-50 shadow-md'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Donate Button */}
              <button className="btn-primary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-pulse-subtle">
                Donate Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 text-gray-700 hover:text-orange-600 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden mt-6 pt-6 border-t transition-all duration-500 transform ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 max-h-screen' 
              : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
          }`}>
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                        className={`flex items-center justify-between w-full text-left py-4 px-5 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                          isActiveRoute(item.href)
                            ? 'text-orange-600 bg-orange-50 shadow-md'
                            : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${isWorkDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <div className={`pl-6 space-y-2 mt-2 transition-all duration-300 ${
                        isWorkDropdownOpen 
                          ? 'opacity-100 max-h-screen' 
                          : 'opacity-0 max-h-0 overflow-hidden'
                      }`}>
                        <Link
                          to={item.href}
                          className="block py-3 px-5 text-base text-gray-600 hover:text-orange-600 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          All Our Work
                        </Link>
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block py-3 px-5 text-base text-gray-600 hover:text-orange-600 rounded-lg transition-all duration-200 transform hover:translate-x-2 animate-fade-in-right"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ animationDelay: `${dropdownIndex * 50}ms` }}
                          >
                            <span className="text-lg mr-3 transform hover:scale-125 transition-transform duration-200">{dropdownItem.icon}</span>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-4 px-5 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                        isActiveRoute(item.href)
                          ? 'text-orange-600 bg-orange-50 shadow-md'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <button className="btn-primary w-full text-lg py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;