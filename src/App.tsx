import React, { lazy, Suspense } from 'react';
import './App.css';
import NotFoundImg from './images/404-cat.jpg';
import Nav from './helpers/nav';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Facts = lazy(() => import('./pages/Facts'));
const Breeds = lazy(() => import('./pages/Breeds'));
const CatDetail = lazy(() => import('./pages/CatDetail'));
const Cats = lazy(() => import('./pages/Cats'));
const Favorites = lazy(() => import('./pages/Favorites'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '4rem' }}>
    <div
      style={{
        fontSize: '3rem',
        animation: 'spin 1s linear infinite',
      }}
    >
      🐱
    </div>
    <p style={{ marginTop: '1rem', color: '#666' }}>Loading cats...</p>
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/">
        {' '}
        {/*Added basename to handle gh-pages subfolder pathing*/}
        <SkipLink />
        <div className="App">
          <Nav />
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cats" element={<Cats size={15} />} />
                <Route path="/breeds" element={<Breeds />} />
                <Route path="/facts" element={<Facts />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cat/:id" element={<CatDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </main>
            </Suspense>
          </ErrorBoundary>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

const NotFound = () => (
  <div>
    <Link to="/">
      <img
        src={NotFoundImg}
        alt="404 car"
        style={{ display: 'block', margin: '40px auto', width: '40%' }}
      />
      You're lost. Go home!
    </Link>
  </div>
);

export default App;
