<template>
  <div id="content" class="my-7 mx-32 w-full">
    <div class="border-b border-gray-200 border-opacity flex py-3">
      <div>
        <input
          v-model="open"
          class="form-checkbox rounded-full border border-gray-500 ring-0 w-[18px] h-[18px] mr-2"
          type="checkbox"
        />
      </div>
      <div>
        <span class="text-sm" :class="{ 'line-through': open }">Todo İtem 1</span>
        <div class="flex items-center gap-1 transition-all duration-1000" v-show="!open">
          <CalendarIcon class="w-3 h-3 text-red-700" />
          <span class="text-xs text-red-800">Dün</span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col border rounded mt-3">
        <input
          class="outline-none w-full px-1 pl-2 pt-2"
          placeholder="ör., 2 günde bir Portekizce öğren #Öğrenme"
          type="text"
        />
        <textarea
          class="mt-2 px-2 w-full text-sm font-light outline-none resize-none"
          rows="3"
          placeholder="Açıklama"
        ></textarea>
        <div>
          <div>
            <Menu>
              <MenuButton class="flex items-center gap-2 p-1 border rounded text-sm font-light m-2">
                <CalendarIcon class="w-4 h-4" /> Zamanı ayarla</MenuButton
              >
              <MenuItems>
                <MenuItem v-slot="{ active }">
                  <a :class="{ 'bg-blue-500': active }" href="/account-settings">
                    Account settings
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
            <!-- <v-calendar />
            <v-date-picker v-model="date" /> -->
          </div>
        </div>
      </div>

      <div class="flex gap-2 items-center mt-2 group cursor-pointer">
        <PlusIcon
          class="
            w-4
            h-4
            text-red-500 text-sm
            group-hover:bg-red-500
            group-hover:text-white
            group-hover:rounded-full
            group-hover:transition-all
            group-hover:p-1
          "
        /><span class="text-gray-500 text-sm group-hover:text-red-500 group-hover:transition-all"
          >Görev ekle</span
        >
      </div>
      <Calendar />
      <DatePicker v-model="date" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { CalendarIcon, PlusIcon } from "@heroicons/vue/outline";
// import { Calendar, DatePicker } from "v-calendar";

const open = ref(false);
const checked = ref(true);
const date = new Date();
</script>

<style scoped>
</style>
