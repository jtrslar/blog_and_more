import request from '@/utils/request'

const getMdFile = (params) => {
  return request.get(`/file/md/${params.url}`)
}

export default {
  getMdFile,
}
