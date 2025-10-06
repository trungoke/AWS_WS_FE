'use client';

import { Button } from '@/components/ui/Button';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-700/8 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="space-y-8">
          {/* 404 Text */}
          <div className="perspective-2000">
            <h1 className="text-[200px] md:text-[300px] font-black leading-none tracking-tighter">
              <span className="text-gradient opacity-20">404</span>
            </h1>
          </div>

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-neon mx-auto -mt-32">
            <Search className="w-12 h-12 text-white" />
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              PAGE NOT <span className="text-gradient">FOUND</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md mx-auto">
              Looks like this page doesn't exist or has been moved. Let's get you back on track!
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/">
              <Button className="btn-primary shadow-glow px-8 group">
                <Home className="w-5 h-5 mr-2" />
                <span className="font-black">GO HOME</span>
              </Button>
            </Link>
            <Button
              onClick={handleGoBack}
              className="btn-outline px-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-black">GO BACK</span>
            </Button>
          </div>

          {/* Popular Links */}
          <div className="pt-12 border-t border-dark-700/50">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-4">
              Popular Pages
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { href: '/gyms', label: 'Find Gyms' },
                { href: '/trainers', label: 'Find Trainers' },
                { href: '/offers', label: 'Special Offers' },
                { href: '/auth/login', label: 'Sign In' },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button variant="ghost" className="btn-ghost text-sm">
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
