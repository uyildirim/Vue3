<template>
  <div class="flex">
    <div id="card" class="p-3 m-3 w-96 shadow">
      <form @submit.prevent="onSubmit" ref="form">
        <div>
          <label>Name</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="text" />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" type="text" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit" class="btn mt-2">Save</button>
      </form>
    </div>
    <div id="card" class="w-full">
      <table class="w-full">
        <thead class="">
          <tr class="border-b">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <button class="btn2 bg-blue-600">Edit</button>
              <button @click="deleteUser(user.id)" class="btn2 bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUser, getAllUsers, deleteUser } from "../../firebase/user";
import userModel from "../../model/userModel";

const { users, allUsers } = getAllUsers();
allUsers();
setTimeout(() => {
  console.log(users.value);
}, 200);
const onSubmit = function (data) {
  const formData = Object.fromEntries(new FormData(data.target));
  const user = new userModel(formData);
  createUser(user);
};
</script>

<style scoped>
input {
  @apply border py-1 px-2 w-full;
}
label {
  @apply block;
}
th {
  @apply text-left;
}
.btn2 {
  @apply text-white py-1 px-2 text-sm rounded mr-2;
}
</style>
