import Link from 'next/link';
import { Header } from '@/components/omega/header/Header';
import { Footer } from '@/components/omega/footer/Footer';
import { ServiceCard } from '@/components/omega/services/ServiceCard';
import { ProjectCard } from '@/components/omega/projects/ProjectCard';
import { TestimonialCard } from '@/components/omega/testimonials/TestimonialCard';
import { Home, Building2, PaintBucket, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Premium Redesign */}
        <section
          className="relative min-h-[85vh] bg-cover bg-center flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(26, 26, 26, 0.92) 0%, rgba(44, 36, 22, 0.85) 100%), url('/generated/hero-construction.png')",
          }}
        >
          {/* Decorative Gold Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-[hsl(45,64%,53%)]/10 border border-[hsl(45,64%,53%)]/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[hsl(45,64%,53%)] rounded-full animate-pulse"></div>
                <span className="text-[hsl(45,64%,53%)] text-sm font-semibold tracking-wide uppercase">Licensed & Insured</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] text-white">
                Crafting
                <br />
                <span className="text-[hsl(45,64%,53%)]">Excellence</span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-8"></div>

              <p className="text-2xl md:text-3xl mb-4 font-light text-white/95 leading-relaxed">
                Premium Construction & Renovation
              </p>
              <p className="text-lg mb-10 text-white/80 font-light max-w-xl">
                Transforming spaces with 25+ years of uncompromising craftsmanship and architectural precision
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-[hsl(45,64%,53%)] hover:bg-[hsl(45,64%,58%)] text-[hsl(0,0%,10%)] px-10 py-5 font-bold text-base transition-all shadow-gold hover:shadow-xl uppercase tracking-wider relative overflow-hidden"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(45,64%,58%)] to-[hsl(45,64%,63%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center border-2 border-[hsl(45,64%,53%)] text-white hover:bg-[hsl(45,64%,53%)]/10 px-10 py-5 font-bold text-base transition-all uppercase tracking-wider"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(60,25%,98%)] to-transparent"></div>
        </section>

        {/* Services Section - Premium Redesign */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(60,25%,98%)] to-[hsl(60,56%,94%)] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(43, 89%, 38%) 35px, hsl(43, 89%, 38%) 36px)',
          }}></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h6 className="text-[hsl(43,89%,38%)] mb-4">What We Offer</h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[hsl(0,0%,10%)]">
                Our Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto mb-6"></div>
              <p className="text-[hsl(33,38%,21%)] text-lg max-w-2xl mx-auto font-light">
                Delivering exceptional craftsmanship across residential and commercial projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              <ServiceCard
                icon={Home}
                title="Residential Construction"
                description="Complete home renovations, kitchen and bathroom remodeling, home additions, and custom residential projects."
              />
              <ServiceCard
                icon={Building2}
                title="Commercial Projects"
                description="Office buildouts, retail spaces, commercial renovations, and new construction for businesses of all sizes."
              />
              <ServiceCard
                icon={PaintBucket}
                title="Renovations"
                description="Interior and exterior renovations, roofing services, flooring installation, and complete property makeovers."
              />
            </div>
          </div>
        </section>

        {/* Recent Projects Section - Premium Redesign */}
        <section className="py-24 md:py-32 bg-[hsl(0,0%,10%)] relative">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h6 className="text-[hsl(45,64%,53%)] mb-4">Portfolio</h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                Featured Work
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto mb-6"></div>
              <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
                Explore our recent projects showcasing precision and artistry
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
              <ProjectCard
                imageSrc="/generated/project-kitchen.png"
                title="Modern Kitchen"
                category="Kitchen Remodeling"
              />
              <ProjectCard
                imageSrc="/generated/project-bathroom.png"
                title="Luxury Bathroom"
                category="Bathroom Renovation"
              />
              <ProjectCard
                imageSrc="/generated/project-flooring.png"
                title="Hardwood Floors"
                category="Flooring Installation"
              />
              <ProjectCard
                imageSrc="/generated/project-commercial.png"
                title="Office Building"
                category="Commercial Project"
              />
            </div>

            {/* Testimonials */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h6 className="text-[hsl(45,64%,53%)] mb-4">Client Testimonials</h6>
                <h3 className="text-3xl md:text-4xl text-white">
                  What Our Clients Say
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TestimonialCard
                  quote="Omega exceeded our expectations! They completed our kitchen renovation on time and within budget. The attention to detail and professionalism was outstanding."
                  author="Sarah Mitchell"
                  project="Kitchen Renovation"
                />
                <TestimonialCard
                  quote="Professional crew with quality workmanship. Our bathroom transformation looks incredible and the process was smooth from start to finish."
                  author="Mike Rodriguez"
                  project="Bathroom Remodel"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}