import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(28,92%,54%)] mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold uppercase mb-3 text-[hsl(205,51%,36%)]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
