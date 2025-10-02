import React from 'react'
import { useGetExchangeDataQuery } from '../Service/cryptoExchangeApi'

const Exchange = () => {
  // Fetch data for a specific exchange (e.g., 'binance')
  const { data, error, isFetching } = useGetExchangeDataQuery();

  return (
    <div>
      <h1 className='text-3xl font-bold'>
        This page's work is not done.
      </h1>
    </div>
  );
}

export default Exchange;  