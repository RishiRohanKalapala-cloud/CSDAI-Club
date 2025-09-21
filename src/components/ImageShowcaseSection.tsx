import React from "react";
import { ArrowRight } from "lucide-react"; // Icon for the interactive links

// Data for the showcase items - makes it easy to add or remove content
const showcaseItems = [
  {
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    title: "AI & Robotics Division",
    description: "Building intelligent systems and advanced robotics for the future.",
  },
  {
    image: "/background-section2.png", // Replace with another relevant image
    title: "Data Science Competitions",
    description: "Solving real-world problems and competing at a national level.",
  },
  {
    image: "/background-section1.png", // Replace with another relevant image
    title: "Community Workshops",
    description: "Collaborative learning sessions led by students and industry experts.",
  },
];

const ImageShowcaseSection = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-gray-50 relative" id="showcase">
      {/* Decorative background element */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pulse-100/30 rounded-full blur-3xl -z-0"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            A Glimpse Into Our World
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We are a vibrant community where passion for technology drives innovation. Explore some of our key areas and moments.
          </p>
        </div>
        
        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-96 cursor-pointer"
            >
              {/* Background Image with Hover Effect */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
                <h3 className="text-2xl font-bold font-display mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{item.description}</p>
                
                {/* Interactive Link (Appears on Hover) */}
                <a href="#" className="flex items-center text-pulse-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12 sm:mt-16">
           <a 
              href="#get-access" 
              className="inline-flex items-center justify-center group" 
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '1440px',
                color: '#FFFFFF',
                fontSize: '16px',
                lineHeight: '24px',
                padding: '16px 32px',
                border: '1px solid white',
              }}
            >
              Join Our Innovation Journey
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;