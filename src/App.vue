<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/menu.vue'
export default {
  components:{
    navigation
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 16px;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--grey);
  padding: 5rem;
}
:root{
  --blue: #A8DEEA;  /* основной голубой цвет */
  --grey: #909090;  /* цвет шрифта */
}
</style>
