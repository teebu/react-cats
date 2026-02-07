import React from 'react';
import catErrorImage from '../images/404-cat.jpg';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <img
            src={catErrorImage}
            alt="Error cat"
            style={{
              maxWidth: '400px',
              width: '100%',
              borderRadius: '12px',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            😿 Oops! Something went wrong
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              maxWidth: '500px',
            }}
          >
            Don't worry, even cats make mistakes! Let's get you back on track.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={e => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={e => (e.target.style.backgroundColor = '#007bff')}
          >
            🏠 Return Home
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details
              style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                maxWidth: '600px',
                textAlign: 'left',
              }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                Error Details (Development Only)
              </summary>
              <pre
                style={{
                  marginTop: '1rem',
                  fontSize: '0.875rem',
                  overflow: 'auto',
                  color: '#dc3545',
                }}
              >
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
