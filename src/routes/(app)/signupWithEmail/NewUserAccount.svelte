<script>
  import { applyAction, enhance } from "$app/forms";
  import BlockchainLogo from "$lib/components/BlockchainLogo.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import FooterSignup from "$lib/components/FooterSignup.svelte";
  import { hasSignedUp } from "$lib/stores/auth";

  export let form;

  let showPassword = false;
</script>

<div class="w-full min-h-[93vh] bg-primary grid place-items-center px-4 py-16">
  <div
    class="flex flex-col justify-center items-center max-w-2xl mx-auto  bg-secondary rounded-lg shadow-lg ">
    <div class="pt-12">
      <div class="space-y-3 text-center">
        <div class="flex justify-center">
          <Logo />
        </div>
        <h3 class="text-neutral-content font-bold">Create your user account</h3>
      </div>
    </div>

    <form
      action="/signupWithEmail"
      use:enhance={() => {
        return async ({ result }) => {
          if (result.data?.success === true) $hasSignedUp = true;
          await applyAction(result);
        };
      }}
      method="POST"
      name="form"
      id="signup-form"
      accept-charset="UTF-8">
      <div
        class="w-full px-4 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 my-20">
        <div>
          <div>
            <input
              value={form?.firstName || ""}
              name="firstName"
              type="text"
              placeholder="First name"
              class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />
            {#if form?.errors?.firstName}
              <label for="firstName" class="text-red-500 text-sm mt-2 pl-4"
                >{form?.errors?.firstName}</label>
            {/if}
          </div>
        </div>
        <div>
          <input
            value={form?.lastName || ""}
            name="lastName"
            type="text"
            placeholder="Last name"
            class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />
          {#if form?.errors?.lastName}
            <label for="lastName" class="text-red-500 text-sm mt-2 pl-4"
              >{form?.errors?.lastName}</label>
          {/if}
        </div>
        <div class="sm:col-span-2">
          <input
            value={form?.email || ""}
            name="email"
            type="email"
            placeholder="Email*"
            class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />
          {#if form?.errors?.email}
            <label for="email" class="text-red-500 text-sm mt-2 pl-4"
              >{form?.errors?.email}</label>
          {/if}
        </div>
        <div class="relative">
          <input
            value={form?.password || ""}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Pasword*"
            class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => (showPassword = !showPassword)}
            src="signup/eye.png"
            class="w-4 h-4 absolute right-3 top-2 cursor-pointer"
            alt="" />

          {#if form?.errors?.password}
            <label for="password" class="text-red-500 text-sm mt-2 pl-4">
              {form?.errors?.password}
            </label>
          {/if}
        </div>
        <div class="relative">
          <input
            value={form?.confirmPassword || ""}
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password*"
            class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img
            on:click={() => (showPassword = !showPassword)}
            src="signup/eye.png"
            class="w-4 h-4 absolute right-3 top-2 cursor-pointer"
            alt="" />

          {#if form?.errors?.confirmPassword}
            <label for="confirmPassword" class="text-red-500 text-sm mt-2 pl-4">
              {form?.errors?.confirmPassword}
            </label>
          {/if}
        </div>
      </div>

      <div class="px-5  flex justify-between space-x-14">
        <div class="hidden sm:flex w-[70%] self-end h-16 space-x-2">
          <!-- <img src="signup/logo.svg" class="h-14 w-14" alt=""> -->
          <div class="">
            <BlockchainLogo />
          </div>
          <span class="max-h-fit overflow-hidden"
            ><p class="text-accent-content text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.consectetur adipisicing elit.rrrrrrrrrrrrrrrrrrrrrrr
              rrrrrrrrrrrr
            </p></span>
        </div>
        <div class="flex flex-col space-y-3  w-full justify-end items-end">
          <div class="flex text-right space-x-1  justify-end ">
            <div>
              <input
                type="radio"
                class="accent-base-200 bg-transparent w-4 h-4"
                name=""
                id="" />
            </div>
            <p class="text-primary-content self-center text-xs font-medium">
              I agree to the <a href="/" class="text-base-100 font-normal"
                >Terms of Service</a>
              and
              <a href="/" class="text-base-100 font-normal">Privacy Policy</a>
            </p>
          </div>
          <div>
            
            <button
              class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content"
              type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>

    <FooterSignup />
  </div>
</div>
