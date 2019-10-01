<template>
  <div id="app">
    <!-- <LogIn/> -->
    <router-view/>
  </div>
</template>

<script>
// import LogIn from '../components/LogInForm.vue'

export default {
  name: 'app',
  components: {
    // LogIn
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Cambria;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
