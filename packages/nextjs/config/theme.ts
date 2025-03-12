export const theme = {
    // App information
    appName: "Scaffold Rust",
    appDescription: "A powerful platform for building and interacting with decentralized applications",
    
    // Colors and styling (these will work with TailwindCSS/DaisyUI if your project uses them)
    colors: {
      primary: "#3b82f6",    // blue-500
      secondary: "#10b981",  // emerald-500
      accent: "#8b5cf6",     // violet-500
      neutral: "#1f2937",    // gray-800
      "base-100": "#ffffff", // white
      "base-200": "#f3f4f6", // gray-100
      "base-300": "#e5e7eb", // gray-200
    },
    
    // Home page sections
    homePage: {
      heroTitle: "Build the Decentralized Future",
      heroSubtitle: "A powerful foundation for your blockchain applications with seamless Web3 integration.",
      heroButtonText: "Start Building",
      heroSecondaryButtonText: "View Documentation",
      
      debugSectionTitle: "Interact With Your Smart Contracts",
      debugSectionCards: [
        {
          title: "Deploy & Debug",
          description: "Deploy your smart contracts to any EVM-compatible blockchain and interact with them in real-time.",
          buttonText: "Debug",
          buttonLink: "/debug",
        },
        {
          title: "Monitor Transactions",
          description: "Track your transactions, gas usage, and contract events with our comprehensive monitoring tools.",
          buttonText: "Monitor",
          buttonLink: "#",
        },
        {
          title: "Secure Your Contracts",
          description: "Ensure your smart contracts are secure and optimized with our audit and testing tools.",
          buttonText: "Learn More",
          buttonLink: "#",
        },
      ],
    },
    
    // Footer
    footerText: "© {year} Scaffold Rust. All rights reserved.",
  };