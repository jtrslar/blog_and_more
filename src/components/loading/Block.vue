<template>
  <!-- 一些没用的小特效 -->
  <div class="loading_main">
    <div class="loading_list">
      <div class="loading_item" name="asd" id=""></div>
      <div class="loading_item"></div>
      <div class="loading_item"></div>
      <div class="loading_item"></div>
      <div class="loading_item"></div>
      <div class="loading_item"></div>
    </div>
    <div class="center"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
@loading_item_size: 2.5vw;

.loading_main {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 100%;
  height: 100%;

  .loading_list {
    position: relative;

    .loading_item {
      position: absolute;
      top: -@loading_item_size / 2;
      left: -@loading_item_size / 2;

      width: @loading_item_size;
      height: @loading_item_size;

      animation: loading_rotate 6s linear infinite;

      &:nth-of-type(6n-5) {
        animation-delay: 0s;
      }
      &:nth-of-type(6n-4) {
        animation-delay: 1s;
      }
      &:nth-of-type(6n-3) {
        animation-delay: 2s;
      }
      &:nth-of-type(6n-2) {
        animation-delay: 3s;
      }
      &:nth-of-type(6n-1) {
        animation-delay: 4s;
      }
      &:nth-of-type(6n) {
        animation-delay: 5s;
      }
    }
  }

  .center {
    position: absolute;

    border: 3px #000 solid;
    width: 20px;
    height: 20px;

    transform: rotate(45deg);

    animation: center_run 1s ease infinite;
  }
}

@keyframes loading_rotate {
  0% {
    border: 3px #000 solid;
    border-radius: 0%;
    transform: rotate(0) scale(1);
  }

  100% {
    border: 3px rgba(255, 255, 255, 0) solid;
    border-radius: 10%;
    transform: rotate(100deg) scale(35);
  }
}
@keyframes center_run {
  0% {
    transform: scale(1);
    border-radius: 0;
    opacity: 1;
  }
  50% {
    transform: scale(0.1);
    border-radius: 50%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    border-radius: 0;
    opacity: 1;
  }
}
</style>
