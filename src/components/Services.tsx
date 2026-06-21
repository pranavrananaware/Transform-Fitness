/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Icons from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  const handleScrollToConsultation = (planName: string) => {
    const consultationSection = document.querySelector("#consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto fill preferred plan or goal
      const selectElement = document.getElementById("fitnessGoal") as HTMLSelectElement;
      if (selectElement) {
        // Try matching options
        const match = Array.from(selectElement.options).find(opt => 
          opt.value.toLowerCase().includes(planName.toLowerCase()) || 
          planName.toLowerCase().includes(opt.value.toLowerCase())
        );
        if (match) {
          selectElement.value = match.value;
        }
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-primary-bg relative">
      {/* Decorative vertical gradient glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            OUR PREMIUM SERVICES
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Train With Purpose. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Transform With Us.
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Explore world-class, professional sports science frameworks crafted specifically to accelerate your strength, physical resilience, and life transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => {
            // Dynamically look up Lucide Icon
            let IconComp = Icons.Dumbbell; // default
            if (srv.iconName in Icons) {
              IconComp = (Icons as any)[srv.iconName];
            }

            return (
              <div
                key={srv.id}
                className="group glass-panel p-6 rounded-2xl glow-hover transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-secondary-bg/50"
              >
                <div className="space-y-4">
                  {/* Icon Container with glowing background */}
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-white leading-snug group-hover:text-brand-primary transition-colors duration-200">
                    {srv.title}
                  </h3>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                  <span className="font-display font-bold text-[10px] tracking-widest text-brand-primary group-hover:text-white transition-colors duration-200">
                    LEARN MORE
                  </span>
                  <button
                    onClick={() => handleScrollToConsultation(srv.title)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-colors"
                  >
                    <Icons.ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
