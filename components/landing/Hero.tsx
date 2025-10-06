'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Search, Dumbbell, MapPin, TrendingUp, Zap, ArrowRight, Star, Users } from 'lucide-react';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Advanced Animated Background with Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

        {/* 3D Floating Orbs with Parallax */}
        <div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] animate-float"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-primary-700/15 rounded-full blur-[140px] animate-float"
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary-800/10 rounded-full blur-[100px] animate-float"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center bottom'
        }} />
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Premium Badge with 3D Effect */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card shadow-neon animate-fade-in-up border border-primary-600/30">
            <div className="relative">
              <Zap className="w-5 h-5 text-primary-500 animate-glow-pulse" />
              <div className="absolute inset-0 blur-lg bg-primary-500 opacity-50" />
            </div>
            <span className="text-sm font-black text-white uppercase tracking-wider">
              #1 <span className="text-gradient">Fitness Platform</span>
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
          </div>

          {/* Epic Hero Title with 3D Effect */}
          <div className="perspective-2000">
            <h1
              className="hero-title animate-fade-in-up"
              style={{
                animationDelay: '0.1s',
                transform: `rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
              }}
            >
              TRANSFORM YOUR
              <br />
              <span className="relative inline-block">
                <span className="text-neon animate-glow">BODY & MIND</span>
                <div className="absolute inset-0 blur-2xl bg-primary-600 opacity-30 animate-glow-pulse" />
              </span>
            </h1>
          </div>

          {/* Subtitle with Glassmorphism */}
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="hero-subtitle mb-4">
              Discover <span className="text-primary-400 font-bold">premium gyms</span> and <span className="text-primary-400 font-bold">elite personal trainers</span> near you.
            </p>
            <p className="text-lg text-gray-400">
              Start your fitness journey today with <span className="text-gradient font-black text-xl">Vertex</span>
            </p>
          </div>

          {/* 3D Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 py-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Dumbbell, number: '1000+', label: 'Premium Gyms', color: 'from-primary-600 to-primary-800' },
              { icon: Users, number: '500+', label: 'Elite Trainers', color: 'from-primary-700 to-primary-900' },
              { icon: Star, number: '10K+', label: 'Active Members', color: 'from-primary-600 to-primary-800' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative perspective-1000"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="relative glass-card px-8 py-6 transform-3d transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl`} />
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-800/20 mb-3 shadow-glow">
                      <stat.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="text-4xl font-black text-white mb-1 text-gradient">{stat.number}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Search Bar with 3D Effect */}
          <div className="max-w-3xl mx-auto animate-fade-in-up perspective-1000" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 animate-glow-pulse" />
              <div className="relative glass-card p-2 shadow-3d-lg">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Enter your location..."
                      className="w-full h-16 pl-14 pr-5 bg-dark-900/80 backdrop-blur-xl border-2 border-dark-700/50 rounded-2xl text-white text-lg placeholder:text-gray-500 focus:outline-none focus:border-primary-600/50 focus:shadow-glow transition-all duration-300"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button className="btn-primary btn-lg group/btn px-10 shadow-neon">
                    <Search className="w-5 h-5 mr-2 group-hover/btn:rotate-90 transition-transform duration-300" />
                    <span>Search Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons with Advanced Effects */}
          <div className="flex flex-wrap justify-center gap-6 pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/gyms">
              <Button className="btn-primary btn-lg group/gym px-10 shadow-neon-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover/gym:opacity-100 transition-opacity duration-500" />
                <Dumbbell className="w-6 h-6 mr-3 relative z-10 group-hover/gym:rotate-180 transition-transform duration-500" />
                <span className="relative z-10 text-lg">Find Gyms</span>
                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/gym:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/trainers">
              <Button className="btn-outline btn-lg group/trainer px-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-0 group-hover/trainer:opacity-100 transition-opacity duration-500" />
                <TrendingUp className="w-6 h-6 mr-3 relative z-10 group-hover/trainer:scale-110 transition-transform duration-300" />
                <span className="relative z-10 text-lg group-hover/trainer:text-white transition-colors">Find Trainers</span>
                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/trainer:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Floating 3D Icons */}
          <div className="absolute top-20 left-[5%] animate-float hidden lg:block opacity-20 hover:opacity-100 transition-opacity">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-600/30 to-primary-800/30 backdrop-blur-xl border border-primary-600/30 flex items-center justify-center shadow-neon transform-3d hover:scale-125 transition-all duration-500">
              <Dumbbell className="w-12 h-12 text-primary-500" />
            </div>
          </div>

          <div className="absolute bottom-32 right-[5%] animate-float hidden lg:block opacity-20 hover:opacity-100 transition-opacity" style={{ animationDelay: '1s' }}>
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-700/30 to-primary-900/30 backdrop-blur-xl border border-primary-700/30 flex items-center justify-center shadow-neon transform-3d hover:scale-125 transition-all duration-500">
              <Zap className="w-14 h-14 text-primary-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Animated Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent animate-border-flow" />
    </div>
  );
}

