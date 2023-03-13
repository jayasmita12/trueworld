<script>
  import { localeCode } from "$lib/stores/globalStore";
  import BlockchainLogo from "./BlockchainLogo.svelte";

  export let navData;
</script>

<div
  class="lg:hidden absolute z-50 left-0 top-16 min-h-[70vh] w-[96%] bg-primary shadow-md pl-8 sm:pl-10 pr-5 pb-10">
  <div
    class="flex items-center bg-white rounded-md border border-accent-content/20 text-black px-2 sm:px-4 py-3 mt-5 mb-3">
    <input
      class="flex-1 bg-transparent outline-none font-medium"
      type="text"
      placeholder="Search" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 flex-shrink-0">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  </div>

  {#each navData?.menu as menu}
    <details class="cursor-pointer">
      <summary
        class="flex items-center justify-between py-3 border-b-2 border-accent-content/20">
        <span class="text-primary-content font-medium">
          {menu.title ?? ""}
        </span>
        <svg
          class="open w-5 h-5 text-base-200 rotate-90"
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
          class="closed w-5 h-5 text-base-200"
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
      </summary>
      <div class="pl-4 mt-3 space-y-4">
        {#each menu.links as link}
          <li class="cursor-pointer list-none">
            <a
              class="font-light text-primary-content"
              href={`${link.link}?lang=${$localeCode}`}>
              {link.text ?? ""}
            </a>
          </li>
        {/each}
      </div>
    </details>
  {/each}

  {#if navData.link?.length > 0}
    {#each navData.link as link}
      <div class="py-3 border-b-2 border-accent-content/20">
        <a
          class="text-primary-content font-medium"
          href={`${link.link}?lang=${$localeCode}`}>
          {link.text ?? ""}
        </a>
      </div>
    {/each}
  {/if}

  <div class="py-3 border-b-2 border-accent-content/20">
    <a
      class="text-primary-content font-medium"
      href={`/faq?lang=${$localeCode}`}>FAQ'S</a>
  </div>

  <div class="flex items-center space-x-5 mt-2">
    <a href={`/?lang=${$localeCode}`}>
      <BlockchainLogo />
    </a>
    <p class="text-primary-content font-medium">
      Technology to figth the climate change
    </p>
  </div>
  <div class="flex items-center space-x-1 text-primary-content text-xs mt-2">
    <a
      href="https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad"
      target="_blank"
      rel="noreferrer">
      Privacy Policy
    </a>
    <span>|</span>
    <a
      href="https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad"
      target="_blank"
      rel="noreferrer">
      Terms of use
    </a>

    <span>|</span>
    <a href={`/?lang=${$localeCode}`}>Legal</a>
    <span>|</span>
    <a href={`/?lang=${$localeCode}`}>Sitemap</a>
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
