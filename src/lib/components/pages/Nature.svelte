<script>
  import { page } from "$app/stores";
  import { localeCode } from "$lib/stores/globalStore";

  export let bg;
  export let title;
  export let description;
  export let text;
  export let button_text;
  export let button_link;

  const currentRoute = $page.url.pathname;
</script>

<div class="bg-cover bg-center flex h-[70vh] lg:h-[85vh] relative">
  {#if bg}
    {#if bg?.ext === ".mp4"}
      <video
        poster="/default-poster.jpg"
        type="video/mp4"
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-cover">
        <source src={`${bg?.url}`} type="video/mp4" />
      </video>
    {:else}
      <img
        class="h-full w-full object-cover object-center"
        src={bg?.url ? `${bg?.url}` : "/suite/nature.png"}
        alt="" />
    {/if}
  {/if}
  <div
    class="absolute top-0 left-0 {bg ? '' : 'bg-tw-secondary'} 
    w-full h-full overflow-hidden grid place-items-center">
    <div class="w-full px-[5%] xl:px-0 max-w-7xl mx-auto">
      <h1
        class="text-white text-tw-1 lg:text-tw-title leading-none font-bold drop-shadow-md 
          {currentRoute === '/explore' ? 'max-w-sm' : 'max-w-xl'}">
        {title ?? "Discover consulting"}

        <h1
          class="mt-1 text-white text-tw-1 lg:text-tw-title leading-none font-light drop-shadow-md">
          {description ?? "Drive The Best Environmental Outcomes"}
        </h1>

        <p class="mt-5 text-sm lg:text-lg font-light text-white">
          {text ??
            "We provide made-to-measure sustainability for all businesses of any size and sector by assisting our clients in the analysis, definition and implementation of innovative decarbonisation plans and strategies."}
        </p>

        {#if button_text && button_link}
          <a
            href={`${button_link}?lang=${$localeCode}`}
            class="mt-6 btn btn-sm btn-outline rounded-full px-6 text-white capitalize text-base 
          hover:bg-tw-orange hover:text-tw-blue font-base bg-transparent">
            {button_text}
          </a>
        {/if}
      </h1>
    </div>
  </div>
</div>
