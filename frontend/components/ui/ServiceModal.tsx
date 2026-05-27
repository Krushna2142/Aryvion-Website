"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
  bestFor: string[];
  whatWeBuild: string[];
  deliverables: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent background scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleDiscuss = () => {
    onClose();
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-dark border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-brand-purple/10 backdrop-blur-xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & description */}
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
              {service.title}
            </h2>
            <p className="text-gray-400 mb-6">{service.description}</p>

            {/* Best for */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-brand-cyan uppercase tracking-wide mb-2">
                Best for
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What Aryvion can build */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-brand-cyan uppercase tracking-wide mb-2">
                What Aryvion can build
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.whatWeBuild.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-brand-cyan uppercase tracking-wide mb-2">
                Deliverables
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={handleDiscuss}
              className="w-full py-3 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl font-medium text-white flex items-center justify-center gap-2 hover:shadow-glow-cyan transition-shadow"
            >
              Discuss This Service
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}