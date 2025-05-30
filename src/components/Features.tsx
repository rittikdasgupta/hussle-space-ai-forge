
import { Bot, Zap, Shield, BarChart3, MessageSquare, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Custom AI Agent Development",
      description: "We build sophisticated AI agents tailored to your business needs, understanding context and providing human-like responses."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Our expert team delivers fully functional AI agents quickly, integrating seamlessly with your existing systems."
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Integration",
      description: "We deploy your agents across websites, mobile apps, social media, and messaging platforms seamlessly."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Monitoring",
      description: "Track performance, monitor conversations, and optimize your agents with detailed insights and comprehensive metrics."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-grade security implementation with SOC 2 compliance, data encryption, and privacy controls you can trust."
    },
    {
      icon: Clock,
      title: "24/7 Support & Maintenance",
      description: "Your AI agents work around the clock with our continuous monitoring and support to ensure optimal performance."
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Professional AI Agent Services
            <span className="block bg-purple-gradient bg-clip-text text-transparent">Built for Your Success</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From simple chatbots to complex business automation, our team provides comprehensive 
            AI agent services that deliver real results for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-gradient rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Ready to get your custom AI agent?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 px-2 text-sm sm:text-base">
              Schedule a consultation with our experts to discuss your specific needs and get a custom quote.
            </p>
            <button 
              className="bg-purple-gradient text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
