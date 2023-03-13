<script>
  import { applyAction, enhance } from "$app/forms";
  import DashboardNav from "$lib/components/DashboardNav.svelte";
  import { user } from "$lib/stores/user";
  import ProfilePicture from "./ProfilePicture.svelte";

  export let form;
  let showPassword = false;
</script>

<div>
  <DashboardNav title="My profile" />
  <div class="w-full h-auto bg-primary py-10 px-4">
    <div
      class="flex flex-col justify-center items-center max-w-screen-lg  mx-auto  bg-secondary rounded-lg shadow-lg ">
      <div class="max-w-screen-md flex flex-col px-4 space-y-10 w-full my-10">
        <!-- profile image -->
        <div class="flex space-x-3">
          <ProfilePicture />
          <div class="self-center space-y-2">
            <h2 class="text-base font-semibold text-neutral-content">
              {$user.name}
            </h2>
            <div class="text-xs text-accent-content flex space-x-1">
              <span
                class=" text-secondary bg-neutral-content  rounded-full px-1 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="5"
                  stroke="currentColor"
                  class="w-2 h-2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <p>{$user.email}</p>
            </div>
            {#if $user.city && $user.country}
              <div class="text-xs text-accent-content flex space-x-1">
                <span
                  class=" text-secondary bg-neutral-content  rounded-full px-1 py-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="5"
                    stroke="currentColor"
                    class="w-2 h-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <p>{$user.city}, {$user.country}</p>
              </div>
            {/if}
            <p class="text-xs text-green-500">
              {$user.progress}% COMPLETED
            </p>
          </div>
        </div>

        <!-- Tab -->
        <div class="tabs space-x-1 w-full">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            class="tab tab-bordered w-[24%] sm:w-[24.5%]  tab-border-3 border-b-neutral-content  font-semibold text-neutral-content"
            >DETAIL</a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            class="tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3  border-b-accent-content/60 font-semibold text-accent-content/60"
            >SETTINGS</a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            class="tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3 border-b-accent-content/60 font-semibold text-accent-content/60"
            >BILLING</a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-missing-content -->
          <a
            class="hidden sm:flex tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3 border-b-accent-content/60 text-accent-content/60" />
        </div>

        <!-- Detail form  -->
        <form
          action="/profile"
          use:enhance={() => {
            return async ({ result }) => {
              // if (result.data?.success === true) $hasSignedUp = true;
              await applyAction(result);
            };
          }}
          method="POST"
          name="form"
          class="space-y-10">
        <div class="flex flex-col  sm:flex-row w-full space-x-0 sm:space-x-8 ">
          <!-- left side -->
          <div class="w-full space-y-2">
            <!-- Name -->
            <div>
              <label for="" class="text-base-100 ml-5 font-medium"
                >Full name</label>
              <input
                bind:value={$user.name}
                name="name"
                type="text"
                placeholder="Enter name"
                class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2" />
              {#if form?.errors?.name}
                <label for="name" class="text-red-500 text-sm mt-2 pl-4"
                  >{form?.errors?.name}</label>
              {/if}
            </div>
            <!-- password -->
            <div class="">
              <label for="" class="text-base-100 ml-5 font-medium"
                >Password</label>
              <div class="relative">
                <input
                  value={$user.password}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img
                  on:click={() => (showPassword = !showPassword)}
                  src="signup/eye.png"
                  class="w-4 h-4 absolute right-3 top-3 "
                  alt="" />
                {#if form?.errors?.password}
                  <label for="password" class="text-red-500 text-sm mt-2 pl-4"
                    >{form?.errors?.password}</label>
                {/if}
              </div>
            </div>

            <!-- country -->
            <div class="flex flex-col">
              <label for="" class="text-base-100 ml-4 font-medium"
                >Country</label>
              <select
                bind:value={$user.country}
                name="country"
                id=""
                class="pr-7 py-2 text-sm text-accent-content/70  border-2 px-3 rounded-full bg-transparent focus:outline-none">
                <option>Country</option>
                <option value="">(+91)</option>
              </select>
              {#if form?.errors?.country}
                <label for="country" class="text-red-500 text-sm mt-2 pl-4"
                  >{form?.errors?.country}</label>
              {/if}
            </div>

            <!-- company -->
            <div class="flex flex-col">
              <label for="" class="text-base-100 ml-4 font-medium"
                >Company</label>
              <select
                bind:value={$user.company}
                name="company"
                id=""
                class="pr-7 py-2 text-sm text-accent-content/70  border-2 px-3 rounded-full bg-transparent focus:outline-none">
                <option>Company</option>
                <option value="">(+91)</option>
              </select>

              {#if form?.errors?.company}
                <label for="company" class="text-red-500 text-sm mt-2 pl-4"
                  >{form?.errors?.company}</label>
              {/if}
            </div>
          </div>
          <!-- right side -->
          <div class="w-full space-y-2">
            <div class="">
              <label for="" class="text-base-100 ml-5 font-medium">Email</label>
              <input
                bind:value={$user.email}
                name="email"
                type="email"
                placeholder="Enter email"
                class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
              {#if form?.errors?.email}
                <label for="email" class="text-red-500 text-sm mt-2 pl-4"
                  >{form?.errors?.email}</label>
              {/if}
            </div>

            <!-- Area code -->
            <div class="flex flex-row space-x-4">
              <div class="flex flex-col space-x-2">
                <span
                  ><label for="" class="text-base-100 ml-5 font-medium"
                    >Area code</label
                  ></span>
                <select
                  bind:value={$user.areaCode}
                  name="areaCode"
                  id=""
                  class="pr-6 py-2 text-sm text-accent-content/70  border-2 px-2 rounded-full bg-transparent focus:outline-none">
                  <option>Code</option>
                  <option value="">(+91)</option>
                </select>
                {#if form?.errors?.areaCode}
                  <label for="areaCode" class="text-red-500 text-sm mt-2 pl-4"
                    >{form?.errors?.areaCode}</label>
                {/if}
              </div>
              <!-- phone Number -->
              <div class="w-full">
                <label for="" class="text-base-100 ml-5 font-medium"
                  >Phone number</label>
                <input
                  bind:value={$user.phoneNumber}
                  name="phoneNumber"
                  type="number"
                  placeholder="Enter number"
                  class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
                {#if form?.errors?.phoneNumber}
                  <label
                    for="phoneNumber"
                    class="text-red-500 text-sm mt-2 pl-4"
                    >{form?.errors?.phoneNumber}</label>
                {/if}
              </div>
            </div>

            <!-- city -->
            <div class="">
              <label for="" class="text-base-100 ml-4 font-medium">City</label>
              <input
                bind:value={$user.city}
                name="city"
                type="text"
                placeholder="City"
                class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
              {#if form?.errors?.city}
                <label for="city" class="text-red-500 text-sm mt-2 pl-4"
                  >{form?.errors?.city}</label>
              {/if}
            </div>

            <!-- vat number -->
            <div class="">
              <label for="" class="text-base-100 ml-4 font-medium"
                >VAT number</label>
              <input
                bind:value={$user.vatNumber}
                name="vatNumber"
                type="number"
                placeholder="VAT number"
                class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none   w-full border-2" />
              {#if form?.errors?.vatNumber}
                <label for="vatNumber" class="text-red-500 text-sm mt-2 pl-4"
                  >{form?.errors?.vatNumber}</label>
              {/if}
            </div>
          </div>
          
        </div>
        <div class="flex justify-end ">
          <button
            type="submit"
            class="rounded-full bg-transparent disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-base-200 "
            disabled>Save</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
