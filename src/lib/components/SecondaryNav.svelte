<script>
  import { page } from "$app/stores";

  const currentRoute = $page.url.pathname;
</script>

<nav class="w-full bg-[#131148] h-[2.2rem] bg-opacity-50">
  <div
    class="flex space-x-3 lg:space-x-6 text-white text-base font-semibold items-center h-full ml-[12%] pb-0.5"
  >
    <a
      class="{currentRoute === '/explore' &&
        'text-tw-orange'} hover:text-[17px]"
      href="/explore">Explore</a
    >
    <div class="relative group">
      <a
        class="flex space-x-1 items-center hover:text-[17px] 
        {currentRoute === '/netZeroSolutions' && 'text-tw-orange'}"
        href="/netZeroSolutions"
      >
        <span class="leading-none">NET ZERO Solutions</span>
        <!-- <img class="w-3.5 mt-1.5" src="./nav/chev-down.svg" alt="" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </a>

      <ul
        class="hidden absolute left-0 top-4 z-50 pt-3 group-hover:flex items-center space-x-10 text-tw-4 font-semibold"
      >
        <li>
          <a
            class="{currentRoute === '/suite' &&
              'text-tw-orange'} hover:text-[13px] drop-shadow-lg"
            href="/suite">Suite</a
          >
        </li>
        <li>
          <a
            class="{currentRoute === '/consulting' &&
              'text-tw-orange'} hover:text-[13px] drop-shadow-lg"
            href="/consulting">Consulting</a
          >
        </li>
        <li>
          <a
            class="{currentRoute === '/technology' &&
              'text-tw-orange'} hover:text-[13px] drop-shadow-lg"
            href="/technology">Technology</a
          >
        </li>
      </ul>
    </div>
    <a
      class="{currentRoute === '/rsc' && 'text-tw-orange'} hover:text-[17px]"
      href="/rsc">RSC</a
    >
  </div>
</nav>

<style scoped>
  a {
    text-shadow: 1px 1px 6px #ccc;
  }
</style>
