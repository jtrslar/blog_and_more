import axios from 'axios'

const dispose = (res) => {
  res = res || {}
  if (res.status === 200) {
    return res.data
  } else {
    // 调用全局错误处理函数
  }
}

const request = {
  get: async (url) => {
    const response = await axios.get(url)
    return dispose(response)
  },
  post: async (url, params) => {
    const response = await axios.post(url, params)
    return dispose(response)
  },
}

export default request
