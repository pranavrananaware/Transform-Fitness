/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2 } from "lucide-react";
import { TRUST_STRIP } from "../data";

export default function TrustStrip() {
  return (
    <section className="bg-secondary-bg border-y border-white/5 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8 md:gap-x-12">
          {TRUST_STRIP.map((trustItem, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-white/90 hover:text-brand-primary transition-colors duration-200"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
              <span className="font-display font-bold text-sm tracking-wide uppercase">
                {trustItem.replace("✓ ", "")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
