<script>
  import { localeCode } from "$lib/stores/globalStore";

  export let footerLinks;
</script>

<div class="lg:hidden">
  {#each footerLinks as footerLink}
    <details class="cursor-pointer">
      <summary
        class="flex items-center justify-between py-3 border-b-2 border-accent-content/20">
        <span class="text-primary-content font-medium">
          {footerLink.title ?? ""}
        </span>
        <svg
          class="open w-4 h-4 text-base-200 rotate-90"
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
          class="closed w-4 h-4 text-base-200"
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
        {#each footerLink.links as link}
          <li class="cursor-pointer list-none">
            <a class="font-light" href={`${link.link}?lang=${$localeCode}`}>
              {link.text ?? ""}</a>
          </li>
        {/each}
      </div>
    </details>
  {/each}
  <div class="py-3 border-b border-accent-content/20">
    <a
      class="text-primary-content font-medium"
      href={`/faq?lang=${$localeCode}`}>FAQ'S</a>
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
