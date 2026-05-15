<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 bg-background/95 backdrop-blur-sm border-b-8 border-surface-container-highest">
    <div class="flex items-center">
      <router-link to="/" class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase">MAT BUAYA</router-link>
    </div>
    <div class="hidden md:flex gap-8 items-center">
      <router-link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="[
          'font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase transition-all duration-100 px-2 py-1',
          isActive(link.to)
            ? 'text-primary border-b-2 border-primary pb-1 skew-x-[-12deg]'
            : 'text-on-surface-variant hover:text-primary hover:bg-primary hover:text-on-primary'
        ]"
      >
        {{ link.label }}
      </router-link>
    </div>
    <div class="flex items-center gap-4">
      <button class="hidden md:block bg-primary-container text-on-primary-container font-headline-lg px-6 py-2 uppercase chamfered hover:bg-secondary-container transition-colors">Join the Pack</button>
      <span class="material-symbols-outlined text-primary cursor-pointer hover:text-secondary-container transition-colors" style="font-size: 32px;">account_circle</span>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { to: '/garage', label: 'Garage' },
  { to: '/roadmap', label: 'Road Map' },
  { to: '/workshop', label: 'Workshop' },
  { to: '/paddock', label: 'Paddock' },
]

function isActive(path) {
  return route.path === path
}
</script>
