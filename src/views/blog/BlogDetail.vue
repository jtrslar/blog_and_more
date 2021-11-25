<template>
  <!-- 可能会改成组件 -->
  <div ref="blog_box" :class="pattern">
    <div class="pattern" @click="handleChangePattern(pattern)">模式</div>
    <div ref="blogDetail" class="blog_detail marked"></div>
  </div>
</template>

<script>
import { marked } from 'marked'
import API from '@/api/index'

export default {
  data() {
    return {
      blogId: null,
      pattern: 'dark',
    }
  },
  mounted() {
    const { query } = this.$route
    this.getBlogContent(query.id)
  },
  methods: {
    // --------------------------- get ----------------------------
    async getBlogContent(blogId) {
      const parmas = { id: blogId }
      const { fileDetail } = (await API.getBlogContent(parmas)) || {}
      const blogDom = this.$refs.blogDetail
      blogDom.innerHTML = marked(fileDetail)

      this.blogId = blogId
    },
    // --------------------------- handle ----------------------------
    handleChangePattern(pattern) {
      this.pattern = pattern === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style lang="less" scoped>
.dark,
.light {
  position: relative;
  width: 100%;
  height: 100%;

  font-family: 'SansHansLight';
  font-size: 26px;

  .pattern {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;

    border-radius: 50%;
    width: 5vw;
    height: 5vw;

    background: skyblue;
  }

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
