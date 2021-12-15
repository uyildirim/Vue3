<template>
  <div class="w-full">
    <div id="content" class="my-7 mx-14">
      <TodoList :TodoList="TodoListItem" @item-checkbox="item" />
      <div>
        <AddTodo @save="save" />
        <TodoListAddInput />
        <pre>
          {{ TodoListItem }}
        </pre>
      </div>
    </div>
    <!-- <SavedModal :data="model" v-show="showModal" @close-modal="showModal = false"> -->
    <!-- <template #test> {{ model }} </template> -->
    <!-- </SavedModal> -->
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref } from "vue";
const appAxios = inject("appAxios");

import SavedModal from "./Modal/SavedModal.vue";
import TodoList from "../component/todoList.vue";
import TodoListAddInput from "../component/todoListAddInput.vue";
import AddTodo from "../component/Todo/AddTodo/AddTodoIndex.vue";

const showModal = ref(false);
const model = ref();

const modelData = (data) => {
  showModal.value = true;
  model.value = data;
};
const save = (e) => {
  TodoListItem.value.push({ ...e });
};
const item = (item) => {
  console.log(item);
};
const TodoListItem = ref([]);
onMounted(() => {
  appAxios.get("todo").then((response) => {
    console.log((TodoListItem.value = response.data));
  });
});
</script>

<style scoped>
.red-color {
  color: red;
}
</style>
