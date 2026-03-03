This project is a marketing landing page for a premium dog nutrition product. It showcases the product's unique selling points, nutritional benefits, and scientific backing through a clean, engaging user interface. The design focuses on converting visitors into customers through compelling copy, statistical data, and clear calls-to-action.

<img 
    src="https://res.cloudinary.com/dhdcmkuhx/image/upload/v1772523422/Screenshot_2026-03-03_at_08.36.03_z4sgfs.png" 
    alt="homepage" 
    width="100%" 
    height="auto"
>

🛠 Tech Stack
React 18 - UI Library

TypeScript - Type Safety

Tailwind CSS - Styling

Vite - Build Tool

ESLint - Code Linting

📁 Project Structure
gemcommerce-technical-task/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images and media files
│   │   │   └── images/      # All image assets
│   │   ├── components/      # React components
│   │   │   ├── Card.tsx     # Card section component
│   │   │   ├── Feature.tsx  # Reusable feature item
│   │   │   ├── Feeds.tsx    # Feeds section
│   │   │   ├── Foundation.tsx # Foundation section with stats
│   │   │   └── Hero.tsx     # Hero section with CTA
│   │   ├── types/           # TypeScript type definitions
│   │   │   └── index.ts     # Shared interfaces
│   │   ├── utils/           # Utility functions
│   │   │   └── index.ts     # Asset exports
│   │   ├── App.tsx          # Main app component
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # Entry point
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   └── tailwind.config.js

🧩 Components
Hero Component
The main landing section featuring:

Headline highlighting product differentiation

Four feature cards in a circular layout

Central product image

Primary CTA button

Payment method icons

Money-back guarantee badge

Foundation Component
A data-driven section showcasing:

Scientific approach to dog nutrition

Statistical highlights (97%, 84%, 92%)

Key points with visual indicators

Secondary CTA button

Product image with branded border

Card Component
Visual section featuring:

Large product image

Health benefit headline

Scientific backing copy

Customer testimonial statistic (91%)

Feeds Component
Educational section highlighting:

Prebiotic benefits

Gut health information

Supporting product image

Scientific explanation

Feature Component (Reusable)
A reusable component for displaying product features:

Customizable background color

Icon display

Title and description

Consistent styling across all features

🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn
Installation
Navigate to the client directory:

bash
cd client
Install dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npm run dev
# or
yarn dev
Open your browser and visit http://localhost:5173

📜 Available Scripts
Script	Description
npm run dev	Starts development server
npm run build	Builds for production
npm run lint	Runs ESLint
npm run preview	Previews production build

✨ Features
Fully Responsive - Optimized for mobile, tablet, and desktop

TypeScript Support - Full type safety throughout the application

Reusable Components - Feature component with TypeScript interface

Asset Management - Centralized asset exports for easy maintenance

Tailwind CSS - Utility-first styling with custom configuration

Modern Design - Clean, professional layout with proper spacing and typography

🎨 Styling Approach
The project uses Tailwind CSS with:

Custom color scheme (orange accents for CTAs)

Responsive design patterns

Consistent spacing and typography

Flexbox and Grid layouts

Custom shadows and rounded corners

📱 Responsive Design
The landing page is fully responsive with breakpoints:

Mobile: Default styles

Tablet: sm: prefix

Desktop: lg: and md: prefixes

🔧 Configuration Files
tailwind.config.js - Tailwind CSS configuration

postcss.config.js - PostCSS plugins setup

eslint.config.js - ESLint rules and settings

tsconfig.json - TypeScript compiler options

vite.config.ts - Vite build configuration

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a pull request

📄 License
This project is created for a technical assessment and is not licensed for commercial use.