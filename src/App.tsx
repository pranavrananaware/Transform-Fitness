/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Transformations from "./components/Transformations";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ConsultationForm from "./components/ConsultationForm";
import LeadsDashboard from "./components/LeadsDashboard";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-white font-sans antialiased selection:bg-brand-primary selection:text-white">
      {/* 1. Header Floating Glass Navigation Menu */}
      <Navbar />

      {/* 2. Primary Showcase Section */}
      <Hero />

      {/* 3. Horizontal Trust Value Strip */}
      <TrustStrip />

      {/* 4. Luxury Facility Core Spaces Grid */}
      <Facilities />

      {/* 5. Goal Targeted Training Services */}
      <Services />

      {/* 6. Gym Ethos Page (Why Choose) */}
      <About />

      {/* 7. Interactive Before/After Physical Slides */}
      <Transformations />

      {/* 8. Pricing Plans Grid */}
      <Pricing />

      {/* 9. Communities Feedback Viewport */}
      <Testimonials />

      {/* 10. Masonry Facility Gallery */}
      <Gallery />

      {/* 11. Consultation Submissions Card */}
      <ConsultationForm />

      {/* 12. Knowledge Base FAQ Panels */}
      <FAQ />

      {/* 13. Dynamic Google Maps Embed & Communication details */}
      <Contact />

      {/* 14. Owner CRM Leads Logs Tracker (Bonus business value) */}
      <LeadsDashboard />

      {/* 15. Absolute Floating action widgets (WhatsApp and Call Now triggers) */}
      <FloatingActions />
    </div>
  );
}
