/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Flame, HelpCircle } from "lucide-react";
import { PRICING_PLANS } from "../data";

export default function Pricing() {
  const handleScrollToConsultation = (planName: string) => {
    const consultationSection = document.querySelector("#consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto-fill form inputs if present
      const preferredPlanSelect = document.getElementById("preferredPlan") as HTMLSelectElement;
      if (preferredPlanSelect) {
        preferredPlanSelect.value = planName;
      }
    }
  };

  return (
    <section id="membership" className="py-20 bg-primary-bg relative border-t border-white/5">
      {/* Visual background elements */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            INVEST IN YOUR HEALTH
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Choose Your Plan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Premium Pricing
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            No sign-up fee, no surprise surcharges. Experience elite-level physical growth with simple, upfront, highly affordable memberships that adapt to any timeline.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 ${
                plan.isPopular
                  ? "border border-brand-primary bg-secondary-bg shadow-[0_15px_40px_rgba(255,45,45,0.15)] scale-102 z-10"
                  : "border border-white/5 bg-secondary-bg/50 hover:border-white/20"
              }`}
            >
              {/* Highlight Ribbon for Popular program */}
              {plan.isPopular && (
                <div className="absolute top-4 right-4 bg-brand-primary text-white font-display font-black text-[9px] tracking-widest uppercase px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg shadow-brand-primary/30">
                  <Flame className="w-3.5 h-3.5" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Plan content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-display font-black text-xs text-brand-primary uppercase tracking-widest">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mt-4 text-white">
                    <span className="font-display font-black text-5xl">₹{plan.price}</span>
                    <span className="font-sans text-text-secondary text-xs ml-1">/{plan.billingPeriod}</span>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="p-0.5 rounded-full bg-brand-primary/10 text-brand-primary shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans text-xs text-text-secondary leading-normal font-light">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="p-8 pt-0">
                <button
                  onClick={() => handleScrollToConsultation(plan.name)}
                  className={`w-full py-4 font-display font-black text-xs tracking-wider uppercase rounded-xl transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-brand-primary hover:bg-brand-secondary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-brand-primary"
                  }`}
                >
                  GET DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note info below */}
        <p className="font-sans text-[11px] text-text-secondary/50 text-center mt-12 max-w-lg mx-auto">
          Need custom duration terms? We also customize quarterly, half-yearly and yearly gym packages at heavy discount. Walk in, WhatsApp or call our support desk to draft a custom contract today.
        </p>
      </div>
    </section>
  );
}
