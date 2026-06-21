/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { LeadSubmission } from "../types";
import { Users, Phone, MessageSquare, Check, X, ClipboardList, Database, Trash2 } from "lucide-react";

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem("tranceform_leads");
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        // Hydrate with realistic sample leads for demonstration value
        const initialSamples: LeadSubmission[] = [
          {
            id: "sample-1",
            fullName: "Pranav Ranaware",
            mobileNumber: "9876543210",
            fitnessGoal: "Weight Loss Fat Burning",
            preferredPlan: "STANDARD PLAN",
            message: "I live near Bharati Vidyapeeth hostel. Looking to lose 15 kgs.",
            timestamp: new Date().toLocaleDateString(),
            status: "new",
          },
          {
            id: "sample-2",
            fullName: "Neha Deshpande",
            mobileNumber: "7219261720",
            fitnessGoal: "Lean Muscle Hypertrophy Toning",
            preferredPlan: "PREMIUM PLAN",
            message: "I am an IT consultant. I would like to schedule a trial workout on Saturday morning.",
            timestamp: new Date(Date.now() - 86400000).toLocaleDateString(),
            status: "contacted",
          },
        ];
        localStorage.setItem("tranceform_leads", JSON.stringify(initialSamples));
        setLeads(initialSamples);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadLeads();
    // Listening for storage updates from form submissions
    const handleStorageChange = () => {
      loadLeads();
    };
    window.addEventListener("storage", handleStorageChange);
    // Custom window event dispatch when user submits form
    window.addEventListener("leadSubmitted", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("leadSubmitted", handleStorageChange);
    };
  }, []);

  const updateStatus = (id: string, newStatus: "new" | "contacted" | "joined") => {
    const updated = leads.map((lead) =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    localStorage.setItem("tranceform_leads", JSON.stringify(updated));
    setLeads(updated);
  };

  const deleteLead = (id: string) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      const updated = leads.filter((lead) => lead.id !== id);
      localStorage.setItem("tranceform_leads", JSON.stringify(updated));
      setLeads(updated);
    }
  };

  const clearAllLeads = () => {
    if (window.confirm("Clear all lead records? This cannot be undone.")) {
      localStorage.removeItem("tranceform_leads");
      setLeads([]);
    }
  };

  const countByStatus = (status: "new" | "contacted" | "joined") => {
    return leads.filter((lead) => lead.status === status).length;
  };

  return (
    <>
      {/* Floating admin portal badge visible inside the UI */}
      <div className="py-8 bg-zinc-950/80 border-t border-white/5 text-center mt-20">
        <button
          onClick={() => {
            setIsOpen(true);
            loadLeads();
          }}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-brand-primary bg-primary-bg font-display font-bold text-[10px] text-text-secondary hover:text-white uppercase tracking-wider transition-all duration-200 shadow-xl"
        >
          <Database className="w-3.5 h-3.5 text-brand-primary" />
          <span>🔐 Open Owner/Staff Leads Deck</span>
        </button>
      </div>

      {/* Admin Panel Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-55 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-secondary-bg border border-white/10 rounded-3xl w-full max-w-5xl h-[85vh] flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-primary-bg/50 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 mr-1 bg-brand-primary/20 text-brand-primary rounded-lg">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">Tranceform Leads Center</h3>
                  <p className="font-sans text-[10px] text-text-secondary uppercase tracking-widest mt-0.5">Gym Manager CRM Panel</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
                aria-label="Close Leads Pane"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Dashboard */}
            <div className="p-6 bg-primary-bg/20 border-b border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-primary-bg/30 text-center">
                <div className="font-sans text-[10px] text-text-secondary uppercase">Total Inquiries</div>
                <div className="font-display font-black text-2xl text-white mt-1">{leads.length}</div>
              </div>
              <div className="p-4 rounded-xl border border-red-500/10 bg-red-950/10 text-center">
                <div className="font-sans text-[10px] text-brand-secondary uppercase">New Leads</div>
                <div className="font-display font-black text-2xl text-brand-secondary mt-1">{countByStatus("new")}</div>
              </div>
              <div className="p-4 rounded-xl border border-blue-500/10 bg-blue-950/10 text-center">
                <div className="font-sans text-[10px] text-blue-400 uppercase">Contacted</div>
                <div className="font-display font-black text-2xl text-blue-400 mt-1">{countByStatus("contacted")}</div>
              </div>
              <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-950/10 text-center">
                <div className="font-sans text-[10px] text-emerald-400 uppercase">Joined Members</div>
                <div className="font-display font-black text-2xl text-emerald-400 mt-1">{countByStatus("joined")}</div>
              </div>
            </div>

            {/* Lead Records List List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {leads.length > 0 ? (
                leads.map((lead) => (
                  <div
                    key={lead.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      lead.status === "joined"
                        ? "border-emerald-500/25 bg-emerald-950/5"
                        : lead.status === "contacted"
                        ? "border-blue-500/15 bg-blue-950/5"
                        : "border-white/5 bg-primary-bg/40 shadow-sm"
                    } flex flex-col md:flex-row md:items-center md:justify-between gap-6`}
                  >
                    
                    {/* Lead Bio info */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display font-black text-white text-base uppercase">{lead.fullName}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/5 text-text-secondary">{lead.timestamp}</span>
                        
                        {/* Status Label badge */}
                        <span className={`text-[9px] uppercase font-display font-extrabold tracking-wider px-2 py-0.5 rounded-md ${
                          lead.status === "joined"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : lead.status === "contacted"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-red-500/10 text-brand-secondary"
                        }`}>
                          {lead.status}
                        </span>
                      </div>

                      <div className="text-xs space-y-0.5 font-sans font-light text-text-secondary">
                        <p><span className="font-semibold text-white">Goal:</span> {lead.fitnessGoal}</p>
                        <p><span className="font-semibold text-white">Preferred Plan:</span> {lead.preferredPlan}</p>
                        {lead.message && <p><span className="font-semibold text-white">Message:</span> "{lead.message}"</p>}
                      </div>
                    </div>

                    {/* Leads follow up and state controllers */}
                    <div className="flex flex-wrap items-center gap-2">
                      
                      {/* Immediate call triggers */}
                      <a
                        href={`tel:${lead.mobileNumber}`}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-brand-primary flex items-center space-x-1.5 font-sans text-xs transition"
                        title="Call Mobile"
                      >
                        <Phone className="w-4 h-4 text-brand-primary" />
                        <span className="hidden sm:inline font-medium">{lead.mobileNumber}</span>
                      </a>

                      {/* WhatsApp trigger macro */}
                      <a
                        href={`https://wa.me/${lead.mobileNumber.startsWith("+") ? lead.mobileNumber : "+91" + lead.mobileNumber}?text=${encodeURIComponent(
                          `Hello ${lead.fullName}, this is Tranceform Fitness Dhankawadi! We received your inquiry regarding our gym memberships. Let us know when you can visit for gym tour!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-600/10 hover:bg-emerald-600 border border-emerald-500/10 hover:border-emerald-500 text-emerald-400 hover:text-white flex items-center space-x-1 transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden sm:inline text-xs font-bold font-sans">Reach Out</span>
                      </a>

                      {/* Change Status select */}
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value as any)}
                        className="bg-primary-bg text-white border border-white/5 rounded-lg p-2 text-xs font-sans font-medium focus:ring-1 focus:ring-brand-primary"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="joined">Joined</option>
                      </select>

                      {/* Delete individual lead */}
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-2 text-text-secondary/50 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition"
                        title="Delete inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-center text-text-secondary space-y-2">
                  <Database className="w-12 h-12 text-white/5" />
                  <p className="font-sans text-sm">No inquiry logs cataloged in local storage.</p>
                </div>
              )}
            </div>

            {/* Footer triggers */}
            <div className="p-6 border-t border-white/5 bg-primary-bg/50 flex justify-between items-center">
              <span className="font-sans text-[10px] text-text-secondary/50">Stored locally in your browser sandbox. Leads do not sync to external servers.</span>
              <button
                onClick={clearAllLeads}
                disabled={leads.length === 0}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white rounded-lg font-display font-medium text-[10px] uppercase tracking-wider flex items-center space-x-1.5 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete All Records</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
