'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[hsl(205,51%,36%)] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto max-w-[1200px] px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/generated/omega-logo.png"
              alt="Omega Contracting"
              width={200}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Phone & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:555-123-687" className="text-white font-semibold">
              555-123-687
            </a>
            <Link
              href="/contact"
              className="bg-[hsl(28,92%,54%)] hover:bg-[hsl(28,92%,60%)] text-white px-8 py-3 rounded font-bold uppercase text-sm tracking-wide transition-all"
            >
              Get Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[hsl(205,51%,30%)] rounded transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-[hsl(205,51%,40%)] mt-2 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[hsl(28,92%,54%)] transition-colors font-medium uppercase text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:555-123-687" className="text-white font-semibold pt-2 border-t border-[hsl(205,51%,40%)]">
                555-123-687
              </a>
              <Link
                href="/contact"
                className="bg-[hsl(28,92%,54%)] hover:bg-[hsl(28,92%,60%)] text-white px-6 py-3 rounded font-bold uppercase text-sm tracking-wide transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Estimate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
