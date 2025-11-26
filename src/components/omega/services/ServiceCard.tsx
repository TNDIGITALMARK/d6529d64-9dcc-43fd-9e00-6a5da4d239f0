import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative bg-[hsl(60,56%,91%)] p-10 text-center hover:shadow-xl transition-all duration-500 border-2 border-[hsl(43,89%,38%)]/20 hover:border-[hsl(45,64%,53%)] overflow-hidden">
      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[hsl(45,64%,53%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon with premium styling */}
      <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md">
        <Icon className="w-10 h-10 text-white" />
        {/* Gold glow effect */}
        <div className="absolute inset-0 bg-[hsl(45,64%,53%)] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-[hsl(0,0%,10%)] group-hover:text-[hsl(43,89%,38%)] transition-colors duration-300">
        {title}
      </h3>

      {/* Decorative line */}
      <div className="w-16 h-0.5 bg-[hsl(45,64%,53%)] mx-auto mb-5 group-hover:w-24 transition-all duration-500"></div>

      <p className="text-[hsl(33,38%,21%)] leading-relaxed font-light text-base">
        {description}
      </p>
    </div>
  );
}
