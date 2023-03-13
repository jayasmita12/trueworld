<script>
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
  import { applyAction, enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  export let form;

  let showPassword = false;
</script>

<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-sm mx-auto  bg-secondary rounded-lg shadow-lg ">
    <div class="pt-12">
      <div class="space-y-2 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <h3 class="text-neutral-content text-lg font-bold">Welcome</h3>
        <div
          class="rounded-full bg-transparent text-neutral-content font-semibold border-2 py-1 px-2">
          <select
            name=""
            class="bg-transparent focus:outline-none w-full pr-10">
            <option value="" class="">
              <span>
                <img
                  src="signup/user.png"
                  class="w-10 h-10 self-center"
                  alt="" />
                <p class="self-center text-neutral-content">
                  {form?.email}
                </p></span>
            </option>
          </select>
        </div>
      </div>
    </div>

    <form
      action="?/verifyPassword"
      use:enhance={() => {
        return async ({ result }) => {
          console.log(result.data);
          if (result.data) await applyAction(result);
          if (result.data?.success) goto("/profile");
        };
      }}
      method="POST"
      class="w-full px-4">
      <div class="my-10 space-y-4">
        <div class="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password*"
            class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => (showPassword = !showPassword)}
            src="signup/eye.png"
            class="w-4 h-4 absolute right-3 top-3"
            alt="" />
        </div>

        {#if form?.errors?.password}
          <label for="password" class="text-red-500 text-sm mt-2">
            {form?.errors?.password}</label>
        {/if}

        <div class="flex space-x-1">
          <input type="radio" class="bg-transparent" />
          <p class="text-accent-content text-sm font-medium">Remember me</p>
        </div>
      </div>
      <div class="px-5 flex justify-between  w-full space-x-10">
        <div>
          <a
            href="/recoveryEmail"
            class="text-neutral-content text-base font-semibold underline"
            >Reset your password</a>
          <a
            href="/signup"
            class="text-neutral-content text-base font-semibold underline"
            >Create account</a>
        </div>
        <div class="self-center">
          <button
            type="submit"
            class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content">
            Next
          </button>
        </div>
      </div>
    </form>

    <FooterSignup />
  </div>
</div>
