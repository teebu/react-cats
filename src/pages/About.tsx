import React from 'react';
import Cat from '../helpers/Cat';

function About() {
  return (
    <div style={{ padding: '0 1rem' }}>
      <h1>About React Cats</h1>
      <div style={{ margin: '2rem 0' }}>
        <Cat />
      </div>
      <div className="intro" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Overview</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          React Cats is a modern web application showcasing cat images from TheCatAPI.
          Built as a learning project to explore React patterns, modern web development
          practices, and cat appreciation.
        </p>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Technologies Used</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block', marginBottom: '1.5rem', lineHeight: '2' }}>
          <li><strong>React 19.0</strong> - Latest React with enhanced performance</li>
          <li><strong>TypeScript 5.7</strong> - Full type safety throughout the app</li>
          <li><strong>React Router v7</strong> - Client-side routing with HashRouter</li>
          <li><strong>Vite 7.3</strong> - Fast build tool and dev server</li>
          <li><strong>Vitest</strong> - Modern testing framework</li>
          <li><strong>ESLint 10 & Prettier</strong> - Code quality and formatting</li>
        </ul>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Features</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block', marginBottom: '1.5rem', lineHeight: '2' }}>
          <li>Infinite scroll cat gallery with lazy loading</li>
          <li>Progressive image loading with Intersection Observer</li>
          <li>Dark/light theme toggle with localStorage persistence</li>
          <li>Favorites system with localStorage sync</li>
          <li>Searchable cat breeds and facts databases</li>
          <li>Responsive design with mobile hamburger menu</li>
          <li>Accessibility features (ARIA labels, skip links, keyboard nav)</li>
          <li>Web Share API integration with clipboard fallback</li>
        </ul>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Architecture Highlights</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block', marginBottom: '1.5rem', lineHeight: '2' }}>
          <li>Custom React hooks for reusable logic</li>
          <li>Context API for global state management</li>
          <li>Custom progressive image component (no deprecated APIs)</li>
          <li>CSS variables for theming</li>
          <li>TypeScript interfaces for type safety</li>
          <li>Component-driven development</li>
        </ul>

        <p style={{ marginTop: '2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
          This project demonstrates modern React development patterns including hooks,
          context, lazy loading, infinite scroll, progressive enhancement, and accessibility best practices.
        </p>
      </div>
    </div>
  );
}

export default About;
