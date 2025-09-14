<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import headerLogoSrc from '$lib/assets/header-logo.png';

  let currentPath: string = '';
  let menuOpen: boolean = false;

  onMount(() => {
    currentPath = window.location.pathname;
  });

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<header class="flex justify-between items-center px-4 py-3 bg-white relative">
  <div class="flex items-center">
    <a href="{base}">
      <img src={headerLogoSrc} alt="The Status" class="inline mr-10" width="150" />
    </a>
    <nav class="hidden sm:flex gap-6 mt-5 group">
      {#if !currentPath.includes('auth')}
        <a href="{base}/#about" class="transition-colors duration-200 group-hover:text-gray-400 hover:text-black">About</a>
        <a href="{base}/#how-it-works" class="transition-colors duration-200 group-hover:text-gray-400 hover:text-black">How It Works</a>
        <a href="{base}/#faq" class="transition-colors duration-200 group-hover:text-gray-400 hover:text-black">FAQ</a>
      {:else}
        <a href="{base}" class="transition-colors duration-200 group-hover:text-gray-400 hover:text-black">Home</a>
      {/if}
    </nav>
  </div>
  <nav class="hidden sm:flex items-center gap-6 mt-5">
    <a href="{base}/auth/login">Login</a>
    <a href="{base}/auth/signup" class="rounded-xl bg-[#1C3D5A] p-2.5 text-white hover:bg-black">Signup</a>
  </nav>
  <button
    class="sm:hidden flex flex-col gap-1.5 focus:outline-none mt-5"
    on:click={toggleMenu}
    aria-label="Toggle menu"
  >
    <span class="block w-6 h-0.5 bg-black"></span>
    <span class="block w-6 h-0.5 bg-black"></span>
    <span class="block w-6 h-0.5 bg-black"></span>
  </button>
  {#if menuOpen}
    <div class="absolute top-28 left-0 w-full bg-white shadow-md sm:hidden z-50 rounded-bl-xl rounded-br-xl">
      <nav class="flex flex-col gap-4 p-4 border-t border-gray-200">
        {#if !currentPath.includes('auth')}
          <a href="#about" class="hover:text-black" on:click={() => (menuOpen = false)}>About</a>
          <a href="#how-it-works" class="hover:text-black" on:click={() => (menuOpen = false)}>How It Works</a>
          <a href="#faq" class="hover:text-black" on:click={() => (menuOpen = false)}>FAQ</a>
        {:else}
          <a href="/" class="hover:text-black" on:click={() => (menuOpen = false)}>Home</a>
        {/if}
        <hr class="border-gray-200" />
        <a href="/auth/login" on:click={() => (menuOpen = false)}>Login</a>
        <a href="/auth/signup" class="rounded-xl bg-[#1C3D5A] p-2.5 text-white hover:bg-black text-center" on:click={() => (menuOpen = false)}>Signup</a>
      </nav>
    </div>
  {/if}
</header>
