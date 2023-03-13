<script>
  import { isLoggedIn } from "$lib/stores/globalStore";
</script>

<div
  class="absolute z-50 top-14 right-2 w-72 rounded-xl bg-tw-primary flex flex-col items-center py-8"
>
  <img
    class="h-[4.188rem] w-[4.188rem] rounded-full object-cover"
    src="/user.png"
    alt=""
  />
  <p class="mt-3 text-tw-secondary text-sm font-semibold leading-none">
    Michael Scott
  </p>
  <p class="mt-2 text-xs text-[#8799BF] leading-none">m.scott@trueworld.org</p>
  <button
    class="mt-3 w-40 py-2 rounded-full bg-tw-primary shadow-md text-xs text-tw-secondary font-medium"
    >Manage your Account</button
  >
  <button
    on:click={() => ($isLoggedIn = !$isLoggedIn)}
    class="mt-6 w-40 py-2 rounded-full bg-tw-secondary shadow-md text-xs text-white font-medium"
    >Sign Out</button
  >
</div>
