/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Flame, Award, ShieldAlert, BadgeCent, Sparkles } from "lucide-react";
import { BUSINESS_INFO, HIGHLIGHTS } from "../data";

export default function About() {
  const handleScrollToConsultation = () => {
    const consultationSection = document.querySelector("#consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Assign appropriate modern icons for visual appeal
  const getHighlightIcon = (text: string) => {
    if (text.includes("Trainers")) return <Award className="w-5 h-5 text-brand-primary" />;
    if (text.includes("Programs")) return <Flame className="w-5 h-5 text-brand-primary" />;
    if (text.includes("Hygienic")) return <Sparkles className="w-5 h-5 text-brand-primary" />;
    if (text.includes("Memberships")) return <BadgeCent className="w-5 h-5 text-brand-primary" />;
    return <Check className="w-5 h-5 text-brand-primary" />;
  };

  return (
    <section id="about" className="py-20 bg-secondary-bg relative overflow-hidden border-t border-white/5">
      {/* Visual top radial light background */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Content, Highlights & Pitch */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
                ABOUT DHANKAWADI'S TOP RATED GYM
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Why Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Tranceform Fitness?
                </span>
              </h2>
              <div className="w-16 h-1.5 bg-brand-primary rounded-full"></div>
            </div>

            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
              At <strong className="text-white font-bold">Tranceform Fitness</strong>, we believe fitness is more than exercise—it is a lifestyle transformation. Our premium facility combines elite-level biomechanical equipment, expert certified trainers, personalized target coaching, and an incredible, high-energy motivating atmosphere to help each member achieve real, measurable results.
            </p>

            {/* Highlights Grid with check icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HIGHLIGHTS.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 rounded-xl flex items-center space-x-3 bg-primary-bg/40 border border-white/5 hover:border-brand-primary/20 transition-all"
                >
                  <div className="p-1.5 rounded-lg bg-brand-primary/10 select-none text-brand-primary">
                    {getHighlightIcon(highlight)}
                  </div>
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wide">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions call triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleScrollToConsultation}
                className="px-6 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-display font-bold text-xs tracking-wider rounded-lg uppercase shadow-lg transition-transform hover:-translate-y-0.5 text-center"
              >
                REQUEST A COMPLIMENTARY TOUR
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-4 border border-white/10 hover:border-brand-primary hover:bg-white/5 text-white font-display font-bold text-xs tracking-wider rounded-lg uppercase transition-all duration-200 inline-flex items-center justify-center space-x-2 text-center"
              >
                <span>TALK TO AN EXPERT: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Immersive High-End Photography */}
          <div className="lg:col-span-5 relative">
            {/* Visual border boxes behind the image */}
            <div className="absolute -inset-4 border border-brand-primary/20 rounded-2xl transform rotate-3 scale-95 pointer-events-none z-0"></div>
            <div className="absolute -inset-2 border border-white/5 rounded-2xl transform -rotate-2 scale-100 pointer-events-none z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-primary-bg">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800"
                alt="Personal training session at Tranceform Fitness Pune"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent"></div>
              
              {/* Overlay Stat block */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel flex justify-between items-center bg-primary-bg/90">
                <div>
                  <div className="font-sans text-[10px] text-text-secondary uppercase tracking-widest leading-none">BUSINESS TYPE</div>
                  <div className="font-display font-extrabold text-white text-sm mt-1 uppercase">Premium Unisex Gym</div>
                </div>
                <div className="text-right">
                  <div className="font-sans text-[10px] text-text-secondary uppercase tracking-widest leading-none">LOCATION</div>
                  <div className="font-display font-extrabold text-brand-primary text-sm mt-1">Dhankawadi, Pune</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
