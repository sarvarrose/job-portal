import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Listing } from '../../../types'

const initialState: Listing[] = []

export const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings: (_, action: PayloadAction<Listing[]>) => {
      return action.payload
    },
    createListing: (state, action: PayloadAction<Listing>) => {
      state.push(action.payload)
    },
    updateListing: (state, action: PayloadAction<Listing>) => {
      const index = state.findIndex((listing) => listing.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteListing: (state, action: PayloadAction<string>) => {
      return state.filter((listing) => listing.id !== action.payload)
    }
  }
})

export const { setListings, createListing, updateListing, deleteListing } = listingsSlice.actions

export default listingsSlice.reducer
