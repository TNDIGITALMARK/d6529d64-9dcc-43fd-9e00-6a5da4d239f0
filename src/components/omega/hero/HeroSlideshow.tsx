'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/generated/hero-construction.png',
  '/generated/project-kitchen.png',
  '/generated/project-bathroom.png',
  '/generated/project-flooring.png',
  '/generated/project-commercial.png',
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Omega Contracting project ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,26,26,0.92)] to-[rgba(44,36,22,0.85)]" />
    </div>
  );
}
