import Link from 'next/link';
import { Header } from '@/components/omega/header/Header';
import { Footer } from '@/components/omega/footer/Footer';
import { Home, Building2, PaintBucket, Hammer, Wrench, DoorOpen } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with custom cabinetry, modern appliances, and elegant countertops.',
      price: 'Starting at $12,000',
      features: [
        'Custom Cabinet Design',
        'Countertop Installation',
        'Appliance Upgrades',
        'Flooring & Backsplash',
        'Lighting Design',
      ],
    },
    {
      icon: PaintBucket,
      title: 'Bathroom Renovations',
      description: 'Create a spa-like retreat with luxury fixtures, modern vanities, and premium tile work.',
      price: 'Starting at $8,000',
      features: [
        'Modern Vanity Installation',
        'Shower & Tub Upgrades',
        'Tile & Flooring',
        'Fixture Replacement',
        'Lighting & Ventilation',
      ],
    },
    {
      icon: Building2,
      title: 'Home Additions',
      description: 'Expand your living space with expertly designed and constructed room additions.',
      price: 'Starting at $25,000',
      features: [
        'Room Additions',
        'Second Story Additions',
        'Garage Conversions',
        'Sunroom Construction',
        'Full Design Services',
      ],
    },
    {
      icon: Hammer,
      title: 'Roofing Services',
      description: 'Protect your investment with quality roofing installation, repairs, and maintenance.',
      price: 'Starting at $5,000',
      features: [
        'Roof Replacement',
        'Repair Services',
        'Storm Damage Repair',
        'Gutter Installation',
        'Inspection Services',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Buildouts',
      description: 'Professional commercial construction services for offices, retail spaces, and more.',
      price: 'Custom Pricing',
      features: [
        'Office Space Design',
        'Retail Renovations',
        'Restaurant Buildouts',
        'Medical Facilities',
        'Warehouse Projects',
      ],
    },
    {
      icon: DoorOpen,
      title: 'Interior Renovations',
      description: 'Complete interior remodeling services to refresh and modernize your space.',
      price: 'Starting at $10,000',
      features: [
        'Flooring Installation',
        'Painting & Finishing',
        'Trim & Molding',
        'Drywall Repair',
        'Custom Built-ins',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header - Premium Dark with Gold Accents */}
        <section className="relative bg-[hsl(0,0%,10%)] py-24 text-white overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 text-center relative z-10">
            <h6 className="text-[hsl(45,64%,53%)] mb-4 uppercase tracking-widest text-sm font-bold">What We Do</h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto mb-6"></div>
            <p className="text-xl text-white/80 font-light">
              Comprehensive construction and renovation services for residential and commercial projects
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>
        </section>

        {/* Services Grid - Premium Cream Background */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(60,25%,98%)] to-[hsl(60,56%,94%)] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(43, 89%, 38%) 35px, hsl(43, 89%, 38%) 36px)',
          }}></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div key={index} className="group relative bg-[hsl(60,56%,91%)] p-10 hover:shadow-xl transition-all duration-500 border-2 border-[hsl(43,89%,38%)]/20 hover:border-[hsl(45,64%,53%)] overflow-hidden">
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[hsl(45,64%,53%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon with premium styling */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <service.icon className="w-10 h-10 text-white" />
                    {/* Gold glow effect */}
                    <div className="absolute inset-0 bg-[hsl(45,64%,53%)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-[hsl(0,0%,10%)] group-hover:text-[hsl(43,89%,38%)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Decorative line */}
                  <div className="w-16 h-0.5 bg-[hsl(45,64%,53%)] mb-5 group-hover:w-24 transition-all duration-500"></div>

                  <p className="text-[hsl(33,38%,21%)] mb-5 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="mb-5 pb-5 border-b border-[hsl(43,89%,38%)]/20">
                    <p className="text-[hsl(43,89%,38%)] font-bold text-xl">
                      {service.price}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[hsl(33,38%,21%)] text-sm font-medium">
                        <span className="text-[hsl(45,64%,53%)] mr-2 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block text-center bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] hover:from-[hsl(45,64%,53%)] hover:to-[hsl(45,64%,58%)] text-[hsl(0,0%,10%)] px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-xl"
                  >
                    Get Estimate
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Premium Dark Section */}
        <section className="py-24 md:py-32 bg-[hsl(0,0%,10%)] relative">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="text-center mb-16">
              <h6 className="text-[hsl(45,64%,53%)] mb-4 uppercase tracking-widest text-sm font-bold">Our Commitment</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Omega Contracting?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold relative">
                  <Wrench className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-[hsl(45,64%,53%)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-[hsl(45,64%,53%)] mb-4">
                  Expert Craftsmanship
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  25+ years of combined experience delivering quality workmanship on every project
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold relative">
                  <Home className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-[hsl(45,64%,53%)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-[hsl(45,64%,53%)] mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Fully licensed, bonded, and insured for your peace of mind and protection
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold relative">
                  <Building2 className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-[hsl(45,64%,53%)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-[hsl(45,64%,53%)] mb-4">
                  On-Time Delivery
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  We respect your time and complete projects on schedule and within budget
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold relative">
                  <PaintBucket className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-[hsl(45,64%,53%)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-[hsl(45,64%,53%)] mb-4">
                  Quality Materials
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  We use only premium materials and trusted suppliers for lasting results
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
