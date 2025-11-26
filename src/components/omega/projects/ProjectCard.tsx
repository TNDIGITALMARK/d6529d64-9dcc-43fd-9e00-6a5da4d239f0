import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
}

export function ProjectCard({ imageSrc, title, category }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-[hsl(40,29%,13%)] shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[hsl(43,89%,38%)]/30">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay with premium gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,10%)]/95 via-[hsl(0,0%,10%)]/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Gold divider */}
          <div className="w-16 h-px bg-[hsl(45,64%,53%)] mb-4"></div>

          <h4 className="text-2xl font-bold mb-3 text-white text-center">{title}</h4>

          <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] mb-3"></div>

          <p className="text-sm font-semibold tracking-widest text-[hsl(45,64%,53%)] uppercase">
            {category}
          </p>
        </div>
      </div>

      {/* Bottom bar with category */}
      <div className="p-4 bg-gradient-to-r from-[hsl(43,89%,38%)] to-[hsl(45,64%,53%)] relative overflow-hidden group-hover:from-[hsl(45,64%,53%)] group-hover:to-[hsl(45,64%,58%)] transition-all duration-500">
        <p className="font-bold text-sm text-[hsl(0,0%,10%)] uppercase tracking-wider text-center">
          {category}
        </p>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </div>
  );
}
