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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={ROUTES.HOME}>
            <img 
              src="../assets/logo.png" 
              alt="Bright Path Foundation" 
              className="h-25 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsWorkDropdownOpen(true)}
                    onMouseLeave={() => setIsWorkDropdownOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center py-3 px-5 font-semibold text-lg rounded-lg transition-colors ${
                        isActiveRoute(item.href)
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                    >
                      {item.name}
                      <svg 
                        className={`ml-2 w-5 h-5 transition-transform ${isWorkDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {isWorkDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border py-3 z-50">
                        <Link
                          to={item.href}
                          className="block px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b"
                        >
                          <div className="font-semibold text-lg">All Our Work</div>
                          <div className="text-base text-gray-500">View all programs</div>
                        </Link>
                        
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          >
                            <div className="flex items-center">
                              <span className="text-xl mr-4">{dropdownItem.icon}</span>
                              <span className="text-lg font-medium">{dropdownItem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-semibold text-lg py-3 px-5 rounded-lg transition-colors ${
                      isActiveRoute(item.href)
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Donate Button */}
            <button className="btn-primary text-lg px-8 py-3">
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-gray-700 hover:text-orange-600"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t">
            <div className="space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                        className={`flex items-center justify-between w-full text-left py-4 px-5 text-lg font-semibold rounded-lg ${
                          isActiveRoute(item.href)
                            ? 'text-orange-600 bg-orange-50'
                            : 'text-gray-700 hover:text-orange-600'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`w-5 h-5 transition-transform ${isWorkDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {isWorkDropdownOpen && (
                        <div className="pl-6 space-y-2 mt-2">
                          <Link
                            to={item.href}
                            className="block py-3 px-5 text-base text-gray-600 hover:text-orange-600 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            All Our Work
                          </Link>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block py-3 px-5 text-base text-gray-600 hover:text-orange-600 rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="text-lg mr-3">{dropdownItem.icon}</span>
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-4 px-5 text-lg font-semibold rounded-lg ${
                        isActiveRoute(item.href)
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6">
                <button className="btn-primary w-full text-lg py-4">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;