<script>
  export let title;
  export let isButton;
</script>

<div class="bg-[#CDCED0]/20">
  <div
    class="px-[8%]  py-10 md:py-20 flex flex-col-reverse md:flex-row items-center lg:justify-end md:space-x-10 lg:space-x-20 max-w-7xl mx-auto">
    <div class="lg:w-64 mt-5 md:mt-0">
      <h3 class="text-xl md:text-tw-3 text-tw-secondary leading-none">
        {title}
      </h3>
      <p class="mt-2 text-tw-gray text-sm">
        Conoce las diferentes y diversas Organizaciones Sin Ánimo de Lucro,
        Organizaciones No Gubernamentales y Fundaciones que luchan por mitigar
        los efectos del Cambio Climático con sus proyectos de impacto social y
        medioambiental.
      </p>
      {#if isButton}
        <button
          class="btn btn-sm btn-outline rounded-full mt-3 md:mt-5 px-5 text-white capitalize font-base bg-tw-secondary">
          Book a demo
        </button>
      {/if}
    </div>
    <div class="flex-shrink-0">
      <img
        class="md:w-[18rem] lg:w-[22rem] xl:w-[25.56rem]"
        src="/explore/explore-2.png"
        alt="" />
      <p class="mt-1 px-5 text-[10px] text-tw-gray leading-none text-center">
        Conoce sus acciones de forma instantánea a través de su perfil.
      </p>
    </div>
  </div>
</div>
