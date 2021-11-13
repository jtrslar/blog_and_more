import axios from 'axios'

const request = {
  get: async (url) => {
    return await axios.get(url)
  },
  post: async (url, params) => {
    return await axios.post(url, params)
  },
}

export default request
