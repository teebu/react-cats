import Cat from '../helpers/Cat';
import React from 'react';
import Interval from 'react-interval-rerender';
import '../styles/Home.css';

const Home = () => {
  const IntervalRerenderComponent = () => (
    <Interval delay={15000}>
      {() => (
        <div className="cat-container">
          <Cat
            key={Date.now()}
            maxHeight={600}
            maxWidth={600}
            borderRadius={'0px'}
            delay={500}
          />
        </div>
      )}
    </Interval>
  );

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="accent-bar accent-bar-1"></div>
          <h1 className="hero-title">
            <span className="title-line title-line-1">REACT</span>
            <span className="title-line title-line-2">CATS</span>
            <span className="title-line title-line-3">GLOBAL</span>
          </h1>
          <div className="accent-bar accent-bar-2"></div>
          <p className="hero-subtitle">
            A brutalist exploration of feline photography powered by modern React
          </p>
          <div className="hero-timestamp">
            <span className="timestamp-label">LAST UPDATED:</span>
            <span className="timestamp-value">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            <IntervalRerenderComponent />
          </div>
          <div className="image-decoration"></div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card feature-card-1">
          <div className="card-number">01</div>
          <h3>INFINITE CATS</h3>
          <p>Auto-refreshing cat images every 15 seconds</p>
        </div>
        <div className="feature-card feature-card-2">
          <div className="card-number">02</div>
          <h3>BREED DATA</h3>
          <p>Comprehensive information on cat breeds</p>
        </div>
        <div className="feature-card feature-card-3">
          <div className="card-number">03</div>
          <h3>FAVORITES</h3>
          <p>Save and organize your preferred felines</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
