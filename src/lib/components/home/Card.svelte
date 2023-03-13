<script>
  import { goto } from "$app/navigation";
  import { baseUrl, localeCode } from "$lib/stores/globalStore";

  export let service;
  export let imageUrl;
  export let title;
  export let description;
  export let buttonText;
  export let buttonLink;
</script>

<div
  class="rounded-md border border-accent bg-neutral overflow-hidden group relative">
  {#if imageUrl}
    <div
      style="background-image: url({imageUrl
        ? `${imageUrl}`
        : '/default-img.png'})"
      class="h-44 w-full bg-cover">
      <div class="h-full w-full bg-tw-secondary/30" />
    </div>
  {/if}

  <div
    class="p-5 md:p-6 flex flex-col justify-between group-hover:bg-accent/50 h-full">
    <div class="flex flex-col space-y-1 md:space-y-4 text-start">
      <p
        class="md:hidden text-[10px] text-primary-content font-medium uppercase ">
        {service ?? ""}
      </p>
      <div class="flex items-center md:space-x-5">
        <div
          class="hidden h-16 w-16 rounded-full border border-secondary-content text-primary-content text-sm md:text-tw-2 font-bold md:grid place-items-center flex-shrink-0">
          <span>
            {title?.charAt(0).concat(title?.substr(title?.indexOf(" ") + 1, 1))}
          </span>
        </div>
        <p class="text-neutral-content text-lg md:text-[25px] font-medium ">
          {title ?? ""}
        </p>
      </div>
      <div class="pt-2 pb-12 md:pb-16">
        <p
          class="text-neutral-content text-xs md:text-lg font-light leading-tight ">
          {description ?? ""}
        </p>
      </div>
    </div>
  </div>

  <div class="absolute bottom-3 w-full">
    <div class="px-4">
      <hr class="border border-accent-content/20" />
    </div>
    <div class="flex w-full justify-end pr-5">
      <div class="mt-3">
        <a
          href={`${buttonLink}?lang=${$localeCode}`}
          class="btn btn-sm btn-outline rounded-full px-7 text-white hover:text-base-300 text-tw-4 capitalize 
          font-base bg-base-300 hover:bg-white ring-2 ring-secondary border hover:border-0 border-white shadow-md">
          {buttonText ?? "More info"} +
        </a>
      </div>
    </div>
  </div>
</div>
