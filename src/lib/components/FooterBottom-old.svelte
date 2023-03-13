<script>
  import { localeCode } from "$lib/stores/globalStore";
  import { baseUrl } from "$lib/stores/globalStore";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const currentRoute = $page.url.pathname;

  export let data;
  export let locales;

  const socialMediaLinks = data[0]?.social_media_link;
</script>

<section class="hidden py-5 lg:flex items-center justify-between space-x-10">
  <div class="col-span-3 flex items-center space-x-2">
    <!-- <p>{socialMediaLinks[0]?.address}</p> -->
    <a href={socialMediaLinks[0]?.address} target="_blank" rel="noreferrer">
      <img
        class="h-[1.563rem] object-contain"
        src={socialMediaLinks[0]?.icon?.data?.attributes?.url
          ? `${socialMediaLinks[0]?.icon?.data?.attributes?.url}`
          : "/footer/linkedin.svg"}
        alt="" />
    </a>
    <a href={socialMediaLinks[1]?.address} target="_blank" rel="noreferrer">
      <img
        class="h-[1.563rem] object-contain"
        src={socialMediaLinks[1]?.icon?.data?.attributes?.url
          ? `${socialMediaLinks[1]?.icon?.data?.attributes?.url}`
          : "/footer/insta.svg"}
        alt="" />
    </a>
    <a href={socialMediaLinks[2]?.address} target="_blank" rel="noreferrer">
      <img
        class="h-[1.563rem] object-contain"
        src={socialMediaLinks[2]?.icon?.data?.attributes?.url
          ? `${socialMediaLinks[2]?.icon?.data?.attributes?.url}`
          : "/footer/fb.svg"}
        alt="" />
    </a>
    <a href={socialMediaLinks[3]?.address} target="_blank" rel="noreferrer">
      <img
        class="h-[1.563rem] object-contain"
        src={socialMediaLinks[3]?.icon?.data?.attributes?.url
          ? `${socialMediaLinks[3]?.icon?.data?.attributes?.url}`
          : "/footer/twitter.svg"}
        alt="" />
    </a>
    <a href={socialMediaLinks[4]?.address} target="_blank" rel="noreferrer">
      <img
        class="h-[1.563rem] object-contain"
        src={socialMediaLinks[4]?.icon?.data?.attributes?.url
          ? `${socialMediaLinks[4]?.icon?.data?.attributes?.url}`
          : "/footer/youtube.svg"}
        alt="" />
    </a>
    <a href={`/?lang=${$localeCode}`}>
      <img class="h-[1.563rem] object-contain" src="/footer/time.svg" alt="" />
    </a>

    <p class="text-tw-4 xl:text-base text-secondary-content font-medium">
      Follow us
    </p>
  </div>
  <div class="col-span-3 flex flex-col text-sm font-medium">
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

  <div>
    <a class="text-lg font-bold" href={`/faq?lang=${$localeCode}`}>FAQ'S</a>
  </div>
  <div>
    <a href="/">
      <img class="h-[4rem]" src="/footer/verified.svg" alt="" />
    </a>
  </div>
  <div class="col-span-2 flex flex-col items-center gap-y-2">
    <p class="text-tw-gray text-sm font-medium">
      {data[3].text ? data[3].text : "Trusted Partner"}
    </p>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    <a target="_blank" href="https://www.gate2chain.com/">
      <img
        class="h-5 object-contain"
        src={data[3].logo.data.attributes.url
          ? `${data[3].logo.data.attributes.url}`
          : "https://uploads-ssl.webflow.com/61cd8d5ff663eb1980fc716e/61d2a8896833bd39c6fd10a5_DarkLOgo.svg"}
        alt="" />
    </a>
  </div>

  <p class="text-[#317EAA] text-sm font-bold w-36">
    Technology created to fight climate crisis
  </p>
  {$localeCode}
  <select
    on:change={() => {
      goto(`${currentRoute}?lang=${$localeCode}`);
    }}
    bind:value={$localeCode}
    class="bg-transparent outline-none">
    {#each locales as locale}
      <option value={locale.code}>{locale.name}</option>
    {/each}
  </select>
</section>
