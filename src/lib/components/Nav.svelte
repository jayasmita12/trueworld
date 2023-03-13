<script>
  import { page } from "$app/stores";
  import {
    isLoggedIn,
    showNavMenu,
    showNotificationsModal,
    showProfileModal,
    selectedMenu,
    localeCode,
    navStore,
  } from "$lib/stores/globalStore";
  import DarkMode from "./DarkMode.svelte";
  import Logo from "./Logo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import NavMobile from "./NavMobile.svelte";
  import NotificationsModal from "./NotificationsModal.svelte";
  import ProfileModal from "./ProfileModal.svelte";

  export let showNavLinks = false;

  let navData = $navStore.data?.attributes;

  // console.log("Navdata" + navData);

  const currentRoute = $page.url.pathname;

  const logoUrl = navData.logo?.data?.attributes?.url;
  let selected = "";
</script>

<nav
  class="relative bg-primary py-4 shadow-lg 
  lg:shadow-md shadow-secondary-content/40 z-50">
  <div
    class="max-w-7xl mx-auto px-[5%] xl:px-0 flex items-center justify-between w-full">
    <div class="flex items-center flex-grow lg:flex-grow-0">
      <div class="flex items-center w-full">
        <label
          class="lg:hidden btn-sm swap swap-rotate bg-transparent border-0 px-0 hover:bg-transparent">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" bind:checked={$showNavMenu} />

          <!-- hamburger icon -->
          <svg
            class="swap-off text-primary-content"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512">
            <path
              class="fill-primary-content"
              d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <!-- close icon -->
          <svg
            class="swap-on fill-primary-content"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <button
          class="ml-2 lg:ml-0 lg:hidden bg-transparent text-primary-content text-xs font-semibold">
          Login
        </button>
        <a
          on:mouseover={() => ($selectedMenu = "")}
          on:focus={() => ($selectedMenu = "")}
          class="mx-auto lg:mx-0"
          href={`/?lang=${$localeCode}`}>
          <Logo />

          <!-- <img
          class="h-[0.75rem] md:h-[1.2rem]"
          src={logoUrl ?? "./logo-header.png"}
          alt="" /> -->
        </a>
      </div>

      {#if showNavLinks}
        <NavLinks navData={$navStore.data.attributes} />
      {/if}
    </div>

    <div class="flex items-center">
      <div class="lg:mr-6 flex xl:space-x-4">
        <DarkMode />
        {#if !isLoggedIn}
          <div
            class="hidden lg:block bg-primary leading-normal border rounded-full shadow-md text-secondary px-3 py-1 hover:bg-accent cursor-pointer">
            <span class="font-bold">0,008 t</span> CO2 e
          </div>
          <div
            class="flex space-x-1 items-center bg-primary leading-normal border rounded-full shadow-md 
        text-secondary px-3 py-1 hover:bg-accent cursor-pointer">
            <img src="./nav/hand.svg" alt="" />
            <span class="font-bold">0</span>
          </div>
        {/if}
      </div>

      {#if !$isLoggedIn}
        <div class="hidden lg:flex space-x-3">
          <a
            href={`/login?lang=${$localeCode}`}
            class="px-6 py-1 bg-base-300 rounded-full text-white border border-white text-xs font-semibold">
            Login
          </a>
          <!-- <button
          on:click={() => ($isLoggedIn = !$isLoggedIn)}
          class="px-4 py-2 bg-tw-primary shadow-md rounded-full text-tw-blue text-xs font-semibold">
          Ir a mi cuenta
        </button> -->
        </div>
      {/if}

      <div class="flex items-center space-x-3 lg:space-x-6 text-neutral ">
        {#if $isLoggedIn}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            on:click={() =>
              ($showNotificationsModal = !$showNotificationsModal)}
            class="relative">
            <img class="w-5" src="./nav/bell.svg" alt="" />
            <span
              class="text-[8px] font-bold text-white w-3 h-3 flex justify-center rounded-full 
          bg-tw-orange absolute top-0 -right-1">
              2
            </span>
          </div>
          <div class="flex p-1 rounded-full bg-white ">
            <div
              class="flex justify-center bg-primary shadow-tw-btn p-2 rounded-full">
              <img src="./nav/icon-apps.svg" alt="" />
            </div>
          </div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            on:click={() => ($showProfileModal = !$showProfileModal)}
            class="relative cursor-pointer">
            <img class="w-8" src="./nav/profile-pic.png" alt="" />
            <span
              class="w-3 h-3 flex justify-center rounded-full 
          bg-tw-green absolute top-0 -right-1" />
          </div>
        {/if}
      </div>
    </div>

    {#if $showNavMenu}
      <NavMobile navData={$navStore.data?.attributes} />
    {/if}

    {#if $showProfileModal}
      <ProfileModal />
    {/if}
    {#if $showNotificationsModal}
      <NotificationsModal />
    {/if}
  </div>
</nav>
