import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import { MoviesProvider } from './components/movies/MoviesContext';
import { TvProvider } from './components/tv/TvContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <TvProvider>
      <MoviesProvider>
        <App />
      </MoviesProvider> 
    </TvProvider>
    </BrowserRouter>
  </QueryClientProvider>  
);

