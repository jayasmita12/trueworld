<script>
  export let title;
  export let text;
</script>

<div
  class="px-4 lg:px-6 xl:px-10 2xl:px-14 py-10 text-secondary-content hover:text-white hover:bg-tw-hover flex-1">
  <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
    {title}
  </h2>
  <p class="text-sm xl:text-[21px] leading-tight font-extralight mt-2 xl:mt-4">
    {text}
  </p>
  <div class="flex gap-5 mt-5">
    <a class="text-sm xl:text-[21px] font-bold underline" href="/">
      More information
    </a>
    <a
      class="text-sm xl:text-[21px] font-bold text-tw-orange underline"
      href="/">
      Contact
    </a>
  </div>
</div>
