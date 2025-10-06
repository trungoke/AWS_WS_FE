'use client';

import Link from 'next/link';
import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Users, Star, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-primary-600/20 overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent" />

      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-700/5 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section with 3D Logo */}
          <div className="space-y-6 animate-fade-in-up">
            <Link href="/" className="inline-flex items-center group perspective-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative h-16 w-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-all duration-500 transform-3d group-hover:scale-110 group-hover:rotate-6">
                  <Dumbbell className="text-white h-8 w-8 group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-white tracking-tighter">VER</span>
                  <span className="text-4xl font-black text-gradient tracking-tighter">TEX</span>
                </div>
                <div className="text-sm text-gray-400 font-bold tracking-wider uppercase">Fitness Revolution</div>
              </div>
            </Link>

            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Transform your body and mind with the most <span className="text-primary-400 font-bold">elite fitness platform</span> connecting you to premium gyms and world-class trainers.
            </p>

            {/* Social Media with 3D Effects */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative perspective-1000"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-primary-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-12 h-12 rounded-xl glass-card border border-primary-600/30 flex items-center justify-center group-hover:border-primary-600 group-hover:shadow-glow transition-all duration-300 transform-3d group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with Hover Effects */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-white font-black text-xl mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/gyms', label: 'Find Gyms', icon: Dumbbell },
                { href: '/trainers', label: 'Find Trainers', icon: Users },
                { href: '/offers', label: 'Special Offers', icon: Star },
                { href: '/about', label: 'About Us', icon: Shield }
              ].map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                  >
                    <div className="w-0 group-hover:w-3 h-0.5 bg-primary-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full" />
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-125 group-hover:text-primary-500 transition-all duration-300" />
                    <span className="font-medium group-hover:font-bold transition-all duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-black text-xl mb-6 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              {[
                { href: '/help', label: 'Help Center' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                  >
                    <div className="w-0 group-hover:w-3 h-0.5 bg-primary-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full" />
                    <span className="font-medium group-hover:font-bold transition-all duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with 3D Cards */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-white font-black text-xl mb-6 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4">

              {/* Address Card */}
              <div className="group">
                <div className="glass-card p-4 rounded-xl border border-primary-600/20 group-hover:border-primary-600/40 group-hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      123 Fitness Street
                      <br />
                      Workout City, WC 12345
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group">
                <div className="glass-card p-4 rounded-xl border border-primary-600/20 group-hover:border-primary-600/40 group-hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-400 text-sm hover:text-primary-400 transition-colors font-medium"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group">
                <div className="glass-card p-4 rounded-xl border border-primary-600/20 group-hover:border-primary-600/40 group-hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <a
                      href="mailto:info@vertex.com"
                      className="text-gray-400 text-sm hover:text-primary-400 transition-colors font-medium"
                    >
                      info@vertex.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Epic Design */}
        <div className="mt-16 pt-8 border-t border-primary-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} <span className="text-gradient font-black text-base">VERTEX</span>. All rights reserved.
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex space-x-6">
                {['Terms', 'Privacy', 'Cookies'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors font-medium relative group"
                  >
                    <span>{item}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* Premium badge */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-600/30">
                <Shield className="w-4 h-4 text-primary-500" />
                <span className="text-xs text-primary-400 font-bold uppercase tracking-wider">Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Epic bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent animate-glow-pulse" />
    </footer>
  );
}

