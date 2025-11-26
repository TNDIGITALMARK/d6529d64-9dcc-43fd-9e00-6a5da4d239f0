import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
}

export function ProjectCard({ imageSrc, title, category }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white">
      <div className="aspect-[4/3] relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[hsl(205,51%,36%)]/0 group-hover:bg-[hsl(205,51%,36%)]/80 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
            <h4 className="text-xl font-bold uppercase mb-2">{title}</h4>
            <p className="text-sm uppercase tracking-wide">{category}</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[hsl(205,51%,36%)] text-white">
        <p className="font-semibold uppercase text-sm">{category}</p>
      </div>
    </div>
  );
}
