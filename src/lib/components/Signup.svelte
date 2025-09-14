<script lang="ts">
  import { base } from '$app/paths';
  import headerLogoSrc from '$lib/assets/header-logo.png';

  let name: string = '';
  let email: string = '';
  let password: string = '';
  let confirmPassword: string = '';
  let error: string = '';
  let success: string = '';

  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    error = '';
    success = '';

    if (!name || !email || !password || !confirmPassword) {
      error = 'Please fill in all fields.';
      return;
    }
    if (password !== confirmPassword) {
      error = 'Passwords do not match.';
      return;
    }

    // TODO: Replace with your API call
    success = 'Account created successfully!';
  };
</script>

<section class="min-h-screen flex items-center justify-center bg-[#F6F3EA] px-4">
  <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    <div class="flex justify-center mb-6">
      <img src={headerLogoSrc} alt="The Status" class="h-12 w-auto" />
    </div>

    <h1 class="text-2xl font-bold text-center text-[#1C3D5A] mb-6">
      Create your account
    </h1>

    {#if error}
      <div class="mb-4 text-red-600 text-sm text-center">{error}</div>
    {/if}
    {#if success}
      <div class="mb-4 text-green-600 text-sm text-center">{success}</div>
    {/if}

    <form on:submit={handleSubmit} class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-[#1C3D5A] mb-1">Name</label>
        <input
          type="text"
          name="name"
          bind:value={name}
          class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C3D5A]"
        />
      </div>

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

      <div>
        <label for="cpassword" class="block text-sm font-medium text-[#1C3D5A] mb-1">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          bind:value={confirmPassword}
          class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C3D5A]"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-[#1C3D5A] text-white py-2.5 rounded-lg font-semibold hover:brightness-110 transition"
      >
        Sign Up
      </button>
    </form>

    <p class="mt-6 text-center text-sm text-gray-600">
      Already have an account?
      <a href="{base}/auth/login" class="text-[#1C3D5A] hover:underline">Log in</a>
    </p>
  </div>
</section>
