<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/>
      <TodoList :todos="todos"  />
      <TodoFooter>
        <input type="checkbox" v-model="isCheckAll" slot="check"/>
        <span slot="size">已完成{{completeSize}}</span> / 全部{{todos.length}}
        <button class="btn btn-danger" v-show="completeSize >0" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>

      </TodoFooter>
    </div>
  </div>
</template>
<script>
  import Pubsub from 'pubsub-js'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtils from './utils/storageUtils'
  export default {
    data(){
      return{
//        todos:JSON.parse(localStorage.getItem('todos_key') || '[]')
        todos: storageUtils.readTodos()
      }
    },
    computed:{
      //完成
      completeSize () {
        return this.todos.reduce((pre,todo) => pre + (todo.complete ? 1 : 0),0)
      },
      //是否全选，同时修改
      isCheckAll:{
        get(){
          return this.todos.length === this.completeSize && this.completeSize>0
        },
        set(value){
          this.selectAllTodos(value)
        }
      }
    },
    mounted(){
      Pubsub.subscribe('deleteTodo',(msg,index) => {
        this.deleteTodo(index)
      })
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

//      删除已完成的
      deleteCompleteTodos(){
        this.todos  = this.todos.filter(todo => !todo.complete)
      },
      //是否勾
      selectAllTodos(isCheck){
        this.todos.forEach(todo => todo.complete = isCheck)

      }

    },
    watch:{
      todos:{
        deep:true,
        handler:function(value){//todos最新值
//          保存todos json 数据到localStorage
//          localStorage.setItem('todos_key',JSON.stringify(value))
           storageUtils.saveTodos(value)
        }
      }
    },
    components:{
      TodoHeader:Header,
      TodoList:List,
      TodoFooter:Footer
    }

  }

</script>
<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
