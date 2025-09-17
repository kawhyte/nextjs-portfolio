# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application (includes sitemap generation via next-sitemap)
- `npm start` - Start production server

### Environment Setup
Create a `.env.local` file with Contentful API credentials:
```
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

## Architecture

This is a Next.js portfolio and blog website that uses Contentful as a headless CMS. The architecture follows these patterns:

### Pages Structure (Pages Router)
- Uses Next.js Pages Router (not App Router)
- Main pages: `index.tsx` (home), `about.tsx`, `projects.tsx`, `blog.tsx`, `blogs.tsx`
- Dynamic routes: `blog/[slug].tsx`, `portfolio/[slug].tsx`
- Custom 404 page at `pages/404.tsx`

### Content Management
- **Contentful Integration**: All content (blog posts, portfolio items) is fetched from Contentful CMS
- **Static Generation**: Uses `getStaticProps` and `getStaticPaths` for content pages
- **Content Types**: Main types are `PortfolioItem` and `BlogPost` (defined in `lib/rich-text-types.tsx`)

### Component Organization
- **UI Components**: Shadcn/ui components in `components/ui/` (button, card, badge, separator)
- **Page Components**: Reusable sections like `Hero`, `AboutSection`, `BlogCards`, `PortfolioCards`
- **Layout**: Main layout wrapper in `components/Layout.tsx`
- **SEO**: Centralized SEO handling via `components/SeoHead.tsx`

### Styling & Assets
- **Tailwind CSS**: Custom configuration with extended theme, animations, and custom font sizes
- **SVG Handling**: Custom webpack config for SVG imports as React components via @svgr/webpack
- **Images**: Next.js Image component with remote patterns for Contentful and Cloudinary
- **Icons**: Mix of Lucide React and React Icons
- **Animations**: Custom Tailwind animations (wave, float, marquee-infinite)

### Key Configuration
- **TypeScript**: Configured with path aliases (`@/*` maps to root)
- **Next.js**: Custom webpack config for SVG handling, image optimization for external domains
- **Sitemap**: Auto-generated via next-sitemap on build
- **Styling**: Tailwind with custom screen sizes and extended theme

### Utilities
- `lib/utils.ts`: Contains `cn()` utility for combining Tailwind classes using clsx and tailwind-merge

## Development Notes

- Uses Pages Router, not App Router
- All content comes from Contentful - no local markdown files
- Images are hosted on Contentful CDN and Cloudinary
- SEO is handled per-page with custom meta tags
- Responsive design with custom Tailwind breakpoints (sm: 375px, md: 768px, lg: 1200px)