<template>
  <main class="flex-1 w-full lg:ml-64 pb-section-gap pt-28 relative z-10">
    <div class="px-margin-mobile md:px-margin-desktop py-12">
      <!-- Page Header -->
      <div class="mb-12 border-b-8 border-surface-container-highest pb-6">
        <h2 class="font-display-lg text-display-lg text-on-surface uppercase mb-4">The Workshop</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Gear heads unite. Technical breakdowns, gritty reviews, and tales from the garage floor. No fluff, just oil and metal.</p>
      </div>

      <!-- Featured Article -->
      <section class="mb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div class="lg:col-span-8 bg-surface-container-low border-t-4 border-primary relative group cursor-pointer overflow-hidden flex flex-col justify-end min-h-[500px]">
          <img
            alt="Motorcycle mechanic"
            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqjnsV6CQh4ZaUMhp0sYzxHYj10_wxusL5grmqi_1rafqYtyIefDgVbUxEPlhIGvSLlrxpTt054oLe_fnDwckxpIJ4Ez_i-uBvXtXD5OGUeVdpDZzUH4wY2jy5t40oe8fhf4SdjqUycloO5ajZJ9hgEUUnjuAUeyHSv442CpVkR9MA1wXMkoI7H0P43fQy92XeQkDuekB7vucH7mInpaLOThSZW-IIKbo1UkjjkcOBLiXXjZ1D_HxfYdLybKOaRWwexoSFYcyo4dCp"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div class="relative z-10 p-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 uppercase border border-primary">Maintenance</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Oct 12, 2023</span>
            </div>
            <h3 class="font-headline-xl text-headline-xl text-on-surface uppercase mb-4 group-hover:text-primary transition-colors">Rebuilding the Heart: A V-Twin Teardown Guide</h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl">We rip apart a classic block to find out why it ticks, and more importantly, how to put it back together without extra parts leftover.</p>
            <div class="flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest">
              Read Article <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col gap-gutter">
          <!-- Secondary Featured -->
          <div class="flex-1 bg-surface-container-low border-t-4 border-secondary relative group cursor-pointer overflow-hidden flex flex-col justify-end min-h-[240px]">
            <img
              alt="Motorcycle gear"
              class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByMRw1_6i4iGs0_hd_t2xvbeEbFvF1bjKyyec6MtBWtblISlqBqNrt2E-Rscq_Lq-use8SOs3DjmlN6hocQAXgZYOcvz7rcpRcPy4NqMmY_qw0wL4-BseeQO4ZYoBFWxy7IB4fu6y14Ga6ab9tZePU8vu1hJ5S5jjj0Z2HLrUttl9Oiji9yIU36S7tOS58Y4RzkwpWP1bPd7Mj5MHA48FFDeeRmiNnCVGca14xsQLOLkoIDOQLGw_oRLsxyUmBMxx7p-JgA3CBfOF2"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
            <div class="relative z-10 p-6">
              <span class="inline-block bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-1 uppercase mb-3">Review</span>
              <h4 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-2 group-hover:text-secondary transition-colors leading-tight">Armor for the Asphalt: Top Leathers of '24</h4>
            </div>
          </div>

          <!-- Tertiary Featured -->
          <div class="flex-1 bg-surface-container-low border border-outline-variant relative group cursor-pointer p-6 flex flex-col justify-between">
            <div>
              <span class="inline-block border border-outline text-outline font-label-sm text-label-sm px-2 py-1 uppercase mb-4">Story</span>
              <h4 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-2 group-hover:text-primary transition-colors leading-tight">10,000 Miles on a Hardtail</h4>
              <p class="font-body-md text-body-md text-on-surface-variant">Why suffering is part of the journey.</p>
            </div>
            <div class="mt-4 flex items-center justify-between border-t border-outline-variant border-dashed pt-4">
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">By Iron Mike</span>
              <span class="material-symbols-outlined text-outline">two_wheeler</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="w-full h-1 bg-surface-container-highest mb-12"></div>

      <!-- Recent Posts Grid -->
      <div class="flex items-center justify-between mb-8">
        <h3 class="font-headline-xl text-headline-xl text-on-surface uppercase">Recent Dispatches</h3>
        <div class="hidden md:flex gap-2">
          <button class="border border-outline-variant text-on-surface font-label-sm text-label-sm px-4 py-2 uppercase hover:border-primary hover:text-primary transition-colors">All</button>
          <button class="border border-outline-variant text-on-surface font-label-sm text-label-sm px-4 py-2 uppercase hover:border-primary hover:text-primary transition-colors">Tech</button>
          <button class="border border-outline-variant text-on-surface font-label-sm text-label-sm px-4 py-2 uppercase hover:border-primary hover:text-primary transition-colors">Culture</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter mb-section-gap">
        <!-- Article Card 1 -->
        <article class="bg-surface-container border border-surface-container-highest group hover:border-primary transition-colors flex flex-col h-full">
          <div class="h-48 overflow-hidden relative border-b border-surface-container-highest">
            <img
              alt="Motorcycle exhaust"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRZaTxzDIZHof4qUrZN12sFLLCoQaZtZSWBQFg6t2qYLfOfKA2AlZ-5pMwqhULuNeiJilTNrb4sidAuBN31tBlD-P60D674-wk_1KWawnbkylJ-hauyZJY-VeJg0x9BnC1xInVUVNBd7rv_RfhOeOprQdHGaXHG-SLvUqT87sW1_HAwoMnT4emjUF5uUR5K7mJEyXU0iUS1snZ8K4YT6YRPJbTuCdv_G8m5DrD2GAeOCv2WJhisiO8rEnmkDsSh-Zv22LzNhqBN3n"
            />
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-3">
              <span class="font-label-sm text-label-sm text-primary uppercase">Tech</span>
              <span class="text-on-surface-variant text-xs">&bull;</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">5 Min Read</span>
            </div>
            <h4 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-3 leading-tight">Tuning Your Carb for High Altitude</h4>
            <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">Don't let the mountains choke your engine. A quick guide to jetting adjustments on the fly.</p>
            <a class="font-label-sm text-label-sm text-on-surface uppercase tracking-widest border-b border-on-surface pb-1 self-start group-hover:text-primary group-hover:border-primary transition-colors" href="#">Read Full Post</a>
          </div>
        </article>

        <!-- Article Card 2 -->
        <article class="bg-surface-container border border-surface-container-highest group hover:border-primary transition-colors flex flex-col h-full">
          <div class="h-48 overflow-hidden relative border-b border-surface-container-highest">
            <img
              alt="Rider in rain"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYM_IOoGf5zjTFeRUAhDEH2MIebZSaiAjbIb1fHhH7gdZG14Oe7JimcJfKDvoNxQkaiVhJl1A9YyboBDR9apbshSsVhsCNzvAmhdIU5st61niceBp0kJkkTZ4w7TTA69ktT6_WPyXciKf8ENI7AcNKrE-RGwpmvxD-JAfqXM39K4RFYbi_CJZUkwRwOw4-aYiVLVSPBUIzniTfBq7Zw6eNIu7kNoDWr_esGciz8YG65NkFcrlVRNrzhfDtQmJ8f3N9iTyaTRwpK9jn"
            />
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-3">
              <span class="font-label-sm text-label-sm text-primary uppercase">Culture</span>
              <span class="text-on-surface-variant text-xs">&bull;</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">8 Min Read</span>
            </div>
            <h4 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-3 leading-tight">Embracing the Storm: Wet Weather Riding</h4>
            <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">Fair weather riders need not apply. How to stay upright and (mostly) dry when the sky opens up.</p>
            <a class="font-label-sm text-label-sm text-on-surface uppercase tracking-widest border-b border-on-surface pb-1 self-start group-hover:text-primary group-hover:border-primary transition-colors" href="#">Read Full Post</a>
          </div>
        </article>

        <!-- Article Card 3 -->
        <article class="bg-surface-container border border-surface-container-highest group hover:border-primary transition-colors flex flex-col h-full">
          <div class="h-48 bg-surface-container-high flex items-center justify-center border-b border-surface-container-highest relative overflow-hidden">
            <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px);"></div>
            <span class="material-symbols-outlined text-6xl text-outline-variant group-hover:text-primary transition-colors relative z-10" style="font-variation-settings: 'FILL' 1;">build_circle</span>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-3">
              <span class="font-label-sm text-label-sm text-primary uppercase">Review</span>
              <span class="text-on-surface-variant text-xs">&bull;</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">4 Min Read</span>
            </div>
            <h4 class="font-headline-lg text-headline-lg text-on-surface uppercase mb-3 leading-tight">Wrench Test: The 3/8" Drive Shootout</h4>
            <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">We torture tested five popular socket sets. Find out which one snapped and which one survived the breaker bar.</p>
            <a class="font-label-sm text-label-sm text-on-surface uppercase tracking-widest border-b border-on-surface pb-1 self-start group-hover:text-primary group-hover:border-primary transition-colors" href="#">Read Full Post</a>
          </div>
        </article>
      </div>

      <div class="flex justify-center">
        <button class="bg-transparent border-2 border-outline-variant text-on-surface font-label-sm text-label-sm px-8 py-4 uppercase hover:border-primary hover:text-primary transition-all flex items-center gap-2">
          Load More Oil Stains <span class="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </div>

    <!-- Footer -->
    <AppFooter :with-sidebar="true" />
  </main>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
</script>
