<script>
  import { footerStore, localeCode } from "$lib/stores/globalStore";
  import FooterBottom from "./FooterBottom.svelte";
  import FooterLinksMob from "./FooterLinksMob.svelte";
  import Logo from "./Logo.svelte";

  // export let footerData;
  export let locales;
  let footerData = $footerStore.data?.attributes;

  const logoUrl =
    footerData?.footer_left_section[0]?.logo?.data?.attributes.url;
</script>

<!-- bg-[#E0E2E5]/50 -->
<div class="relative z-0 bg-info">
  <div class="px-[5%] xl:px-0 max-w-7xl mx-auto text-base-200">
    <FooterLinksMob
      footerLinks={$footerStore.data?.attributes?.footer_links_section} />
    <section class="hidden py-10 lg:flex gap-x-10 gap-y-7">
      <div class="space-y-5">
        <Logo />

        {#if $footerStore.data?.attributes?.footer_left_section[0]?.locations.length > 0}
          {#each $footerStore.data?.attributes?.footer_left_section[0]?.locations as location}
            <div class="last:pt-2">
              <div class="flex gap-x-2">
                <p class="font-medium text-primary-content">
                  {location.title ?? ""}
                </p>
                <hr class="flex-1 border-accent-content/20 mt-4" />
              </div>
              <p class="text-xs">
                {location.address ?? ""}
              </p>
            </div>
          {/each}
        {/if}
      </div>

      <div class="flex w-full xl:justify-end ">
        <div class="flex flex-col lg:flex-row gap-x-10 gap-y-7">
          {#if $footerStore.data?.attributes?.footer_links_section?.length > 0}
            {#each $footerStore.data?.attributes?.footer_links_section as footerLink}
              {@const numOfLink =
                $footerStore.data?.attributes?.footer_links_section.length}
              <div class="mt-1">
                <!-- <p>{numOfLink}</p> -->
                <p class="font-medium capitalize text-primary-content">
                  {footerLink.title ?? ""}
                </p>
                <ul class="mt-3 space-y-3">
                  {#each footerLink.links as link}
                    <li class=" cursor-pointer hover:text-tw-orange hover:underline">
                      <a
                        class="font-light"
                        href={`${link.link}?lang=${$localeCode}`}>
                        {link.text ?? ""}</a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </section>
    <div class="bg-tw-blue/20 h-[1px]" />

    <FooterBottom
      data={$footerStore.data?.attributes?.footer_bottom_section}
      {locales} />
  </div>
  <div class="lg:hidden w-full bg-secondary pt-3 pb-5 flex justify-center">
    <Logo />
  </div>
</div>
