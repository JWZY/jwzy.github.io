# Javan Wang Portfolio Website

A personal portfolio website showcasing product design work, built with Next.js and featuring a comprehensive UI component library.

## 🏗️ Repository Structure

### Modern Next.js Application
```
├── app/                          # Next.js 13+ App Router
│   ├── globals.css              # Global styles with Tailwind CSS
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main page (renders BentoGrid)
├── components/                   # React components
│   ├── kokonutui/               # Custom UI components
│   │   └── bento-grid.tsx       # Main portfolio grid component
│   ├── ui/                      # Shadcn/ui component library (50+ components)
│   │   ├── accordion.tsx        # Collapsible content sections
│   │   ├── alert-dialog.tsx     # Modal dialogs for alerts
│   │   ├── button.tsx           # Button component with variants
│   │   ├── card.tsx             # Card layout component
│   │   ├── form.tsx             # Form handling components
│   │   ├── input.tsx            # Input field components
│   │   ├── sidebar.tsx          # Navigation sidebar (23KB - complex)
│   │   └── [40+ other components] # Complete UI component library
│   └── theme-provider.tsx       # Dark/light theme management
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile device detection
│   └── use-toast.ts            # Toast notification system
├── lib/                         # Utility functions
│   └── utils.ts                # Tailwind CSS class utilities
├── public/                      # Static assets
│   ├── placeholder-logo.png    # Logo placeholder
│   ├── placeholder-user.jpg    # User avatar placeholder
│   └── [other placeholders]    # Various placeholder images
└── styles/                      # Additional stylesheets
```

### Legacy Vanilla HTML Site
```
vanillaHTMLSite/                 # Original portfolio site
├── index.html                   # Main portfolio page
├── about.html                   # About page
├── [project].html              # Individual project pages:
│   ├── clio.html               # Clio App Ecosystem project
│   ├── roadmunk.html           # Roadmunk Feature Prioritization
│   ├── chiron.html             # Intel/UW Chiron project
│   ├── noom.html               # Noom design system
│   ├── stem.html               # Microsoft Education STEM project
│   ├── hololens.html           # Microsoft HoloLens research
│   ├── uken.html               # Uken Games project
│   └── play.html               # Play project
├── header.html                 # Shared header component
├── footer.html                 # Shared footer component
├── server.py                   # Python development server
├── app/                        # Assets and resources
├── .htaccess                   # Apache server configuration
├── 404.html                    # Custom 404 error page
└── CNAME                       # Domain configuration
```

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn/ui** - High-quality component library built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting
- **PNPM** - Fast package manager

### Key Features
- **Dark/Light Theme** - Theme switching with next-themes
- **Responsive Design** - Mobile-first responsive layout
- **Component Library** - 50+ pre-built UI components
- **Form Handling** - React Hook Form with Zod validation
- **Toast Notifications** - Sonner toast system
- **Charts & Data Viz** - Recharts integration

## 📱 Components Overview

### Main Components
- **BentoGrid** (`components/kokonutui/bento-grid.tsx`) - Portfolio showcase grid
- **ThemeProvider** - Dark/light mode management

### UI Component Library (50+ components)
The repository includes a comprehensive UI library with:
- **Layout**: Cards, Grids, Sidebars, Resizable panels
- **Navigation**: Breadcrumbs, Menus, Tabs, Pagination
- **Forms**: Inputs, Selects, Checkboxes, Form validation
- **Feedback**: Alerts, Toasts, Progress bars, Skeletons
- **Overlays**: Dialogs, Popovers, Tooltips, Sheets
- **Data Display**: Tables, Charts, Calendars, Carousels

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PNPM (recommended) or npm

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Development Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure Details

### Current Implementation
The main application (`app/page.tsx`) renders a `BentoGrid` component that displays portfolio items in a modern card-based layout. The grid is responsive and includes hover effects, status badges, and interactive elements.

### Legacy Site
The `vanillaHTMLSite` directory contains the original portfolio website with individual HTML pages for each project, showcasing work at companies like:
- Clio (App Ecosystem)
- Roadmunk (Feature Prioritization)
- Intel/UW (Chiron project)
- Noom (Design System)
- Microsoft (STEM Education, HoloLens)

## 🎨 Design System

The repository implements a comprehensive design system with:
- **Color Palette** - Semantic color tokens
- **Typography** - Consistent font scales and weights
- **Spacing** - Standardized spacing system
- **Components** - Reusable, accessible UI components
- **Themes** - Dark and light mode support

## 📄 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - Shadcn/ui configuration
- `package.json` - Dependencies and scripts

## 🌐 Deployment

The site appears to be configured for deployment with:
- Custom domain support (CNAME file)
- Apache server configuration (.htaccess)
- Static asset optimization
- SEO meta tags and Open Graph support

---

*This portfolio showcases the work of Javan Wang, a Toronto-based product designer with experience at companies like Clio, Microsoft, Intel, and Noom.* 