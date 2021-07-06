<template>
  <div id="app">
   <process></process>
  </div>
</template>

<script>
import process from './views/process.vue'

export default {
  name: 'App',
  components: {
    process
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
