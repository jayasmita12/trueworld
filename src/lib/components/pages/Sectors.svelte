<script>
  import Modal from "./Modal.svelte";
  import { goto } from "$app/navigation";
  import { currentVideoUrl, localeCode } from "$lib/stores/globalStore";

  export let title;
  export let sectors;

  // console.log(sectors);

  let currentTitle = "";
</script>

<div>
  <div class="px-[5%] xl:px-0 py-10 md:py-12 max-w-4xl mx-auto">
    <h1
      class="lg:text-tw-title text-tw-30 lg:text-center text-primary-content font-medium leading-none">
      {title
        ? title
        : "Discover all the sectors in which our solution can be applied."}
    </h1>
  </div>

  <section>
    {#each sectors as sector, index}
      <div
        class="px-[5%] xl:px-0 py-10 lg:py-24 bg-base-300 even:bg-base-300/70">
        <div
          class="max-w-7xl mx-auto flex flex-col 
          {index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}  
            lg:items-center gap-8 lg:gap-24 xl:gap-60">
          {#if sector?.image?.data}
            <img
              class="w-full lg:w-[44%] xl:w-[50%] object-contain"
              src={sector?.image?.data?.attributes
                ? `${sector?.image?.data?.attributes.url}`
                : "/smart-dashboard/dashboard.png"}
              alt="" />
          {:else}
            <img
              class="w-full lg:w-[44%] xl:w-[50%] object-contain"
              src="/smart-dashboard/dashboard.png"
              alt="" />
          {/if}
          <div class="lg:w-[36%] text-white">
            <h2 class="text-tw-30 lg:text-tw-title font-light leading-none">
              {sector.title ?? ""}
            </h2>
            <p class="text-sm lg:text-[21px] font-light mt-6 md:mt-10 lg:mt-12">
              {sector.description ?? ""}
            </p>
            <div class="flex gap-x-3 mt-6 md:mt-10">
              <a
                href={sector.button_link_1
                  ? `${sector.button_link_1}?lang=${$localeCode}`
                  : "/smart-dashboard/spanish_registry_carbon_footprint_offsetting_co2_removal_tcm30-178352.pdf"}
                target="_blank"
                rel="noreferrer"
                class="btn btn-sm border border-primary-content rounded-full px-6 text-white capitalize font-base bg-secondary-focus hover:bg-tw-orange flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-4 h-4">
                  <path
                    d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path
                    d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                <span>
                  {sector.button_text_1 ? sector.button_text_1 : "Brouchure"}
                </span>
              </a>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <label
                on:click={() => {
                  $currentVideoUrl = sector.button_link_2;
                  currentTitle = sector.title;
                }}
                target="_blank"
                rel="noreferrer"
                for="my-modal-4"
                class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize bg-transparent flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4">
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clip-rule="evenodd" />
                </svg>
                <span>
                  {sector.button_text_2 ? sector.button_text_2 : "Video"}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    {/each}
    <Modal title={currentTitle} />
  </section>
</div>
