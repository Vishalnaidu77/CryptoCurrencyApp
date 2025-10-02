import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../Service/cryptoApi'
import { cryptoNewsApi } from '../Service/cryptoNewsApi'
import { cryptoExchangeApi } from '../Service/cryptoExchangeApi'

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoExchangeApi.reducerPath]: cryptoExchangeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cryptoApi.middleware)
            .concat(cryptoNewsApi.middleware)
            .concat(cryptoExchangeApi.middleware)
})