# 🐱 React Cats

> A modern React application for cat lovers - explore random cat images, browse breeds, and discover fun cat facts!

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?logo=github)](https://teebu.github.io/react-cats)
[![Vercel](https://img.shields.io/badge/Vercel-Live-success?logo=vercel)](https://cats.yuriy.net)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live Deployments:**
- GitHub Pages: [https://teebu.github.io/react-cats](https://teebu.github.io/react-cats)
- Vercel: [https://cats.yuriy.net](https://cats.yuriy.net)

---

## ✨ Features

### Core Features
- 🖼️ **Cat Image Gallery** - Browse beautiful random cat images with infinite scroll
- 🔄 **Auto-Refreshing Carousel** - Home page automatically refreshes with new cats every 15 seconds
- 🐱 **Breed Explorer** - Discover 30+ cat breeds with detailed information including origin and patterns
- 💡 **Cat Facts** - Learn interesting tidbits about cats (bite-sized at 140 characters max)
- ❤️ **Favorites System** - Save your favorite cat images with localStorage persistence
- 🔍 **Search & Filter** - Search through breeds and facts with real-time filtering

### UI/UX Enhancements
- 🎨 **Dark/Light Theme** - Toggle between themes with smooth transitions and localStorage persistence
- 🌊 **Glassmorphism Design** - Modern floating navigation with frosted glass effect on scroll
- 📱 **Fully Responsive** - Mobile-optimized with hamburger menu and touch-friendly interactions
- 🖼️ **Progressive Image Loading** - Custom implementation with Intersection Observer for optimal performance
- ⚡ **Lightning-Fast Performance** - React 19 with Vite for instant hot module replacement
- 🎯 **Smooth Animations** - Hover effects, transitions, and loading states
- ♿ **Accessibility** - ARIA labels, skip links, and keyboard navigation support

### Technical Features
- 🔄 **Infinite Scroll** - Automatic loading of more images as you scroll
- 📤 **Web Share API** - Share cat images with native share functionality (clipboard fallback)
- 🧭 **Smooth Navigation** - Seamless routing with React Router v7
- 💾 **LocalStorage Integration** - Persistent favorites and theme preferences
- 🎨 **CSS Variables** - Dynamic theming with CSS custom properties

---

## 🛠️ Tech Stack

### Core Framework
- **React 19.0** - Latest React with enhanced performance and new features
- **TypeScript 5.7** - Full type safety throughout the application
- **React Router v7** - Latest routing with enhanced data loading
- **Vite 7.3** - Next-generation frontend tooling for blazing fast builds

### Development & Quality
- **ESLint 10** - Modern linting with strict rules
- **Prettier** - Consistent code formatting
- **Vitest** - Modern testing framework
- **GitHub Actions** - Automated CI/CD pipeline

### UI/UX
- **Custom Progressive Image Component** - Built with Intersection Observer API (no deprecated APIs)
- **CSS Variables** - Dynamic theming system
- **Glassmorphism Effects** - Modern backdrop-filter for frosted glass UI
- **Lodash** - Utility functions for elegant data transformation

### APIs
- **[The Cat API](https://thecatapi.com/)** - High-quality cat images and breed data
- **[Cat Fact Ninja](https://catfact.ninja/)** - Random cat facts and breed information

### Development & Deployment
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Static site hosting
- **Vercel** - Edge-optimized deployment

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 22+** (recommended for optimal compatibility)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/teebu/react-cats.git
   cd react-cats
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will open automatically at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm start` | Alias for `npm run dev` |
| `npm run build` | Build optimized production bundle to `./build` |
| `npm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
react-cats/
├── src/
│   ├── pages/           # Route componeats, Breeds, Facts, About, Favorites)
│   ├── components/      # Reusable UI components (ProgressiveImage, ThemeToggle, etc.)
│   ├── context/         # React Context providers (FavoritesContext, ThemeContext)
│   ├── hooks/           # Custom React hooks (useCatApi, useInfiniteScroll, etc.)
│   ├── helpers/         # Utility components (ImageHolder, Nav, Cat, etc.)
│   ├── styles/          # CSS modules and stylesheets
│   ├── images/          # Static images and assets
│   ├── index.css        # Global styles and CSS variables
│   └── index.tsx        # Application entry point (TypeScript)
├── public/              # Static assets (favicon, logo, cat_logo.png)
├── build/               # Production build output
├── .beads/              # Issue tracking with beads
└── vite.config.ts       # Vite configuration (TypeScript)
```

### Key Pages

- **Home (`/`)** - Auto-refreshing cat image carousel with smooth animations
- **Cats (`/cats`)** - Infinite scroll gallery with progressive image loading
- **Cat Detail (`/cat/:id`)** - Individual cat image view with share functionality
- **Breeds (`/breeds`)** - Searchable catalog of 30+ cat breeds
- **Facts (`/facts`)** - Searchable collection of interesting cat facts
- **Favorites (`/favorites`)** - Your saved favorite cat images
- **About (`/about`)** - Comprehensive project information and tech stack

---

## 🔌 API Integration

This app uses two free public APIs (no authentication required):

### The Cat API
```
https://api.thecatapi.com/v1/images/search?limit=15&order=Rand&size=med
https://api.thecatapi.com/v1/images/{id}
```

### Cat Fact Ninja
```
https://catfact.ninja/breeds?limit=30
https://catfact.ninja/facts?max_length=140&limit=15
```

**Security Note:** This project previously included a hardcoded API key in client-side code. It has been removed as The Cat API supports unauthenticated requests for basic endpoints, which is sufficient for this application's needs.

---

## 💻 Development

### Local Development

1. Make changes to files in `src/`
2. Vite's HMR will automatically reflect changes in the browser
3. Build and preview before deploying:
   ```bash
   npm run build
   npm run preview
   ```

### Build Process

The project uses Vite for building:
- **Development**: Fast refresh with instant HMR
- **Production**: Optimized bundle with tree-shaking and minification
- **Output**: Static files in `./build` directory

### Deployment

**GitHub Pages (Automated)**
- Pushes to `master` trigger GitHub Actions workflow
- Builds app and deploys to `gh-pages` branch
- Live at: [https://teebu.github.io/react-cats](https://teebu.github.io/react-cats)

**Vercel (Automated)**
- Connected to GitHub repository
- Auto-deploys on every push to `master`
- Live at: [https://cats.yuriy.net](https://cats.yuriy.net)

---

## 🎯 Technical Highlights

### Architecture & Performance
- **React 19 Upgrade**: Successfully upgraded to React 19 with enhanced performance and new features
- **TypeScript Migration**: Full TypeScript coverage for type safety and better developer experience
- **Custom Hooks**: Reusable logic with `useCatApi`, `useInfiniteScroll`, `useScrollPosition`, `useLocalStorage`
- **Context API**: Global state management for favorites and theme without external dependencies
- **Progressive Enhancement**: Custom progressive image component using Intersection Observer (no deprecated APIs)
- **Optimized Builds**: Vite with code splitting, tree-shaking, and bundle analysis

### UI/UX Excellence
- **Glassmorphism**: Modern frosted glass effect on floating navigation using `backdrop-filter`
- **Dark Mode**: Complete dark theme support with CSS variables and smooth transitions
- **Responsive Design**: Mobile-first approach with hamburger menu and touch-friendly interactions
- **Accessibility**: ARIA labels, keyboard navigation, skip links, and semantic HTML
- **Smooth Animations**: CSS transitions for hover effects, loading states, and page transitions

### Code Quality
- **Zero Vulnerabilities**: No known security issues in dependencies
- **Modern React Patterns**: Hooks, functional components, and React 19 features throughout
- **HashRouter**: Uses hash-based routing for GitHub Pages compatibility
- **Issue Tracking**: Integrated beads for multi-session development and persistent memory

---

## 🔧 Custom Hooks & Components

### Custom Hooks
- **`useCatApi`** - Fetch random cat images from The Cat API
- **`useCatBreeds`** - Load and manage cat breed data
- **`useInfiniteScroll`** - Implement infinite scrolling functionality
- **`useScrollPosition`** - Track scroll position for floating header effect
- **`useLocalStorage`** - Persist data to localStorage with React state sync
- **`useFetch`** - Generic fetch hook with loading and error states
- **`useInterval`** - Declarative interval hook for auto-refresh

### Custom Components
- **`ProgressiveImage`** - Lazy loading images with Intersection Observer
- **`ThemeToggle`** - Dark/light mode switcher with sun/moon icons
- **`FavoriteButton`** - Heart icon button for favoriting images
- **`SearchBar`** - Reusable search input with debouncing
- **`ErrorBoundary`** - Graceful error handling for React components
- **`Skeleton`** - Loading placeholder components

---

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:
- 🐛 Report bugs by opening an issue
- 💡 Suggest new features or improvements
- 🔧 Submit pull requests

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Cat images and breed data provided by [The Cat API](https://thecatapi.com/)
- Cat facts provided by [Cat Fact Ninja](https://catfact.ninja/)
- Built with ❤️ using React and Vite

---

**Built by [teebu](https://github.com/teebu)** | **Version 0.1.1**
