
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient w-full">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Professional AI Agent Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Build Powerful
            <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              AI Agents
            </span>
            For Your Business
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our expert team creates custom AI agents that automate your business processes, 
            engage customers 24/7, and scale your operations without limits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-purple-200 text-sm">
            <p className="mb-4">Trusted by 50+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Microsoft</div>
              <div className="text-white font-semibold">Salesforce</div>
              <div className="text-white font-semibold">HubSpot</div>
              <div className="text-white font-semibold">Slack</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 animate-scale-in">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="bg-gray-900 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-primary-400" />
                  <span className="text-white font-medium">AI Agent Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Customer Support Agent - Online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Sales Assistant - Processing 12 leads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Content Creator - Generating posts</span>
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
