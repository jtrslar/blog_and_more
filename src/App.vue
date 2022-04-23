<template>
  <div id="app">
    <router-view />
    <RecordNum />
  </div>
</template>

<script>
import RecordNum from '@/components/RecordNum'

export default {
  components: {
    RecordNum,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
