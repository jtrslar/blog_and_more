<template>
  <!-- 可能会改成组件 -->
  <div class="main">
    <div ref="blogDetail" class="blog_detail marked dark"></div>
  </div>
</template>

<script>
import { marked } from 'marked'
import API from '@/api/index'

export default {
  data() {
    return {
      blogId: null,
    }
  },
  mounted() {
    const { params } = this.$route
    this.getBlogContent(params.id)
  },
  methods: {
    async getBlogContent(blogId) {
      const parmas = { blogId }
      const { file } = (await API.getBlogContent(parmas)) || {}
      const blogDom = this.$refs.blogDetail
      blogDom.innerHTML = marked(file)

      this.blogId = blogId
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
    display: flex;
    flex-flow: column;
    align-items: center;

    padding: 2% 15%;
    width: 100%;
    height: 100%;
  }
}
</style>
