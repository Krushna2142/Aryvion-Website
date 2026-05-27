"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Industries", href: "#industries" },
  { name: "Trust", href: "#trust" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full glass backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent whitespace-nowrap"
          >
            Aryvion Technologies
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 text-sm bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-brand-cyan hover:bg-brand-cyan/20 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 p-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-300 hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-center text-sm bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-brand-cyan"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}