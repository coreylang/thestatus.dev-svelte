<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import footerLogoSrc from '$lib/assets/footer-logo.png';

  let showTop: boolean = false;

  let currentPath: string = '';

  onMount(() => {
    currentPath = window.location.pathname;
  });

  onMount(() => {
    const onScroll = () => (showTop = window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>
<footer class="bg-[#1C3D5A] text-white">
  <div class="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
    <div class="flex items-center gap-3">
      <img 
        src={footerLogoSrc}
        alt="The Status Logo" 
        class="w-auto h-32"
      />
    </div>
    <div>
      <nav class="flex gap-6 text-sm font-medium mb-2.5">
        {#if !currentPath.includes('auth')}
          <a href="{base}/#about" class="hover:underline">About</a>
          <a href="{base}/#how-it-works" class="hover:underline">How It Works</a>
          <a href="{base}/#faq" class="hover:underline">FAQ</a>
        {:else}
          <a href="{base}" class="hover:underline">Home</a>
        {/if}
      </nav>
      <nav class="flex gap-6 text-sm font-medium">
        <a href="{base}/auth/login" class="hover:underline">Login</a>
        <a href="{base}/auth/signup" class="hover:underline">Signup</a>
      </nav>
    </div>

  </div>
  <div class="border-t border-white/20">
    <div class="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-white/70">
      &copy; {new Date().getFullYear()} The Status. All rights reserved.
    </div>
  </div>
</footer>
<a
  href="#top"
  aria-label="Back to top"
  class="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#1C3D5A] text-white shadow-lg hover:bg-black transition-all duration-200"
  style="transform: translateY({showTop ? '0' : '16px'}); opacity: {showTop ? 1 : 0}; pointer-events: {showTop ? 'auto' : 'none'};"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
  </svg>
</a>
