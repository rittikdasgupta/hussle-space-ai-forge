
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "Free consultation included",
    "30-day money-back guarantee",
    "Setup in under 2 weeks",
    "24/7 ongoing support"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-hero-gradient w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to revolutionize your business with
            <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              custom AI agents?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Join hundreds of businesses already using HussleSpace's custom AI agents to automate operations, 
            engage customers, and scale without limits.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white justify-center sm:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group w-full sm:w-auto"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="text-purple-200 text-xs sm:text-sm px-2">
            Trusted by 50+ businesses • SOC 2 Compliant • 99.9% Uptime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
