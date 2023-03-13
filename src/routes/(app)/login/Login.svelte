<script>
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
  import { applyAction, enhance } from "$app/forms";

  export let form;
</script>

<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-sm mx-auto  bg-secondary rounded-lg shadow-lg ">
    <div class="pt-12">
      <div class="space-y-2 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <h3 class="text-neutral-content text-lg font-bold">Log in</h3>
        <p class="text-base-100 text-sm ">To access TRUEWORLD</p>
      </div>
    </div>

    <form
      action="?/verifyEmail"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
      method="POST"
      class="w-full px-4">
      <div class="mt-6 mb-32 space-y-4">
        <input
          type="email"
          name="email"
          value={form?.email || ""}
          placeholder="Email"
          class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />

        {#if form?.errors?.email}
          <label for="email" class="text-red-500 text-sm mt-2 pl-4">
            {form?.errors?.email}
          </label>
        {/if}
      </div>
      <div class="px-5 flex justify-between w-full ">
        <a
          href="/signup"
          class="text-neutral-content text-base font-semibold underline">
          Create account
        </a>
        <button
          type="submit"
          class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content">
          Next
        </button>
      </div>
    </form>

    <FooterSignup />
  </div>
</div>
