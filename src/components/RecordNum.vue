<template>
  <div class="record_num">
    <a href="https://beian.miit.gov.cn/" target="_blank"
      >京ICP备2021036964号-1</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.record_num {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1vh;
  width: 100%;

  color: #333;
  background: #fbfbfb;

  a {
    transition: all 0.3s ease;
    color: #333;
  }
}
</style>
