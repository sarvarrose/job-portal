import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Listing, ListingCreatePayload, ListingUpdatePayload } from '../../../types'
import { RootState } from '..'

type FormField = { value: string; error: string }

interface InitialState {
  isOpen: boolean
  step: number
  data: Record<keyof Listing, FormField>
}

const initialState: InitialState = {
  isOpen: false,
  step: 1,
  data: {
    id: { value: '', error: '' },
    avatar: { value: '', error: '' },
    jobTitle: { value: '', error: '' },
    industry: { value: '', error: '' },
    companyName: { value: '', error: '' },
    location: { value: '', error: '' },
    remoteType: { value: '', error: '' },
    totalEmployees: { value: '', error: '' },
    experienceMinimum: { value: '', error: '' },
    experienceMaximum: { value: '', error: '' },
    salaryMinimum: { value: '', error: '' },
    salaryMaximum: { value: '', error: '' },
    applyType: { value: '', error: '' },
    created_at: { value: '', error: '' }
  }
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isOpen = true
    },
    closeForm: () => {
      return initialState
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setFormData: (state, action: PayloadAction<Listing>) => {
      state.data = Object.keys(action.payload).reduce(
        (acc, key) => {
          return {
            ...acc,
            [key]: { value: (action.payload as Record<string, unknown>)[key], error: '' }
          }
        },
        {} as Record<keyof Listing, FormField>
      )
    },
    setFieldValue(state, action: PayloadAction<{ input: keyof Listing; value: string }>) {
      const { input, value } = action.payload
      state.data[input] = { value: value, error: '' }
    }
  }
})

export const { openForm, closeForm, setFormData, setStep, setFieldValue } = formSlice.actions

export const selectIsFormOpen = (state: RootState) => state.form.isOpen

export const selectListingCreatePayload = (state: RootState) => {
  return Object.keys(state.form.data).reduce((acc, key) => {
    if (key === 'id' || key === 'avatar' || key === 'created_at') return acc

    return {
      ...acc,
      [key]: state.form.data[key as keyof Listing].value
    }
  }, {} as ListingCreatePayload)
}

export const selectListingUpdatePayload = (state: RootState) => {
  return Object.keys(state.form.data).reduce((acc, key) => {
    if (key === 'avatar' || key === 'created_at') return acc

    return {
      ...acc,
      [key]: state.form.data[key as keyof Listing].value
    }
  }, {} as ListingUpdatePayload)
}

export default formSlice.reducer
