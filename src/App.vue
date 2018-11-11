<template>
  <div>
    <h2 v-if="!repoName">LOADING.........</h2>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>

    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repoName:'',
        repoUrl:''
      }
    },
    async mounted (){
      const url = ' https://api.github.com/search/repositories?q=v&sort=stars'
      //VueResource发送异步请求
//    this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars')
//      .then(response =>{
//        const result = response.data
//        const  mostRepo = result.items[0]
//        //更新
//        this.repoName = mostRepo.name
//        this.repoUrl = mostRepo.html_url
//
//      })
//      .catch(response =>{
//         alert('请求失败......')
//
//
//    })
      //axios发送异步请求
//      axios.get(url).then(response =>{
//        const result = response.data
//        const  mostRepo = result.items[0]
//        //更新
//        this.repoName = mostRepo.name
//        this.repoUrl = mostRepo.html_url
//
//      })
//      .catch(response =>{
//         alert('请求失败......')
//    })
      try{
        const response = await axios.get(url)
        const result = response.data
        const  mostRepo = result.items[0]
        //更新
        this.repoName = mostRepo.name
        this.repoUrl = mostRepo.html_url
      }catch (e){
        console.log('获取失败')
      }



    }
  }
</script>
<style scoped>

</style>
