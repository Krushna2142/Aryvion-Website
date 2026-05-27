"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const serviceOptions = [
  "Website / Web App Development",
  "AI Automation",
  "Dashboard / Admin Panel",
  "SaaS Product Development",
  "Client Portal",
  "Data Analytics",
  "Cyber Security Consultation",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual submission logic here
    alert("Thanks for your message! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        title="Have an idea, workflow, or business problem to solve?"
        subtitle="Let’s turn your idea into a real AI‑powered system, dashboard, SaaS platform, or automation workflow."
      />
      <div className="max-w-3xl mx-auto glass p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
          >
            <option value="">Select Service Needed</option>
            {serviceOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl font-medium text-white flex items-center justify-center gap-2 hover:shadow-glow-cyan transition-shadow"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-6 py-3 border border-brand-cyan/30 rounded-full text-brand-cyan hover:bg-brand-cyan/10 transition">
            Contact Aryvion
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition">
            Request a Project Discussion
          </a>
        </div>
      </div>
    </section>
  );
}