/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-secondary-bg relative border-t border-white/5">
      {/* Visual background sphere */}
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            KNOWLEDGE BASE INFO
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-xt text-white tracking-tight leading-tight uppercase">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-4xl md:text-5xl lg:text-6xl">
              Questions
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Find immediate answers on gym schedules, female safety, membership flexibility, and physical onboarding in Dhankawadi.
          </p>
        </div>

        {/* Collapsible Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "border-brand-primary/30 bg-primary-bg shadow-xl"
                    : "border-white/5 bg-primary-bg/40 hover:border-white/10"
                }`}
              >
                {/* Trigger Question bar */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/25 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-brand-primary" : "text-text-secondary/70"}`} />
                    <span className="font-display font-extrabold text-sm md:text-base text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Plus / Minus transition indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-brand-primary text-white" : "bg-white/5 text-text-secondary hover:text-white"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-56 border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-text-secondary leading-relaxed font-light font-sans bg-secondary-bg/25">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
