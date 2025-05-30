
import { ArrowRight, Settings, MessageCircle, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      title: "Design & Configure",
      description: "Use our intuitive no-code builder to design your AI agent's personality, knowledge base, and workflows.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Train & Test",
      description: "Train your agent with your data, test conversations, and refine responses to match your brand voice.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart,
      title: "Deploy & Scale",
      description: "Launch your agent across multiple channels and watch it handle thousands of conversations simultaneously.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building powerful AI agents has never been easier. Follow these simple steps 
            to create agents that transform your business operations.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
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
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See it in action
            </h3>
            <p className="text-gray-600">
              Watch how easy it is to create and deploy an AI agent in under 5 minutes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm">HussleSpace Agent Builder</span>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <div className="text-green-400 mb-2">$ Creating AI agent...</div>
                <div className="text-gray-300 mb-1">✓ Initializing knowledge base</div>
                <div className="text-gray-300 mb-1">✓ Training conversational model</div>
                <div className="text-gray-300 mb-1">✓ Configuring response templates</div>
                <div className="text-green-400">✓ Agent ready for deployment!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
