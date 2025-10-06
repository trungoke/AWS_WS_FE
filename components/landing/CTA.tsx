import { Button } from '@/components/ui/Button';
import { ArrowRight, Users, Target, Shield, Zap, TrendingUp, Award } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-950"></div>
      <div className="absolute inset-0 opacity-10 bg-gym-pattern"></div>

      {/* Animated glow elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/30 border-2 border-primary-600/50 text-primary-300 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Join The Revolution
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">READY TO DOMINATE</span>
            <span className="block text-gradient mt-2">YOUR FITNESS GOALS?</span>
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join <span className="text-primary-400 font-bold">10,000+</span> warriors who have already started their transformation journey with Vertex.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="btn-primary btn-lg group text-lg px-12"
            >
              <Target className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Start Your Journey
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-outline btn-lg group text-lg px-12"
            >
              Explore Features
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="group relative">
            <div className="glass rounded-2xl p-8 border-2 border-primary-900/30 hover:border-primary-600/50 transition-all duration-300 glow-red-hover text-center">
              <div className="absolute inset-0 bg-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-900/50 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-5xl font-black text-white mb-2">10,000+</h3>
                <p className="text-gray-400 font-bold uppercase tracking-wider">Active Members</p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="glass rounded-2xl p-8 border-2 border-primary-900/30 hover:border-primary-600/50 transition-all duration-300 glow-red-hover text-center">
              <div className="absolute inset-0 bg-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-900/50 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-5xl font-black text-white mb-2">4.9/5</h3>
                <p className="text-gray-400 font-bold uppercase tracking-wider">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="glass rounded-2xl p-8 border-2 border-primary-900/30 hover:border-primary-600/50 transition-all duration-300 glow-red-hover text-center">
              <div className="absolute inset-0 bg-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-900/50 group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-5xl font-black text-white mb-2">100%</h3>
                <p className="text-gray-400 font-bold uppercase tracking-wider">Verified Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
    </section>
  );
}
