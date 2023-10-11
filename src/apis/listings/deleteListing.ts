import axios from 'axios'
import { baseUrl } from '../../constants'

const deleteListing = async (id: string) => {
  const data = await axios.delete(baseUrl + '/listings/' + id)

  return data
}

export default deleteListing
