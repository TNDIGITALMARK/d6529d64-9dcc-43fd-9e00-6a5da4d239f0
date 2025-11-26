import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 border border-[hsl(214,32%,91%)]">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(187,92%,43%)] mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[hsl(217,33%,17%)]">{title}</h3>
      <p className="text-[hsl(215,16%,47%)] leading-relaxed">{description}</p>
    </div>
  );
}
