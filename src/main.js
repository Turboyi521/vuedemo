import Vue from  'vue'
import VueResource from 'vue-resource'


import App from './App.vue'

Vue.use(VueResource) //n内部所有的vm和组件对象添加一个$http的属性对象 get、post方法发请求

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})

