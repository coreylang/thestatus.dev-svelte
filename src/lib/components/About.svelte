<script>
    import aboutTheStatus from '$lib/assets/about-the-status.png';
</script>
<section id="about" class="relative bg-[#F6F3EA] py-20">
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-[#1C3D5A] sm:text-4xl">
        About <span class="text-[#1C3D5A]">The Status</span>
      </h2>
      <p class="mt-4 text-lg leading-8 text-[#1C3D5A]/80">
        <span class="font-semibold text-[#1C3D5A]">The Status</span> is both a sleek, real‑time 
        <span class="font-semibold">User Interface</span> and a powerful <span class="font-semibold">backend API</span> 
        designed to keep your customers and staff perfectly in sync.
      </p>
    </div>

    <div class="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
      <!-- Left: Illustration / Icon -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative">
          <img src={aboutTheStatus} alt="The Status User Interface" class="rounded-2xl bg-white" />
        </div>
      </div>

      <!-- Right: Content -->
      <div class="text-[#1C3D5A]/80 text-lg leading-8">
        <p>
          On the front end, The Status provides a clean, intuitive interface that displays live order updates — 
          from “Preparing” to “Ready” — so customers know exactly when to pick up. 
          It’s designed for clarity, speed, and a touch of personality that keeps guests engaged.
        </p>
        <p class="mt-6">
          Behind the scenes, our backend API integrates seamlessly with your existing 
          <span class="font-semibold text-[#1C3D5A]">POS</span> or restaurant order management system. 
          This means you can keep your current workflow while adding real‑time visibility for your customers — 
          no extra manual steps, no duplicate data entry.
        </p>
        <p class="mt-6">
          Whether you run a single café or a multi‑location restaurant group, The Status bridges the gap 
          between your kitchen and your customers, delivering a smoother, more transparent dining experience.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes steam {
    0% { transform: translateY(2px) scaleY(0.9); opacity: 0; }
    30% { opacity: 0.7; }
    60% { transform: translateY(-6px) scaleY(1.05); opacity: 0.9; }
    100% { transform: translateY(-10px) scaleY(1); opacity: 0; }
  }
</style>
