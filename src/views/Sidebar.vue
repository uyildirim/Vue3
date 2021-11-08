<template>
  <div id="sideBar" class="w-[305px] h-full bg-gray-100 flex-shrink-0">
    <div class="pt-7 ml-8 pr-2 space-y-1">
      <!-- Folder -->
      <div class="p-2 bg-gray-200 bg-opacity-80 rounded">
        <a class="flex justify-between items-center" href="#">
          <div class="flex">
            <folder-icon class="text-blue-500 mr-2" />
            <span class="font-light">Klasör</span>
          </div>
          <span class="font-light text-xs text-gray-600">7</span>
        </a>
      </div>
      <!-- Folder End -->
      <div class="p-2 rounded">
        <a class="flex justify-between items-center" href="#">
          <div class="flex">
            <today-icon class="text-green-600 mr-2" />
            <span class="font-light">Bügün</span>
          </div>
          <span class="font-light text-xs text-gray-600">7</span>
        </a>
      </div>

      <Disclosure as="div" class="pt-4 ml-3" v-slot="{ open }">
        <DisclosureButton class="flex w-full">
          <arrow-icon :class="open ? 'transform rotate-0' : 'transform -rotate-90'" class="transition-all w-4 h-4 mr-2" />
          <span class="w-full text-left text-gray-700 font-semibold">Projeler</span>
        </DisclosureButton>

        <div>
          <DisclosurePanel class="mt-2">
            <span class="project px-1" style="color: rgb(184, 184, 184)"></span>
            <span class="px-1 text-sm font-light">Hoş Geldin 👋</span>
          </DisclosurePanel>
          <DisclosurePanel class="mt-2">
            <span class="project px-1" style="color: rgb(184, 184, 184)"></span>
            <span class="px-1 text-sm font-light">Hoş Geldin 👋</span>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import folderIcon from "../assets/icon/folderIcon.vue";
import todayIcon from "../assets/icon/todayIcon.vue";
import arrowIcon from "../assets/icon/arrowIcon.vue";

// const open = ref(true);

// const toggle = () => {
//   return (open.value = !open.value);
// };
</script>

<style>
</style>