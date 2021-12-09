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
      <button @click="updateUserData" class="bg-green-500 text-gray-50 py-2 px-3 rounded">Submit</button>
    </div>
  </div>
  {{ paramsId }}
  {{ getData }}
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
import router from "../router";
const store = useStore();
const route = useRoute();
const getData = ref();
const users = ref(computed(() => store.getters.getUserData));

const paramsId = route.params.id;
const userData = ref({
  name: null,
  username: null,
  email: null,
  password: null,
});

const updateUserData = () => {
  axios.patch("http://localhost:3000/users/" + paramsId, userData.value).then((res) => {
    console.log(res.data);
  });
  router.back();
};

axios.get("http://localhost:3000/users/" + paramsId).then((res) => (userData.value = res.data));
</script>

<style></style>
