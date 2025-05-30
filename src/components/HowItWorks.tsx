
import { ArrowRight, Settings, MessageCircle, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      title: "Consultation & Planning",
      description: "We analyze your business needs, identify automation opportunities, and design a custom AI agent strategy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Development & Training",
      description: "Our experts build and train your AI agent with your data, ensuring it matches your brand voice and business requirements.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart,
      title: "Deployment & Optimization",
      description: "We deploy your agent across your channels and continuously monitor and optimize performance for maximum results.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How we work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures you get powerful AI agents that transform your business operations 
            and deliver measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See our work in action
            </h3>
            <p className="text-gray-600">
              Watch how our custom AI agents deliver results for businesses like yours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm">HussleSpace Agent Dashboard</span>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <div className="text-green-400 mb-2">$ AI Agent Performance Report</div>
                <div className="text-gray-300 mb-1">✓ Customer satisfaction: 95%</div>
                <div className="text-gray-300 mb-1">✓ Response time: 0.3 seconds</div>
                <div className="text-gray-300 mb-1">✓ Cost reduction: 60%</div>
                <div className="text-green-400">✓ ROI achieved in 30 days!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
