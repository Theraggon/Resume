# Ondřej Tesař - Personal Resume Website

A modern, responsive personal resume website built with Vue 3, Vite, and Tailwind CSS.

## Features

- Responsive design for all device sizes
- Dark mode toggle
- Smooth scrolling navigation
- SEO optimized with meta tags
- Downloadable PDF resume option
- Accessible design following WAI-ARIA best practices

## Technology Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v4
- **Routing**: Vue Router
- **Icons**: Material Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

### Building for Production

```
npm run build
```

### Deployment

The site is configured for deployment to Azure using GitHub Actions. See the GitHub workflows for details.

## Project Structure

- `src/components/` - Vue components organized by content section
- `src/assets/` - Static assets like images
- `public/` - Public files including downloadable resume PDF

## Customization

- Update content in individual component files
- Modify colors and styling through Tailwind configuration
- Replace PDF file in public folder with your own resume

## License

MIT
