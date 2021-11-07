<template>
  <div id="header" class="bg-header-red flex justify-between h-11 items-center">
    <div class="flex ml-4">
      <div class="flex">
        <home-icon class="h-7 text-white items-center justify-center" />
      </div>

      <div class="relative h-7 ml-2 text-white focus-within:text-gray-600 group">
        <div class="absolute ml-1 h-7 flex items-center">
          <search-icon />
        </div>
        <input
          class="transition-all pl-8 h-7 bg-white bg-opacity-20 rounded font-light focus:w-80 focus:bg-white outline-none placeholder-white"
          type="text"
          placeholder="Ara"
          id="search"
        />
        <div class="group-focus-within:block hidden shadow bg-white mt-2 p-2">
          <ul>
            <li class="hover:bg-gray-400">Test</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex space-x-2 mr-4 items-center">
      <div>
        <plus-icon class="text-white hover:bg-white hover:bg-opacity-30 rounded h-8 w-8 p-1" />
      </div>
      <div>
        <help-icon class="text-white hover:bg-white hover:bg-opacity-30 rounded h-8 w-8 p-1" />
      </div>
      <div>
        <notification-icon class="text-white hover:bg-white hover:bg-opacity-30 rounded h-8 w-8 p-1" />
      </div>
      <div>
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton class="h-11">
            <img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/random/300x300" />
          </MenuButton>
          <MenuItems
            class="
              absolute
              right-0
              w-72
              p-3
              mt-2
              origin-top-right
              bg-white
              rounded-sm
              shadow-lg
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              divide-y
            "
          >
            <MenuItem disabled>
              <div class="flex">
                <img class="mr-3 w-11 h-11 rounded-full" src="https://source.unsplash.com/random/300x300" />
                <div class="user_menu_details_text">
                  <strong>Ulysses Mcclure</strong>
                  <p class="user_menu_email">jobomon496@epeva.com</p>
                </div>
              </div>
            </MenuItem>
            <MenuItem class="mt-3 pt-3">
              <div class="">
                <a class="flex p-2 items-center space-x-1 hover:bg-gray-200 hover:bg-opacity-30" href="#">
                  <setting-icon class="" />
                  <span> Ayarlar </span>
                </a>
                <a class="flex p-2 items-center space-x-1 hover:bg-gray-200 hover:bg-opacity-30" href="#">
                  <logoff-icon class="" />
                  <span> Çıkış Yap </span>
                </a>
              </div>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import homeIcon from "../assets/icon/homeIcon.vue";
import searchIcon from "../assets/icon/searchIcon.vue";
import plusIcon from "../assets/icon/plusIcon.vue";
import helpIcon from "../assets/icon/helpIcon.vue";
import settingIcon from "../assets/icon/settingIcon.vue";
import logoffIcon from "../assets/icon/logoffIcon.vue";
import notificationIcon from "../assets/icon/notificationIcon.vue";
</script>

<style>
</style>