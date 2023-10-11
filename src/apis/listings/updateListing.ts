import axios from 'axios'
import { baseUrl } from '../../constants'
import { ListingUpdatePayload } from '../../../types'

const updateListing = async (payload: ListingUpdatePayload) => {
  const { id, ...restPayload } = payload
  const data = await axios.put(baseUrl + '/listings/' + id, restPayload)

  return data
}

export default updateListing
