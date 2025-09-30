import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  'x-rapidapi-key': 'e06a91cf28msh9b3582d173c3394p1965e2jsn590741ca28d4',
  'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeader })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),   
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) => createRequest(`/v1/coindesk?limit=${count}`)
    })
  })
})

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;
