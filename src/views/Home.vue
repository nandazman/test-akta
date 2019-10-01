<template>
  <div class="home">
    <div class="main">
      INI MAIN
    </div>
    <sidebar/>
  </div>
</template>

<script>
import sidebar from '../components/SideBar'
export default {
  name: "home",
  components: {
    sidebar
  }
}
</script>

<style scoped>
  .main {
    float: right;
    width: calc(100vw - 200px)
  }
</style>