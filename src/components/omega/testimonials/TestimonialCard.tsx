import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  project: string;
}

export function TestimonialCard({ quote, author, project }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 h-full flex flex-col rounded-lg shadow-md border border-[hsl(214,32%,91%)]">
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[hsl(187,92%,43%)] text-[hsl(187,92%,43%)]" />
        ))}
      </div>

      {/* Quote */}
      <div className="mb-6 flex-grow">
        <p className="text-[hsl(217,33%,17%)] leading-relaxed">&quot;{quote}&quot;</p>
      </div>

      {/* Author Info */}
      <div className="pt-4 border-t border-[hsl(214,32%,91%)]">
        <p className="font-semibold text-[hsl(217,91%,60%)] mb-1">{author}</p>
        <p className="text-sm text-[hsl(215,16%,47%)] font-medium tracking-wide">{project}</p>
      </div>
    </div>
  );
}
