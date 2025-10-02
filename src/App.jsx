import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout, CryptoCurrencies, CryptoDetails, Exchange, Footer, Home, Navbar, News } from './Components';
import axios from 'axios'

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


// const options = {
//   method: 'GET',
//   url: 'https://tokeninsight-crypto-api1.p.rapidapi.com/api/v1/exchanges/binance',
//   headers: {
//     'x-rapidapi-key': 'e06a91cf28msh9b3582d173c3394p1965e2jsn590741ca28d4',
//     'x-rapidapi-host': 'tokeninsight-crypto-api1.p.rapidapi.com',
//     TI_API_KEY: '0fce4138bc004783b97cbb8657bb93a9'
//   }
// };

// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData();

  return(     
    <RouterProvider router={router} />
  )
}

export default App;
