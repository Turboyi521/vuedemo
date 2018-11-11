<template>
  <li :style="{background: bgColor}" @onmouseenter="handleEnter(true)" @onmouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger"  v-show="isShow" @click="deleteItem"  >删除</button>
  </li>
</template>
<script>
  import Pubsub from 'pubsub-js'
  export default {
    props:{
      todo:Object,

      index:Number
    },
    data() {
      return {
        bgColor: 'white',
        isShow: true
      }
    },
    methods:{
      handleEnter(isEnter){
//        if(isEnter){
//          this.bgColor = '#ccc',
//            this.isShow = true
//            console.log('111111111111111')
//        }else{
//          this.bgColor = '#fff',
//            this.isShow = false
//          console.log('22222222222222')
//        }
        this.bgColor = isEnter ? '#ccc': '#fff'
        this.isShow = isEnter
      },
      deleteItem(){
        const {todo,deleteTodo,index} = this
        if(confirm(`确定要删除${todo.title}吗？`)){
//          deleteTodo(index)
          Pubsub.publish('deleteTodo',index)
        }
      }
    }


  }

</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
