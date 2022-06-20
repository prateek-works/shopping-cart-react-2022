import { configureStore } from '@reduxjs/toolkit'
import formSlice from './formSlice'
import productSlice from './productSlice'

export const store = configureStore({
    reducer: {
        form: formSlice,
        product: productSlice,
    },
})