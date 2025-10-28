# NAZ XMedia - Digital Marketing Dominance

![NAZ XMedia](./src/assets/nazxmedia-logo.jpg)

**Engineered for Brands Built to Lead, Not Follow.**

Modern, high-performance digital marketing website built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful icon library

## 📦 Installation

```bash
# Install dependencies (using Bun, npm, or yarn)
bun install
# or
npm install
```

## 🛠️ Development

```bash
# Start development server (http://localhost:8080)
bun run dev
# or
npm run dev
```

## 🏗️ Build

```bash
# Build for production
bun run build
# or
npm run build

# Preview production build
bun run preview
```

## 📝 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `build:dev` - Build in development mode
- `preview` - Preview production build
- `lint` - Run ESLint
- `typecheck` - Run TypeScript type checking
- `format` - Format code with Prettier

## 📁 Project Structure

```
naz-xmedia/
├── src/
│   ├── assets/          # Images, logos, static files
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
│   ├── robots.txt
│   └── sitemap.xml
└── ...config files
```

## 🎨 Design System

The project uses a minimal black and white design system with:
- Pure black background (#000000)
- White text and accents
- Subtle gradients and glow effects
- Tech-inspired animations

All design tokens are defined in `src/index.css`.

## 🔧 Configuration

- **TypeScript**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Tailwind**: `tailwind.config.ts`
- **Vite**: `vite.config.ts`
- **ESLint**: `eslint.config.js`

## 🌐 SEO & Performance

- Optimized meta tags for social sharing
- Sitemap and robots.txt included
- Fast build times with Vite
- Code splitting and lazy loading
- Responsive design for all devices

## 📄 License

All Rights Reserved © 2025 NAZ XMedia

## 🤝 Contact

For inquiries, visit [nazxmedia.com](https://nazxmedia.com) or reach out through our contact page.

---

**Built with precision. Engineered for growth.**

## Local development (no external tools)

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Type-check and lint (optional)

npm run lint

# Build and preview
npm run build
npm run preview
```

## Deployment

You can deploy this Vite React app to any static host:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

For best results, serve the `dist/` folder produced by `npm run build`.
- Select the "Codespaces" tab.
