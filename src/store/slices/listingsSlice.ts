import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Listing } from '../../../types'
import { RootState } from '../index'

const initialState: Listing[] = []

export const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings: (_, action: PayloadAction<Listing[]>) => {
      return action.payload
    },
    insertListing: (state, action: PayloadAction<Listing>) => {
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

export const { setListings, insertListing, updateListing, deleteListing } = listingsSlice.actions

export default listingsSlice.reducer

// selectors
export const selectListings = (state: RootState) => state.listings
