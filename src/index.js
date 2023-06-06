import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MoviesProvider } from './components/movies/MoviesContext';
import { TvProvider } from './components/tv/TvContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <TvProvider>
      <MoviesProvider>
        <App />
    </MoviesProvider> 
    </TvProvider>
    </BrowserRouter> 
);

