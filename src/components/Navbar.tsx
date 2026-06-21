/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone, Flame } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Membership", href: "#membership" },
    { name: "Transformations", href: "#transformations" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 glass-nav shadow-lg border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Part */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="p-2 bg-brand-primary rounded-lg transition-transform group-hover:scale-110">
                <Flame className="w-6 h-6 text-white text-main fill-inner" />
              </div>
              <div>
                <span className="font-display font-black text-lg md:text-xl tracking-wider text-white">
                  TRANCEFORM
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-primary -mt-1 font-sans">
                  FITNESS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Link */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-sans font-medium text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Join Button Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2 border border-border-subtle rounded-full text-text-secondary hover:text-white hover:border-brand-primary transition-colors"
                title="Call Gym"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#consultation"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#consultation");
                }}
                className="px-6 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-display font-medium text-xs tracking-wider rounded-lg uppercase shadow-[0_4px_20px_rgba(255,45,45,0.3)] hover:shadow-[0_4px_25px_rgba(255,45,45,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                JOIN NOW
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-text-secondary hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary-bg/98 transition-all duration-300 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-display font-bold text-2xl text-text-secondary hover:text-brand-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 flex flex-col space-y-4 items-center">
            <a
              href="#consultation"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#consultation");
              }}
              className="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-display font-bold text-sm tracking-widest rounded-lg uppercase shadow-lg w-64"
            >
              JOIN NOW
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-3 border border-white/20 hover:border-brand-primary text-white font-display font-semibold text-sm rounded-lg w-64 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
