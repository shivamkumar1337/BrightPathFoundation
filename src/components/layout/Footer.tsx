import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const programLinks = [
    { name: 'Education Programs', href: '/work/education', icon: '📚' },
    { name: 'Disaster Relief', href: '/work/disaster-relief', icon: '🚨' },
    { name: 'Youth Sports', href: '/work/sports', icon: '⚽' },
    { name: 'Food Security', href: '/work/food-distribution', icon: '🍽️' },
  ];

  const quickLinks = [
    { name: 'About Us', href: ROUTES.ABOUT },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Financial Reports', href: '/reports' },
    { name: 'Code of Conduct', href: '/conduct' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-orange-400 origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-20px)`,
                left: '50%',
                bottom: '50%',
                marginLeft: '-2px'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-orange-400 rounded-full w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute bottom-20 right-20 text-6xl opacity-30">🤝</div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-green-500 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <div className='flex flex-row items-center mb-8'>

              <Link to={ROUTES.HOME} className="flex items-center mb-8 group">
                <img 
              src="/logo.png" 
              alt="Bright Path Foundation" 
              className="h-25 w-auto"
              />
              </Link>
              
              <p className="ml-4 text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                For over 15 years, we've been illuminating paths to hope and progress through 
                education, disaster relief, youth sports, and food security programs.
              </p>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-6 mb-8">
                {[
                  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'hover:text-blue-400' },
                  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: 'hover:text-blue-400' },
                  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', color: 'hover:text-pink-400' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'hover:text-blue-500' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-700`}
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-orange-400 flex items-center">
                  <span className="mr-3">📧</span>
                  Stay Connected
                </h4>
                <p className="text-gray-300 mb-6">Get updates on our latest projects and impact stories.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Our Programs */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-orange-400 flex items-center">
                <span className="mr-3">🌟</span>
                Our Programs
              </h4>
              <ul className="space-y-4">
                {programLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group p-3 rounded-xl hover:bg-gray-800/50"
                    >
                      <span className="mr-4 text-xl group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Program Stats */}
              <div className="mt-8 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">150+</div>
                  <div className="text-sm text-gray-400">Active Projects</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-green-400 flex items-center">
                <span className="mr-3">🔗</span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group p-3 rounded-xl hover:bg-gray-800/50"
                    >
                      <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-400">→</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information Bar */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h5 className="font-semibold mb-4 text-blue-400 flex items-center justify-center md:justify-start text-lg">
                  <span className="mr-3">📍</span>
                  Visit Us
                </h5>
                <div className="text-gray-300 space-y-2">
                  <p>123 Hope Street, Suite 456</p>
                  <p>Bright City, BC 12345</p>
                  <p>United States</p>
                </div>
                <button className="mt-4 text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300 hover:underline">
                  Get Directions →
                </button>
              </div>
              
              <div className="text-center md:text-left">
                <h5 className="font-semibold mb-4 text-blue-400 flex items-center justify-center md:justify-start text-lg">
                  <span className="mr-3">📞</span>
                  Contact Us
                </h5>
                <div className="text-gray-300 space-y-2">
                  <p>Main: <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a></p>
                  <p>Emergency: <a href="tel:+15559111234" className="hover:text-white transition-colors">+1 (555) 911-1234</a></p>
                  <p>Email: <a href="mailto:info@brightpath.org" className="hover:text-white transition-colors">info@brightpath.org</a></p>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h5 className="font-semibold mb-4 text-blue-400 flex items-center justify-center md:justify-start text-lg">
                  <span className="mr-3">🕒</span>
                  Office Hours
                </h5>
                <div className="text-gray-300 space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-orange-400 font-medium">24/7 Emergency Response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <div className="text-center">
              <h5 className="text-xl font-semibold mb-6 text-gray-300">Trusted by Communities Worldwide</h5>
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-xl border border-gray-700">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-medium">Charity Navigator</span>
                  <span className="ml-2 text-green-400">4-Star Rating</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-xl border border-gray-700">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="font-medium">GuideStar</span>
                  <span className="ml-2 text-yellow-400">Gold Seal</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-xl border border-gray-700">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">BBB</span>
                  <span className="ml-2 text-blue-400">A+ Rating</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-xl border border-gray-700">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="font-medium">85% Direct</span>
                  <span className="ml-2 text-purple-400">Program Funding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              {/* Copyright */}
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>
                  © {currentYear} Bright Path Foundation. All rights reserved. 
                  <span className="mx-3">|</span>
                  <span className="text-orange-400">EIN: 12-3456789</span>
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center pt-8 border-t border-gray-800">
              <p className="text-gray-400 italic text-lg">
                "Every step forward lights the path for those who follow. Together, we create brighter tomorrows." 
              </p>
              <p className="mt-4 text-orange-400 font-medium">
                ✨ Thank you for being part of our journey ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Donate Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group">
          <span className="text-xl group-hover:animate-pulse">❤️</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;