/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MapPin, MessageSquare, Compass, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary-bg relative border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-primary">
            VISIT TRANCEFORM FITNESS
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-xt text-white tracking-tight leading-tight uppercase">
            Get In <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-4xl md:text-5xl lg:text-6xl">
              Touch
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            We are conveniently located directly behind Bharati Vidyapeeth inside Pushkaraj Society in Dhankawadi, Pune. Drop by today for a free workout trial!
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Address & contact blocks */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address detail Card */}
              <div className="glass-panel p-6 rounded-2xl border-white/5 bg-secondary-bg/50 space-y-4 flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">Our Address</h3>
                  <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Detail card */}
              <div className="glass-panel p-6 rounded-2xl border-white/5 bg-secondary-bg/50 space-y-4 flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">Phone Call</h3>
                  <p className="font-display font-extrabold text-white text-base md:text-lg">
                    {BUSINESS_INFO.phoneFormatted}
                  </p>
                  <p className="font-sans text-[10px] text-text-secondary">Click the button below to dial directly from your smartphone</p>
                </div>
              </div>

              {/* Working hours card */}
              <div className="glass-panel p-6 rounded-2xl border-white/5 bg-secondary-bg/50 space-y-4 flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-2 w-full">
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">Gym Hours</h3>
                  <div className="space-y-1.5 font-sans text-xs text-text-secondary font-light">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Mon - Sat:</span>
                      <span className="font-bold text-white">{BUSINESS_INFO.timings.weekdays}</span>
                    </div>
                    <div className="flex justify-between text-brand-secondary">
                      <span>Sunday:</span>
                      <span className="font-bold">{BUSINESS_INFO.timings.sunday} (Morning Shift)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <a
                href={BUSINESS_INFO.gmapDirUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-display font-bold text-[10px] uppercase tracking-wider inline-flex items-center justify-center space-x-1.5 transition-all text-center border border-white/10 hover:border-brand-primary"
              >
                <Compass className="w-3.5 h-3.5 text-brand-primary" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-4 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-display font-bold text-[10px] uppercase tracking-wider inline-flex items-center justify-center space-x-1.5 transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-display font-bold text-[10px] uppercase tracking-wider inline-flex items-center justify-center space-x-1.5 transition-all text-center dialog-button"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Precise Google Maps Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[350px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-secondary-bg">
            <iframe
              title="Tranceform Fitness Location Pune"
              src={BUSINESS_INFO.gmapEmbedUrl}
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
