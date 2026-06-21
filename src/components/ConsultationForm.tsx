/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LeadSubmission } from "../types";
import { Flame, ShieldAlert, Sparkles, Send } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    fitnessGoal: "Weight Loss Transformation",
    preferredPlan: "STANDARD PLAN (₹1499/mo)",
    message: "",
  });

  const [toast, setToast] = useState<{ show: boolean; msg: string; type: "success" | "error" }>({
    show: false,
    msg: "",
    type: "success",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ show: true, msg, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Small valid check
    if (!formData.fullName.trim() || !formData.mobileNumber.trim()) {
      showToast("Please provide your Name and Mobile Number.", "error");
      return;
    }

    try {
      // Craft new lead object
      const newLead: LeadSubmission = {
        id: "lead-" + Date.now(),
        fullName: formData.fullName.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        fitnessGoal: formData.fitnessGoal,
        preferredPlan: formData.preferredPlan,
        message: formData.message.trim() || undefined,
        timestamp: new Date().toLocaleDateString(),
        status: "new",
      };

      // Get current stored ones
      const existing = localStorage.getItem("tranceform_leads");
      let leadsArray: LeadSubmission[] = [];
      if (existing) {
        leadsArray = JSON.parse(existing);
      }
      leadsArray.unshift(newLead);
      localStorage.setItem("tranceform_leads", JSON.stringify(leadsArray));

      // Dispatch custom trigger to update Owner Dashboard immediately
      window.dispatchEvent(new Event("leadSubmitted"));

      // Direct local lead tracking report
      showToast("Thank you! Your free gym consultation slot has been reserved. Our expert trainers will contact you shortly.");

      // Flush Form
      setFormData({
        fullName: "",
        mobileNumber: "",
        fitnessGoal: "Weight Loss Transformation",
        preferredPlan: "STANDARD PLAN (₹1499/mo)",
        message: "",
      });

    } catch (err) {
      console.error(err);
      showToast("Action failed. Try again.", "error");
    }
  };

  return (
    <section id="consultation" className="py-20 bg-secondary-bg relative border-t border-white/5">
      {/* Visual top radial light background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* LEFT: Branding Pitch & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
              CLAIM YOUR COMPLIMENTARY TRIAL PASS
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white tracking-tight leading-snug uppercase">
              Book Your Free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Gym Consultation
              </span>
            </h2>
            <div className="w-16 h-1.5 bg-brand-primary rounded-full"></div>
            
            <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed font-light">
              Don't wait till tomorrow to define your physical success. Fill out our simple onboarding metrics form and get:
            </p>

            <ul className="space-y-3 font-sans text-xs text-text-secondary font-light">
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>One-day full access Trial ticket to our VIP workout floor</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Complimentary metabolic body assessment report (BMR breakdown)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Custom nutritional adaptation strategy draft from our dietitian</span>
              </li>
            </ul>

            <div className="rounded-xl border border-white/5 bg-primary-bg/50 p-4 flex items-center space-x-3">
              <div className="text-yellow-500 p-2 bg-yellow-500/15 rounded-lg select-none shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <p className="font-sans text-[10px] text-text-secondary/80">
                Only <strong className="text-white text-bold">8 free trial slots left</strong> for this week. Book your priority callback slot today!
              </p>
            </div>
          </div>

          {/* RIGHT: Actual Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-3xl bg-primary-bg/70 border border-white/10 shadow-2xl relative">
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Full name input */}
                <div>
                  <label htmlFor="fullName" className="block text-[11px] uppercase font-display font-black text-white tracking-widest mb-1.5">
                    Full Name <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your first and last name"
                    className="w-full bg-secondary-bg border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all font-sans"
                    required
                  />
                </div>

                {/* Mobile number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-[11px] uppercase font-display font-black text-white tracking-widest mb-1.5">
                    Mobile Number <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 7219261729"
                    className="w-full bg-secondary-bg border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all font-sans"
                    required
                  />
                </div>

                {/* Grid Split dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Goal Dropdown */}
                  <div>
                    <label htmlFor="fitnessGoal" className="block text-[11px] uppercase font-display font-black text-white tracking-widest mb-1.5">
                      Fitness Goal
                    </label>
                    <select
                      id="fitnessGoal"
                      name="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={handleInputChange}
                      className="w-full bg-secondary-bg border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all font-sans"
                    >
                      <option value="Weight Loss Transformation">Weight Loss Transformation</option>
                      <option value="Muscle Building Programs">Muscle Building Programs</option>
                      <option value="Strength Training compound">Strength Training Compound</option>
                      <option value="Cardio Endurance Conditioning">Cardio Endurance Conditioning</option>
                      <option value="Personal Training 1-on-1">Personal Training 1-on-1</option>
                      <option value="Functional Fitness agility">Functional Fitness</option>
                    </select>
                  </div>

                  {/* Plan dropdown */}
                  <div>
                    <label htmlFor="preferredPlan" className="block text-[11px] uppercase font-display font-black text-white tracking-widest mb-1.5">
                      Preferred Plan
                    </label>
                    <select
                      id="preferredPlan"
                      name="preferredPlan"
                      value={formData.preferredPlan}
                      onChange={handleInputChange}
                      className="w-full bg-secondary-bg border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all font-sans"
                    >
                      <option value="BASIC PLAN (₹999/mo)">BASIC PLAN (₹999/mo)</option>
                      <option value="STANDARD PLAN (₹1499/mo)">STANDARD PLAN (₹1499/mo)</option>
                      <option value="PREMIUM PLAN (₹1999/mo)">PREMIUM PLAN (₹1999/mo)</option>
                    </select>
                  </div>
                </div>

                {/* Additional notes message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase font-display font-black text-white tracking-widest mb-1.5">
                    Your Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Discuss any specific injuries, targets, or scheduling preferences"
                    rows={3}
                    className="w-full bg-secondary-bg border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all font-sans"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-primary hover:bg-brand-secondary text-white font-display font-black text-xs tracking-widest uppercase rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 mt-2 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>GET FREE CONSULTATION</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Floating alert/success toast message */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-55 max-w-sm glass-panel p-4 rounded-xl border border-brand-primary/30 shadow-2xl flex items-start space-x-3 bg-primary-bg/95 animate-pulse-glow">
          <div className={`p-1.5 rounded-lg select-none text-white ${toast.type === "success" ? "bg-emerald-600" : "bg-red-600"}`}>
            {toast.type === "success" ? "✓" : "!"}
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-white uppercase">{toast.type === "success" ? "Success Saved" : "Form Error"}</h4>
            <p className="font-sans text-[11px] text-text-secondary mt-1">{toast.msg}</p>
          </div>
        </div>
      )}
    </section>
  );
}
