import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(217,33%,10%)] text-white py-12">
      <div className="container mx-auto max-w-[1200px] px-5">
        {/* Contact CTA Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Contact Us Today!</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              href="/contact"
              className="bg-[hsl(187,92%,43%)] hover:bg-[hsl(187,92%,50%)] text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Get Estimate
            </Link>
            <a
              href="tel:555-123-687"
              className="text-white text-xl font-semibold hover:text-[hsl(187,92%,43%)] transition-colors"
            >
              555-123-687
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-[hsl(217,33%,20%)] pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h4 className="font-semibold mb-3 text-[hsl(187,92%,43%)]">Omega Contracting</h4>
            <p className="text-sm text-[hsl(210,20%,80%)] mb-2">Metro Atlanta Area</p>
            <p className="text-sm text-[hsl(210,20%,80%)] mb-2">Licensed, Bonded & Insured</p>
            <p className="text-sm text-[hsl(210,20%,80%)]">Est. 2015</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-[hsl(187,92%,43%)]">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-[hsl(210,20%,80%)] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm text-[hsl(210,20%,80%)] hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-sm text-[hsl(210,20%,80%)] hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-[hsl(210,20%,80%)] hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3 text-[hsl(187,92%,43%)]">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(187,92%,43%)] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(187,92%,43%)] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(187,92%,43%)] rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[hsl(217,33%,20%)] mt-8 pt-6 text-center text-sm text-[hsl(210,20%,70%)]">
          <p>&copy; {new Date().getFullYear()} Omega Contracting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
