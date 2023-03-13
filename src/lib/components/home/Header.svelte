<script>
  import { localeCode } from "$lib/stores/globalStore";

  export let title;
  export let description;
  export let buttonText;
  export let buttonLink;
</script>

<div class="hidden md:block text-center max-w-5xl mx-auto">
  <h2
    class="text-3xl md:text-tw-title text-primary-content leading-tight  
    md:leading-[45px] drop-shadow-md">
    {title ?? ""}
  </h2>
  <p
    class="text-primary-content text-sm md:text-tw-2 font-extralight leading-none mt-5">
    {description ?? ""}
  </p>
  <a
    href={`${buttonLink}?lang=${$localeCode}`}
    class="text-base-100 text-xs md:text-xl font-bold flex items-center 
    hover:text-primary-content gap-x-1 hover:underline
    w-fit mx-auto mt-5">
    <span>+</span>
    <span>
      {buttonText ?? ""}
    </span>
  </a>
</div>
