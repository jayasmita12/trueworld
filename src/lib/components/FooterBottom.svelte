<script>
  import {
    getAllPagesData,
    localeCode,
    navStore,
    footerStore,
    getData,
    getNavData,
  } from "$lib/stores/globalStore";
  import { baseUrl } from "$lib/stores/globalStore";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import SocialMediaIcons from "./SocialMediaIcons.svelte";
  import BlockchainLogo from "./BlockchainLogo.svelte";
  import GateToChainLogo from "./GateToChainLogo.svelte";

  let local = $localeCode;

  $: currentPage = $page.params.page;
  $: currentSlug = $page.params.slug;
  $: currentPath = $page.url.pathname;

  // $: console.log(currentSlug);

  const changeRoute = async () => {
    if (currentSlug) {
      if ($localeCode == "en") {
        getNavData("es");
        getData("es");
        goto(`${currentSlug}?lang=es`);
        localStorage.setItem("lang", "es");
      } else {
        getNavData("en");
        getData("en");
        goto(`${currentSlug}?lang=en`);
        localStorage.setItem("lang", "en");
        // location.reload()
      }
    } else {
      if ($localeCode == "en") {
        // location.reload()
        getNavData("es");
        getData("es");
        goto(`${currentPath}?lang=es`);
        localStorage.setItem("lang", "es");
      } else {
        // location.reload()
        getNavData("en");
        getData("en");
        goto(`${currentPath}?lang=en`);
        localStorage.setItem("lang", "en");
      }
    }
  };
  // document.cookie = `lang=${$localeCode};max-age=60*60*24*365;path="/"`

  // console.log('route con' + JSON.stringify(currentRoute, 0 , 2))

  export let data;
  export let locales;

  const socialMediaLinks = data[0]?.social_media_link;
</script>

<section class="py-5 text-base-200">
  <div class="flex items-center justify-between space-x-5 md:space-x-10">
    <SocialMediaIcons {socialMediaLinks} />
    <div class="hidden col-span-3 lg:flex flex-col text-sm font-medium">
      <a
        href={data[1].link
          ? `${data[1].link}`
          : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad"}>
        {data[1]?.text}
      </a>
      <a
        href={data[2].link
          ? `${data[2].link}`
          : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad"}>
        {data[2]?.text}
      </a>
    </div>

    <div class="hidden lg:block">
      <a class="text-lg font-bold" href={`/faq?lang=${$localeCode}`}>FAQ'S</a>
    </div>
    <div class="hidden lg:block">
      <a href={`/?lang=${$localeCode}`}>
        <BlockchainLogo />
      </a>
    </div>
    <div class="hidden col-span-2 lg:flex flex-col items-center gap-y-2">
      <p class="text-tw-gray text-sm font-medium">
        {data[3].text ? data[3].text : "Trusted Partner's"}
      </p>
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a target="_blank" href="https://www.gate2chain.com/">
        <GateToChainLogo />
      </a>
    </div>

    <p class="hidden lg:block text-accent-focus text-sm font-bold w-36">
      Technology created to fight climate crisis
    </p>
    <select
      on:change={changeRoute}
      bind:value={$localeCode}
      class="bg-transparent outline-none text-xs lg:text-base">
      {#each locales as locale}
        <option value={locale.code}>{locale.name}</option>
      {/each}
    </select>
  </div>

  <div class="lg:hidden mt-5">
    <div
      class="text-[10px] text-primary-content font-medium flex flex-col md:flex-row items-center md:justify-between space-y-1 md:space-y-0">
      <p>Copyright © 2023 TRUEWORLD SL. All rights reserved.</p>
      <div class="flex items-center justify-center space-x-1">
        <a
          href={data[1].link
            ? `${data[1].link}?lang=${$localeCode}`
            : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad"}>
          Privacy Policy
        </a>
        <span>|</span>
        <a
          href={data[1].link
            ? `${data[1].link}?lang=${$localeCode}`
            : "https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad"}>
          Terms of use
        </a>

        <span>|</span>
        <a href={`/?lang=${$localeCode}`}>Legal</a>
        <span>|</span>
        <a href={`/?lang=${$localeCode}`}>Sitemap</a>
      </div>
    </div>
  </div>
</section>
