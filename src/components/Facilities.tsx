/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Dumbbell, ShieldCheck, Waves, Wind, Layers, Lock, Sparkles, CalendarClock } from "lucide-react";
import { FACILITIES } from "../data";

export default function Facilities() {
  
  // Custom Icon Selector based on name/id
  const getFacilityIcon = (id: string) => {
    switch (id) {
      case "f1": return <Dumbbell className="w-6 h-6" />;
      case "f2": return <Layers className="w-6 h-6" />;
      case "f3": return <Dumbbell className="w-6 h-6 text-brand-primary" />;
      case "f4": return <Waves className="w-6 h-6" />;
      case "f5": return <Layers className="w-6 h-6" />;
      case "f6": return <Lock className="w-6 h-6" />;
      case "f7": return <Wind className="w-6 h-6" />;
      case "f8": return <CalendarClock className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-primary-bg relative border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            LUXURY ATHLETIC SPACES
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Explore Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Premium Facility
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Every square inch of Tranceform Fitness Dhankawadi is architecturally optimized to elevate performance, focus, and recovery.
          </p>
        </div>

        {/* Premium Bento Grid or Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-secondary-bg flex flex-col justify-end min-h-[280px] shadow-2xl transition-all duration-300 hover:border-brand-primary/30"
            >
              {/* Facility image with dark dramatic zoom overlays */}
              <div className="absolute inset-0 z-0">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent"></div>
              </div>

              {/* Dynamic Floating Label/Badge */}
              <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-primary border border-brand-primary/30 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                {getFacilityIcon(fac.id)}
              </div>

              {/* Content Panel */}
              <div className="p-6 relative z-10 space-y-2">
                <h3 className="font-display font-extrabold text-lg text-white leading-tight uppercase group-hover:text-brand-primary transition-colors duration-200">
                  {fac.title}
                </h3>
                <p className="font-sans text-xs text-text-secondary leading-relaxed font-light">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
