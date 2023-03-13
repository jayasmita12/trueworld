<script>
  import { page } from "$app/stores";
  import { baseUrl } from "$lib/stores/globalStore";

  export let bg;
  export let title;
  export let description;
  export let text;

  const currentRoute = $page.url.pathname;
</script>

<div class="bg-cover bg-center flex h-[56vh] md:h-[85vh] relative ">
  {#if bg?.ext === ".mp4"}
    <video
      controls
      type="video/mp4"
      autoplay
      loop
      muted
      playsinline
      class="h-full w-full object-cover">
      <source src={`${bg.url}`} type="video/mp4" />
    </video>
  {:else}
    <img
      class="h-full w-full object-cover object-center"
      src={`${bg.url}`}
      alt="" />
  {/if}
  <div
    class="absolute top-0 left-0 bg-tw-secondary/30 w-full h-full overflow-hidden grid place-items-center">
    <div class="w-full pt-12 md:pt-0 px-[5%] xl:px-0 max-w-7xl mx-auto ">
      <h1
        class="text-white text-5xl leading-none font-bold drop-shadow-md 
        {currentRoute === '/explore' ? 'max-w-sm' : 'max-w-xl'}">
        {title}
      </h1>
      {#if description}
        <h1
          class="text-white text-tw-1 xl:text-5xl leading-none xl:leading-[80px] font-light drop-shadow-md">
          {description}
        </h1>
      {/if}

      <p class="mt-4 te xl:text-tw-2 leading-none text-white">
        {text
          ? text
          : "As part of our mission to democratize carbon management, we offer easy-to-use solutions to define nature-based climate strategies traced in Blockchain that guide organizations to take the most effective mitigation actions to achieve their sustainability and ESG goals."}
      </p>

      <button
        class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize text-base font-base bg-transparent">
        Go to Consulting
      </button>
    </div>
  </div>
</div>
