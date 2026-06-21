/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Flame, Phone, MapPin, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { BUSINESS_INFO, GALLERY_ITEMS } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-bg border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      
      {/* Visual background glow balls */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          
          {/* COL 1: Branding and brief intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-brand-primary rounded-lg">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-black text-base md:text-lg tracking-wider text-white">
                  TRANCEFORM
                </span>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-brand-primary -mt-1 font-sans">
                  FITNESS
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-text-secondary leading-relaxed font-light">
              Join Tranceform Fitness, the best premium unisex gym in Dhankawadi Pune. Experience elite biomechanical machinery, certified personal coaching, and targeted weight loss transformation programs.
            </p>

            {/* Social indicators */}
            <div className="flex space-x-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-primary border border-white/5 hover:border-brand-primary flex items-center justify-center text-text-secondary hover:text-white transition-all duration-200"
                aria-label="Instagram Handle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-primary border border-white/5 hover:border-brand-primary flex items-center justify-center text-text-secondary hover:text-white transition-all duration-200"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-primary border border-white/5 hover:border-brand-primary flex items-center justify-center text-text-secondary hover:text-white transition-all duration-200"
                aria-label="Youtube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COL 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest">
              Quick Navigation
            </h4>
            <div className="w-8 h-1 bg-brand-primary rounded-full"></div>
            
            <ul className="space-y-2.5 font-sans text-xs text-text-secondary font-light">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#home");
                  }}
                  className="hover:text-brand-primary transition-colors duration-150"
                >
                  Home Floor
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#about");
                  }}
                  className="hover:text-brand-primary transition-colors duration-150"
                >
                  About Our Ethos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-brand-primary transition-colors duration-150"
                >
                  Transformation Programs
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#membership");
                  }}
                  className="hover:text-brand-primary transition-colors duration-150"
                >
                  Membership Pricing Cards
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#gallery");
                  }}
                  className="hover:text-brand-primary transition-colors duration-150"
                >
                  Explore Facility Rooms
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: Services overview shortcut links */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest">
              Our Programs
            </h4>
            <div className="w-8 h-1 bg-brand-primary rounded-full"></div>
            
            <ul className="space-y-2.5 font-sans text-xs text-text-secondary font-light">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-brand-secondary transition-colors"
                >
                  Weight Loss Program
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-brand-secondary transition-colors"
                >
                  Muscle Gain Hypertrophy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-brand-secondary transition-colors"
                >
                  1-On-1 Personal Training
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-brand-secondary transition-colors"
                >
                  Athletic Functional Turf
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#services");
                  }}
                  className="hover:text-brand-secondary transition-colors"
                >
                  Metabolic BMR Assessments
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4: Compact Contact info cards */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest">
              Direct Contact
            </h4>
            <div className="w-8 h-1 bg-brand-primary rounded-full"></div>
            
            <ul className="space-y-3 font-sans text-xs text-text-secondary font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BUSINESS_INFO.address.split(',')[0]} Society, Behind Bharati Vidyapeeth, Pune</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Email: {BUSINESS_INFO.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: {BUSINESS_INFO.timings.weekdays}</p>
                  <p className="text-brand-secondary font-medium">Sun: {BUSINESS_INFO.timings.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Small business details & copyright and SEO search tags bottom */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-sans text-[11px] text-text-secondary/50">
          
          <div className="space-y-1">
            <p>© {currentYear} Tranceform Fitness Pune. All Rights Reserved.</p>
            <p className="font-light">ट्रान्सफॉर्म फिटनेस – बेस्ट जिम इन धनकवडी | Opposite Ramakrishna Hostel Pune.</p>
          </div>

          {/* SEO Keywords representation */}
          <div className="flex flex-wrap gap-2 max-w-lg md:justify-end">
            <span className="hover:text-white transition-colors">Best Gym in Dhankawadi</span>•
            <span className="hover:text-white transition-colors">Gym near Bharati Vidyapeeth</span>•
            <span className="hover:text-white transition-colors">Unisex Gym Pune</span>•
            <span className="hover:text-white transition-colors">Weight Loss Dhankawadi</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
