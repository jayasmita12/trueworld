<script>
  import { baseUrl } from "$lib/stores/globalStore";

  export let explore;
  export let bgImage;
  export let media;
</script>

<div class="mt-10 md:mt-16 xl:mt-36">
  <div
    class="text-center px-[5%] 2xl:px-[2%] 3xl:px-0 max-w-7xl mx-auto lg:mb-14">
    <h2
      class="text-3xl md:text-6xl text-secondary-content font-light leading-tight md:leading-[45px] uppercase drop-shadow-md">
      {explore.title}
    </h2>
    <p
      class="text-secondary-content font-light text-sm md:text-tw-2 leading-none mt-5 md:mt-10 mb-5 md:mb-10 max-w-6xl mx-auto">
      {explore.description}
    </p>

    <a
      class="text-secondary text-sm md:text-tw-2 font-bold underline"
      href="/explore">
      Go to Observatory
    </a>
  </div>

  <section class="h-[40vh] md:h-[70vh] lg:h-screen flex items-end xl:mt-28">
    <div
      style="background-image: url({`${bgImage}`})"
      class="relative w-full h-[23vh] md:h-[40vh] lg:h-[55vh] bg-cover bg-center">
      <div
        class="absolute -top-[58%] lg:-top-[82%] left-0 right-0 mx-auto w-[85%] max-w-7xl 
        h-[30vh] md:h-[50vh] lg:h-[90vh] object-cover rounded-3xl overflow-hidden">
        {#if media?.ext === ".mp4"}
          <video autoplay loop muted class="h-full w-full object-cover">
            <source src={`${media.url}`} type="video/mp4" />
          </video>
        {:else}
          <img
            class="h-full w-full object-cover object-center"
            src={`${media.url}`}
            alt="" />
        {/if}
      </div>
    </div>
  </section>
</div>
