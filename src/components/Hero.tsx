
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient w-full pt-14 sm:pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">Professional AI Agent Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            We Build Powerful
            <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              AI Agents
            </span>
            For Your Business
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Our expert team creates custom AI agents that automate your business processes, 
            engage customers 24/7, and scale your operations without limits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group w-full sm:w-auto"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-purple-200 text-xs sm:text-sm px-4">
            <p className="mb-3 sm:mb-4">Trusted by 50+ businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="text-white font-semibold text-xs sm:text-sm">Microsoft</div>
              <div className="text-white font-semibold text-xs sm:text-sm">Salesforce</div>
              <div className="text-white font-semibold text-xs sm:text-sm">HubSpot</div>
              <div className="text-white font-semibold text-xs sm:text-sm">Slack</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-12 sm:mt-16 animate-scale-in px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 p-3 sm:p-6">
              <div className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 text-left">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-primary-400" />
                  <span className="text-white font-medium text-sm sm:text-base">AI Agent Dashboard</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">Customer Support Agent - Online</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">Sales Assistant - Processing 12 leads</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">Content Creator - Generating posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
