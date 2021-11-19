import request from '@/utils/request'

const getMdFileList = (params) => {
  return request.post(`/api/blogList`, params)
}

const getBlogContent = (params) => {
  return request.post(`/api/blogContent`, params)
}

export default {
  getMdFileList,
  getBlogContent,
}
