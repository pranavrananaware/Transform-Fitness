/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["ALL", "GYM INTERIOR", "CARDIO AREA", "STRENGTH AREA", "TRAINERS", "GROUP WORKOUTS", "TRANSFORMATIONS"];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.tag.toUpperCase() === activeCategory;
  });

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-primary-bg relative border-t border-white/5">
      {/* Visual top background lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            VISUAL EXPERIENCE AREA
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            Explore Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-4xl md:text-5xl lg:text-6xl">
              Premium Facility
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Take a visual tour through our world-class athletic turf track, imported bio-machinery sections, and interactive training floors in Dhankawadi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-lg font-display font-bold text-[10px] tracking-wider uppercase transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-brand-primary text-white"
                  : "glass-panel text-text-secondary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-secondary-bg h-72 cursor-zoom-in shadow-2xl transition-all duration-300"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Gradient shading overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-display font-black text-[10px] text-brand-primary tracking-widest uppercase flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.tag}</span>
                </span>
                <h3 className="font-display font-extrabold text-white text-base mt-1 leading-none uppercase">
                  {item.title}
                </h3>
                <span className="font-sans text-[10px] text-text-secondary/70 mt-2 hover:text-white transition-colors flex items-center space-x-1">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view wide lens</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Dialog */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-primary-bg/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-300"
            onClick={closeLightbox}
          >
            {/* Close Button top-right */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow strictly bound to image side */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Visual Box */}
            <div className="max-w-4xl max-h-[80vh] relative flex flex-col items-center">
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-xl object-contain border border-white/5 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // exclude overlay trigger clicks
                referrerPolicy="no-referrer"
              />
              <div
                className="mt-4 text-center space-y-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-display font-bold text-xs text-brand-primary tracking-widest uppercase">
                  {GALLERY_ITEMS[lightboxIndex].tag}
                </span>
                <h4 className="font-display font-black text-xl text-white">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h4>
              </div>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
