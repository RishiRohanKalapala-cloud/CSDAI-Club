import React from "react";
import { Zap, BrainCircuit, Users, Award } from "lucide-react"; // Using icons for visual appeal

const SpecsSection = () => {
  // Array for feature highlights for easier management
  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-pulse-500" />,
      title: "Hands-On Projects",
      description: "Engage in real-world projects that build practical skills in AI and data science."
    },
    {
      icon: <Zap className="w-6 h-6 text-pulse-500" />,
      title: "Cutting-Edge Workshops",
      description: "Learn the latest technologies and frameworks from industry experts."
    },
    {
      icon: <Users className="w-6 h-6 text-pulse-500" />,
      title: "Industry Partnerships",
      description: "Connect with leading tech companies for internships and collaborations."
    },
    {
      icon: <Award className="w-6 h-6 text-pulse-500" />,
      title: "Innovative Research",
      description: "Explore new frontiers in AI and contribute to meaningful research."
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gray-50 relative overflow-hidden" id="specifications">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-0"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header with badge */}
        <div className="max-w-xl mb-10 md:mb-16">
          <div className="pulse-chip mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
            Pioneering the Future of Tech at CMRIT
          </h2>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text mask image */}
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
              <span className="bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
                CSDAI Club empowers students by bridging the gap between academic theory and real-world application in AI and data science.
              </span>
            </h3>
          </div>

          {/* Right side: Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pulse-100 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;