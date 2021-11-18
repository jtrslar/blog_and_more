import request from '@/utils/request'

const getMdFile = (params) => {
  return request.post(`/file/md`, params)
}

export default {
  getMdFile,
}
