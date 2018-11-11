<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos"
                    :deleteCompleteTodos="deleteCompleteTodos"
                    :selectAllTodos="selectAllTodos"


          />
    </div>
  </div>
</template>
<script>
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
