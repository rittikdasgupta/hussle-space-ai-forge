
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
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            How we work
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our proven process ensures you get powerful AI agents that transform your business operations 
            and deliver measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 sm:space-y-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block flex-shrink-0">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              See our work in action
            </h3>
            <p className="text-gray-600 px-2 text-sm sm:text-base">
              Watch how our custom AI agents deliver results for businesses like yours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 text-white">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm">HussleSpace Agent Dashboard</span>
              </div>
              <div className="bg-gray-800 rounded p-3 sm:p-4">
                <div className="text-green-400 mb-2 text-sm sm:text-base">$ AI Agent Performance Report</div>
                <div className="text-gray-300 mb-1 text-xs sm:text-sm">✓ Customer satisfaction: 95%</div>
                <div className="text-gray-300 mb-1 text-xs sm:text-sm">✓ Response time: 0.3 seconds</div>
                <div className="text-gray-300 mb-1 text-xs sm:text-sm">✓ Cost reduction: 60%</div>
                <div className="text-green-400 text-xs sm:text-sm">✓ ROI achieved in 30 days!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
