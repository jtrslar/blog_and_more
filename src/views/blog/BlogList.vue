<template>
  <div class="main">
    <div class="title">
      <p class="title_name">BLOG</p>
    </div>
    <div class="blog_list">
      <div
        class="blog_item"
        v-for="item in blogList"
        :key="item.id"
        @click="handleReadBlog(item)"
      >
        <span class="blog_name">{{ item.title }}</span>
        <span class="blog_time">2021.11.19</span>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/index'

export default {
  data() {
    return {
      blogList: [],
      selectedBlog: {},
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    // --------------------------- get ----------------------------
    async getDataList() {
      const params = {
        pageNum: 1,
        pageSize: 10,
      }
      const res = await API.getMdFileList(params)
      this.blogList = res || []
    },
    // --------------------------- handle ----------------------------
    handleReadBlog(blog) {
      this.selectedBlog = blog
      this.$router.push({
        name: 'BlogDetail',
        params: { id: blog.id },
      })
    },
  },
}
</script>

<style lang="less" scoped>
@diffTime: 0.2s;

.main {
  display: flex;
  flex-flow: column;
  align-items: center;

  padding: 0 10%;
  width: 100vw;
  height: 100vh;

  transition: all 0.2s ease;

  .title {
    display: flex;
    flex-flow: column;
    align-items: center;

    padding: 10vh 0;
    width: 100%;

    transition: width 0.2s ease;

    .title_name {
      margin-bottom: 10px;

      font-size: 32px;
      font-weight: 600;
    }
  }

  .blog_list {
    overflow: hidden;

    padding: 0 2%;
    width: 100%;

    .blog_item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px #00000005 solid;
      border-radius: 1px;
      padding: 20px 10px;

      transition: all 0.2s ease;
      animation: add_item 0.8s ease;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
        background: #00000003;
      }

      .blog_name {
        font-size: 18px;
      }

      .blog_time {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
}

@keyframes add_item {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
}
</style>
