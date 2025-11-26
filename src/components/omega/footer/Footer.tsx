import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,10%)] text-white relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(45, 64%, 53%) 35px, hsl(45, 64%, 53%) 36px)',
      }}></div>

      <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        {/* Contact CTA Section - Premium */}
        <div className="text-center py-16 border-b border-[hsl(45,64%,53%)]/20">
          <h6 className="text-[hsl(45,64%,53%)] mb-4 uppercase tracking-widest text-sm font-bold">Ready to Start?</h6>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Let&apos;s Build Something Exceptional
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto mb-10"></div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[hsl(45,64%,53%)] hover:bg-[hsl(45,64%,58%)] text-[hsl(0,0%,10%)] px-12 py-5 font-bold text-base transition-all shadow-gold hover:shadow-xl uppercase tracking-wider"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:555-123-687"
              className="text-white text-2xl font-bold hover:text-[hsl(45,64%,53%)] transition-colors tracking-wide"
            >
              555-123-687
            </a>
          </div>
        </div>

        {/* Footer Info Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-6 text-[hsl(45,64%,53%)] text-lg uppercase tracking-wider">Omega Contracting</h4>
            <div className="w-12 h-px bg-[hsl(45,64%,53%)] mb-6"></div>
            <p className="text-base text-white/80 mb-3 font-light">Metro Atlanta Area</p>
            <p className="text-base text-white/80 mb-3 font-light">Licensed, Bonded & Insured</p>
            <p className="text-base text-white/80 mb-3 font-light">Established 2015</p>
            <p className="text-sm text-[hsl(45,64%,53%)] mt-6 font-semibold">25+ Years Combined Experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-[hsl(45,64%,53%)] text-lg uppercase tracking-wider">Quick Links</h4>
            <div className="w-12 h-px bg-[hsl(45,64%,53%)] mb-6"></div>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-base text-white/80 hover:text-[hsl(45,64%,53%)] transition-colors font-light hover:translate-x-1 inline-block">
                Home
              </Link>
              <Link href="/services" className="text-base text-white/80 hover:text-[hsl(45,64%,53%)] transition-colors font-light hover:translate-x-1 inline-block">
                Services
              </Link>
              <Link href="/projects" className="text-base text-white/80 hover:text-[hsl(45,64%,53%)] transition-colors font-light hover:translate-x-1 inline-block">
                Projects
              </Link>
              <Link href="/contact" className="text-base text-white/80 hover:text-[hsl(45,64%,53%)] transition-colors font-light hover:translate-x-1 inline-block">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-6 text-[hsl(45,64%,53%)] text-lg uppercase tracking-wider">Connect With Us</h4>
            <div className="w-12 h-px bg-[hsl(45,64%,53%)] mb-6"></div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[hsl(40,29%,13%)] hover:bg-[hsl(45,64%,53%)] border border-[hsl(45,64%,53%)]/30 hover:border-[hsl(45,64%,53%)] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[hsl(40,29%,13%)] hover:bg-[hsl(45,64%,53%)] border border-[hsl(45,64%,53%)]/30 hover:border-[hsl(45,64%,53%)] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[hsl(40,29%,13%)] hover:bg-[hsl(45,64%,53%)] border border-[hsl(45,64%,53%)]/30 hover:border-[hsl(45,64%,53%)] flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[hsl(45,64%,53%)]/20 py-8 text-center">
          <p className="text-sm text-white/60 font-light">
            &copy; {new Date().getFullYear()} Omega Contracting. All Rights Reserved. | Premium Construction Services
          </p>
        </div>
      </div>
    </footer>
  );
}
