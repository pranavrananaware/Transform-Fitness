/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { TRANSFORMATIONS, BUSINESS_INFO } from "../data";
import { Flame, Star, Trophy, ArrowRightLeft, Sparkles, Scale, Percent } from "lucide-react";

export default function Transformations() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeData = TRANSFORMATIONS[activeTab];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  // Attach window listeners when dragging is active to support fluid drag outside container boundaries
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <section id="transformations" className="py-20 bg-secondary-bg relative overflow-hidden border-t border-white/5">
      {/* Decorative vector background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title blocks */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            PROVEN ATHLETIC MILESTONES
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Real People. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Real Transformations.
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            No filters, no shortcuts. These are genuine, hard-earned visual transformations completed entirely under our certified coaching, structural diet, and motivating atmosphere.
          </p>
        </div>

        {/* Statistics highlights section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-2 bg-primary-bg/75">
            <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="font-display font-black text-4xl text-white">1000+</div>
            <div className="font-sans font-bold text-xs uppercase tracking-widest text-text-secondary">Transformations Completed</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-2 bg-primary-bg/75">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Star className="w-6 h-6" />
            </div>
            <div className="font-display font-black text-4xl text-white">500+</div>
            <div className="font-sans font-bold text-xs uppercase tracking-widest text-text-secondary">Happy Active Members</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-2 bg-primary-bg/75">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
              <Scale className="w-6 h-6" />
            </div>
            <div className="font-display font-black text-4xl text-brand-primary">95%</div>
            <div className="font-sans font-bold text-xs uppercase tracking-widest text-text-secondary">Goal Success Rate</div>
          </div>

        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TRANSFORMATIONS.map((member, idx) => (
            <button
              key={member.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-3 rounded-lg font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${
                activeTab === idx
                  ? "bg-brand-primary text-white shadow-lg"
                  : "glass-panel text-text-secondary hover:text-white"
              }`}
            >
              {member.name} ({member.goal.toLowerCase().includes("weight") ? "Fat Loss" : "Muscle Gain"})
            </button>
          ))}
        </div>

        {/* Interactive Before/After Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider box layout - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <span className="font-sans text-xs text-text-secondary/70 italic mb-3 select-none flex items-center space-x-2">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Drag the center arrow handle to compare Before & After states</span>
            </span>

            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-primary-bg select-none cursor-ew-resize"
              onMouseDown={handleStartDrag}
              onTouchStart={handleStartDrag}
            >
              {/* BEFORE Image (Left state) */}
              <div className="absolute inset-0">
                <img
                  src={activeData.imageUrlBefore}
                  alt={`${activeData.name} Before`}
                  className="w-full h-full object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white font-display font-black text-xs px-3.5 py-1.5 rounded-lg tracking-widest uppercase">
                  BEFORE
                </div>
              </div>

              {/* AFTER Image Layered and clipped on right */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <img
                  src={activeData.imageUrlAfter}
                  alt={`${activeData.name} After`}
                  className="w-full h-full object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-emerald-500 text-white font-display font-black text-xs px-3.5 py-1.5 rounded-lg tracking-widest uppercase">
                  AFTER
                </div>
              </div>

              {/* SLIDER CONTROLLER BAR */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-brand-primary cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/50 cursor-ew-resize pointer-events-none">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Member details - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-display font-black text-brand-primary text-sm uppercase tracking-wide">
                RESULTS DICTIONARY
              </span>
              <h3 className="font-display font-black text-3xl text-white leading-tight uppercase">
                {activeData.name}
              </h3>
              <p className="font-sans text-xs text-text-secondary">
                Age: {activeData.age} | Commitment: {activeData.duration} | Goal: {activeData.goal}
              </p>
            </div>

            {/* Metrics detail blocks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl bg-primary-bg/50">
                <div className="font-sans text-[10px] text-text-secondary uppercase">Before Weight</div>
                <div className="font-display font-black text-xl text-white mt-1">{activeData.beforeWeight}</div>
                {activeData.beforeBodyFat && (
                  <div className="font-sans text-[10px] text-text-secondary mt-1 mt-0.5">Body Fat: {activeData.beforeBodyFat}</div>
                )}
              </div>
              <div className="glass-panel p-4 rounded-xl border-emerald-500/20 bg-emerald-950/10">
                <div className="font-sans text-[10px] text-emerald-400/80 uppercase">After Weight</div>
                <div className="font-display font-black text-xl text-emerald-400 mt-1">{activeData.afterWeight}</div>
                {activeData.afterBodyFat && (
                  <div className="font-sans text-[10px] text-emerald-400/80 mt-0.5">Body Fat: {activeData.afterBodyFat}</div>
                )}
              </div>
            </div>

            <div className="space-y-2 bg-primary-bg/40 p-5 rounded-2xl border border-white/5">
              <span className="font-display font-bold text-xs text-white uppercase tracking-wider block flex items-center space-x-1">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span>Coach's Transformation Story</span>
              </span>
              <p className="font-sans text-xs text-text-secondary leading-relaxed font-light">
                "{activeData.story}"
              </p>
            </div>

            <a
              href="#consultation"
              className="w-full py-4 bg-brand-primary hover:bg-brand-secondary text-white font-display font-extrabold text-xs tracking-widest rounded-lg uppercase transition-all duration-200 block text-center shadow-lg"
            >
              I WANT THESE RESULTS
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
