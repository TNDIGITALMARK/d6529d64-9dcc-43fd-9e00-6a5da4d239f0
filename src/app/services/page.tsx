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
        {/* Page Header */}
        <section className="bg-[hsl(205,51%,36%)] py-16 text-white">
          <div className="container mx-auto max-w-[1200px] px-5 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive construction and renovation services for residential and commercial projects
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-[hsl(0,0%,96%)]">
          <div className="container mx-auto max-w-[1200px] px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded shadow-md hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(28,92%,54%)] mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase mb-3 text-[hsl(205,51%,36%)]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-[hsl(28,92%,54%)] font-bold text-lg">
                      {service.price}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <span className="text-[hsl(28,92%,54%)] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block text-center bg-[hsl(205,51%,36%)] hover:bg-[hsl(205,51%,30%)] text-white px-6 py-3 rounded font-bold uppercase text-sm tracking-wide transition-all"
                  >
                    Get Estimate
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] text-center mb-12">
              Why Choose Omega Contracting?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(28,92%,54%)] mb-4">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(205,51%,36%)] mb-3">
                  Expert Craftsmanship
                </h3>
                <p className="text-gray-600">
                  25+ years of combined experience delivering quality workmanship on every project
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(28,92%,54%)] mb-4">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(205,51%,36%)] mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for your peace of mind and protection
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(28,92%,54%)] mb-4">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(205,51%,36%)] mb-3">
                  On-Time Delivery
                </h3>
                <p className="text-gray-600">
                  We respect your time and complete projects on schedule and within budget
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(28,92%,54%)] mb-4">
                  <PaintBucket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(205,51%,36%)] mb-3">
                  Quality Materials
                </h3>
                <p className="text-gray-600">
                  We use only premium materials and trusted suppliers for lasting results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(205,51%,36%)] text-white text-center">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl font-bold uppercase mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Let&apos;s bring your vision to life!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[hsl(28,92%,54%)] hover:bg-[hsl(28,92%,60%)] text-white px-10 py-4 rounded font-bold uppercase text-base tracking-wide transition-all shadow-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:555-123-687"
                className="bg-white hover:bg-gray-100 text-[hsl(205,51%,36%)] px-10 py-4 rounded font-bold uppercase text-base tracking-wide transition-all shadow-lg"
              >
                Call: 555-123-687
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
