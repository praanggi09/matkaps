<template>
  <footer class="w-full py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-lowest border-t-8 border-surface-container-highest z-20 relative" :class="{ 'lg:pl-[calc(16rem+64px)]': withSidebar }">
    <div class="flex flex-col gap-4">
      <div class="font-headline-lg text-on-surface uppercase">MAT BUAYA</div>
      <p class="font-label-sm text-label-sm text-on-surface-variant">© 2024 MAT BUAYA. BUILT FOR THE OPEN ROAD.</p>
    </div>
    <div class="flex flex-wrap gap-6 md:justify-end font-label-sm text-label-sm">
      <a class="text-on-tertiary-fixed-variant hover:text-on-surface hover:text-secondary transition-colors uppercase" href="#">Terms of Service</a>
      <a class="text-on-tertiary-fixed-variant hover:text-on-surface hover:text-secondary transition-colors uppercase" href="#">Privacy Policy</a>
      <a class="text-on-tertiary-fixed-variant hover:text-on-surface hover:text-secondary transition-colors uppercase" href="#">Partnerships</a>
      <a class="text-on-tertiary-fixed-variant hover:text-on-surface hover:text-secondary transition-colors uppercase" href="#">Contact Mechanic</a>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  withSidebar: {
    type: Boolean,
    default: false,
  }
})
</script>
