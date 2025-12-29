# VitalAssess - AI Assessment Platform Landing Page

A premium SaaS landing website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## Project Structure

```
Vitalassess/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles with Tailwind
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── case-studies/
│   │   └── page.tsx        # Case studies page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx     # Site footer
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── Card.tsx       # Card component
│       ├── Container.tsx  # Container component
│       └── Section.tsx    # Section wrapper component
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .eslintrc.json
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

- **Primary Color**: Electric Blue (#0066FF)
- **Secondary Colors**: White, Dark Gray (#1F2937)
- **Typography**: Inter font family
- **Style**: Clean, modern, enterprise, minimal

## Pages

- `/` - Homepage with hero, features, and CTA sections
- `/pricing` - Pricing plans (Starter, Professional, Enterprise)
- `/case-studies` - Customer success stories
- `/contact` - Contact form and information

## Components

### UI Components
- **Button** - Primary, secondary, and outline variants with multiple sizes
- **Card** - Container component with optional hover effects
- **Container** - Responsive container with size variants
- **Section** - Section wrapper with background options

### Layout Components
- **Header** - Navigation bar with logo and menu
- **Footer** - Site footer with links and company information

