
import { Bot, Zap, Shield, BarChart3, MessageSquare, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent AI Agents",
      description: "Build sophisticated AI agents that understand context, learn from interactions, and provide human-like responses."
    },
    {
      icon: Zap,
      title: "No-Code Builder",
      description: "Create powerful AI agents without writing a single line of code. Drag, drop, and deploy in minutes."
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Support",
      description: "Deploy your agents across websites, mobile apps, social media, and messaging platforms seamlessly."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance, monitor conversations, and optimize your agents with detailed insights and metrics."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance, data encryption, and privacy controls you can trust."
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description: "Your AI agents work around the clock, handling customer queries and business tasks while you sleep."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to build 
            <span className="bg-purple-gradient bg-clip-text text-transparent"> exceptional AI agents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple chatbots to complex business automation, HussleSpace provides all the tools 
            you need to create AI agents that deliver real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to build your first AI agent?
            </h3>
            <p className="text-gray-600 mb-6">
              Start with our free plan and scale as you grow. No credit card required.
            </p>
            <button className="bg-purple-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
