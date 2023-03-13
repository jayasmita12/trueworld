import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../../../chunks/index3.js";
import { b as Hero, c as ConsultingServices } from "../../../../../chunks/SplideSlide.js";
import { S as Slider, N as Nature, D as Discover, a as Sectors, b as Steps, P as Plans, T as Technology, F as Faqs } from "../../../../../chunks/Slider.js";
import { C as Contact } from "../../../../../chunks/Contact.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-pueaii_START -->${data ? `${$$result.title = `<title>${escape(`Trueworld - ${data?.title}`)}</title>`, ""}
  <meta name="description"${add_attribute("content", data?.title, 0)}>` : ``}<!-- HEAD_svelte-pueaii_END -->`, ""}

${data.hasOwnProperty("hero_section") || data.hasOwnProperty("cards_section") || data.hasOwnProperty("nature_section") || data.hasOwnProperty("slider_section") || data.hasOwnProperty("contents_section") || data.hasOwnProperty("features_section") || data.hasOwnProperty("contact_section") || data.hasOwnProperty("sectors_section") || data.hasOwnProperty("steps_section") || data.hasOwnProperty("plans_section") || data.hasOwnProperty("technology_section") || data.hasOwnProperty("faq_section") ? `<div class="">
  
  ${data.hero_section.length > 0 ? `${validate_component(Hero, "Hero").$$render($$result, { hero: data?.hero_section[0] }, {}, {})}` : ``}

  ${data.slider_section.length > 0 ? `<section class="px-[5%] xl:px-0 max-w-7xl mx-auto my-10 xl:my-28">${validate_component(Slider, "Slider").$$render($$result, { cards: data?.slider_section[0]?.card }, {}, {})}</section>` : ``}

  

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
  )}` : ``}

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
