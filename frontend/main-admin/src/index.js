import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastProvider } from './contexts';
import { Dialog } from '@mui/material';
import { DialogProvider } from './contexts/DialogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <DialogProvider>
        <App />
      </DialogProvider>
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals