<script lang="ts">
  import { base } from '$app/paths';
  import headerLogoSrc from '$lib/assets/header-logo.png';

  let email: string = '';
  let password: string = '';
  let error: string = '';
  let success: string = '';

  const handleLogin = (e: Event): void => {
    e.preventDefault();
    error = '';
    success = '';

    if (!email || !password) {
      error = 'Please fill in all fields.';
      return;
    }

    // TODO: Replace with your API call
    success = 'Logged in successfully!';
  };
</script>
<section class="min-h-screen flex items-center justify-center bg-[#F6F3EA] px-4">
  <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    <div class="flex justify-center mb-6">
      <img src={headerLogoSrc} alt="The Status" class="h-12 w-auto" />
    </div>
    <h1 class="text-2xl font-bold text-center text-[#1C3D5A] mb-6">Log in to your account</h1>

    {#if error}
      <div class="mb-4 text-red-600 text-sm">{error}</div>
    {/if}
    {#if success}
      <div class="mb-4 text-green-600 text-sm">{success}</div>
    {/if}

    <form on:submit={handleLogin} class="space-y-4">
      <div>
      <label for="email" class="block text-sm font-medium text-[#1C3D5A] mb-1">Email</label>
      <input
        type="email"
        name="email"
        bind:value={email}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C3D5A]"
      />
      </div>

      <div>
      <label for="password" class="block text-sm font-medium text-[#1C3D5A] mb-1">Password</label>
      <input
        type="password"
        name="password"
        bind:value={password}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C3D5A]"
      />
      </div>

      <button
      type="submit"
      class="w-full bg-[#1C3D5A] text-white py-2.5 rounded-lg font-semibold hover:brightness-110 transition"
      >
      Log In
      </button>
    </form>

    <p class="mt-6 text-center text-sm text-gray-600">
      Don’t have an account?
      <a href="{base}/auth/signup" class="text-[#1C3D5A] hover:underline">Sign up</a>
    </p>
  </div>

</section>