<template>
  <main class="flex-grow flex flex-col px-margin-mobile md:px-margin-desktop py-12 pt-28 lg:ml-64 texture-asphalt relative z-10">
    <!-- Hero Section -->
    <header class="mb-section-gap relative">
      <h1 class="font-display-lg text-display-lg text-primary uppercase mb-4 tracking-tighter">The Road Map</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-4 border-primary pl-4">Upcoming rides, rallies, and custom builds. Plan your next run with the pack.</p>
    </header>

    <!-- Timeline Container -->
    <div class="relative pl-8 md:pl-16 space-y-12">
      <!-- Central dashed line -->
      <div class="absolute left-[15px] md:left-[31px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-outline-variant z-0"></div>

      <!-- Event 1 -->
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
        <div class="absolute -left-8 md:-left-16 top-6 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border-4 border-background shadow-[0_0_15px_rgba(255,95,0,0.5)]">
          <span class="material-symbols-outlined text-on-primary-container text-sm">flag</span>
        </div>
        <div class="md:col-span-3">
          <p class="font-headline-lg text-headline-lg text-secondary-container uppercase">OCT 14</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">21:00 HRS</p>
        </div>
        <div class="md:col-span-9">
          <div class="bg-[#1E1E1E] border-t-4 border-primary border-l border-r border-b border-white/10 p-6 relative overflow-hidden transition-transform group-hover:-translate-y-1">
            <div class="absolute inset-0 opacity-20 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIV65X2TF-OQ7Nrmee_RuSTx4qog1MUVMQLUJL-NCJ8Rf9xPikuPD_d_qVRqypZWOhz1nnB0Gy7McfpUZwukAaqWfCKcOAJKkbXBpArq4qCpWcUk-4qzgo0LhkgBIWncwDkzELMD1F8Kq07-qVRKVCEy4009eGu3YVxkB8dJHP-Cjv7-ZbNTgePAP8CZj_VaG9gnEw_-p8Yrm232iSRhN2WrktDNjhnj0-iVLbS1qOTUaMVaLX__SOCi2Z_vSdib3jncQlA9wvyHaV');"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/80 to-transparent"></div>
            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 class="font-headline-xl text-3xl text-on-surface uppercase mb-2">Midnight City Run</h3>
                <div class="flex flex-wrap gap-3 mb-4">
                  <span class="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded text-primary">URBAN</span>
                  <span class="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded text-error">DIFFICULTY: HARD</span>
                  <span class="font-label-sm text-label-sm flex items-center gap-1 text-on-surface-variant"><span class="material-symbols-outlined text-sm">location_on</span> DOWNTOWN GRID</span>
                </div>
                <p class="font-body-md text-on-surface-variant max-w-lg">High-speed navigation through the concrete jungle. Expect tight corners and heavy traffic. Full protective gear mandatory.</p>
              </div>
              <button class="bg-primary-container text-on-primary-container font-headline-lg text-xl px-6 py-3 uppercase hover:bg-secondary-container transition-colors whitespace-nowrap shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]">Register for Ride</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t-[1px] border-dashed border-outline-variant opacity-50 ml-8 md:ml-16"></div>

      <!-- Event 2 -->
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
        <div class="absolute -left-8 md:-left-16 top-6 w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border-4 border-background">
          <span class="material-symbols-outlined text-on-surface text-sm">route</span>
        </div>
        <div class="md:col-span-3">
          <p class="font-headline-lg text-headline-lg text-on-surface uppercase">NOV 02</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">06:00 HRS</p>
        </div>
        <div class="md:col-span-9">
          <div class="bg-[#1E1E1E] border-t-4 border-secondary border-l border-r border-b border-white/10 p-6 relative overflow-hidden transition-transform group-hover:-translate-y-1">
            <div class="absolute inset-0 opacity-10 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmImiiO12XOdVeK-tt3p28qwfAp1AaLW9fzumyPc52SQBccD4qyw9OmLYKhdDOA4FBL72X1KORyOfHNfD1HMPkWjqWGmaHopdcDc913s6rUE0TBruSukqNtL7-EgsiHzJCyBa7CcOO0Yj3akIhK41CXHMGwrkfgVgFO9YPiIlBxKX2pWaF5F0nbK76GHBhb31oxBAuoorqie7R67FpyNL4m5bUP4hK2LtHAoKJugzJ5hMS2wdh9a_ghcOwmuHlz8kZU6581ZKjQ7jQ');"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/90 to-[#1E1E1E]/50"></div>
            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 class="font-headline-xl text-3xl text-on-surface uppercase mb-2">Mountain Pass Tour</h3>
                <div class="flex flex-wrap gap-3 mb-4">
                  <span class="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded text-secondary-container">ENDURANCE</span>
                  <span class="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded text-tertiary">DIFFICULTY: MED</span>
                  <span class="font-label-sm text-label-sm flex items-center gap-1 text-on-surface-variant"><span class="material-symbols-outlined text-sm">location_on</span> NORTHERN RANGES</span>
                </div>
                <p class="font-body-md text-on-surface-variant max-w-lg">A gruelling 300km ride through winding elevation changes. Bring spare parts and cold-weather gear.</p>
              </div>
              <button class="bg-transparent border-2 border-white/10 text-on-surface font-label-sm text-sm px-6 py-4 uppercase hover:border-secondary hover:text-secondary transition-colors whitespace-nowrap">View Details</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t-[1px] border-dashed border-outline-variant opacity-50 ml-8 md:ml-16"></div>

      <!-- Event 3 -->
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
        <div class="absolute -left-8 md:-left-16 top-6 w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border-4 border-background">
          <span class="material-symbols-outlined text-on-surface text-sm">build</span>
        </div>
        <div class="md:col-span-3">
          <p class="font-headline-lg text-headline-lg text-on-surface uppercase">DEC 15</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">ALL DAY</p>
        </div>
        <div class="md:col-span-9">
          <div class="bg-[#1E1E1E] border-t-4 border-tertiary border-l border-r border-b border-white/10 p-6 relative overflow-hidden transition-transform group-hover:-translate-y-1">
            <div class="absolute inset-0 opacity-10 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbAHWHTimfEAD_9jJOgrWu2TJ7rT8krF9V95XY-0l8WFm5wyj6IS4UayQb8-B5Qv3WN10aKpQsJaXwp4VTvWzvobvzrjmpi4s3EdbrKND3U_XTpGgrEFjowYoOz_TySDyt4oLQil9aQJnkAaYH0b4ru3SPhobvE5qvRcGI7Q5W-7l57SzjPXQjGNQpaIsekWJVDfDALxes5xLM9h-htHpeYP3aFFHjdw44MNnhrZY5N5Y77-lscn1CSMmJbldSsUnuJWS71G0UIAYe');"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/90 to-[#1E1E1E]/50"></div>
            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 class="font-headline-xl text-3xl text-on-surface uppercase mb-2">Custom Bike Expo</h3>
                <div class="flex flex-wrap gap-3 mb-4">
                  <span class="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded text-tertiary">SOCIAL</span>
                  <span class="font-label-sm text-label-sm bg-surface-container-high px-2 py-1 rounded text-primary">SHOWCASE</span>
                  <span class="font-label-sm text-label-sm flex items-center gap-1 text-on-surface-variant"><span class="material-symbols-outlined text-sm">location_on</span> THE OLD FOUNDRY</span>
                </div>
                <p class="font-body-md text-on-surface-variant max-w-lg">Show off your winter build. Judged categories include Best Paint, Best Engineering, and Rat Bike.</p>
              </div>
              <button class="bg-transparent border-2 border-white/10 text-on-surface font-label-sm text-sm px-6 py-4 uppercase hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">Enter Build</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter :with-sidebar="true" class="mt-section-gap" />
  </main>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
</script>
