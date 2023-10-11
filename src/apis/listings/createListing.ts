import axios from 'axios'
import { baseUrl } from '../../constants'
import { ListingCreatePayload } from '../../../types'

const createListing = async (payload: ListingCreatePayload) => {
  const data = await axios.post(baseUrl + '/listings', payload)
  return data
}

export default createListing
