<template>
<div class='ui centered card'>
  <!-- Todo is shown when we are not in editing mode. -->
  <div class='content' v-show="!isEditing">  <!-- Conditionally shows dom element. Changes 'display' property. -->
    <div class='header'>
      {{todo.title}}
    </div>
    <div class='meta'>
      {{todo.project}}
    </div>
    <div class='extra content'>
      <span class='right floated edit icon' v-on:click="showForm"> <!-- Attaches event listener showForm to this element. -->
        <i class='edit icon'></i>
      </span>
      <span class='right floated trash icon' v-on:click="deleteTodo(todo)"> <!-- Captures this components events -->
        <i class='trash icon'></i>
      </span>
    </div>
  </div>
  <!-- Form is visible when we are in editing mode. -->
  <div class="content" v-show="isEditing">
    <div class='ui form'>
      <div class='field'>
        <label>Title</label>
        <input type='text' v-model="todo.title">
      </div>
      <div class='field'>
        <label>Project</label>
        <input type='text' v-model="todo.project">
      </div>
      <div class='ui two button attached buttons'>
        <button class='ui basic blue button' v-on:click="hideForm">
          Close
        </button>
      </div>
    </div>
  </div>
  <div class='ui bottom attached green basic button' v-show="!isEditing && todo.done" disabled>
    Completed
  </div>
  <div class='ui bottom attached red basic button' v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
    Pending
  </div>
</div>
</template>

<script>
export default {
  props: ['todo'], // Allows us to receive data from ToDoList.vue
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo){
      this.$emit('delete-todo', todo); // emitting sends an event back up to the parent component
    },
    completeTodo(todo){
      this.$emit('complete-todo', todo);
    },
  },
};
</script>

<style>
</style>
