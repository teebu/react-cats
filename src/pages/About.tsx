import React from 'react';
import Cat from '../helpers/Cat';

function About() {
  return (
    <div>
      <h1>About React Cats</h1>
      <div>
        <Cat />
      </div>
      <div className="intro" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>Overview</h2>
        <p>
          React Cats is a modern web application showcasing cat images from TheCatAPI.
          Built as a learning project to explore React patterns, modern web development
          practices, and cat appreciation.
        </p>

        <h3>Technologies Used</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li><strong>React 18.3</strong> - Component-based UI with hooks</li>
          <li><strong>TypeScript</strong> - Type-safe development</li>
          <li><strong>React Router v7</strong> - Client-side routing with HashRouter</li>
          <li><strong>Vite</strong> - Fast build tool and dev server</li>
          <li><strong>Vitest</strong> - Modern testing framework</li>
          <li><strong>ESLint & Prettier</strong> - Code quality and formatting</li>
        </ul>

        <h3>Features</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Infinite scroll cat gallery with lazy loading</li>
          <li>Progressive image loading with Intersection Observer</li>
          <li>Dark/light theme toggle with localStorage persistence</li>
          <li>Favorites system with localStorage sync</li>
          <li>Searchable cat breeds and facts databases</li>
          <li>Responsive design with mobile hamburger menu</li>
          <li>Accessibility features (ARIA labels, skip links, keyboard nav)</li>
          <li>Web Share API integration with clipboard fallback</li>
        </ul>

        <h3>Architecture Highlights</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Custom React hooks for reusable logic</li>
          <li>Context API for global state management</li>
          <li>Custom progressive image component (no deprecated APIs)</li>
          <li>CSS variables for theming</li>
          <li>TypeScript interfaces for type safety</li>
          <li>Component-driven development</li>
        </ul>

        <p style={{ marginTop: '2rem' }}>
          This project demonstrates modern React development patterns including hooks,
          context, lazy loading, infinite scroll, progressive enhancement, and accessibility best practices.
        </p>
      </div>
    </div>
  );
}

export default About;
