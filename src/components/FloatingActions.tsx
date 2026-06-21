/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function FloatingActions() {
  return (
    <>
      {/* Bottom Left Floating Trigger: Call Now */}
      <div className="fixed bottom-6 left-6 z-40 animate-float">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-14 h-14 bg-brand-primary hover:bg-brand-secondary text-white rounded-full shadow-[0_4px_25px_rgba(255,45,45,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border border-white/10"
          title="Call Gym Office"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
      </div>

      {/* Bottom Right Floating Trigger: WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 animate-float [animation-delay:2s]">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
            BUSINESS_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
          title="WhatsApp Support"
        >
          <MessageSquare className="w-6 h-6 fill-white text-emerald-600 animate-pulse" />
        </a>
      </div>
    </>
  );
}
