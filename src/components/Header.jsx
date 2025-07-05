import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-md shadow-md scroll-smooth">
      {/* Top Bar */}
      <div className="bg-pink-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2 text-xs sm:text-sm text-gray-600">
          <span>📞 (757) 474-5262</span>
          <span>📍 4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230</span>
        </div>
      </div>
      <hr className="border-white/20" />

      {/* Navigation */}
      <nav className="bg-blue-50/30 backdrop-blur-sm border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-7 py-1">
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-20 h-20 object-cover"
            />
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-green-900">
                Dr. Serena{" "}
              </h1>
              <h1 className="text-xl sm:text-3xl font-bold text-green-900">
                Blake
              </h1>
              <p className="text-[10px] sm:text-xs text-green-800">
                PsyD (Clinical Psychologist)
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 font-medium text-gray-700">
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-blue-500">
                Rates & FAQs
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:text-blue-500">
                Areas Served
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl text-gray-700 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            ≡
          </button>
        </div>

        {/* Slide-In Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl text-gray-700 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Centered Name */}
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center">Ellie Shumaker</h1>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-4 px-7 font-medium text-gray-700 bg-white text-center">
            <li className="mt-10">
              <a href="#services" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleLinkClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faqs" onClick={handleLinkClick}>
                Rates & FAQs
              </a>
            </li>
            <li>
              <a href="#areas" onClick={handleLinkClick}>
                Areas Served
              </a>
            </li>
            <li className="mb-20">
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
