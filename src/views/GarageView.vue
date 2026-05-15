<template>
  <main class="flex-grow pt-28 pb-16 px-margin-mobile md:px-margin-desktop lg:ml-64 relative z-10">
    <!-- Header Section -->
    <header class="mb-12 border-b-8 border-surface-container-highest pb-8">
      <h1 class="font-display-lg text-display-lg text-on-surface uppercase mb-4">The Garage</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A showcase of raw power and custom builds from the MAT BUAYA brotherhood. Inspect the machines that dominate the asphalt.</p>
    </header>

    <!-- Filters -->
    <div class="flex flex-wrap gap-4 mb-10">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="[
          'font-label-sm text-label-sm uppercase tracking-widest px-6 py-2 skew-x-[-12deg] border transition-colors',
          activeFilter === filter
            ? 'bg-primary text-on-primary border-primary'
            : 'bg-transparent text-on-surface border-outline-variant hover:border-primary hover:text-primary'
        ]"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Garage Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
      <!-- Bike Card 1 -->
      <article class="bg-[#1E1E1E] border-t-4 border-primary border-x border-b border-outline-variant flex flex-col group relative overflow-hidden">
        <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
        <div class="h-64 bg-surface-container-lowest relative overflow-hidden">
          <img
            alt="Motorcycle"
            class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPr_dD1WTf26shnyNnXjrj67u9nzkDR8OzARvWGZ9Cy7xWElwywzw3jOTW73NJA88LfIlMJW-DrRJ-dXTCr5jtDmAi6Lfia44wfH2NP0heXU9p2eTfDXWN0VhHeKMGhE1z2D3wZ-Rd2DAP2ol2QZ0ZK2u3zUR1U8lgR6y0lturkQYrrzx7v-8Yaanl5gFg840Wx5oAvAcK4oXU2aUwqY1CSq5RAFdXXvolh1UoTaWnVDOSgRPwAOPeDGBC_sqSvKICEoF0xOLIkDxN"
          />
          <div class="absolute top-4 right-4 bg-surface/90 border border-outline-variant px-3 py-1 font-label-sm text-label-sm text-primary uppercase">Cruiser</div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-2">The Iron Stallion</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">1200CC</span>
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">V-TWIN</span>
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">CUSTOM EXHAUST</span>
          </div>
          <div class="mt-auto pt-4 border-t border-dashed border-outline-variant">
            <button class="w-full btn-secondary font-headline-lg text-headline-lg-mobile py-2 uppercase skew-x-[-12deg]">View Build</button>
          </div>
        </div>
      </article>

      <!-- Bike Card 2 -->
      <article class="bg-[#1E1E1E] border-t-4 border-secondary border-x border-b border-outline-variant flex flex-col group relative overflow-hidden">
        <div class="h-64 bg-surface-container-lowest relative overflow-hidden">
          <img
            alt="Motorcycle"
            class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2z8BqHi7JtoZV7Wm38Kl3fVcXvFJzX7B2EoKnctVpk-sFxQAr6gvX8UHoRUoeYfG4DN8kXmnhr42e3HIoCVubsvevjneXNvRxXyA0_Qx6DAaxZ8ta26_BLU7cd8v8XY4toVWYUHtV_Fg2wq4xyL6Oefn_PWkYs-noV_U5XzzVM-cCY6GCAJAhdwtRZXme669rwfTuNs5gYMz8rXlfTlJV9Quw91Wiv460fGgE2hbDU2L7QUaGp9arys2mT8Vd6dVkR8J3oQEVVimW"
          />
          <div class="absolute top-4 right-4 bg-surface/90 border border-outline-variant px-3 py-1 font-label-sm text-label-sm text-secondary uppercase">Sport</div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-2">Nightblade</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">998CC</span>
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">INLINE-4</span>
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">CARBON FIBER</span>
          </div>
          <div class="mt-auto pt-4 border-t border-dashed border-outline-variant">
            <button class="w-full btn-secondary font-headline-lg text-headline-lg-mobile py-2 uppercase skew-x-[-12deg]">View Build</button>
          </div>
        </div>
      </article>

      <!-- Bike Card 3 -->
      <article class="bg-[#1E1E1E] border-t-4 border-tertiary border-x border-b border-outline-variant flex flex-col group relative overflow-hidden">
        <div class="h-64 bg-surface-container-lowest relative overflow-hidden">
          <img
            alt="Motorcycle"
            class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBj1J4rsds0t-g7IpwYNfezV5hNA4z_MqPG_GdhrLPWYfdk8KHsvz1C6ryilZt-ZL-omnK5gLdJeOBjvv9qiN8ThcXRsQSqO48ScBji-BQKxuugj1CG8Xza04UL_UzH72bu5VYFIp_GycwGuD-yqP5we7b-OQ3nstmEM4y6xRdK-h4-yc5So-vAIqS7JFdoVxF11DjBeHqNrOpomw0WZ3CSwQBrFH9onQL8Dkxq5zqJoqfcTLGv7BcuoMUWw0Jy4X7EL3DeXxgx5g7"
          />
          <div class="absolute top-4 right-4 bg-surface/90 border border-outline-variant px-3 py-1 font-label-sm text-label-sm text-tertiary uppercase">Adventure</div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-2">Desert Nomad</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">1250CC</span>
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">BOXER</span>
            <span class="bg-surface-container border border-outline-variant px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">LIFTED KIT</span>
          </div>
          <div class="mt-auto pt-4 border-t border-dashed border-outline-variant">
            <button class="w-full btn-secondary font-headline-lg text-headline-lg-mobile py-2 uppercase skew-x-[-12deg]">View Build</button>
          </div>
        </div>
      </article>
    </div>

    <!-- Load More -->
    <div class="mt-16 flex justify-center border-t-8 border-surface-container-highest pt-8">
      <button class="btn-primary font-headline-lg text-headline-lg px-12 py-4 uppercase skew-x-[-12deg]">Load More Machines</button>
    </div>

    <AppFooter :with-sidebar="true" class="mt-16" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'

const filters = ['All Builds', 'Cruiser', 'Sport', 'Adventure', 'Custom']
const activeFilter = ref('All Builds')
</script>
