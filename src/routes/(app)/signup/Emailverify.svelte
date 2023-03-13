<script>
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
</script>

<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-md mx-auto  bg-secondary rounded-lg shadow-lg ">
    <div class="pt-12">
      <div class="space-y-2 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <h3 class="text-neutral-content text-lg font-bold">Check your email</h3>
        <p class="text-base-100 max-w-xs text-base font-medium  pt-9">
          To keep your account safe , please check your email and introduce the
          code.
        </p>
      </div>
    </div>

    <form action="" class="flex justify-center space-x-2 my-5">
      <input
        type="text"
        class="w-8 h-8 bg-transparent border-b-2 border-accent-content text-base-100 text-center focus:outline-none" />
      <input
        type="text"
        class="w-8 h-8 bg-transparent border-b-2 border-accent-content text-base-100 text-center focus:outline-none" />
      <input
        type="text"
        class="w-8 h-8 bg-transparent border-b-2 border-accent-content text-base-100 text-center focus:outline-none" />
      <input
        type="text"
        class="w-8 h-8 bg-transparent border-b-2 border-accent-content text-base-100 text-center focus:outline-none" />
      <input
        type="text"
        class="w-8 h-8 bg-transparent border-b-2 border-accent-content text-base-100 text-center focus:outline-none" />
      <input
        type="text"
        class="w-8 h-8 bg-transparent border-b-2 border-accent-content text-base-100 text-center focus:outline-none" />
    </form>

    <p class="text-accent-content text-xs text-center px-5 my-6">
      We have sent an email to <a href="/" class="text-base-100"
        >I.ferrer@trueworld.org</a> to validate your account
    </p>

    <div class="px-5 flex justify-end  w-full ">
      <button
        class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-base-200 "
        >Confirm</button>
    </div>

    <FooterSignup />
  </div>
</div>
