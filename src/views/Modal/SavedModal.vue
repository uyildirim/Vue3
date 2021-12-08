<template>
  <div
    class="modal-overlay absolute inset-0 bg-[#000000da] flex justify-center"
    @click="$emit('close-modal')"
  >
    <div class="modal bg-white p-5 w-[600px] absolute top-14 rounded" @click.stop>
      <!-- <slot name="test">test</slot> -->
      <span><i class="far fa-folder-open"></i> Klasör</span>
      <div class="flex flex-col border rounded mt-3 transition-all duration-1000">
        <input
          class="outline-none w-full px-1 pl-2 pt-2"
          placeholder="ör., 2 günde bir Portekizce öğren #Öğrenme"
          type="text"
          v-model="Data.title"
        />
        <textarea
          class="mt-2 px-2 w-full text-sm font-light outline-none resize-none"
          rows="10"
          placeholder="Açıklama"
          v-model="Data.text"
        ></textarea>

        <div class="flex items-center justify-between">
          <div class="w-36 m-2 flex items-center relative"></div>
          <div class="space-x-2 mr-2">
            <button
              @click="$emit('close-modal')"
              class="bg-red-600 text-white px-3 py-1 text-sm font-light"
            >
              İptal
            </button>
            <button class="bg-green-600 text-white px-3 py-1 text-sm font-light">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onActivated, onBeforeMount, onMounted, onUpdated, ref, watch } from "vue";

const Data = defineProps(["data"]);

const Test = computed(() => {
  console.log(Data);
});
// const addTodoItem = ref({
//   text: "null",
//   title: "null",
// });
watch(Data, () => {
  console.log("Data");
});
</script>

<style scoped>
.modal-overlay {
}
.modal {
}
/* .modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
} */

/* .modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
} */
/* .close {
  margin: 10% 0 0 16px;
  cursor: pointer;
} */
/* 
.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
} */
</style>