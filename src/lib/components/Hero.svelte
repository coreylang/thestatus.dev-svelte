<script lang="ts">
  import { onMount } from 'svelte';

  let status: 'preparing' | 'ready' = 'preparing';
  let progress = 0;
  let interval: number;

  onMount(() => {
    interval = window.setInterval(() => {
      progress = Math.min(progress + 2, 100);
      if (progress === 100) {
        status = 'ready';
        window.clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  });
</script>

<section class="relative isolate overflow-hidden">
  <!-- Background wash -->
  <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#F6F3EA] to-white"></div>

  <div class="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
    <!-- Status card -->
    <div class="mx-auto w-full max-w-xl rounded-2xl border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur">
      <div class="flex items-center gap-4">

        <!-- Status text -->
        <div class="min-w-0">
          <p class="text-sm tracking-wide text-[#1C3D5A]/70">Order Status</p>
          {#if status === 'preparing'}
            <div class="flex items-center gap-2">
              <span class="inline-flex h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
              <h2 class="text-2xl font-semibold text-[#1C3D5A]">Preparing</h2>
            </div>
          {:else}
            <div class="relative flex items-center gap-2">
              <!-- UPDATED: Subtle glow ring using animate-[ping_1.2s_ease-out] -->
              <span class="relative grid h-6 w-6 place-items-center">
                <span class="absolute inset-0 rounded-full bg-emerald-500/30 animate-[ping_1.2s_ease-out]"></span>
                <span class="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white">
                  <svg viewBox="0 0 20 20" class="h-4 w-4">
                    <path d="M7.5 11.5l-2-2L4 11l3.5 3.5L16 6l-1.5-1.5-7 7z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              <h2 class="text-2xl font-semibold text-[#1C3D5A]">Ready</h2>
            </div>
          {/if}
        </div>
      </div>

      <!-- Progress bar -->
      <div class="mt-6">
        <div class="h-2 w-full overflow-hidden rounded-full bg-black/10">
          <div
            class="h-full rounded-full bg-[#1C3D5A] transition-[width] duration-200 ease-out"
            style="width: {progress}%"
            aria-hidden="true"
          >
          </div>
        </div>
        <div class="mt-2 flex items-center justify-between text-sm text-[#1C3D5A]/70">
          <span>#{Math.floor(progress / 10)} • ETA {Math.max(0, Math.ceil((100 - progress) / 10))} min</span>
          <span>{progress}%</span>
        </div>
      </div>

      <!-- Live region -->
      <p class="sr-only" role="status" aria-live="polite">
        {status === 'preparing' ? `Order is preparing. ${progress} percent complete.` : 'Order is ready.'}
      </p>
    </div>

    <!-- Headline + CTA -->
    <div class="mx-auto mt-12 max-w-xl lg:mt-0">
      <h1 class="text-4xl font-extrabold tracking-tight text-[#1C3D5A] sm:text-5xl">
        Real-time kitchen status, made simple
      </h1>
      <p class="mt-4 text-lg text-[#1C3D5A]/80">
        Keep guests in the loop from prep to pickup. The Status updates automatically as your kitchen moves.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="#how-it-works"
          class="inline-flex items-center justify-center rounded-xl bg-[#1C3D5A] px-5 py-3 font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#1C3D5A]/40"
        >
          How It Works
        </a>
        <a
          href="#about"
          class="inline-flex items-center justify-center rounded-xl border border-[#1C3D5A]/30 bg-white px-5 py-3 font-semibold text-[#1C3D5A] hover:bg-[#F6F3EA]"
        >
          Learn more
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes steam {
    0% { transform: translateY(2px) scaleY(0.9); opacity: 0.0; }
    30% { opacity: 0.7; }
    60% { transform: translateY(-6px) scaleY(1.05); opacity: 0.9; }
    100% { transform: translateY(-10px) scaleY(1); opacity: 0.0; }
  }
  @media (prefers-reduced-motion: reduce) {
    [class*="animate-"] { animation: none !important; }
    .transition-\[width\] { transition: none !important; }
  }
</style>
