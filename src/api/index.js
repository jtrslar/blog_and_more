import request from '@/utils/request'

const getMdFileList = (params) => {
  return request.post(`/api/blog/list`, params)
}

const getBlogContent = (params) => {
  return request.post(`/api/blog/content`, params)
}

export default {
  getMdFileList,
  getBlogContent,
}
