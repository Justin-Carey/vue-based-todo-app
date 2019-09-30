<!-- This component is the top-level root component for the entire application. -->

<template>
  <div id='app'>
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <ToDoList :todos="todos"></ToDoList> <!-- Make the array "todos" available to the ToDoList component via binding. -->
    <CreateTodo v-on:create-todo="createTodo"></CreateTodo> <!-- If the 'create-todo' event is emitted from the CreateTodo component, run createTodo() -->
  </div>
</template>

<script>
import ToDoList from './components/ToDoList'      // Make the ToDoList component available to this App.
import CreateTodo from './components/CreateTodo' // Make the CreateTodo component available to this App.

export default { // Vue loader looks here first, this data gets exported to the 'app' div in main.js.
  name: 'App',
  components: {
    ToDoList,
    CreateTodo,
  },
  // data function avails data to the template
  data() {
    return {
      todos:[{
        title: 'Developer new chat feature',
        project: 'Ayogo pipeline',
        done: false,
      },],
    }
  },
  methods: {
    createTodo(newTodo) {           // This method takes a newTodo object and pushes it into the todo array within data.
      this.todos.push(newTodo);
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
