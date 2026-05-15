<template>
  <aside class="hidden lg:flex flex-col py-8 px-4 gap-6 bg-surface-container-lowest h-full w-64 left-0 fixed top-20 border-r border-outline-variant z-40">
    <div class="flex flex-col items-center border-b border-outline-variant pb-6 mb-2">
      <div class="w-20 h-20 bg-surface-container-high rounded-full mb-4 border-2 border-primary overflow-hidden flex items-center justify-center">
        <span class="material-symbols-outlined text-primary" style="font-size: 40px;">person</span>
      </div>
      <h2 class="font-headline-lg text-headline-lg text-primary uppercase text-center">Rider Profile</h2>
      <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">V-TWIN ENTHUSIAST</p>
    </div>
    <nav class="flex flex-col gap-2 font-label-sm text-label-sm uppercase tracking-widest flex-grow">
      <router-link
        v-for="link in sideLinks"
        :key="link.to"
        :to="link.to"
        :class="[
          'flex items-center gap-3 p-3 transition-all',
          isActive(link.to)
            ? 'bg-primary text-on-primary font-bold brightness-125'
            : 'text-on-surface hover:bg-surface-variant hover:border-l-4 hover:border-primary'
        ]"
      >
        <span class="material-symbols-outlined">{{ link.icon }}</span>
        {{ link.label }}
      </router-link>
    </nav>
    <div class="mt-auto pt-6 border-t border-outline-variant">
      <button class="w-full btn-secondary font-label-sm py-3 uppercase tracking-widest">Upgrade Parts</button>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const sideLinks = [
  { to: '/garage', label: 'Garage', icon: 'settings_input_component' },
  { to: '/roadmap', label: 'Road Map', icon: 'map' },
  { to: '/workshop', label: 'Workshop', icon: 'handyman' },
  { to: '/paddock', label: 'Paddock', icon: 'gallery_thumbnail' },
  { to: '/pack', label: 'The Pack', icon: 'groups' },
]

function isActive(path) {
  return route.path === path
}
</script>
