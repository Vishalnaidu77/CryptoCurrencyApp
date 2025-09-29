import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../Service/cryptoApi'
import { cryptoNewsApi } from '../Service/cryptoNewsApi'

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cryptoApi.middleware)
            .concat(cryptoNewsApi.middleware)
})