import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { C as Contact } from "../../../../chunks/Contact.js";
import { l as localeCode } from "../../../../chunks/globalStore.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { hero } = $$props;
  const bg = hero?.bg?.data?.attributes;
  if ($$props.hero === void 0 && $$bindings.hero && hero !== void 0)
    $$bindings.hero(hero);
  $$unsubscribe_localeCode();
  return `<div class="bg-cover bg-center flex h-[75vh] lg:h-[82vh] relative">${bg ? `${bg?.ext === ".mp4" ? `
      <video poster="/default-poster.png"${add_attribute("src", `${bg.url}` ?? "/home/hero-vid.mp4", 0)} type="video/mp4" autoplay loop muted playsinline class="h-full w-full object-cover"></video>` : `<img class="h-full w-full object-cover object-center"${add_attribute("src", `${bg.url}` ? `${bg.url}` : "/home/hero.png", 0)} alt="">`}` : ``}
  <div class="${"absolute top-0 left-0 " + escape(bg ? "" : "bg-[#242424]", true) + " flex flex-col w-full h-full"}">
    <div class="flex-grow overflow-hidden grid place-items-center px-[5%] xl:px-0 w-full max-w-7xl mx-auto relative"><div class="w-full text-white"><h1 class="text-tw-1 lg:text-tw-60 leading-none font-medium drop-shadow-md md:max-w-lg lg:max-w-4xl">${escape(hero.title ? hero.title : "Book A Calsl - Contact Us")}</h1>
        <h2 class="text-tw-1 lg:text-tw-60 font-light leading-none mt-2">${escape(hero.description ? hero.description : "Accelerate Your Transition To Net Zero")}</h2>
        <p class="text-sm xl:text-tw-2 font-light leading-tight md:max-w-sm xl:max-w-3xl mt-5">${escape(hero.text ? hero.text : "As part of our mission to democratize carbon management..")}</p>

        <div class="flex gap-x-5 mt-6 md:mt-10"><a${add_attribute(
    "href",
    hero.button_link_1 ? `${hero.button_link_1}?lang=${$localeCode}` : `/consulting?lang=${$localeCode}`,
    0
  )} class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize hover:bg-tw-orange hover:text-tw-blue text-base font-base bg-transparent">${escape(hero.button_text_1 ? hero.button_text_1 : "Consulting")}</a>
          <a${add_attribute(
    "href",
    hero.button_link_2 ? `${hero.button_link_2}?lang=${$localeCode}` : `/software?lang=${$localeCode}`,
    0
  )} class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize hover:bg-tw-orange hover:text-tw-blue text-base font-base bg-transparent">${escape(hero.button_text_2 ? hero.button_text_2 : "Software")}</a></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-maqupi_START -->${$$result.title = `<title>${escape(`Trueworld - ${data?.title}`)}</title>`, ""}<meta name="description"${add_attribute("content", data?.title, 0)}><!-- HEAD_svelte-maqupi_END -->`, ""}

<div>${data.hero_section.length > 0 ? `${validate_component(Hero, "Hero").$$render($$result, { hero: data?.hero_section[0] }, {}, {})}` : ``}
  ${data.hero_section.length > 0 ? `${validate_component(Contact, "Contact").$$render($$result, { contactData: data?.contact_section, form }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
