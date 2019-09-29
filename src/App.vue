<!-- This component is the top-level root component for the entire application. -->

<template>
  <div id='app'>
    <ToDoList :todos="todos"></ToDoList> <!-- Make the array "todos" available to the ToDoList component via binding. -->
    <CreateTodo v-on:create-todo="createTodo"></CreateTodo>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList' // Make the ToDoList component available to this App.
import CreateTodo from './components/CreateTodo'

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
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: false,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    }
  },
  methods: {
    createTodo(title) {
      this.todos.push({
        title,
        done: false,
      });
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
