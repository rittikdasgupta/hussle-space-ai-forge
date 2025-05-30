
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
    <section className="py-20 bg-hero-gradient w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to revolutionize your business with
            <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              custom AI agents?
            </span>
          </h2>

          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using HussleSpace's custom AI agents to automate operations, 
            engage customers, and scale without limits.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="text-purple-200 text-sm">
            Trusted by 50+ businesses • SOC 2 Compliant • 99.9% Uptime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
