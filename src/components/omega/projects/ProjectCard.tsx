import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
}

export function ProjectCard({ imageSrc, title, category }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[hsl(217,91%,10%)]/0 group-hover:bg-[hsl(217,91%,10%)]/85 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-sm font-medium tracking-wide text-[hsl(187,92%,43%)]">{category}</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(187,92%,43%)] text-white">
        <p className="font-medium text-sm">{category}</p>
      </div>
    </div>
  );
}
