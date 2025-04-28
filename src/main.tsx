import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { assertIsNonNullable } from './utils/helpers.ts';

const rootElement = document.getElementById('root');

assertIsNonNullable(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
