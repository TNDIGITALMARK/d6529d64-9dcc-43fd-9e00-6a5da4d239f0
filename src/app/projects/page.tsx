import { Header } from '@/components/omega/header/Header';
import { Footer } from '@/components/omega/footer/Footer';
import { ProjectCard } from '@/components/omega/projects/ProjectCard';
import { TestimonialCard } from '@/components/omega/testimonials/TestimonialCard';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[hsl(205,51%,36%)] py-16 text-white">
          <div className="container mx-auto max-w-[1200px] px-5 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
              Our Projects
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Showcasing our commitment to excellence through successful residential and commercial projects across Metro Atlanta
            </p>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-[hsl(0,0%,96%)]">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] mb-8">
              Residential Projects
            </h2>
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

            <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] mb-8">
              Commercial Projects
            </h2>
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

        {/* Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] text-center mb-12">
              Featured Case Studies
            </h2>

            <div className="space-y-12">
              {/* Case Study 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(205,51%,36%)] mb-4">
                    Modern Kitchen Renovation - Johnson Family
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Timeline:</strong> 4 Weeks</p>
                    <p><strong>Budget:</strong> $45,000</p>
                    <p><strong>Scope:</strong> Complete kitchen gut and renovation including new cabinetry, quartz countertops, high-end appliances, and luxury vinyl flooring.</p>
                    <p className="text-gray-600 italic">
                      &quot;Exceeded expectations on time and budget. The attention to detail was remarkable!&quot; - Sarah Mitchell
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] relative rounded overflow-hidden">
                  <img
                    src="/generated/project-kitchen.png"
                    alt="Kitchen Renovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold text-[hsl(205,51%,36%)] mb-4">
                    Master Bathroom Transformation - Davis Residence
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Timeline:</strong> 3 Weeks</p>
                    <p><strong>Budget:</strong> $32,000</p>
                    <p><strong>Scope:</strong> Luxury bathroom remodel with frameless shower, modern vanity, heated floors, and premium tile work.</p>
                    <p className="text-gray-600 italic">
                      &quot;Professional crew with quality workmanship throughout the entire project.&quot; - Mike Rodriguez
                    </p>
                  </div>
                </div>
                <div className="md:order-1 aspect-[4/3] relative rounded overflow-hidden">
                  <img
                    src="/generated/project-bathroom.png"
                    alt="Bathroom Renovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(205,51%,36%)] mb-4">
                    Office Space Buildout - Tech Startup
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Timeline:</strong> 8 Weeks</p>
                    <p><strong>Budget:</strong> $125,000</p>
                    <p><strong>Scope:</strong> Complete office space transformation including open floor plan, modern conference rooms, and employee amenities.</p>
                    <p className="text-gray-600 italic">
                      &quot;Excellent communication throughout the project. Our team loves the new space!&quot; - Jennifer Adams
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] relative rounded overflow-hidden">
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

        {/* Client Testimonials */}
        <section className="py-16 bg-[hsl(205,51%,36%)]">
          <div className="container mx-auto max-w-[1200px] px-5">
            <h2 className="text-3xl font-bold uppercase text-white text-center mb-12">
              What Our Clients Say
            </h2>
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
