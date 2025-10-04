import Link from 'next/link';
import { Dumbbell, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-white border-t border-primary-900/30">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 animate-fade-in">
            <div className="flex items-center mb-6 group">
              <div className="h-12 w-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-lg shadow-primary-900/50 group-hover:shadow-xl group-hover:shadow-primary-900/70 transition-all duration-300 group-hover:scale-110">
                <Dumbbell className="text-white h-7 w-7 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="ml-3">
                <span className="text-2xl font-black text-white tracking-tight">EASY</span>
                <span className="text-2xl font-black text-primary-500 tracking-tight">BODY</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed font-medium">
              The ultimate platform connecting <span className="text-primary-500 font-bold">elite gyms</span> and <span className="text-primary-500 font-bold">world-class trainers</span> with warriors ready to transform their lives.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="group p-3 rounded-lg bg-secondary-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-900/50"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 rounded-lg bg-secondary-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-900/50"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 rounded-lg bg-secondary-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-900/50"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 rounded-lg bg-secondary-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-900/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-black text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gyms" className="group flex items-center text-gray-400 hover:text-primary-500 transition-colors font-semibold">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Find Gyms
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="group flex items-center text-gray-400 hover:text-primary-500 transition-colors font-semibold">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Find Trainers
                </Link>
              </li>
              <li>
                <Link href="/offers" className="group flex items-center text-gray-400 hover:text-primary-500 transition-colors font-semibold">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Browse Offers
                </Link>
              </li>
              <li>
                <Link href="/search" className="group flex items-center text-gray-400 hover:text-primary-500 transition-colors font-semibold">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-black text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@easybody.com" className="group flex items-center text-gray-400 hover:text-primary-500 transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">info@easybody.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="group flex items-center text-gray-400 hover:text-primary-500 transition-colors">
                  <Phone className="h-5 w-5 mr-3 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-5 w-5 mr-3 text-primary-500 mt-1 flex-shrink-0" />
                  <span className="font-semibold">123 Fitness Street<br />New York, NY 10001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0 font-medium">
              © 2024 <span className="text-primary-500 font-bold">EASY BODY</span>. All rights reserved. Built for champions.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-primary-500 text-sm transition-colors font-semibold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-primary-500 text-sm transition-colors font-semibold">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-primary-500 text-sm transition-colors font-semibold">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
