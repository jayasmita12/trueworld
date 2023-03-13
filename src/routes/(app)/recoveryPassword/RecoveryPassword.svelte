<script>
  import { applyAction, enhance } from "$app/forms";
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
  export let form;
  let showPassword = false;
  let showConfirm = false
</script>

<div class="w-full h-auto bg-primary pt-36 pb-36 px-4">
  <div
    class="flex flex-col justify-center items-center max-w-sm mx-auto  bg-secondary rounded-lg shadow-lg "
  >
    <div class="pt-12">
      <div class="space-y-2 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <h3 class="text-neutral-content text-lg font-bold">Change password</h3>
        <p class="text-base-100 text-sm ">Enter your new password</p>
      </div>
    </div>

    <form
      class="w-full px-4 grid grid-cols-1"
      action="?/recoveryPassword"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
      method="POST"
      name="form"
      accept-charset="UTF-8"
    >
      <div class="mt-6 mb-10 space-y-4">
        <div class="relative">
          <input
            value={form?.password || ""}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="New pasword*"
            class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2"
          />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => (showPassword = !showPassword)}
            src="signup/eye.png"
            class="w-4 h-4 absolute right-3 top-3 cursor-pointer"
            alt=""
          />

          {#if form?.errors?.password}
            <label for="password" class="text-error mt-1 ml-3">
              {form?.errors?.password}
            </label>
          {/if}
        </div>
        <div class="relative">
          <input
            value={form?.confirmPassword || ""}
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Repeat New pasword*"
            class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2"
          />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => (showConfirm = !showConfirm)}
            src="signup/eye.png"
            class="w-4 h-4 absolute right-3 top-3 cursor-pointer"
            alt="" />

          {#if form?.errors?.confirmPassword}
            <label for="confirmPassword" class="text-error mt-1 ml-3">
              {form?.errors?.confirmPassword}
            </label>
          {/if}
        </div>

        <div class=" flex justify-end pt-7 ">
          <!-- {#if form?.success}
            <a href="/successful"
              ><button
                type="submit"
                class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content "
                >Confirm</button
              ></a
            >
          {:else}
          {/if} -->
          <button
            type="submit"
            class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content "
            >Confirm</button
          >
        </div>
      </div>
    </form>

    <FooterSignup />
  </div>
</div>
