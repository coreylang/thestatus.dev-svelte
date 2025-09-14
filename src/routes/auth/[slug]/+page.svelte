<script>
  import { page } from '$app/stores';
  import Footer from "$lib/components/Footer.svelte";
  import Signup from "$lib/components/Signup.svelte";
	import Login from '$lib/components/Login.svelte';

  $: slug = $page.url.pathname.split('/').pop();
</script>

<div id="top"></div>
<div class="flex flex-col min-h-screen justify-between">
  <main>
    {#if slug === 'signup'}
      <Signup></Signup>
    {:else}
      <Login></Login>
    {/if}
  </main>
  <Footer></Footer>
</div>
