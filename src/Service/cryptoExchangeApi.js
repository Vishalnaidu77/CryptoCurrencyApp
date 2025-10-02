import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://tokeninsight-crypto-api1.p.rapidapi.com/api/v1';

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'e06a91cf28msh9b3582d173c3394p1965e2jsn590741ca28d4');
      headers.set('x-rapidapi-host', 'tokeninsight-crypto-api1.p.rapidapi.com');
      headers.set('TI_API_KEY', '0fce4138bc004783b97cbb8657bb93a9');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExchangeData: builder.query({
      query: (exchangeName) => `/exchanges/${exchangeName}`,
    }),
  }),
});

export const { useGetExchangeDataQuery } = cryptoExchangeApi;