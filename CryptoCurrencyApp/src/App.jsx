
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout, CryptoCurrencies, CryptoDetails, Exchange, Footer, Home, Navbar, News } from './Components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/exchanges",
        element: <Exchange />
      },
      {
        path: "/cryptocurrencies",
        element: <CryptoCurrencies />
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetails />
      },
      {
        path: "/news",
        element: <News />
      },
    ]
  }
]);

function App() {
  return(     
    <RouterProvider router={router} />
  )
}

export default App;
