<template>
  <main class="relative z-10 pt-20">
    <!-- Hero Section -->
    <header class="relative min-h-[819px] flex items-center px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b-8 border-surface-container-highest">
      <div class="absolute inset-0 z-0">
        <img
          alt="Motorcycle Hero"
          class="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRWNhCtfpbB9rIr8CmKLf1-FgtLL6ub64b8i2GhNhmjqf3Kcr5cxCwuQEwlsiiYxcLiMPH3866C0468j-fJGMOvyYPbWypUg0vZaZ9Oxq02zWEWDAdp_rKXSqfyNYAGfVUgMNFXvMw6wtSOwhEsnXcAdRDb5Ikq2ySvhjH_c_jWzPIgqIaEP8ir2LkxHFVyChWH6r8oYS06okfT9Tklr4r_F1DiGxSx--N_eqxsRwx9VijEveZLeaqKObQeMfJ9eJZfaaqCsq4JoBd"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-4xl grid grid-cols-1 gap-6">
        <h1 class="font-display-lg text-display-lg text-on-background uppercase leading-none">
          Built for the <br /><span class="text-primary-container">Open Road</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Join a community forged in grit and mechanical precision. We ride hard, wrench harder, and leave the clean aesthetic in the dust.
        </p>
        <div class="flex gap-4 mt-4">
          <button class="bg-primary-container text-surface-container-lowest font-headline-xl text-headline-xl uppercase px-8 py-4 chamfered hover:bg-secondary-container transition-colors shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]">
            Join the Pack
          </button>
          <router-link to="/garage" class="bg-transparent border-2 border-surface-variant text-on-background font-label-sm text-label-sm uppercase px-8 py-4 chamfered hover:border-outline transition-colors flex items-center">
            Explore Garage
          </router-link>
        </div>
      </div>
    </header>

    <!-- Latest Activities Section -->
    <section class="py-section-gap px-margin-mobile md:px-margin-desktop border-b-8 border-surface-container-highest bg-surface-container-lowest">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12">
        <div class="md:col-span-8 flex flex-col justify-end">
          <h2 class="font-headline-xl text-headline-xl text-on-background uppercase border-l-4 border-primary-container pl-4">Latest Activities</h2>
        </div>
        <div class="md:col-span-4 flex items-end justify-end">
          <router-link to="/roadmap" class="text-primary font-label-sm text-label-sm uppercase hover:text-secondary-container transition-colors flex items-center gap-2">
            View All Logbooks <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <!-- Activity Card 1 -->
        <div class="bg-[#1E1E1E] border-t-4 border-primary-container p-6 flex flex-col gap-4 relative group overflow-hidden">
          <div class="absolute inset-0 noise-bg"></div>
          <div class="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/10 transition-colors z-0"></div>
          <div class="relative z-10 flex justify-between items-start">
            <span class="bg-surface-container-highest text-tertiary-fixed px-2 py-1 font-label-sm text-label-sm uppercase chamfered">Ride Out</span>
            <span class="material-symbols-outlined text-outline-variant">map</span>
          </div>
          <h3 class="relative z-10 font-headline-lg text-headline-lg uppercase text-on-background mt-4">Midnight Run to the Canyons</h3>
          <p class="relative z-10 font-body-md text-body-md text-on-surface-variant line-clamp-2">A high-speed sprint through the twisting canyon roads under the moonlight. Bring your A-game and tight suspensions.</p>
          <div class="relative z-10 flex items-center gap-4 mt-auto pt-4 border-t border-surface-variant border-dashed">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">group</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">24 Riders</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">schedule</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Tonight, 22:00</span>
            </div>
          </div>
        </div>

        <!-- Activity Card 2 -->
        <div class="bg-[#1E1E1E] border-t-4 border-surface-variant p-6 flex flex-col gap-4 relative group overflow-hidden">
          <div class="absolute inset-0 noise-bg"></div>
          <div class="absolute inset-0 bg-surface-variant/0 group-hover:bg-surface-variant/20 transition-colors z-0"></div>
          <div class="relative z-10 flex justify-between items-start">
            <span class="bg-surface-container-highest text-tertiary-fixed px-2 py-1 font-label-sm text-label-sm uppercase chamfered">Wrench Session</span>
            <span class="material-symbols-outlined text-outline-variant">build</span>
          </div>
          <h3 class="relative z-10 font-headline-lg text-headline-lg uppercase text-on-background mt-4">Carb Tuning Masterclass</h3>
          <p class="relative z-10 font-body-md text-body-md text-on-surface-variant line-clamp-2">Learn the dark arts of balancing multi-carb setups. Bring your own tools, oil provided.</p>
          <div class="relative z-10 flex items-center gap-4 mt-auto pt-4 border-t border-surface-variant border-dashed">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">location_on</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Main Garage</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">calendar_today</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Oct 12</span>
            </div>
          </div>
        </div>

        <!-- Activity Card 3 -->
        <div class="bg-[#1E1E1E] border-t-4 border-surface-variant p-6 flex flex-col gap-4 relative group overflow-hidden">
          <div class="absolute inset-0 noise-bg"></div>
          <div class="absolute inset-0 bg-surface-variant/0 group-hover:bg-surface-variant/20 transition-colors z-0"></div>
          <div class="relative z-10 flex justify-between items-start">
            <span class="bg-surface-container-highest text-tertiary-fixed px-2 py-1 font-label-sm text-label-sm uppercase chamfered">Meetup</span>
            <span class="material-symbols-outlined text-outline-variant">local_cafe</span>
          </div>
          <h3 class="relative z-10 font-headline-lg text-headline-lg uppercase text-on-background mt-4">Sunday Morning Coffee &amp; Chrome</h3>
          <p class="relative z-10 font-body-md text-body-md text-on-surface-variant line-clamp-2">Show off your latest mods, grab a strong coffee, and talk shop before the weekend ends.</p>
          <div class="relative z-10 flex items-center gap-4 mt-auto pt-4 border-t border-surface-variant border-dashed">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-outline">group</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">50+ RSVP</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
</script>
