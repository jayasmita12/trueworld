<script>
  export let faqs;
  export let title;
  export let description;

  // console.log(JSON.stringify(faqs, 0, 2));
</script>

<div class="">
  <div
    class="px-[5%] xl:px-0 max-w-7xl mx-auto  pt-8 md:pt-16 xl:pt-24 relative xl:mb-24">
    <h1
      class="text-3xl xl:text-5xl text-primary-content font-light leading-tight drop-shadow-md lg:text-center">
      {title ?? "Frequently Asked Questions"} <br />

      {description ?? "(Faq)"}
    </h1>

    <div class="mt-16 mb-5 lg:mb-0">
      {#each faqs as faq}
        <details class=" cursor-pointer">
          <summary
            class="flex items-center justify-between lg:justify-start gap-x-1 py-2 lg:py-3 xl:py-7 border-b-2 border-accent-content/20">
            <div class="order-2 lg:order-1">
              <svg
                class="open w-5 h-5 lg:w-8 lg:h-8 text-base-200 rotate-90 lg:rotate-0"
                fill="none"
                stroke="currentColor"
                stroke-width="3.00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <svg
                class="closed w-5 h-5 lg:w-8 lg:h-8 text-base-200"
                fill="none"
                stroke="currentColor"
                stroke-width="3.00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <span
              class="text-primary-content md:text-xl xl:text-tw-35 font-medium lg:font-black order-1 lg:order-2">
              {faq.title ?? ""}
            </span>
          </summary>
          {#each faq.qna as faq}
            <div class="py-5 text-tw-accent ">
              <details class="group">
                <summary
                  class="flex items-center justify-between lg:justify-start space-x-2 font-medium cursor-pointer list-none">
                  <span
                    class="transition group-open:rotate-180 order-2 lg:order-1">
                    <svg
                      class="w-5 h-5 lg:w-8 lg:h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.50"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                  <span class="text-sm xl:text-tw-30 order-1 lg:order-2">
                    {faq.question ?? ""}
                  </span>
                </summary>
                <p
                  class="text-neutral-600 mt-3 group-open:animate-fadeIn text-xs xl:text-[21px] leading-tight lg:mt-5 
                    xl:mt-10 px-6 xl:px-10">
                  {faq.answer ?? ""}
                </p>
              </details>
            </div>
          {/each}
        </details>
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes details-show {
    from {
      opacity: 0;
      transform: var(--details-translate, translateY(-0.5em));
    }
  }

  details[open] > *:not(summary) {
    animation: details-show 200ms ease-in-out;
  }

  details summary {
    list-style: none;
  }
  details summary .closed {
    display: none;
  }
  details[open] summary .closed {
    display: block;
  }
  details[open] summary .open {
    display: none;
  }
  details summary::-webkit-details-marker {
    display: none;
  }
</style>
