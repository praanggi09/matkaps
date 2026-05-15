<template>
  <main class="flex-1 lg:ml-64 relative min-h-screen pt-28 z-10">
    <div class="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-surface-container-highest pb-8">
        <div>
          <h2 class="font-display-lg text-display-lg text-on-surface uppercase tracking-tighter">THE PACK</h2>
          <p class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Brotherhood Forged in Oil &amp; Asphalt</p>
        </div>
        <div class="flex gap-4">
          <button class="bg-transparent border-2 border-tertiary text-on-surface font-label-sm text-label-sm uppercase px-6 py-3 hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined text-lg">filter_list</span>
            Filter Roster
          </button>
        </div>
      </div>

      <!-- Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
        <!-- Member Card 1 -->
        <div class="bg-[#1E1E1E] border-t-4 border-primary p-6 relative group overflow-hidden texture-asphalt border border-surface-bright/20">
          <div class="absolute top-0 right-0 bg-surface-container p-2 border-l border-b border-surface-bright/20">
            <span class="font-label-sm text-label-sm text-on-surface-variant">001</span>
          </div>
          <div class="flex items-start gap-6 mb-6">
            <div class="w-24 h-24 bg-surface-container-lowest border border-surface-bright/30 p-1 shrink-0">
              <img alt="Mat Kaput" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP3XSkG1z39tVtfb4msKuyCuGH4riTUIforNnqPEDuuQdgjiXDpmzJHQpbU0oIGmYW_suNi_Is0yY8_YuFOyZbSGg-QSd-J2_ynfNtL5OzLG_WhabiT2gzs6qfxG49Xgg1l3ZN82GnD_qEIGCza4yk9mK9KFg87ftAs2Ist6-az0wyf0vulfd1t8MOzpKkfBKJXKrhwj2gwjPJNkKhGTjcj-WmcvAXCvkBcYLxwo4-byNjZp-j5NmTgDz00u4wRfnVTUX6cNgPgD1-" />
            </div>
            <div>
              <h3 class="font-headline-xl text-headline-lg text-on-surface uppercase mb-1">Mat Kaput</h3>
              <div class="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 border border-surface-bright/10 rounded-sm">
                <span class="material-symbols-outlined text-primary text-sm">build</span>
                <span class="font-label-sm text-label-sm text-primary uppercase">Lead Mechanic</span>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between font-label-sm text-label-sm mb-1">
                <span class="text-on-surface-variant">RPM / Rep</span>
                <span class="text-primary">9,500</span>
              </div>
              <div class="w-full h-2 bg-surface-container-highest rounded-none overflow-hidden border border-surface-bright/10">
                <div class="h-full bg-primary-container w-[95%] shadow-[0_0_10px_rgba(255,95,0,0.5)]"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">1200CC</span>
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">V-TWIN</span>
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">CUSTOM BUILD</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-dashed border-surface-bright/30 flex justify-end">
            <button class="text-primary hover:text-secondary-container font-label-sm text-label-sm uppercase flex items-center gap-1 transition-colors">
              View Specs <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- Member Card 2 -->
        <div class="bg-[#1E1E1E] border-t-4 border-secondary-container p-6 relative group overflow-hidden texture-asphalt border border-surface-bright/20">
          <div class="absolute top-0 right-0 bg-surface-container p-2 border-l border-b border-surface-bright/20">
            <span class="font-label-sm text-label-sm text-on-surface-variant">002</span>
          </div>
          <div class="flex items-start gap-6 mb-6">
            <div class="w-24 h-24 bg-surface-container-lowest border border-surface-bright/30 p-1 shrink-0">
              <img alt="Mat Bule" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1bQcvpq68jNsClg95yTexQ_lF9zMIZL_JdCAR3v4ri5WhASwhq2A2fbsXuheO4HbuI21RoueGpl_XuzLZvX9mdMSmQZVeCsW5VCkSJwG_eC9qMcP_YBM1gU4oKmqiBq88MTAvhRCVgFif23-RtaZn7rTZ6y9lKk5MyfPH1Tsgy495QVsrIruVcOE-TzsJ4ptqkyJ79FOap66G_OXoV4dA0S5ng71iTw0G5Kj_vHW-8Dz_MEjCnNvG9gL_zcfWzuTVPBMhoaHe25Qo" />
            </div>
            <div>
              <h3 class="font-headline-xl text-headline-lg text-on-surface uppercase mb-1">Mat Bule</h3>
              <div class="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 border border-surface-bright/10 rounded-sm">
                <span class="material-symbols-outlined text-secondary-container text-sm">explore</span>
                <span class="font-label-sm text-label-sm text-secondary-container uppercase">Road Captain</span>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between font-label-sm text-label-sm mb-1">
                <span class="text-on-surface-variant">RPM / Rep</span>
                <span class="text-secondary-container">8,200</span>
              </div>
              <div class="w-full h-2 bg-surface-container-highest rounded-none overflow-hidden border border-surface-bright/10">
                <div class="h-full bg-secondary-container w-[82%] shadow-[0_0_10px_rgba(255,219,60,0.5)]"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">TOURING</span>
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">NAVIGATOR</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-dashed border-surface-bright/30 flex justify-end">
            <button class="text-secondary-container hover:text-primary font-label-sm text-label-sm uppercase flex items-center gap-1 transition-colors">
              View Specs <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- Member Card 3 -->
        <div class="bg-[#1E1E1E] border-t-4 border-outline-variant p-6 relative group overflow-hidden texture-asphalt border border-surface-bright/20">
          <div class="absolute top-0 right-0 bg-surface-container p-2 border-l border-b border-surface-bright/20">
            <span class="font-label-sm text-label-sm text-on-surface-variant">003</span>
          </div>
          <div class="flex items-start gap-6 mb-6">
            <div class="w-24 h-24 bg-surface-container-lowest border border-surface-bright/30 p-1 shrink-0">
              <img alt="Mat Mood" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi5G72GVKdzHaW6w4E39n220zYtWtoAgLfP_TjPeo5w5G9S5vNppOxyDOvuephqMfcdeGeK0OYNz2AI5xuZ5SWEwSZXIWF-0z9rm2GF-YDFtHNhlbGR-t0S4zNYev5YmxDx-L2aDc4FrdJwCa09oKIj90TfvStitpDQhWC6MIIIH5TNZXgjw2e5-YtQXIEwBF7lXa3snEWOIoB2tbwPuQ_ZGdzbUIz3EdvciO43WIJKP-Jq8OKW7OfAGAl_p2fUWHEX0qVXy8sE_NA" />
            </div>
            <div>
              <h3 class="font-headline-xl text-headline-lg text-on-surface uppercase mb-1">Mat Mood</h3>
              <div class="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 border border-surface-bright/10 rounded-sm">
                <span class="material-symbols-outlined text-outline text-sm">military_tech</span>
                <span class="font-label-sm text-label-sm text-outline uppercase">Veteran</span>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between font-label-sm text-label-sm mb-1">
                <span class="text-on-surface-variant">RPM / Rep</span>
                <span class="text-outline">12,000</span>
              </div>
              <div class="w-full h-2 bg-surface-container-highest rounded-none overflow-hidden border border-surface-bright/10">
                <div class="h-full bg-outline w-full shadow-[0_0_10px_rgba(171,138,125,0.3)]"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">CLASSIC</span>
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">FOUNDER</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-dashed border-surface-bright/30 flex justify-end">
            <button class="text-outline hover:text-primary font-label-sm text-label-sm uppercase flex items-center gap-1 transition-colors">
              View Specs <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- Member Card 4 -->
        <div class="bg-[#1E1E1E] border-t-4 border-primary p-6 relative group overflow-hidden texture-asphalt border border-surface-bright/20">
          <div class="absolute top-0 right-0 bg-surface-container p-2 border-l border-b border-surface-bright/20">
            <span class="font-label-sm text-label-sm text-on-surface-variant">004</span>
          </div>
          <div class="flex items-start gap-6 mb-6">
            <div class="w-24 h-24 bg-surface-container-lowest border border-surface-bright/30 p-1 shrink-0">
              <img alt="Mat Pelor" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3qXchuZS2UBS12ferpXlI0VI3rzZ1iPW_EOIi9S3Klp4p2Js13E6W-fuK1n5yIHgOrlCmAEgP2t-bz9OJ9wSW44ksuJ2QzjFtGEyarVqPRdz-EFjfIZ0U6aF_S27nZur08InKKuEifyd9U2lDkWuth926Pf3ykibfDhyGzmSkPFnEFhq-DE-gUUa0Z7RcDgfyoAtI3XRawjdWvFx91XVYL6zl77aQYLiUDYamQDCrM5Q1FcUKxcfFgvsJCBb6Nu7D2Dy4Vhlz7Vg2" />
            </div>
            <div>
              <h3 class="font-headline-xl text-headline-lg text-on-surface uppercase mb-1">Mat Pelor</h3>
              <div class="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 border border-surface-bright/10 rounded-sm">
                <span class="material-symbols-outlined text-primary text-sm">speed</span>
                <span class="font-label-sm text-label-sm text-primary uppercase">Sprinter</span>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between font-label-sm text-label-sm mb-1">
                <span class="text-on-surface-variant">RPM / Rep</span>
                <span class="text-primary">6,400</span>
              </div>
              <div class="w-full h-2 bg-surface-container-highest rounded-none overflow-hidden border border-surface-bright/10">
                <div class="h-full bg-primary-container w-[64%] shadow-[0_0_10px_rgba(255,95,0,0.5)]"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">SPORT</span>
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">TRACK ONLY</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-dashed border-surface-bright/30 flex justify-end">
            <button class="text-primary hover:text-secondary-container font-label-sm text-label-sm uppercase flex items-center gap-1 transition-colors">
              View Specs <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- Member Card 5 -->
        <div class="bg-[#1E1E1E] border-t-4 border-primary p-6 relative group overflow-hidden texture-asphalt border border-surface-bright/20">
          <div class="absolute top-0 right-0 bg-surface-container p-2 border-l border-b border-surface-bright/20">
            <span class="font-label-sm text-label-sm text-on-surface-variant">005</span>
          </div>
          <div class="flex items-start gap-6 mb-6">
            <div class="w-24 h-24 bg-surface-container-lowest border border-surface-bright/30 p-1 shrink-0">
              <img alt="Mat Solar" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4OeicnXhgXG3LPvoETXSDycINilk_gJgClfEFm3L_kXQ6mWkoWCWCiSFgng9XOYNb9XgNIOQpzrkjBALne3Vp_0TDdh0sqDNSLv4o-TDnedqyOYZzF3syZ5nnukQJHswtL2lB0_G5zNkcrdEbVjTXOALh3yIgFfX30GKJio5_YOcWmz4Gjf5tgvzZ6vbdVSX83wI3M3ipRuOxNYUTyFfNPB08-imwZf_97c0Lv6ilNsWVC0dokQHyRGoeKXydOJSg9hR83utjSghT" />
            </div>
            <div>
              <h3 class="font-headline-xl text-headline-lg text-on-surface uppercase mb-1">Mat Solar</h3>
              <div class="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 border border-surface-bright/10 rounded-sm">
                <span class="material-symbols-outlined text-primary text-sm">local_gas_station</span>
                <span class="font-label-sm text-label-sm text-primary uppercase">Heavy Hauler</span>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between font-label-sm text-label-sm mb-1">
                <span class="text-on-surface-variant">RPM / Rep</span>
                <span class="text-primary">4,800</span>
              </div>
              <div class="w-full h-2 bg-surface-container-highest rounded-none overflow-hidden border border-surface-bright/10">
                <div class="h-full bg-primary-container w-[48%] shadow-[0_0_10px_rgba(255,95,0,0.5)]"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">CRUISER</span>
              <span class="bg-surface-container px-2 py-1 font-label-sm text-[10px] text-on-surface-variant border border-surface-bright/20">LONG HAUL</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-dashed border-surface-bright/30 flex justify-end">
            <button class="text-primary hover:text-secondary-container font-label-sm text-label-sm uppercase flex items-center gap-1 transition-colors">
              View Specs <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- Join CTA Card -->
        <div class="bg-surface-container-lowest border-2 border-dashed border-surface-bright/30 p-6 flex flex-col items-center justify-center text-center min-h-[300px] hover:border-primary/50 transition-colors group">
          <div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(255,95,0,0.3)]">
            <span class="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-on-primary">add</span>
          </div>
          <h3 class="font-headline-xl text-headline-lg text-on-surface uppercase mb-2">Think you got what it takes?</h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xs">Earn your patch. Build your rep. Ride with the Mat Buaya.</p>
          <button class="bg-primary-container text-on-primary font-headline-lg text-headline-lg-mobile uppercase px-8 py-3 hover:bg-secondary-container transition-colors shadow-[0_0_10px_rgba(255,95,0,0.2)]">
            Join the Pack
          </button>
        </div>
      </div>
    </div>

    <AppFooter :with-sidebar="true" />
  </main>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
</script>
