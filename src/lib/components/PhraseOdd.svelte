<script>
  export let title;
  export let isButton;
</script>

<div class="">
  <div
    class="flex flex-col md:flex-row items-center md:space-x-10 lg:space-x-20 space-y-5 md:space-y-0 max-w-7xl mx-auto px-[8%]  py-10 md:py-20">
    <div class="flex-shrink-0">
      <img
        class="md:w-[18rem] lg:w-[22rem] xl:w-[25.56rem] object-cover"
        src="/explore/explore-1.png"
        alt="" />
      <p class="mt-1 px-5 text-[10px] text-tw-gray text-center">
        Mapa geoespacial en 3D de las emisiones de CO2.
      </p>
    </div>
    <div class="lg:w-64">
      <h3 class="text-xl md:text-tw-3 text-tw-secondary leading-none">
        {title}
      </h3>
      <p class="mt-2 text-tw-gray text-sm">
        Es la hora de tomar medidas urgentes y de implementar acciones de rigor
        científico. Para ello, es necesario crear servicios a medida y modelos
        de gestión de datos que proporcionen una información transparente,
        trazada y de carácter universal al servicio de instituciones, entidades
        privadas y organizaciones del tercer sector.
      </p>
      {#if isButton}
        <button
          class="btn btn-sm btn-outline rounded-full mt-3 md:mt-5 px-5 text-white capitalize font-base bg-tw-secondary">
          Book a demo
        </button>
      {/if}
    </div>
  </div>
</div>
