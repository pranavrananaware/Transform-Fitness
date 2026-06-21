/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);

  const filters = ["ALL", "STUDENT", "WORKING PROFESSIONAL", "FEMALE MEMBER", "WEIGHT LOSS", "MUSCLE GAIN", "SENIOR FITNESS"];

  const filteredReviews = TESTIMONIALS.filter((rev) => {
    if (activeFilter === "ALL") return true;
    return rev.tag.toUpperCase() === activeFilter;
  });

  // Ensure index wraps correctly upon array length modifications during filters
  const safeIndex = activeIndex >= filteredReviews.length ? 0 : activeIndex;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-secondary-bg border-t border-white/5 relative overflow-hidden">
      {/* Decorative vertical backdrop blur balls */}
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            COMMUNITY VOICE
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-Standard text-white tracking-tight leading-tight uppercase">
            What Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-4xl md:text-5xl lg:text-6xl">
              Members Say
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Real feedback from local students, IT professionals, homemakers, and senior fitness enthusiasts here in Dhankawadi, Pune.
          </p>
        </div>

        {/* Filter Badges Carousel */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-lg font-display font-bold text-[10px] tracking-wider uppercase transition-all duration-150 ${
                activeFilter === filter
                  ? "bg-brand-primary text-white"
                  : "glass-panel text-text-secondary hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel / Card Viewport */}
        {filteredReviews.length > 0 ? (
          <div className="max-w-3xl mx-auto">
            <div className="relative glass-panel bg-primary-bg/50 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl flex flex-col justify-between min-h-[320px]">
              {/* Backquote icon in the background to build strong editorial design */}
              <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 pointer-events-none z-0" />

              <div className="space-y-6 relative z-10">
                {/* Five star indicator */}
                <div className="flex space-x-1">
                  {[...Array(filteredReviews[safeIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                  ))}
                </div>

                {/* Review Statement content */}
                <blockquote className="font-sans text-white text-base md:text-lg italic leading-relaxed font-light">
                  "{filteredReviews[safeIndex]?.review}"
                </blockquote>
              </div>

              {/* Reviewer Meta Profile Block */}
              <div className="pt-8 border-t border-white/5 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary shrink-0 bg-secondary-bg">
                    <img
                      src={filteredReviews[safeIndex]?.avatar}
                      alt={filteredReviews[safeIndex]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-white text-sm uppercase">
                      {filteredReviews[safeIndex]?.name}
                    </h4>
                    <p className="font-sans text-[11px] text-text-secondary uppercase tracking-widest mt-0.5">
                      {filteredReviews[safeIndex]?.role}
                    </p>
                  </div>
                </div>

                {/* Switcher arrow buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="w-10 h-10 rounded-lg glass-panel hover:bg-brand-primary hover:border-brand-primary text-text-secondary hover:text-white flex items-center justify-center transition-all focus:outline-none"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-sans text-xs text-text-secondary/50 self-center px-2 select-none">
                    {safeIndex + 1} / {filteredReviews.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="w-10 h-10 rounded-lg glass-panel hover:bg-brand-primary hover:border-brand-primary text-text-secondary hover:text-white flex items-center justify-center transition-all focus:outline-none"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-text-secondary font-sans text-sm">No testimonials matches this tag combination.</p>
        )}
      </div>
    </section>
  );
}
