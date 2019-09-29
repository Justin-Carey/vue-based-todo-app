<template>
<div class='ui centered card'>
  <!-- Todo is shown when we are not in editing mode. -->
  <div class='content' v-show="!isEditing">
    <div class='header'>
      {{todo.title}}
    </div>
    <div class='meta'>
      {{todo.project}}
    </div>
    <div class='extra content'>
      <span class='right floated edit icon' v-on:click="showForm">
        <i class='edit icon'></i>
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
  <div class='ui bottom attached green basic button' v-show="!isEditing">
    Completed
  </div>
  <div class='ui bottom attached red basic button' v-show="!isEditing">
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
  },
};
</script>

<style>
</style>
