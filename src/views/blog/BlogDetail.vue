<template>
  <!-- 可能会改成组件 -->
  <div class="main">
    <div ref="blogDetail" class="blog_detail"></div>
  </div>
</template>

<script>
import { marked } from 'marked'
import API from '@/api/index'

export default {
  data() {
    return {}
  },
  mounted() {
    this.getBLogDetail()
  },
  methods: {
    async getBLogDetail() {
      const parmas = { pageSize: 10, pageNum: 1 }
      const blogContent = (await API.getMdFile(parmas)) || ''

      const blogDom = this.$refs.blogDetail
      // const content = marked(blogContent)
      console.log('content is ===>>> ', blogContent)
      blogDom.innerHTML = blogContent
    },
  },
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;

  font-family: 'SansHansLight';
  font-size: 26px;

  .blog_detail {
    width: 100%;
    height: 100%;
  }
}
</style>
