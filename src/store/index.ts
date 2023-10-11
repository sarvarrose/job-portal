import { configureStore } from '@reduxjs/toolkit'
import listingsSlice from './slices/listingsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import formSlice from './slices/formSlice'
export const store = configureStore({
  reducer: {
    listings: listingsSlice,
    form: formSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
