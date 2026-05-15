<template>
  <div class="flex flex-col min-h-screen relative texture-asphalt">
    <div class="fixed inset-0 noise-bg z-0"></div>
    <TopNavBar />
    <SideNavBar v-if="showSidebar" />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopNavBar from './components/TopNavBar.vue'
import SideNavBar from './components/SideNavBar.vue'

const route = useRoute()

const showSidebar = computed(() => {
  return route.path !== '/'
})
</script>
