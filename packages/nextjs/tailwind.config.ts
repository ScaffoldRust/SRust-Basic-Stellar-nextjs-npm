module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#3b82f6",    // blue-500
          secondary: "#10b981",  // emerald-500
          accent: "#8b5cf6",     // violet-500
          neutral: "#1f2937",    // gray-800
        },
        boxShadow: {
          'primary': '0 10px 15px -3px rgba(59, 130, 246, 0.2), 0 4px 6px -2px rgba(59, 130, 246, 0.1)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#3b82f6",    // blue-500
            secondary: "#10b981",  // emerald-500
            accent: "#8b5cf6",     // violet-500
            neutral: "#1f2937",    // gray-800
            "base-100": "#ffffff", // white
            "base-200": "#f3f4f6", // gray-100
            "base-300": "#e5e7eb", // gray-200
          },
        },
      ],
    },
  };