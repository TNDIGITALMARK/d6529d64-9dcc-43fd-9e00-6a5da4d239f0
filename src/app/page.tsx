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
        {/* Hero Section */}
        <section
          className="relative h-[600px] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/generated/hero-construction.png')",
          }}
        >
          <div className="container mx-auto max-w-[1200px] px-5">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Building
                <br />
                Your Dreams
              </h1>
              <p className="text-xl md:text-2xl mb-2 font-semibold">
                Quality Construction Services
              </p>
              <p className="text-lg mb-8 text-white/95">
                Licensed, Bonded & Insured | 25+ Years Experience
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[hsl(187,92%,43%)] hover:bg-[hsl(187,92%,50%)] text-white px-10 py-4 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[hsl(210,20%,98%)]">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(217,33%,17%)]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Recent Projects Section */}
        <section className="py-20 bg-[hsl(217,91%,10%)]">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

            {/* Testimonials in Project Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}