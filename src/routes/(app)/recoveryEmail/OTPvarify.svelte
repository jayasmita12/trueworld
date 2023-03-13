<script>
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
  import { applyAction, enhance } from "$app/forms";
  import SvelteOtp from "@k4ung/svelte-otp";
  export let form;

</script>

<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-md mx-auto  bg-secondary rounded-lg shadow-lg "
  >
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

    <!-- svelte-ignore missing-declaration -->
    <form
      action="?/verifyOtp"
      name="form"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
      method="POST"
      class="flex flex-col space-y-8 justify-center space-x-2 my-5"
    >
      <div class="self-center">
        <SvelteOtp

          inputClass="border-accent-content border-b-2 w-10 h-10 bg-transparent text-center  focus:outline-none  text-neutral-content "
          wrapperClass="flex flex-row  space-x-2"
          name="otpinput"
          value={form?.otpinput || ""}
          disableDefaultStyle=false
        />
        {#if form?.errors}
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label for="otpinput" class=" text-error mt-1 text-center"
            >{form?.errors.otpinput || ""}</label
          >
        {/if}
      </div>
      <div class="space-y-8">
        <p class="text-accent-content text-xs text-center px-5 ">
          We have sent an email to <a href="/" class="text-base-100"
            >I.ferrer@trueworld.org</a
          > to validate your account
        </p>

        <div class="px-5 flex justify-end  w-full ">
          <a href="/recoveryPassword"><button
            type="submit"
            class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content "
            >Confirm</button
          ></a>
        </div>
      </div>
    </form>

    <FooterSignup />
  </div>
</div>

<style>
</style>
