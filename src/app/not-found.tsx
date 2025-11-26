import Link from 'next/link';
import { Header } from '@/components/omega/header/Header';
import { Footer } from '@/components/omega/footer/Footer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-[hsl(0,0%,96%)] py-16">
        <div className="text-center max-w-2xl px-5">
          <h1 className="text-6xl font-extrabold text-[hsl(205,51%,36%)] mb-4">404</h1>
          <h2 className="text-3xl font-bold uppercase text-[hsl(205,51%,36%)] mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-[hsl(28,92%,54%)] hover:bg-[hsl(28,92%,60%)] text-white px-10 py-4 rounded font-bold uppercase text-base tracking-wide transition-all shadow-lg"
          >
            <Home className="mr-2 w-5 h-5" />
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}