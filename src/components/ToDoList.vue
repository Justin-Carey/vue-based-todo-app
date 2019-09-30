<!-- Structural part of the component. -->
<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo=>{return todo.done == true}).length}}</p>
    <!-- filter() retruns an array with elements that meet the functions specifications. -->
    <p>Pending Tasks: {{todos.filter(todo=>{return todo.done == false}).length}}</p>

    <todo v-on:delete-todo='deleteTodo' v-on:complete-todo="completeTodo" v-for="todo in todos" :todo.sync="todo"></todo>
    <!-- v-on:delete-todo passes the function defintion of deleteTodo() to todo. -->
    <!-- v-on:complete-todo passes the function defintion of completeTodo() to todo. -->
    <!-- v-for: looping directive, todos is array, and todo is alias -->
    <!-- property "todo" is bound to todo (which is the alias we're using to loop), clever way of passing data -->

  </div>
</template>

<!-- Behaviour, events, and data storage. -->
<script>
import Todo from './Todo'

export default { // Vue loader looks here first, this data is going into 'App' in main.js
  props: ['todos'], // Allows us to receive data from App.vue
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo); //Returns the index where the todo element is
      this.todos.splice(todoIndex, 1); // Splice modifies an array in place. splice(start index, delete count)
    },
    completeTodo(todo){
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true; // Set the 'done' property of our todo objects to be true
    },
  },
}
</script>

<!-- Further visual enhancements. -->
<style>
</style>
