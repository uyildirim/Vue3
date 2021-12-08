<template>
  <div
    v-show="!missionToggleAdd"
    class="flex flex-col border rounded mt-3 transition-all duration-1000"
  >
    <input
      class="outline-none w-full px-1 pl-2 pt-2"
      placeholder="ör., 2 günde bir Portekizce öğren #Öğrenme"
      type="text"
      v-model="addTodoItem.title"
    />
    <textarea
      class="mt-2 px-2 w-full text-sm font-light outline-none resize-none"
      rows="3"
      placeholder="Açıklama"
      v-model="addTodoItem.text"
    ></textarea>
    <div class="flex items-center justify-between">
      <div class="w-36 m-2 flex items-center relative">
        <Datepicker
          v-model="addTodoItem.date"
          :clearable="true"
          ref="dp"
          :enableTimePicker="false"
          :format="format"
          :previewFormat="format"
        >
          <template #dp-input="{ value, onInput, onEnter, onTab }">
            <div class="flex items-center gap-2 p-1 border rounded text-sm font-light">
              <CalendarIcon class="w-5 h-5" />
              <input
                placeholder="Zaman ayarla"
                class="w-full outline-none"
                type="text"
                :value="value"
              />
            </div>
          </template>
          <template #calendar-header="{ index, day }">
            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
              {{ day }}
            </div>
          </template>
          <template #action-select>
            <p class="bg-green-600 text-white text-center" @click="selectDate">Uygula</p>
          </template>
          <template #clear-icon> x </template>
        </Datepicker>
        <BackspaceIcon class="w-4 h-4 text-red-500 absolute right-2" v-show="date" @click="sil" />
      </div>
      <div class="space-x-2 mr-2">
        <button @click="sil" class="bg-red-600 text-white px-3 py-1 text-sm font-light">
          İptal
        </button>
        <button @click="AddTodo" class="bg-green-600 text-white px-3 py-1 text-sm font-light">
          Kaydet
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>