# 🐱 React Cats

> A modern React application for cat lovers - explore random cat images, browse breeds, and discover fun cat facts!

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?logo=github)](https://teebu.github.io/react-cats)
[![Vercel](https://img.shields.io/badge/Vercel-Live-success?logo=vercel)](https://cats.yuriy.net)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live Deployments:**
- GitHub Pages: [https://teebu.github.io/react-cats](https://teebu.github.io/react-cats)
- Vercel: [https://cats.yuriy.net](https://cats.yuriy.net)

---

## ✨ Features

- 🖼️ **Cat Image Gallery** - Browse beautiful random cat images with progressive loading for smooth UX
- 🔄 **Auto-Refreshing Carousel** - Home page automatically refreshes with new cats every 15 seconds
- 🐱 **Breed Explorer** - Discover 30+ cat breeds with detailed information including origin and patterns
- 💡 **Cat Facts** - Learn interesting tidbits about cats (bite-sized at 140 characters max)
- 🎨 **Clean, Responsive UI** - Works beautifully on desktop and mobile devices
- ⚡ **Lightning-Fast Performance** - Powered by Vite for instant hot module replacement
- 🧭 **Smooth Navigation** - Seamless routing with React Router v7

---

## 🛠️ Tech Stack

### Core Framework
- **React 18.3** - Modern React with hooks and concurrent features
- **React Router v7** - Latest routing with enhanced data loading
- **Vite 7.3** - Next-generation frontend tooling for blazing fast builds

### UI/UX Libraries
- **react-progressive-graceful-image** - Progressive image loading with placeholders
- **react-interval-rerender** - Automatic component re-rendering on intervals
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
│   ├── pages/           # Route components (Home, Cats, Breeds, Facts, About)
│   ├── components/      # Reusable UI components (ImageHolder, FancyList, etc.)
│   ├── images/          # Static images and assets
│   ├── index.css        # Global styles
│   └── index.jsx        # Application entry point
├── public/              # Static assets (favicon, logo, etc.)
├── build/               # Production build output
└── vite.config.js       # Vite configuration
```

### Key Pages

- **Home (`/`)** - Auto-refreshing cat image carousel
- **Cats (`/cats`)** - Grid of 15 random cat images
- **Cat Detail (`/cat/:id`)** - Individual cat image view
- **Breeds (`/breeds`)** - Catalog of 30 cat breeds
- **Facts (`/facts`)** - Collection of 15 random cat facts
- **About (`/about`)** - Project information

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

- **Migration Success**: Successfully migrated from Create React App to Vite, eliminating all security vulnerabilities and improving build performance
- **Modern React Patterns**: Uses hooks, functional components, and React 18 features throughout
- **Progressive Enhancement**: Images load progressively with graceful fallbacks
- **Custom Utilities**: Hand-crafted aspect ratio calculations for optimal image display
- **HashRouter**: Uses hash-based routing for GitHub Pages compatibility
- **Zero Vulnerabilities**: No known security issues in dependencies

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
