<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Centering container -->
    <div class="flex mx-auto w-full">
      <!-- Sidebar -->
      <div class="flex-shrink-0 mr-[15px]">
        <SideBar />
      </div>

      <!-- Page Content -->
      <div class="flex-grow mt-[15px]">
        <PageContent />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
import PageContent from "./components/PageContent.vue";

</script>
