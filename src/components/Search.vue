<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @clcik="search">Search</button>
    </div>
  </section>
</template>
<script>
  import Pubsub from 'pubsub-js'
  export default {
    data() {
      return {
        searchName:''
      }
    },
    methods:{
      search (){
        const searchName = this.searchName.trim()
        if(searchName){
          //发布消息
          Pubsub.publish('search',searchName)
        }
      }
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
