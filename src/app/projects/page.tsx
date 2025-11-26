import { Header } from '@/components/omega/header/Header';
import { Footer } from '@/components/omega/footer/Footer';
import { ProjectCard } from '@/components/omega/projects/ProjectCard';
import { TestimonialCard } from '@/components/omega/testimonials/TestimonialCard';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header - Premium Dark with Gold Accents */}
        <section className="relative bg-[hsl(0,0%,10%)] py-24 text-white overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 text-center relative z-10">
            <h6 className="text-[hsl(45,64%,53%)] mb-4 uppercase tracking-widest text-sm font-bold">Portfolio</h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Showcasing our commitment to excellence through successful residential and commercial projects across Metro Atlanta
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>
        </section>

        {/* Project Gallery - Premium Cream Background */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(60,25%,98%)] to-[hsl(60,56%,94%)] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(43, 89%, 38%) 35px, hsl(43, 89%, 38%) 36px)',
          }}></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h6 className="text-[hsl(43,89%,38%)] mb-3 uppercase tracking-widest text-sm font-bold">Residential Work</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
                Residential Projects
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <ProjectCard
                imageSrc="/generated/project-kitchen.png"
                title="Modern Kitchen Renovation"
                category="Kitchen Remodeling"
              />
              <ProjectCard
                imageSrc="/generated/project-bathroom.png"
                title="Master Bathroom Transformation"
                category="Bathroom Renovation"
              />
              <ProjectCard
                imageSrc="/generated/project-flooring.png"
                title="Hardwood Floor Installation"
                category="Flooring"
              />
            </div>

            <div className="text-center mb-12 mt-20">
              <h6 className="text-[hsl(43,89%,38%)] mb-3 uppercase tracking-widest text-sm font-bold">Commercial Work</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
                Commercial Projects
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                imageSrc="/generated/project-commercial.png"
                title="Office Space Buildout"
                category="Commercial Construction"
              />
              <ProjectCard
                imageSrc="/generated/project-commercial.png"
                title="Retail Renovation"
                category="Commercial Projects"
              />
              <ProjectCard
                imageSrc="/generated/project-commercial.png"
                title="Corporate Office"
                category="Commercial Construction"
              />
            </div>
          </div>
        </section>

        {/* Case Studies - Premium Dark Section */}
        <section className="py-24 md:py-32 bg-[hsl(0,0%,10%)] relative">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(45,64%,53%)] to-transparent"></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="text-center mb-16">
              <h6 className="text-[hsl(45,64%,53%)] mb-4 uppercase tracking-widest text-sm font-bold">Success Stories</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto"></div>
            </div>

            <div className="space-y-16">
              {/* Case Study 1 */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-[hsl(45,64%,53%)] mb-6">
                    Modern Kitchen Renovation - Johnson Family
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p><strong className="text-white">Timeline:</strong> 4 Weeks</p>
                    <p><strong className="text-white">Budget:</strong> $45,000</p>
                    <p><strong className="text-white">Scope:</strong> Complete kitchen gut and renovation including new cabinetry, quartz countertops, high-end appliances, and luxury vinyl flooring.</p>
                    <div className="mt-6 p-5 bg-[hsl(40,29%,13%)] border-l-4 border-[hsl(45,64%,53%)]">
                      <p className="text-white/90 italic leading-relaxed">
                        &quot;Exceeded expectations on time and budget. The attention to detail was remarkable!&quot;
                      </p>
                      <p className="text-[hsl(45,64%,53%)] font-bold mt-2">- Sarah Mitchell</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] relative overflow-hidden border-4 border-[hsl(43,89%,38%)]/30 shadow-xl">
                  <img
                    src="/generated/project-kitchen.png"
                    alt="Kitchen Renovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="md:order-2">
                  <h3 className="text-3xl font-bold text-[hsl(45,64%,53%)] mb-6">
                    Master Bathroom Transformation - Davis Residence
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p><strong className="text-white">Timeline:</strong> 3 Weeks</p>
                    <p><strong className="text-white">Budget:</strong> $32,000</p>
                    <p><strong className="text-white">Scope:</strong> Luxury bathroom remodel with frameless shower, modern vanity, heated floors, and premium tile work.</p>
                    <div className="mt-6 p-5 bg-[hsl(40,29%,13%)] border-l-4 border-[hsl(45,64%,53%)]">
                      <p className="text-white/90 italic leading-relaxed">
                        &quot;Professional crew with quality workmanship throughout the entire project.&quot;
                      </p>
                      <p className="text-[hsl(45,64%,53%)] font-bold mt-2">- Mike Rodriguez</p>
                    </div>
                  </div>
                </div>
                <div className="md:order-1 aspect-[4/3] relative overflow-hidden border-4 border-[hsl(43,89%,38%)]/30 shadow-xl">
                  <img
                    src="/generated/project-bathroom.png"
                    alt="Bathroom Renovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-[hsl(45,64%,53%)] mb-6">
                    Office Space Buildout - Tech Startup
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p><strong className="text-white">Timeline:</strong> 8 Weeks</p>
                    <p><strong className="text-white">Budget:</strong> $125,000</p>
                    <p><strong className="text-white">Scope:</strong> Complete office space transformation including open floor plan, modern conference rooms, and employee amenities.</p>
                    <div className="mt-6 p-5 bg-[hsl(40,29%,13%)] border-l-4 border-[hsl(45,64%,53%)]">
                      <p className="text-white/90 italic leading-relaxed">
                        &quot;Excellent communication throughout the project. Our team loves the new space!&quot;
                      </p>
                      <p className="text-[hsl(45,64%,53%)] font-bold mt-2">- Jennifer Adams</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] relative overflow-hidden border-4 border-[hsl(43,89%,38%)]/30 shadow-xl">
                  <img
                    src="/generated/project-commercial.png"
                    alt="Commercial Buildout"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials - Premium Cream Background */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(60,25%,98%)] to-[hsl(60,56%,94%)] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(43, 89%, 38%) 35px, hsl(43, 89%, 38%) 36px)',
          }}></div>

          <div className="container mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h6 className="text-[hsl(43,89%,38%)] mb-4 uppercase tracking-widest text-sm font-bold">Testimonials</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(0,0%,10%)] mb-6">
                What Our Clients Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <TestimonialCard
                quote="Excellent communication throughout the project. The team was responsive, professional, and delivered exceptional results. Highly recommend!"
                author="Jennifer Adams"
                project="Office Buildout"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
