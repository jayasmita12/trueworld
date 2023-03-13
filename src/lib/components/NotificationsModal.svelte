<div
  class="absolute z-50 top-14 right-2 w-72 rounded-xl bg-tw-primary text-tw-secondary max-h-[92vh] pt-8 pb-3"
>
  <div class="mx-3">
    <h4 class="text-sm font-[900]">Notifications</h4>
    <div class="h-[1px] bg-[#CAD6F0] my-4" />
  </div>

  <section class="px-1.5 max-h-[74vh] overflow-y-scroll">
    {#each Array(10) as notification}
      <div
        class="px-1.5 pr-4 py-2 rounded-xl hover:bg-[#DFEBF2] flex items-center gap-x-10"
      >
        <div class="flex-1 flex gap-x-1">
          <div class="h-2 w-2 rounded-full bg-tw-orange mt-1 flex-shrink-0" />
          <div>
            <p class="text-tw-4 font-extrabold">
              Your password has been successfully changed.
            </p>
            <p class="text-[10px]">Jul 23, 2021 at 09:15 am</p>
          </div>
        </div>
        <div class="flex-shrink-0">
          <img class="h-7 w-7 object-contain" src="/nav/lock.svg" alt="" />
        </div>
      </div>
      <div class="h-[1px] bg-[#CAD6F0] mt-1 mx-1.5" />
    {/each}
  </section>

  <div class="mt-3 px-3 flex items-center justify-between">
    <p class="text-tw-4">8 notifications</p>
    <button
      class="btn btn-xs rounded-full border-none px-8 py-1 text-[10px] text-white capitalize font-base bg-tw-secondary hover:text-white hover:bg-tw-blue"
      >Clear all</button
    >
  </div>
</div>
