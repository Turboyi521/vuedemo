<template>
  <div class="container">
    <UserSearch/>
    <UserMain/>

  </div>
</template>


<script>
import Search from './components/Search.vue'
import Main from './components/Main.vue'

  export default {
    components:{
      UserSearch:Search,
      UserMain:Main
    }
  }
</script>
<style scoped>

</style>
