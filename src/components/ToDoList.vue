<!-- Structural part of the component. -->
<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo=>{return todo.done == true}).length}}</p>
    <!-- filter() retruns an array with elements that meet the functions specifications. -->
    <p>Pending Tasks: {{todos.filter(todo=>{return todo.done == false}).length}}</p>
    <todo v-on:delete-todo='deleteTodo' v-on:complete-todo="completeTodo" v-for="todo in todos" :todo="todo"></todo>
    <!-- v-for: looping directive, todos is array, and todo is alias -->
    <!-- property "todo" is bound to todo (which is the alias we're using to loop), clever way of passing data -->
  </div>
</template>

<!-- Behaviour, events, and data storage. -->
<script>
import Todo from './Todo'

export default { // Vue loader looks here first, this data is going into 'App' in main.js
  components: {
    Todo,
  },
  props: ['todos'], // Allows us to receive data from App.vue
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo){
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
}
</script>

<!-- Further visual enhancements. -->
<style>
</style>
