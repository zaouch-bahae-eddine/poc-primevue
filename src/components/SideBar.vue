<template>
  <div class="sidebar-container">
    <Menu :model="items" class="h-[calc(100vh-30px)] rounded-xl mt-[15px] ml-[15px] bg-black" :class="`${isCollapsed ? 'w-6' : 'w-60'}`">
      <template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
          <img src="https://www.prelinker.com/s/img/logged/modules/global/logos/prelinker-white.png" alt="">
          <span v-show="!isCollapsed" class="text-xl font-semibold">Prelinker <span class="text-color-red">Admin</span></span>
          <Button v-ripple icon="pi pi-times" class="p-button-rounded p-button-text" @click="toggleSidebar" />
        </span>
      </template>
      <template #submenulabel="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
      </template>
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span v-show="!isCollapsed">{{ item.label }}</span>
          <Badge v-if="item.badge && !isCollapsed" class="ml-auto" :value="item.badge" />
          <span v-if="item.shortcut && !isCollapsed" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
        </a>
      </template>
      <template #end>
        <button v-ripple class="mt-[100%] relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 rounded-none cursor-pointer transition-colors duration-200">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
          <span v-show="!isCollapsed" class="inline-flex flex-col items-start">
            <span class="font-bold">Raymond Thai</span>
            <span class="text-sm">Admin</span>
          </span>
        </button>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menu from "primevue/menu";
import Badge from "primevue/badge";
import Avatar from "primevue/avatar";
import Button from "primevue/button";

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const items = ref([
  {
    separator: true
  },
  {
    label: 'Documents',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus',
        shortcut: '⌘+N'
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S'
      }
    ]
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        shortcut: '⌘+O'
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        shortcut: '⌘+Q'
      }
    ]
  },
  {
    separator: true
  }
]);
</script>

<style scoped>
.sidebar-container {
  position: relative;
  transition: width 0.3s ease;
}

.collapse-button {
  position: absolute;
  top: 10px;
  right: -20px;
  z-index: 10;
}

/* Add any additional styles you need here */
</style>