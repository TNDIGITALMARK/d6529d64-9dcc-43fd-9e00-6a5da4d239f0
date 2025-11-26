import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  project: string;
}

export function TestimonialCard({ quote, author, project }: TestimonialCardProps) {
  return (
    <div className="group relative bg-[hsl(40,29%,13%)] p-10 h-full flex flex-col shadow-xl border-2 border-[hsl(43,89%,38%)]/30 hover:border-[hsl(45,64%,53%)] transition-all duration-500 overflow-hidden">
      {/* Decorative corner element */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[hsl(45,64%,53%)]/10 to-transparent"></div>

      {/* Premium quote mark */}
      <div className="text-[hsl(45,64%,53%)] text-7xl font-serif leading-none mb-4 opacity-30">&ldquo;</div>

      {/* Stars */}
      <div className="flex space-x-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[hsl(45,64%,53%)] text-[hsl(45,64%,53%)]" />
        ))}
      </div>

      {/* Quote */}
      <div className="mb-8 flex-grow relative z-10">
        <p className="text-white/90 leading-relaxed text-lg font-light italic">
          {quote}
        </p>
      </div>

      {/* Gold divider */}
      <div className="w-16 h-px bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-6 group-hover:w-24 transition-all duration-500"></div>

      {/* Author Info */}
      <div className="relative z-10">
        <p className="font-bold text-[hsl(45,64%,53%)] text-lg mb-1">{author}</p>
        <p className="text-sm text-white/60 font-semibold tracking-widest uppercase">{project}</p>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(45, 64%, 53%) 10px, hsl(45, 64%, 53%) 11px)',
        }}></div>
      </div>
    </div>
  );
}
