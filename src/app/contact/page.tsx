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
        {/* Page Header */}
        <section className="bg-[hsl(205,51%,36%)] py-16 text-white">
          <div className="container mx-auto max-w-[1200px] px-5 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to start your project? Get a free estimate today!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-[hsl(0,0%,96%)]">
          <div className="container mx-auto max-w-[1200px] px-5">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(28,92%,54%)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[hsl(205,51%,36%)] mb-1">Phone</h3>
                      <a href="tel:555-123-687" className="text-gray-700 hover:text-[hsl(28,92%,54%)] text-lg">
                        555-123-687
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(28,92%,54%)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[hsl(205,51%,36%)] mb-1">Email</h3>
                      <a href="mailto:info@omegacontracting.com" className="text-gray-700 hover:text-[hsl(28,92%,54%)]">
                        info@omegacontracting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(28,92%,54%)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[hsl(205,51%,36%)] mb-1">Service Area</h3>
                      <p className="text-gray-700">
                        Metro Atlanta, Georgia
                        <br />
                        Serving all surrounding areas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded shadow-sm">
                  <h3 className="font-bold text-xl text-[hsl(205,51%,36%)] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[hsl(205,51%,36%)] text-white p-6 rounded">
                  <h3 className="font-bold text-xl mb-3">Why Choose Omega?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Licensed, Bonded & Insured</li>
                    <li>✓ 25+ Years Combined Experience</li>
                    <li>✓ Free Estimates & Consultations</li>
                    <li>✓ Quality Workmanship Guaranteed</li>
                    <li>✓ Established 2015 in Metro Atlanta</li>
                  </ul>
                </div>
              </div>

              {/* Estimate Request Form */}
              <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] mb-6">
                  Request an Estimate
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800">
                    <strong>Thank you!</strong> We&apos;ve received your request and will contact you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(205,51%,36%)] focus:ring-2 focus:ring-[hsl(205,51%,36%)]/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(205,51%,36%)] focus:ring-2 focus:ring-[hsl(205,51%,36%)]/20"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(205,51%,36%)] focus:ring-2 focus:ring-[hsl(205,51%,36%)]/20"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block font-semibold text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(205,51%,36%)] focus:ring-2 focus:ring-[hsl(205,51%,36%)]/20"
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
                    <label htmlFor="budgetRange" className="block font-semibold text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(205,51%,36%)] focus:ring-2 focus:ring-[hsl(205,51%,36%)]/20"
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
                    <label htmlFor="description" className="block font-semibold text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(205,51%,36%)] focus:ring-2 focus:ring-[hsl(205,51%,36%)]/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="email"
                          checked={formData.contactPreference === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4 text-[hsl(205,51%,36%)] border-gray-300 focus:ring-[hsl(205,51%,36%)]"
                        />
                        <span className="ml-2 text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="phone"
                          checked={formData.contactPreference === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4 text-[hsl(205,51%,36%)] border-gray-300 focus:ring-[hsl(205,51%,36%)]"
                        />
                        <span className="ml-2 text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[hsl(28,92%,54%)] hover:bg-[hsl(28,92%,60%)] text-white px-8 py-4 rounded font-bold uppercase text-base tracking-wide transition-all shadow-lg flex items-center justify-center"
                  >
                    Submit Request
                    <Send className="ml-2 w-5 h-5" />
                  </button>

                  <p className="text-sm text-gray-600 text-center">
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
