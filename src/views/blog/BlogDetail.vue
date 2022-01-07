<template>
  <div :class="`mark_box ${pattern ? 'dark' : 'light'}`">
    <div class="pattern" @click="handleChangePattern">模式</div>
    <div ref="blogDetail" class="blog_detail marked"></div>
  </div>
</template>

<script>
import MarkDownIt from 'markdown-it'
import hljs from 'highlight.js'
import API from '@/api/index'

export default {
  data() {
    return {
      blogId: null,
      pattern: true,
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
      const md = this.getMakrdown()
      blogDom.innerHTML = md.render(fileDetail)

      this.blogId = blogId
    },
    getMakrdown() {
      return MarkDownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, str).value
          }

          return '' // 使用额外的默认转义
        },
      })
    },
    // --------------------------- handle ----------------------------
    handleChangePattern() {
      this.pattern = !this.pattern
    },
  },
}
</script>

<style lang="less" scoped>
.mark_box {
  position: relative;
  width: 100%;

  .pattern {
    display: flex;
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
    align-items: flex-start;

    padding: 2% 20%;
    width: 100%;
    height: 100%;
  }
}
</style>
