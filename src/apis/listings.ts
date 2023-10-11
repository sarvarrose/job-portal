import axios, { AxiosResponse } from 'axios'
import { baseUrl } from '../constants'
import { Listing, ListingCreatePayload, ListingUpdatePayload } from '../../types'

const createListingRequest = async (payload: ListingCreatePayload) => {
  const newListing: AxiosResponse<Listing> = await axios.post(baseUrl + '/listings', payload)
  return newListing.data
}

const readListingsRequest = async () => {
  const listings: AxiosResponse<Listing[]> = await axios.get(baseUrl + '/listings')
  return listings.data
}

const updateListingRequest = async (payload: ListingUpdatePayload) => {
  const { id, ...restPayload } = payload
  const updatedListing: AxiosResponse<Listing> = await axios.put(baseUrl + '/listings/' + id, restPayload)

  return updatedListing.data
}

const deleteListingRequest = async (id: string) => {
  return await axios.delete(baseUrl + '/listings/' + id)
}

export { createListingRequest, readListingsRequest, updateListingRequest, deleteListingRequest }
