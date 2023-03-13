import { c as create_ssr_component, e as escape, v as validate_component, d as each, b as add_attribute, a as subscribe, i as is_promise, n as noop } from "../../../chunks/index3.js";
import { S as Splide_1, a as SplideSlide, H as Header, C as Card, b as Hero, c as ConsultingServices } from "../../../chunks/SplideSlide.js";
import { l as localeCode, e as getData, h as homePageData } from "../../../chunks/globalStore.js";
import { C as Contact } from "../../../chunks/Contact.js";
const WorkingTogether = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { brands } = $$props;
  let { title } = $$props;
  if ($$props.brands === void 0 && $$bindings.brands && brands !== void 0)
    $$bindings.brands(brands);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="px-[5%] 2xl:px-0 py-12 bg-[#F1F1F1] md:bg-white text-center overflow-hidden"><div class="max-w-7xl mx-auto"><p class="text-tw-blue text-tw-3 md:text-tw-2 font-semibold">${escape(title ?? "Working together makes the difference")}</p>

    <div class="hidden mt-10 lg:flex gap-8 w-full mx-auto">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        rewind: true,
        autoplay: true,
        perPage: 4,
        arrows: false,
        pagination: false,
        interval: 2e3,
        gap: 30
      }
    },
    {},
    {
      default: () => {
        return `${each(brands, (brand) => {
          let logoUrl = brand?.logo?.data?.attributes?.url;
          return `
          ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img class="w-full h-6 md:h-14 object-contain"${add_attribute("src", `${logoUrl}`, 0)} alt="">
          `;
            }
          })}`;
        })}`;
      }
    }
  )}</div>
    <div class="lg:hidden mt-5 gap-8 w-fit max-w-6xl mx-auto">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        arrows: false,
        pagination: false,
        interval: 2e3
      }
    },
    {},
    {
      default: () => {
        return `${each(brands, (brand) => {
          let logoUrl = brand?.logo?.data?.attributes?.url;
          return `
          ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img class="w-full h-6 md:h-24 object-contain"${add_attribute("src", `${logoUrl}`, 0)} alt="">
          `;
            }
          })}`;
        })}`;
      }
    }
  )}</div></div></div>`;
});
const SoftwareSolutions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { cards = [] } = $$props;
  let { header } = $$props;
  if ($$props.cards === void 0 && $$bindings.cards && cards !== void 0)
    $$bindings.cards(cards);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  $$unsubscribe_localeCode();
  return `<div class="px-[5%] xl:px-0 max-w-7xl mx-auto mt-10 xl:mt-16 mb-14">${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: header?.title ?? "Software Solutions",
      description: header?.description ?? "Our ecosystem of solutions based on science, technological innovation and Blockchain technology help businesses on their journey towards mitigating their environmental impact and becoming carbon neutral.",
      buttonText: header?.button_text ?? "check all software solutions",
      buttonLink: header?.button_link ?? "/software"
    },
    {},
    {}
  )}

  <div class="text-center mt-8"><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">${each(cards, (card) => {
    let imageUrl = card?.image?.data?.attributes?.url;
    return `
        ${validate_component(Card, "Card").$$render(
      $$result,
      {
        service: header?.title ? header?.title : "Software Solutions",
        imageUrl,
        title: card.title,
        description: card.description,
        buttonText: card.button_text_1 ?? "More info",
        buttonLink: card.button_link_1 ?? "/software"
      },
      {},
      {}
    )}`;
  })}</section></div>
  <a${add_attribute(
    "href",
    header?.button_link ? `${header?.button_link}?lang=${$localeCode}` : `/software?lang=${$localeCode}`,
    0
  )} class="md:hidden text-xs md:text-xl font-bold flex items-center text-primary-content gap-x-1 hover:underline w-fit mx-auto mt-5"><span>+</span>
    <span>${escape(header?.button_text ?? "check all software solutions")}</span></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  let $homePageData, $$unsubscribe_homePageData;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  $$unsubscribe_homePageData = subscribe(homePageData, (value) => $homePageData = value);
  let { data } = $$props;
  let { form } = $$props;
  let promise = getData($localeCode);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_localeCode();
  $$unsubscribe_homePageData();
  return `${$$result.head += `<!-- HEAD_svelte-5c1gjo_START -->${$$result.title = `<title>Trueworld</title>`, ""}<meta name="description"${add_attribute("content", data?.title, 0)}><!-- HEAD_svelte-5c1gjo_END -->`, ""}

<div class="bg-secondary">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    
    <div class="h-screen grid place-items-center bg-base-300"><div class="loader"></div></div>
    `;
    }
    return function(data2) {
      return `
    ${$homePageData?.hero_section.length > 0 ? `${validate_component(Hero, "Hero").$$render($$result, { hero: $homePageData?.hero_section[0] }, {}, {})}` : ``}

    ${$homePageData.contents_section.length > 0 ? `${validate_component(ConsultingServices, "ConsultingServices").$$render(
        $$result,
        {
          header: $homePageData?.contents_section[0],
          cards: $homePageData?.contents_section[1]?.card
        },
        {},
        {}
      )}` : ``}

    ${$homePageData.contents_section.length > 2 ? `${validate_component(SoftwareSolutions, "SoftwareSolutions").$$render(
        $$result,
        {
          header: $homePageData?.contents_section[2],
          cards: $homePageData?.contents_section[3]?.card
        },
        {},
        {}
      )}` : ``}

    ${$homePageData.contact_section.length > 0 ? `${validate_component(Contact, "Contact").$$render(
        $$result,
        {
          form,
          contactData: $homePageData?.contact_section
        },
        {},
        {}
      )}` : ``}

    ${$homePageData.brands_section.length > 0 ? `${validate_component(WorkingTogether, "WorkingTogether").$$render(
        $$result,
        {
          title: $homePageData?.brands_section[0]?.title,
          brands: $homePageData?.brands_section[0]?.brand
        },
        {},
        {}
      )}` : ``}
  `;
    }();
  }(promise)}</div>`;
});
export {
  Page as default
};
