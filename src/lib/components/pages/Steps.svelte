<script>
  export let title;
  export let steps;
</script>

<div class="w-full bg-base-300 mt-20 md:mt-24 xl:mt-28 xl:py-20">
  <div class="px-[5%] xl:px-0 max-w-7xl mx-auto pt-10 pb-20">
    <!-- title content div -->
    <div>
      <h1
        class="lg:text-tw-title text-tw-30 md:mx-20 md:text-center md:px-14  text-white font-light leading-none max-w-5xl">
        {title ? title : "Net Zero Your sustainable Business in 5 steps"}
      </h1>
    </div>
    <!-- grid content div -->
    <div
      class="grid md:grid-cols-3 grid-cols-1 mt-14 gap-y-8 gap-x-10 xl:gap-x-24 text-white">
      {#each steps as step, index}
        <div class="mx-5 md:mx-0">
          <h3 class="text-tw-30 lg:text-tw-50 font-black">
            Step {index + 1}
          </h3>
          <h3 class="text-xl lg:text-tw-1 lg:leading-10 font-light">
            {step.title ?? ""}
          </h3>
          <p
            class="lg:text-[21px] mt-6 leading-tight pr-5 font-light lg:font-extralight">
            {step.description ?? ""}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
