import React from 'react';
import Cat from '../helpers/Cat';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-badge">INFO</div>
        <h1 className="about-title">
          <span className="title-line">ABOUT</span>
          <span className="title-line accent-line">REACT CATS</span>
        </h1>
        <div className="hero-cat">
          <Cat borderRadius="0px" />
        </div>
      </div>

      <div className="about-content">
        <section className="content-section">
          <div className="section-number">01</div>
          <div className="section-body">
            <h2>Overview</h2>
            <p>
              React Cats is a modern web application showcasing cat images from TheCatAPI.
              Built as a learning project to explore React patterns, modern web development
              practices, and cat appreciation.
            </p>
          </div>
        </section>

        <section className="content-section tech-section">
          <div className="section-number">02</div>
          <div className="section-body">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-name">React 19.0</span>
                <span className="tech-desc">Latest React with enhanced performance</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">TypeScript 5.7</span>
                <span className="tech-desc">Full type safety throughout the app</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">React Router v7</span>
                <span className="tech-desc">Client-side routing with HashRouter</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Vite 7.3</span>
                <span className="tech-desc">Fast build tool and dev server</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Vitest</span>
                <span className="tech-desc">Modern testing framework</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">ESLint 10 & Prettier</span>
                <span className="tech-desc">Code quality and formatting</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section features-section">
          <div className="section-number">03</div>
          <div className="section-body">
            <h2>Features</h2>
            <div className="features-list">
              <div className="feature-item">Infinite scroll cat gallery with lazy loading</div>
              <div className="feature-item">Progressive image loading with Intersection Observer</div>
              <div className="feature-item">Dark/light theme toggle with localStorage persistence</div>
              <div className="feature-item">Favorites system with localStorage sync</div>
              <div className="feature-item">Searchable cat breeds and facts databases</div>
              <div className="feature-item">Responsive design with mobile hamburger menu</div>
              <div className="feature-item">Accessibility features (ARIA labels, skip links, keyboard nav)</div>
              <div className="feature-item">Web Share API integration with clipboard fallback</div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-number">04</div>
          <div className="section-body">
            <h2>Architecture Highlights</h2>
            <div className="architecture-list">
              <div className="arch-item">Custom React hooks for reusable logic</div>
              <div className="arch-item">Context API for global state management</div>
              <div className="arch-item">Custom progressive image component (no deprecated APIs)</div>
              <div className="arch-item">CSS variables for theming</div>
              <div className="arch-item">TypeScript interfaces for type safety</div>
              <div className="arch-item">Component-driven development</div>
            </div>
          </div>
        </section>

        <div className="about-footer">
          <div className="footer-marker">///</div>
          <p>
            This project demonstrates modern React development patterns including hooks,
            context, lazy loading, infinite scroll, progressive enhancement, and accessibility best practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
