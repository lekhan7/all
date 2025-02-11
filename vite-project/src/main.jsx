import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import App from './App'; // Your main app component
import { FirebaseProvider } from 'C:/Users/acer/Desktop/sporld web/vite-project/context/firebase.jsx';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      // <React.StrictMode>
        <BrowserRouter> 
        <FirebaseProvider>
          <App />
          </FirebaseProvider>
        </BrowserRouter>
   
    );