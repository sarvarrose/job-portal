import axios from 'axios'
import { baseUrl } from '../../constants'

const getListings = async () => {
  const listings = await axios.get(baseUrl + '/listings')
  return listings.data
}

export default getListings
