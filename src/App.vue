<template>
  <div id="app">
    <div class="page A"><a href="/a" target="_blank">点击后跳转到a页面 弹出a页面</a></div>
    <div class="page B"><a href="/b" target="_blank">点击后跳转到b页面 弹出b页面</a></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  float: left;
  margin: 100px;
}
.page a {
  /*color: #fff;*/
}
</style>
