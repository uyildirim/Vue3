<template>
  <h1>Register Page</h1>
  <div class="flex">
    <div id="body" class="flex-shrink-0 h-full border rounded w-80 p-3 m-3 shadow space-y-2">
      <div>
        <label class="block">Name</label>
        <input v-model="userData.name" class="border w-full" type="text" name="name" />
      </div>
      <div>
        <label class="block">Username</label>
        <input v-model="userData.username" class="border w-full" type="text" name="username" />
      </div>
      <div>
        <label class="block">Email</label>
        <input v-model="userData.email" class="border w-full" type="text" name="email" />
      </div>
      <div>
        <label class="block">Password</label>
        <input v-model="userData.password" class="border w-full" type="text" name="password" />
      </div>
      <button @click="addUserData" class="bg-green-500 text-gray-50 py-2 px-3 rounded">Submit</button>
    </div>
    <div class="flex h-full w-full mx-3 shadow p-3">
      <table class="w-full">
        <tr class="bg-gray-200">
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Password</td>
        </tr>
        <tbody class="divide-y">
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- {{ userData }} -->
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
const store = useStore();
const users = ref(computed(() => store.getters.getUserData));

const userData = ref({
  name: null,
  username: null,
  email: null,
  password: null,
});

const addUserDataA = () => {
  store.commit("setUserData", { ...userData.value });
};
const addUserData = () => {
  store.dispatch("saveData", userData.value);
};
store.dispatch("getAllUserData");
</script>

<style></style>
