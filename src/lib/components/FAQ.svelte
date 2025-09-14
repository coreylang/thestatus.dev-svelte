<script lang="ts">
  let faqs = [
    {
      question: "What is The Status?",
      answer:
        "The Status is a real‑time order tracking tool for cafés, restaurants, and kitchens. It updates automatically from 'Preparing' to 'Ready' so guests always know when to pick up."
    },
    {
      question: "How does it update in real time?",
      answer:
        "Our system connects directly to your kitchen workflow. As soon as staff mark an order as ready, the status changes instantly on the customer’s screen — no refreshing needed."
    },
    {
      question: "Can I customize the look and feel?",
      answer:
        "Yes. You can match your brand colors, upload your logo, and choose from multiple icon styles — including our signature coffee cup animation."
    },
    {
      question: "Does it work on mobile devices?",
      answer:
        "Absolutely. The Status is fully responsive and works seamlessly on phones, tablets, and desktops."
    },
    {
      question: "Is there a cost to use The Status?",
      answer:
        "We offer both free and premium plans. The free plan covers core features, while premium unlocks advanced customization and analytics."
    }
  ];

  let openIndex: number | null = null;

  function toggleFAQ(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="bg-white py-20">
  <div class="mx-auto max-w-4xl px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-[#1C3D5A] sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p class="mt-4 text-lg text-[#1C3D5A]/80">
        Everything you need to know about <span class="font-semibold text-[#1C3D5A]">The Status</span>.
      </p>
    </div>

    <div class="mt-12 divide-y divide-[#1C3D5A]/10">
      {#each faqs as faq, i}
        <div class="py-6">
          <button
            class="flex w-full items-center justify-between text-left"
            on:click={() => toggleFAQ(i)}
          >
            <span class="text-lg font-medium text-[#1C3D5A]">{faq.question}</span>
            <svg
              class="h-5 w-5 text-[#1C3D5A] transition-transform duration-300"
              style="transform: rotate({openIndex === i ? 180 : 0}deg)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if openIndex === i}
            <p class="mt-3 text-[#1C3D5A]/80">{faq.answer}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
