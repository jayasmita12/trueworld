import { c as create_ssr_component, a as subscribe, e as escape, d as each, b as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import { b as Hero, c as ConsultingServices } from "../../../../chunks/SplideSlide.js";
import { i as isDark, l as localeCode } from "../../../../chunks/globalStore.js";
import { N as Nature, S as Slider, D as Discover, a as Sectors, b as Steps, P as Plans, T as Technology, F as Faqs } from "../../../../chunks/Slider.js";
import { C as Contact } from "../../../../chunks/Contact.js";
const Consulting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDark, $$unsubscribe_isDark;
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_isDark = subscribe(isDark, (value) => $isDark = value);
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { title } = $$props;
  let { cards } = $$props;
  let selected = cards.length > 0 ? cards[0] : {};
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.cards === void 0 && $$bindings.cards && cards !== void 0)
    $$bindings.cards(cards);
  $$unsubscribe_isDark();
  $$unsubscribe_localeCode();
  return `<div class="md:px-[5%] xl:px-0 max-w-7xl mx-auto md:mt-10 lg:mt-20 md:mb-10 lg:mb-20 xl:mb-28"><h2 class="hidden lg:block text-3xl xl:text-5xl text-primary-content font-light leading-tight drop-shadow-md text-center xl:px-32">${escape(title ?? "")}</h2>

  <div class="lg:hidden grid md:grid-cols-2 md:gap-2">${each(cards, (card) => {
    let imageUrl = card?.image?.data?.attributes.url;
    return `
      <div class="border-b md:border border-accent-content/20 last:border-b-0 md:last:border-b bg-neutral">${card.image.data ? `<div style="${"background-image: url(" + escape(imageUrl, true) + ")"}" class="hidden h-44 bg-cover"><div class="w-full h-full bg-tw-secondary/30"></div>
          </div>` : ``}
        <section class="px-4 text-primary-content py-7 md:py-5"><h2 class="text-3xl xl:text-tw-1 font-light leading-none">${escape(card.title ?? "")}</h2>
          <p class="text-sm xl:text-[21px] leading-tight font-light mt-2">${escape(card.description ?? "")}</p>
          <div class="flex gap-5 mt-5"><a class="text-sm xl:text-lg font-bold hover:underline w-fit"${add_attribute("href", card.button_link_1 ? `${card.button_link_1}` : "/", 0)}>${escape(card.button_text_1 ? card.button_text_1 : "More information >")}</a>
          </div></section>
      </div>`;
  })}</div>
  
  <div class="mt-12 hidden lg:grid grid-cols-3 gap-2">${each(cards.slice(0, 4), (card, index) => {
    return `
      <div class="border border-accent bg-neutral flex flex-col"><section class="${"px-4 lg:px-6 xl:px-10 py-8 text-primary-content " + escape($isDark ? "hover:bg-[#454545]" : "hover:bg-accent", true) + " flex flex-col h-full"}"><div class="flex-1"><h2 class="text-3xl xl:text-tw-1 font-light leading-none">${escape(card.title ?? "")}</h2>
            <p class="text-sm xl:text-[21px] leading-tight font-light mt-2 xl:mt-4">${escape(card.description ?? "")}
            </p></div>
          <div class="flex gap-5 mt-5"><a class="text-sm xl:text-lg font-bold hover:underline text-base-200"${add_attribute("href", card.button_link_1 ? `${card.button_link_1}` : "/", 0)}>${escape(card.button_text_1 ? card.button_text_1 : "More information >")}</a>
          </div></section>
      </div>`;
  })}

    ${cards.length > 0 ? `<div class="border border-accent bg-neutral">

        ${selected?.image?.data?.attributes?.ext === ".mp4" ? `<video type="video/mp4" autoplay loop muted playsinline class="h-full w-full object-cover"><source data-sveltekit-reload${add_attribute("src", selected?.image?.data?.attributes.url ?? "/home/hero-vid.mp4", 0)} type="video/mp4"></video>` : `${selected.image.data ? `<img class="h-full w-full object-cover object-center"${add_attribute("src", selected?.image?.data?.attributes.url ?? "/default-img.png", 0)} alt="">` : ``}`}</div>` : ``}

    ${each(cards.slice(4, cards.length), (card, index) => {
    return `
      <div class="border border-accent bg-neutral flex flex-col"><section class="${"px-4 lg:px-6 xl:px-10 py-8 text-primary-content " + escape($isDark ? "hover:bg-[#454545]" : "hover:bg-accent", true) + " flex flex-col h-full"}"><div class="flex-1"><h2 class="text-3xl xl:text-tw-1 font-light leading-none">${escape(card.title ?? "")}</h2>
            <p class="text-sm xl:text-[21px] leading-tight font-light mt-2 xl:mt-4">${escape(card.description ?? "")}
            </p></div>
          <div class="flex gap-5 mt-5"><a class="text-sm xl:text-lg font-bold hover:underline text-base-200"${add_attribute(
      "href",
      card.button_link_1 ? `${card.button_link_1}?lang=${$localeCode}` : `/consulting?lang=${$localeCode}`,
      0
    )}>${escape(card.button_text_1 ? card.button_text_1 : "More information >")}</a>
          </div></section>
      </div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-maqupi_START -->${$$result.title = `<title>${escape(`Trueworld - ${data?.title}`)}</title>`, ""}<meta name="description"${add_attribute("content", data?.title, 0)}><!-- HEAD_svelte-maqupi_END -->`, ""}

${data.hasOwnProperty("hero_section") || data.hasOwnProperty("cards_section") || data.hasOwnProperty("nature_section") || data.hasOwnProperty("slider_section") || data.hasOwnProperty("contents_section") || data.hasOwnProperty("features_section") || data.hasOwnProperty("contact_section") || data.hasOwnProperty("sectors_section") || data.hasOwnProperty("steps_section") || data.hasOwnProperty("plans_section") || data.hasOwnProperty("technology_section") || data.hasOwnProperty("faq_section") ? `<div class="">${data.hero_section.length > 0 ? `${validate_component(Hero, "Hero").$$render($$result, { hero: data?.hero_section[0] }, {}, {})}` : ``}

  ${data.cards_section.length > 0 ? `${validate_component(Consulting, "Consulting").$$render(
    $$result,
    {
      title: data?.cards_section[0]?.title,
      cards: data?.cards_section[0]?.card
    },
    {},
    {}
  )}` : ``}

  ${data.nature_section.length > 0 ? `${validate_component(Nature, "Nature").$$render(
    $$result,
    {
      bg: data?.nature_section[0]?.nature_bg.data?.attributes,
      title: data?.nature_section[0]?.title,
      description: data?.nature_section[0]?.description,
      text: data?.nature_section[0]?.text,
      button_text: data?.nature_section[0]?.button_text,
      button_link: data?.nature_section[0]?.button_link
    },
    {},
    {}
  )}` : ``}</div>

<div class="">${data.slider_section.length > 0 ? `<section class="px-[5%] xl:px-0 max-w-7xl mx-auto my-10 xl:my-28">${validate_component(Slider, "Slider").$$render($$result, { cards: data?.slider_section[0]?.card }, {}, {})}</section>` : ``}

  ${data?.contents_section.length > 0 ? `${validate_component(ConsultingServices, "ConsultingServices").$$render(
    $$result,
    {
      header: data?.contents_section[0],
      cards: data?.contents_section[1]?.card
    },
    {},
    {}
  )}` : ``}

  ${data.features_section?.length > 0 ? `${validate_component(Discover, "Discover").$$render(
    $$result,
    {
      title: data?.features_section[0]?.title,
      features: data?.features_section[0]?.feature
    },
    {},
    {}
  )}` : ``}

  ${data.sectors_section.length > 0 ? `${validate_component(Sectors, "Sectors").$$render(
    $$result,
    {
      title: data?.sectors_section[0]?.title,
      sectors: data?.sectors_section[0]?.card
    },
    {},
    {}
  )}` : ``}

  ${data.steps_section.length > 0 ? `${validate_component(Steps, "Steps").$$render(
    $$result,
    {
      title: data?.steps_section[0].title,
      steps: data?.steps_section[0].feature
    },
    {},
    {}
  )}` : ``}

  ${data.plans_section.length > 0 ? `${validate_component(Plans, "Plans").$$render($$result, { plans: data?.plans_section }, {}, {})}` : ``}

  ${data.contact_section.length > 0 ? `${validate_component(Contact, "Contact").$$render($$result, { form, contactData: data?.contact_section }, {}, {})}` : ``}

  ${data.technology_section.length > 0 ? `${validate_component(Technology, "Technology").$$render($$result, { hero: data?.technology_section[0] }, {}, {})}` : ``}

  ${data.faq_section.length > 0 ? (() => {
    let faqs = data.faq_section.slice(1, data.faq_section.length);
    return `
    ${validate_component(Faqs, "Faqs").$$render(
      $$result,
      {
        title: data?.faq_section[0]?.title,
        description: data?.faq_section[0]?.description,
        faqs
      },
      {},
      {}
    )}`;
  })() : ``}</div>` : `<div class="h-screen w-screen flex items-center justify-center"><p class="text-primary-content">Page not available..</p></div>`}`;
});
export {
  Page as default
};
