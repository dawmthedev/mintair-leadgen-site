// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3 sm:py-7">
          <Link to="/" className="text-2xl sm:text-3xl font-bold">
            <img
              src="/assets/footer2.webp"
              alt="Mintair Logo"
              className="h-14 sm:h-24" // Increased from sm:h-20 to sm:h-24 (20% increase)
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 sm:p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 sm:h-7 sm:w-7 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-10">
            {navLinks.map(([title, path]) => (
              <Link
                key={path}
                to={path}
                className={`text-base font-medium transition-colors ${
                  location.pathname === path
                    ? "text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                {title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } py-3 sm:py-5 space-y-3 sm:space-y-5`}
        >
          {navLinks.map(([title, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base sm:text-lg font-medium transition-colors ${
                location.pathname === path
                  ? "text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {title}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center rounded-full bg-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-primary transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
