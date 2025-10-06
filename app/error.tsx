'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error caught by error boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-700/8 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full">
        <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-3d-lg border border-red-600/30">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-neon mx-auto">
              <AlertTriangle className="w-10 h-10 text-white animate-pulse" />
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl font-black text-white mb-3 tracking-tight">
                OOPS! <span className="text-red-500">SOMETHING WENT WRONG</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Don't worry, we're on it! Try refreshing the page or go back home.
              </p>
            </div>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-dark-800/50 rounded-xl p-4 text-left">
                <p className="text-red-400 text-sm font-mono break-all">
                  {error.message || 'Unknown error occurred'}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={reset}
                className="btn-primary shadow-glow flex-1 group"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Try Again
              </Button>
              <Link href="/" className="flex-1">
                <Button className="btn-outline w-full group">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

