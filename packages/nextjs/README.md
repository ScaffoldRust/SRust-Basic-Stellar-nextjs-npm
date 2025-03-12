# Next.js Application

This is a Next.js application that serves as the frontend for the project. It is built using modern web technologies, including React, shadcn/ui, and optimized npm dependency management.

---

## Technologies Used

- **[Next.js](https://nextjs.org)**
- **[React](https://react.dev)**
- **[shadcn/ui](https://ui.shadcn.com)**

---

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm (v9 or higher recommended)

### Installation

1. Navigate to the `nextjs` folder:

2. Install dependencies:

```bash
npm install
```

3. Run the application

```bash
npm run dev
```

## Project Structure

The Next.js application is structured as follows:

```
nextjs/
├── app/                  # Main application directory
├── components/          # UI components for the project
├── lib/                 # Utility functions and helpers
├── node_modules/        # Installed dependencies
├── public/              # Static assets like images and fonts
├── .gitignore           # Specifies files and folders that should be ignored by Git
├── components.json      # Configuration for Shadcn components
├── next-env.d.ts        # TypeScript environment definitions
├── next.config.ts       # Next.js configuration file
├── package-lock.json    # Lock file for npm dependencies
├── package.json         # Project metadata, dependencies, and scripts
├── postcss.config.mjs   # Configuration file for PostCSS, used for styling
├── README.md            # Documentation file providing an overview of the project
├── tsconfig.json        # TypeScript configuration file 
```

Documentation for how to customize the home page
# Home Page Customization Guide

This document provides instructions on how to customize the home page template for your application.

## Basic Customization

The simplest way to customize the home page is by editing the theme configuration file:

```typescript
// packages/nextjs/config/theme.ts
```

This file contains various settings that control the appearance and content of your home page, including:

- App name and description
- Color scheme
- Hero section content
- Debug contracts section content
- Footer text

## Adding New Sections

To add a new section to the home page:

1. Create a new component in the `components` directory
2. Import and add the component to the `index.tsx` file
3. Add any necessary configuration to the `theme.ts` file

Example:

```jsx
// packages/nextjs/components/NewSection.tsx
import React from "react";
import { theme } from "~~/config/theme";

export const NewSection = () => {
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{theme.newSection.title}</h2>
        {/* Content here */}
      </div>
    </section>
  );
};
```

Then update your `index.tsx`:

```jsx
// packages/nextjs/pages/index.tsx
import { NewSection } from "~~/components/NewSection";

// Add the component to your layout
<main className="flex-grow">
  <HomeHero />
  <DebugContracts />
  <NewSection />  {/* New section added here */}
</main>
```

## Styling Customization

### Using Tailwind CSS

This template uses Tailwind CSS for styling. You can customize the appearance by:

1. Editing the `tailwind.config.js` file to change the color palette and other design tokens
2. Adding custom CSS classes to components

### Using DaisyUI (if applicable)

If your project uses DaisyUI, you can customize the theme by editing the `daisyui` section in `tailwind.config.js`.

## Layout Customization

To change the overall layout of the home page:

1. Edit the `index.tsx` file to rearrange, add, or remove sections
2. Modify component JSX structures to change their internal layouts

## Advanced Customization

For more advanced customization:

1. Create new components or modify existing ones in the `components` directory
2. Extend the theme configuration with new sections and options
3. Add custom CSS in a separate stylesheet if needed

## Best Practices

- Keep the theme configuration as the primary source for content and styling changes
- Create reusable components for repetitive UI elements
- Use responsive design classes to ensure the page looks good on all devices
- Maintain a consistent style throughout your application
