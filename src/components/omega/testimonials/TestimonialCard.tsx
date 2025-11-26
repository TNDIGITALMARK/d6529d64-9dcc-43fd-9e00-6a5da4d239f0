import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  project: string;
}

export function TestimonialCard({ quote, author, project }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 h-full flex flex-col">
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[hsl(28,92%,54%)] text-[hsl(28,92%,54%)]" />
        ))}
      </div>

      {/* Quote */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-700 italic leading-relaxed">&quot;{quote}&quot;</p>
      </div>

      {/* Author Info */}
      <div className="pt-4 border-t border-gray-200">
        <p className="font-bold text-[hsl(205,51%,36%)] mb-1">{author}</p>
        <p className="text-sm text-gray-600 uppercase tracking-wide">{project}</p>
      </div>
    </div>
  );
}
