import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const showFatalError = (title: string, error: unknown) => {
  const message = error instanceof Error ? error.stack || error.message : String(error);
  const existing = document.getElementById('startup-error-overlay');

  if (existing) {
    existing.textContent = `${title}\n\n${message}`;
    return;
  }

  const overlay = document.createElement('pre');
  overlay.id = 'startup-error-overlay';
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.margin = '0';
  overlay.style.padding = '16px';
  overlay.style.zIndex = '2147483647';
  overlay.style.background = '#0b1020';
  overlay.style.color = '#f8fafc';
  overlay.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
  overlay.style.fontSize = '12px';
  overlay.style.whiteSpace = 'pre-wrap';
  overlay.textContent = `${title}\n\n${message}`;

  document.body.innerHTML = '';
  document.body.appendChild(overlay);
};

window.addEventListener('error', (event) => {
  showFatalError('Unhandled startup error', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  showFatalError('Unhandled promise rejection', event.reason);
});

try {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
} catch (error) {
  showFatalError('Fatal render error', error);
}
