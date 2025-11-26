'use client';

import { useState } from 'react';
import { Header } from '@/components/omega/header/Header';
import { Footer } from '@/components/omega/footer/Footer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    description: '',
    contactPreference: 'email',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header - Premium Dark with Gold Accents */}
        <section className="relative bg-[hsl(0,0%,10%)] py-24 text-white overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 text-center relative z-10">
            <h6 className="text-[hsl(45,64%,53%)] mb-4 uppercase tracking-widest text-sm font-bold">Get In Touch</h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Ready to start your project? Get a free estimate today!
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>
        </section>

        {/* Contact Form & Info - Premium Cream Background */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(60,25%,98%)] to-[hsl(60,56%,94%)] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(43, 89%, 38%) 35px, hsl(43, 89%, 38%) 36px)',
          }}></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0,0%,10%)] mb-10">
                  Get In Touch
                </h2>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[hsl(0,0%,10%)] mb-2">Phone</h3>
                      <a href="tel:555-123-687" className="text-[hsl(43,89%,38%)] hover:text-[hsl(45,64%,53%)] text-xl font-bold transition-colors">
                        555-123-687
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[hsl(0,0%,10%)] mb-2">Email</h3>
                      <a href="mailto:info@omegacontracting.com" className="text-[hsl(33,38%,21%)] hover:text-[hsl(43,89%,38%)] transition-colors break-all">
                        info@omegacontracting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[hsl(0,0%,10%)] mb-2">Service Area</h3>
                      <p className="text-[hsl(33,38%,21%)] leading-relaxed">
                        Metro Atlanta, Georgia
                        <br />
                        Serving all surrounding areas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(60,56%,91%)] p-8 shadow-md border-2 border-[hsl(43,89%,38%)]/20 mb-8">
                  <h3 className="font-bold text-xl text-[hsl(0,0%,10%)] mb-6">Business Hours</h3>
                  <div className="space-y-3 text-[hsl(33,38%,21%)]">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-bold text-[hsl(0,0%,10%)]">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-bold text-[hsl(0,0%,10%)]">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-bold text-[hsl(0,0%,10%)]">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(0,0%,10%)] text-white p-8 border-2 border-[hsl(45,64%,53%)]/30 shadow-xl">
                  <h3 className="font-bold text-xl text-[hsl(45,64%,53%)] mb-5">Why Choose Omega?</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center"><span className="text-[hsl(45,64%,53%)] mr-2 font-bold">✓</span> Licensed, Bonded & Insured</li>
                    <li className="flex items-center"><span className="text-[hsl(45,64%,53%)] mr-2 font-bold">✓</span> 25+ Years Combined Experience</li>
                    <li className="flex items-center"><span className="text-[hsl(45,64%,53%)] mr-2 font-bold">✓</span> Free Estimates & Consultations</li>
                    <li className="flex items-center"><span className="text-[hsl(45,64%,53%)] mr-2 font-bold">✓</span> Quality Workmanship Guaranteed</li>
                    <li className="flex items-center"><span className="text-[hsl(45,64%,53%)] mr-2 font-bold">✓</span> Established 2015 in Metro Atlanta</li>
                  </ul>
                </div>
              </div>

              {/* Estimate Request Form */}
              <div className="bg-[hsl(60,56%,91%)] p-10 shadow-xl border-2 border-[hsl(43,89%,38%)]/20">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0,0%,10%)] mb-8">
                  Request an Estimate
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-8"></div>

                {submitted && (
                  <div className="mb-6 p-5 bg-[hsl(45,64%,53%)]/10 border-2 border-[hsl(45,64%,53%)] text-[hsl(33,38%,21%)] shadow-md">
                    <strong className="text-[hsl(43,89%,38%)]">Thank you!</strong> We&apos;ve received your request and will contact you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-bold text-[hsl(0,0%,10%)] mb-2 text-sm uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[hsl(43,89%,38%)]/30 bg-white text-[hsl(0,0%,10%)] focus:outline-none focus:border-[hsl(45,64%,53%)] focus:ring-2 focus:ring-[hsl(45,64%,53%)]/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-bold text-[hsl(0,0%,10%)] mb-2 text-sm uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[hsl(43,89%,38%)]/30 bg-white text-[hsl(0,0%,10%)] focus:outline-none focus:border-[hsl(45,64%,53%)] focus:ring-2 focus:ring-[hsl(45,64%,53%)]/20 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block font-bold text-[hsl(0,0%,10%)] mb-2 text-sm uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[hsl(43,89%,38%)]/30 bg-white text-[hsl(0,0%,10%)] focus:outline-none focus:border-[hsl(45,64%,53%)] focus:ring-2 focus:ring-[hsl(45,64%,53%)]/20 transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block font-bold text-[hsl(0,0%,10%)] mb-2 text-sm uppercase tracking-wider">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[hsl(43,89%,38%)]/30 bg-white text-[hsl(0,0%,10%)] focus:outline-none focus:border-[hsl(45,64%,53%)] focus:ring-2 focus:ring-[hsl(45,64%,53%)]/20 transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="addition">Home Addition</option>
                      <option value="roofing">Roofing Services</option>
                      <option value="commercial">Commercial Buildout</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budgetRange" className="block font-bold text-[hsl(0,0%,10%)] mb-2 text-sm uppercase tracking-wider">
                      Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[hsl(43,89%,38%)]/30 bg-white text-[hsl(0,0%,10%)] focus:outline-none focus:border-[hsl(45,64%,53%)] focus:ring-2 focus:ring-[hsl(45,64%,53%)]/20 transition-all"
                    >
                      <option value="">Select a range...</option>
                      <option value="5000-15000">$5,000 - $15,000</option>
                      <option value="15000-30000">$15,000 - $30,000</option>
                      <option value="30000-50000">$30,000 - $50,000</option>
                      <option value="50000-100000">$50,000 - $100,000</option>
                      <option value="100000+">$100,000+</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block font-bold text-[hsl(0,0%,10%)] mb-2 text-sm uppercase tracking-wider">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[hsl(43,89%,38%)]/30 bg-white text-[hsl(0,0%,10%)] focus:outline-none focus:border-[hsl(45,64%,53%)] focus:ring-2 focus:ring-[hsl(45,64%,53%)]/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block font-bold text-[hsl(0,0%,10%)] mb-3 text-sm uppercase tracking-wider">
                      Preferred Contact Method *
                    </label>
                    <div className="flex space-x-8">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="email"
                          checked={formData.contactPreference === 'email'}
                          onChange={handleChange}
                          className="w-5 h-5 text-[hsl(45,64%,53%)] border-[hsl(43,89%,38%)]/30 focus:ring-[hsl(45,64%,53%)]"
                        />
                        <span className="ml-2 text-[hsl(33,38%,21%)] font-medium">Email</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="phone"
                          checked={formData.contactPreference === 'phone'}
                          onChange={handleChange}
                          className="w-5 h-5 text-[hsl(45,64%,53%)] border-[hsl(43,89%,38%)]/30 focus:ring-[hsl(45,64%,53%)]"
                        />
                        <span className="ml-2 text-[hsl(33,38%,21%)] font-medium">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] hover:from-[hsl(45,64%,53%)] hover:to-[hsl(45,64%,58%)] text-[hsl(0,0%,10%)] px-8 py-5 font-bold uppercase text-base tracking-wider transition-all shadow-gold hover:shadow-xl flex items-center justify-center"
                  >
                    Submit Request
                    <Send className="ml-2 w-5 h-5" />
                  </button>

                  <p className="text-sm text-[hsl(33,38%,21%)] text-center font-light">
                    We&apos;ll respond to your request within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
