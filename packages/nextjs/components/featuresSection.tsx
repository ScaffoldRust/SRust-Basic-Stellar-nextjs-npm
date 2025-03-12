import { ChartLine, Code, Globe, Shield } from "lucide-react";
import React from "react";


export const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe size={32} className="text-secondary" />,
      title: "Web3 Integration",
      description: "Seamlessly connect with Ethereum and EVM-compatible blockchains through our intuitive interface."
    },
    {
      icon: <Shield size={32} className="text-secondary" />,
      title: "Secure Transactions",
      description: "Built with security-first architecture to ensure your smart contract interactions are safe and reliable."
    },
    {
      icon: <ChartLine size={32} className="text-secondary" />,
      title: "Real-time Monitoring",
      description: "Track contract events, gas usage, and transaction status with our comprehensive monitoring tools."
    },
    {
      icon: <Code size={32} className="text-secondary" />,
      title: "Developer Friendly",
      description: "Designed for developers with powerful debugging tools and extensive documentation."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Powerful Web3 <span className="text-primary">Features</span>
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Everything you need to build and interact with decentralized applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-base-100 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral text-neutral-content rounded-lg text-center">
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-lg">Transactions Processed</div>
          </div>
          <div className="p-8 bg-neutral text-neutral-content rounded-lg text-center">
            <div className="text-4xl font-bold text-primary/30 mb-2">500+</div>
            <div className="text-lg">Smart Contracts Deployed</div>
          </div>
          <div className="p-8 bg-neutral text-neutral-content rounded-lg text-center">
            <div className="text-4xl font-bold text-primary/30 mb-2">5,000+</div>
            <div className="text-lg">Active Developers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
