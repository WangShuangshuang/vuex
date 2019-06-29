<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyHello1/>
    <hr />
    <MyHello2/>
  </div>
</template>

<script>
import MyHello1 from './components/MyHello1.vue'
import MyHello2 from './components/MyHello2.vue'

export default {
  name: 'app',
  components: {
    MyHello1,
    MyHello2,
  }
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
</style>
