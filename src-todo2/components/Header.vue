<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add " v-model="title"/>
  </div>
</template>
<script>
  export default {
//    props:{
//      addTodo:{
//        type:Function,
//        required:true
//      }
//    },


    data() {
      return {
        title:''
      }
    },
    methods:{
      add(){
//        根据输入的数据添加todo
        const title = this.title.trim()
        if(!title){
          return alert('必须输入')
        }
//        封装为一个对象
        const todo={
          title,
          complete:false
        }
//        调用addTodo()添加todo  this.addTodo(todo)
//        分发自定义事件：addTodo
            this.$emit('addTodo',todo)
//        清除输入,双向数据绑定
        this.title=''
      }
    }

  }

</script>
<style scoped>

  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
