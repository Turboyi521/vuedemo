<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="index" :todo="todo"  :index="index"/>


  </ul>
</template>


<script>
  import Item from './Item.vue'
  export default {
     props:['todos', ],//props简单写法，接收到的属性名称
     components:{
       Item
     },

  }

</script>
<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
