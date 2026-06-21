/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Dumbbell, ShieldCheck, Trophy, Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Hero() {
  const handleScrollToConsultation = () => {
    const consultationSection = document.querySelector("#consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary-bg"
    >
      {/* Cinematic Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Gym Interior"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-primary-bg/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-primary-bg/70"></div>
        {/* Deep bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-bg to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Content & Text */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 animate-pulse-glow">
              <Flame className="w-4 h-4 text-brand-primary" />
              <span className="font-display font-bold text-xs tracking-wider text-brand-primary uppercase">
                DHANKAWADI'S PREMIUM UNISEX GYM
              </span>
            </div>

            <h1 className="font-display font-black leading-none text-[38px] md:text-[52px] lg:text-[80px] tracking-tight text-white select-none">
              TRANSFORM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                YOUR BODY.
              </span>
              <br />
              TRANSFORM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                YOUR LIFE.
              </span>
            </h1>

            <p className="font-sans text-[16px] md:text-[18px] lg:text-[20px] text-text-secondary leading-relaxed max-w-2xl font-light">
              Dhankawadi's Premium Unisex Fitness Destination with Modern Equipment, Expert Trainers and Personalized Fitness Programs designed to unlock your ultimate potential.
            </p>

            {/* Premium Buttons Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleScrollToConsultation}
                className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-display font-bold text-sm tracking-wider rounded-lg uppercase shadow-[0_4px_30px_rgba(255,45,45,0.4)] hover:shadow-[0_4px_35px_rgba(255,45,45,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                START YOUR FITNESS JOURNEY
              </button>

              <div className="flex gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 sm:flex-none px-6 py-4 glass-panel hover:bg-white/10 text-white rounded-lg font-display font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center space-x-2 border border-white/10 hover:border-brand-primary transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    BUSINESS_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-display font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Graphic Model Cards */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            {/* Background glowing red sphere effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-primary/10 blur-[80px] pointer-events-none z-0"></div>

            {/* Split Display of Athletic Models */}
            <div className="relative z-10 grid grid-cols-2 gap-4 max-w-md w-full scale-95 md:scale-100">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative group aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400"
                    alt="Male Fitness Model Weightlifting"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Floating Card: Expert Trainers */}
                <div className="glass-panel p-4 rounded-xl shadow-xl border border-white/10 flex items-center space-x-3 backdrop-blur-md animate-float">
                  <div className="p-2 bg-brand-primary/20 rounded-lg text-brand-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-white leading-none">Expert Trainers</h4>
                    <p className="font-sans text-[10px] text-text-secondary mt-1">Certified Coaches</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                {/* Floating Card: 1000+ Transformations */}
                <div className="glass-panel p-4 rounded-xl shadow-xl border border-white/10 flex items-center space-x-3 backdrop-blur-md animate-float [animation-delay:1.5s]">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-white leading-none">1,000+ Results</h4>
                    <p className="font-sans text-[10px] text-text-secondary mt-1">Transformations Done</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative group aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400"
                    alt="Female Athletic Fitness Athlete"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-80"></div>
                </div>
              </div>

              {/* Extra Floating Badge Centered at bottom */}
              <div className="absolute -bottom-4 left-4 right-4 glass-panel p-4 rounded-xl shadow-xl border border-brand-primary/20 flex justify-around backdrop-blur-lg text-center">
                <div>
                  <div className="font-display font-black text-lg text-white">500+</div>
                  <div className="font-sans text-[9px] uppercase tracking-wider text-text-secondary">Active Members</div>
                </div>
                <div className="border-r border-white/10"></div>
                <div>
                  <div className="font-display font-black text-lg text-brand-primary">Imported</div>
                  <div className="font-sans text-[9px] uppercase tracking-wider text-text-secondary">Gym Equipment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
