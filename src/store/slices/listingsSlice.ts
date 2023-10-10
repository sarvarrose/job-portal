import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Listing } from '../../../types'

const initialState: Listing[] = []

export const listingsSlice = createSlice({
    name: 'listings',
    initialState,
    reducers: {
        addListings: (_, action: PayloadAction<Listing[]>) => {
            return action.payload
        }
    }
})

export const { addListings } = listingsSlice.actions

export default listingsSlice.reducer