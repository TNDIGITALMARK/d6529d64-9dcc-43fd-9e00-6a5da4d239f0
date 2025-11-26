'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[hsl(0,0%,10%)] text-white sticky top-0 z-50 shadow-xl border-b border-[hsl(45,64%,53%)]/20">
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

      <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/generated/omega-logo.png"
              alt="Omega Contracting"
              width={200}
              height={60}
              className="h-14 w-auto brightness-0 invert transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(45,64%,53%)] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(45,64%,53%)] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(45,64%,53%)] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(45,64%,53%)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Phone & CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:555-123-687" className="text-white font-bold text-lg tracking-wide hover:text-[hsl(45,64%,53%)] transition-colors">
              555-123-687
            </a>
            <Link
              href="/contact"
              className="bg-[hsl(45,64%,53%)] hover:bg-[hsl(45,64%,58%)] text-[hsl(0,0%,10%)] px-8 py-3.5 font-bold text-sm transition-all shadow-gold hover:shadow-xl uppercase tracking-wider"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 hover:bg-[hsl(45,64%,53%)]/10 border border-[hsl(45,64%,53%)]/30 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[hsl(45,64%,53%)]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(45,64%,53%)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-[hsl(45,64%,53%)]/20 mt-2 pt-6 bg-[hsl(0,0%,8%)]">
            <nav className="flex flex-col space-y-5">
              <Link
                href="/"
                className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[hsl(45,64%,53%)] transition-colors font-semibold text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:555-123-687" className="text-[hsl(45,64%,53%)] font-bold text-lg pt-4 border-t border-[hsl(45,64%,53%)]/20">
                555-123-687
              </a>
              <Link
                href="/contact"
                className="bg-[hsl(45,64%,53%)] hover:bg-[hsl(45,64%,58%)] text-[hsl(0,0%,10%)] px-6 py-4 font-bold text-sm transition-all text-center uppercase tracking-wider shadow-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Estimate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
