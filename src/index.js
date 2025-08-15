import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function initApp() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error('Root element not found!');
  }
}

// Wait for DOM to be fully loaded
if (document.readyState === 'complete') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}