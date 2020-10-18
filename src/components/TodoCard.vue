<template>
  <div class="w-4/5 border-2 my-2 p-2 flex justify-between">
    <p>{{ todo.id }}.{{ todo.title }}</p>
    <p @click="$emit('delete-todo', todo.id)">x</p>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  emits: ["delete-todo"]
};
</script>
