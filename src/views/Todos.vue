<template>
  <Header class="fixed" />
  <div class="overflow-auto py-20 flex justify-center flex-wrap">
    <input
      class="w-4/5 p-3 text-grey-darkest border-teal-900 border-solid border-2"
      type="text"
      placeholder="Enter todo"
      v-model="newTodo"
      @keydown.enter="addTodo"
    />
    <TodoCard
      class="text-teal-800"
      v-for="todo in currentTodos"
      :key="todo.title"
      :todo="todo"
      @delete-todo="deleteTodo"
    />
    <Pagination
      :pageSize="pageSize"
      :currentPage="currentPage"
      :totalSize="totalSize"
      @next="next"
      @prev="prev"
    />
  </div>
</template>
<script>
import Header from "../components/header";
import TodoCard from "../components/TodoCard";
import Pagination from "../components/Pagination";
export default {
  components: {
    Header,
    TodoCard,
    Pagination
  },
  data() {
    return {
      todos: [],

      title: "Todos App",
      newTodo: "",
      pageSize: 10,
      currentPage: 1
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => (this.todos = json));
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo() {
      if (this.newTodo) {
        this.todos.push({ title: this.newTodo, id: this.todosCount + 1 });
        this.newTodo = "";
      }
    },
    prev() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
    next() {
      if (this.currentPage * 10 < this.totalSize) {
        this.currentPage = this.currentPage + 1;
      }
    }
  },
  computed: {
    totalSize() {
      return this.todos.length;
    },
    todosCount() {
      return this.todos.length;
    },
    currentTodos() {
      return this.todos.filter(
        todo =>
          todo.id > (this.currentPage - 1) * 10 &&
          todo.id < this.currentPage * 10 + 1
      );
    }
  }
};
</script>
