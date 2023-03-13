<script>
  import { navStore } from "$lib/stores/globalStore";
  import { localeCode, selectedMenu } from "$lib/stores/globalStore";

  export let navData;
  let showConsultingLinks = false;
  let showSoftwareLinks = false;
</script>

<ul class="hidden ml-10 lg:flex items-center gap-x-10">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#if navData.menu.length > 0}
    {#each navData.menu as menu}
      <div
        on:mouseover={() => ($selectedMenu = menu.title)}
        on:focus={() => ($selectedMenu = menu.title)}
        class="flex space-x-1 items-center text-primary-content font-bold cursor-pointer relative">
        <span class="leading-none capitalize">
          {menu.title ?? ""}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4">
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clip-rule="evenodd" />
        </svg>

        {#if $selectedMenu === menu.title}
          <div
            on:mouseleave={() => ($selectedMenu = "")}
            on:focus={() => ($selectedMenu = "")}
            class="absolute top-9 -left-10 w-[16rem] bg-primary mx-5 py-2 shadow-md z-20">
            <div
              class="text-accent-content text-[14px] font-medium w-full flex flex-col space-y-2">
              {#each menu.links as menuLink}
                <a
                  href={`${menuLink.link}?lang=${$localeCode}`}
                  data-sveltekit-prefetch
                  class="px-5 py-3 border-b border-accent-content/20 w-full ">
                  <p>{menuLink.text ?? ""}</p>
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  {/if}

  {#if navData.link?.length > 0}
    {#each navData.link as link}
      <li
        on:mouseover={() => ($selectedMenu = "")}
        on:focus={() => ($selectedMenu = "")}
        class="flex space-x-1 items-center text-primary-content font-bold">
        <a
          class="leading-none capitalize"
          href={`${link.link}?lang=${$localeCode}`}>
          {link.text ?? ""}</a>
      </li>
    {/each}
  {/if}
</ul>
