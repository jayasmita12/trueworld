import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, v as validate_component } from "./index3.js";
import { p as page } from "./stores.js";
import { l as localeCode, j as currentVideoUrl } from "./globalStore.js";
import { S as Splide_1, d as SplideTrack, a as SplideSlide } from "./SplideSlide.js";
const Nature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { bg } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { text } = $$props;
  let { button_text } = $$props;
  let { button_link } = $$props;
  const currentRoute = $page.url.pathname;
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.button_text === void 0 && $$bindings.button_text && button_text !== void 0)
    $$bindings.button_text(button_text);
  if ($$props.button_link === void 0 && $$bindings.button_link && button_link !== void 0)
    $$bindings.button_link(button_link);
  $$unsubscribe_page();
  $$unsubscribe_localeCode();
  return `<div class="bg-cover bg-center flex h-[70vh] lg:h-[85vh] relative">${bg ? `${bg?.ext === ".mp4" ? `<video poster="/default-poster.jpg" type="video/mp4" autoplay loop muted playsinline class="h-full w-full object-cover"><source${add_attribute("src", `${bg?.url}`, 0)} type="video/mp4"></video>` : `<img class="h-full w-full object-cover object-center"${add_attribute("src", bg?.url ? `${bg?.url}` : "/suite/nature.png", 0)} alt="">`}` : ``}
  <div class="${"absolute top-0 left-0 " + escape(bg ? "" : "bg-tw-secondary", true) + " w-full h-full overflow-hidden grid place-items-center"}"><div class="w-full px-[5%] xl:px-0 max-w-7xl mx-auto"><h1 class="${"text-white text-tw-1 lg:text-tw-title leading-none font-bold drop-shadow-md " + escape(currentRoute === "/explore" ? "max-w-sm" : "max-w-xl", true)}">${escape(title ?? "Discover consulting")}

        <h1 class="mt-1 text-white text-tw-1 lg:text-tw-title leading-none font-light drop-shadow-md">${escape(description ?? "Drive The Best Environmental Outcomes")}</h1>

        <p class="mt-5 text-sm lg:text-lg font-light text-white">${escape(text ?? "We provide made-to-measure sustainability for all businesses of any size and sector by assisting our clients in the analysis, definition and implementation of innovative decarbonisation plans and strategies.")}</p>

        ${button_text && button_link ? `<a${add_attribute("href", `${button_link}?lang=${$localeCode}`, 0)} class="mt-6 btn btn-sm btn-outline rounded-full px-6 text-white capitalize text-base hover:bg-tw-orange hover:text-tw-blue font-base bg-transparent">${escape(button_text)}</a>` : ``}</h1></div></div></div>`;
});
const Faqs_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-h6m6zl-details-show{from{opacity:0;transform:var(--details-translate, translateY(-0.5em))}}details[open].svelte-h6m6zl>.svelte-h6m6zl:not(summary){animation:svelte-h6m6zl-details-show 200ms ease-in-out}details.svelte-h6m6zl summary.svelte-h6m6zl{list-style:none}details.svelte-h6m6zl summary .closed.svelte-h6m6zl{display:none}details[open].svelte-h6m6zl summary .closed.svelte-h6m6zl{display:block}details[open].svelte-h6m6zl summary .open.svelte-h6m6zl{display:none}details.svelte-h6m6zl summary.svelte-h6m6zl::-webkit-details-marker{display:none}",
  map: null
};
const Faqs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { faqs } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.faqs === void 0 && $$bindings.faqs && faqs !== void 0)
    $$bindings.faqs(faqs);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `<div class=""><div class="px-[5%] xl:px-0 max-w-7xl mx-auto pt-8 md:pt-16 xl:pt-24 relative xl:mb-24"><h1 class="text-3xl xl:text-5xl text-primary-content font-light leading-tight drop-shadow-md lg:text-center">${escape(title ?? "Frequently Asked Questions")} <br>

      ${escape(description ?? "(Faq)")}</h1>

    <div class="mt-16 mb-5 lg:mb-0">${each(faqs, (faq) => {
    return `<details class="cursor-pointer svelte-h6m6zl"><summary class="flex items-center justify-between lg:justify-start gap-x-1 py-2 lg:py-3 xl:py-7 border-b-2 border-accent-content/20 svelte-h6m6zl"><div class="order-2 lg:order-1"><svg class="open w-5 h-5 lg:w-8 lg:h-8 text-base-200 rotate-90 lg:rotate-0 svelte-h6m6zl" fill="none" stroke="currentColor" stroke-width="3.00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
              <svg class="closed w-5 h-5 lg:w-8 lg:h-8 text-base-200 svelte-h6m6zl" fill="none" stroke="currentColor" stroke-width="3.00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path></svg></div>
            <span class="text-primary-content md:text-xl xl:text-tw-35 font-medium lg:font-black order-1 lg:order-2">${escape(faq.title ?? "")}
            </span></summary>
          ${each(faq.qna, (faq2) => {
      return `<div class="py-5 text-tw-accent  svelte-h6m6zl"><details class="group svelte-h6m6zl"><summary class="flex items-center justify-between lg:justify-start space-x-2 font-medium cursor-pointer list-none svelte-h6m6zl"><span class="transition group-open:rotate-180 order-2 lg:order-1"><svg class="w-5 h-5 lg:w-8 lg:h-8 text-gray-400" fill="none" stroke="currentColor" stroke-width="2.50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span>
                  <span class="text-sm xl:text-tw-30 order-1 lg:order-2">${escape(faq2.question ?? "")}
                  </span></summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn text-xs xl:text-[21px] leading-tight lg:mt-5 xl:mt-10 px-6 xl:px-10 svelte-h6m6zl">${escape(faq2.answer ?? "")}
                </p></details>
            </div>`;
    })}
        </details>`;
  })}</div></div>
</div>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videoId;
  let $currentVideoUrl, $$unsubscribe_currentVideoUrl;
  $$unsubscribe_currentVideoUrl = subscribe(currentVideoUrl, (value) => $currentVideoUrl = value);
  let { title } = $$props;
  const youtube_parser = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  videoId = $currentVideoUrl && youtube_parser($currentVideoUrl);
  $$unsubscribe_currentVideoUrl();
  return `<input type="checkbox" id="my-modal-4" class="modal-toggle">
<label for="my-modal-4" class="modal cursor-pointer "><label class="modal-box relative bg-tw-blue max-w-7xl max-h-fit" for="">
    
    

    <div class="h-[40vh] md:h-[60vh] lg:h-[80vh]">${videoId ? `<iframe class="h-full w-full object-cover"${add_attribute("src", `https://www.youtube.com/embed/${videoId}`, 0)}${add_attribute("title", title, 0)}></iframe>` : `<div class="w-full h-full grid place-items-center text-xl font-medium text-white/90"><p>Video not found</p></div>`}</div>
    <div class="mt-5 flex flex-col md:flex-row justify-between md:items-center"><h1 class="text-xl font-medium text-white/90">${escape(title ?? "Forest intelligent panel")}</h1>
      
      <div class="modal-action"><label for="my-modal-4" class="btn">Close</label></div></div></label></label>`;
});
const Sectors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  let $$unsubscribe_currentVideoUrl;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  $$unsubscribe_currentVideoUrl = subscribe(currentVideoUrl, (value) => value);
  let { title } = $$props;
  let { sectors } = $$props;
  let currentTitle = "";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.sectors === void 0 && $$bindings.sectors && sectors !== void 0)
    $$bindings.sectors(sectors);
  $$unsubscribe_localeCode();
  $$unsubscribe_currentVideoUrl();
  return `<div><div class="px-[5%] xl:px-0 py-10 md:py-12 max-w-4xl mx-auto"><h1 class="lg:text-tw-title text-tw-30 lg:text-center text-primary-content font-medium leading-none">${escape(title ? title : "Discover all the sectors in which our solution can be applied.")}</h1></div>

  <section>${each(sectors, (sector, index) => {
    return `<div class="px-[5%] xl:px-0 py-10 lg:py-24 bg-base-300 even:bg-base-300/70"><div class="${"max-w-7xl mx-auto flex flex-col " + escape(index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row", true) + " lg:items-center gap-8 lg:gap-24 xl:gap-60"}">${sector?.image?.data ? `<img class="w-full lg:w-[44%] xl:w-[50%] object-contain"${add_attribute(
      "src",
      sector?.image?.data?.attributes ? `${sector?.image?.data?.attributes.url}` : "/smart-dashboard/dashboard.png",
      0
    )} alt="">` : `<img class="w-full lg:w-[44%] xl:w-[50%] object-contain" src="/smart-dashboard/dashboard.png" alt="">`}
          <div class="lg:w-[36%] text-white"><h2 class="text-tw-30 lg:text-tw-title font-light leading-none">${escape(sector.title ?? "")}</h2>
            <p class="text-sm lg:text-[21px] font-light mt-6 md:mt-10 lg:mt-12">${escape(sector.description ?? "")}</p>
            <div class="flex gap-x-3 mt-6 md:mt-10"><a${add_attribute(
      "href",
      sector.button_link_1 ? `${sector.button_link_1}?lang=${$localeCode}` : "/smart-dashboard/spanish_registry_carbon_footprint_offsetting_co2_removal_tcm30-178352.pdf",
      0
    )} target="_blank" rel="noreferrer" class="btn btn-sm border border-primary-content rounded-full px-6 text-white capitalize font-base bg-secondary-focus hover:bg-tw-orange flex items-center gap-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg>
                <span>${escape(sector.button_text_1 ? sector.button_text_1 : "Brouchure")}
                </span></a>
              
              <label target="_blank" rel="noreferrer" for="my-modal-4" class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize bg-transparent flex items-center gap-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd"></path></svg>
                <span>${escape(sector.button_text_2 ? sector.button_text_2 : "Video")}</span>
              </label></div>
          </div></div>
      </div>`;
  })}
    ${validate_component(Modal, "Modal").$$render($$result, { title: currentTitle }, {}, {})}</section></div>`;
});
const Plans = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { plans } = $$props;
  let selected = plans[1];
  if ($$props.plans === void 0 && $$bindings.plans && plans !== void 0)
    $$bindings.plans(plans);
  return `<div class="w-full bg-primary-focus/20"><div class="pl-[5%] lg:px-[5%] xl:px-0 max-w-7xl mx-auto pt-20 pb-20 ">
    <div class="text-center text-primary-content font-light pr-[5%] lg:pr-0"><h3 class="text-[1.88rem] lg:text-[3rem] font-normal lg:font-light">${escape(plans[0]?.title ?? "")}</h3>
      <h5 class="text-tw-20">${escape(plans[0]?.description ?? "")}</h5></div>

    <div class="xl:hidden mt-10 flex justify-center pr-[5%] lg:pr-0">${each(plans, (plan) => {
    return `${plan.available_feature || plan.not_available_feature ? `<button class="${escape(
      selected === plan ? "border-b-[3px] border-primary-content font-bold" : " border-b border-accent-content/20",
      true
    ) + " w-24 pb-2 text-primary-content text-sm capitalize"}">${escape(plan.title)}
          </button>` : ``}`;
  })}</div>

    
    <div class="flex xl:grid grid-cols-3 mt-12 lg:mt-16 gap-5 lg:gap-2 overflow-hidden">${each(plans, (plan) => {
    return `${plan.available_feature || plan.not_available_feature ? `<div class="${escape(selected === plan && "order-first", true) + " bg-neutral pt-3 flex flex-col text-primary-content flex-shrink-0 w-[18rem] md:w-[24rem] xl:w-full lg:min-w-[18rem] min-h-[90vh]"}"><div class="text-tw-30 md:text-tw-45 font-bold text-center pb-8 capitalize drop-shadow flex flex-col md:flex-row items-center justify-center md:space-x-2"><h3>${escape(plan?.title)}</h3>
              ${plan?.price ? `<div><span class="font-medium">${escape(plan.price)}</span>
                  <span class="text-tw-30 mt-1 md:mt-0">€/Mes</span>
                </div>` : ``}</div>
            <div class="px-4 pb-3"><hr class="border-accent-content/20"></div>
            <div class="px-8 flex-1">${plan.available_feature?.length > 0 ? `${each(plan.available_feature, (feature) => {
      return `<p class="text-sm md:text-xl font-medium lg:leading-9">✓ ${escape(feature.text)}
                  </p>`;
    })}` : ``}
              ${plan.not_available_feature?.length > 0 ? `${each(plan.not_available_feature, (feature) => {
      return `<p class="text-sm md:text-xl font-medium lg:leading-9">x ${escape(feature.text)}
                  </p>`;
    })}` : ``}</div>
            <div class="px-4 pt-3"><hr class="border-accent-content/20"></div>
            <div class="flex justify-center"><a${add_attribute("href", plan?.button_link ? `${plan?.button_link}` : "/", 0)} class="my-7 border-primary-content hover:bg-tw-orange text-sm md:text-[22px] text-primary-content hover:text-white hover:border-white border rounded-full px-16 py-4 md:py-3 uppercase">${escape(plan?.button_text ? plan?.button_text : "CHECK OUT")}
              </a></div>
          </div>` : ``}`;
  })}</div></div></div>`;
});
const Discover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { features = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  return `<div class="w-full bg-base-300 mt-20 md:mt-24 xl:mt-28 xl:py-20"><div class="px-[5%] xl:px-0 max-w-7xl mx-auto pt-10 pb-20">
    <div><h1 class="lg:text-5xl text-tw-30 md:mx-20 md:text-center md:px-14 text-white font-light leading-none">${escape(title ?? "Discover all the features that our solution can offers to your business")}</h1></div>
    
    <div class="grid md:grid-cols-3 grid-cols-1 mt-14 gap-y-8 gap-x-10 xl:gap-x-24 text-white">${each(features, (feature, index) => {
    return `<div class="mx-5 md:mx-0"><h3 class="text-tw-30 lg:text-tw-50 font-black">${escape(index + 1)}.
          </h3>
          <h3 class="text-xl lg:text-tw-1 lg:leading-10 font-light">${escape(feature.title ?? "")}</h3>
          <p class="lg:text-tw-3 mt-6 leading-tight pr-5 font-light lg:font-extralight">${escape(feature.description ?? "")}</p>
        </div>`;
  })}</div></div></div>`;
});
const Technology = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { hero } = $$props;
  const bg = hero?.bg?.data?.attributes;
  if ($$props.hero === void 0 && $$bindings.hero && hero !== void 0)
    $$bindings.hero(hero);
  $$unsubscribe_localeCode();
  return `<div class="text-white mt-1"><div class="bg-base-300 px-[5%] xl:px-0 py-2"><h2 class="text-tw-30 md:text-tw-50 font-medium lg:text-center max-w-5xl mx-auto">${escape(hero.title ?? "Technology for climate change")}</h2></div>
  <div class="relative w-full h-[60vh]">${bg?.ext === ".mp4" ? `<video type="video/mp4" autoplay loop muted playsinline class="h-full w-full object-cover"><source data-sveltekit-reload${add_attribute("src", bg?.url, 0)} type="video/mp4"></video>` : `<img class="h-full w-full object-cover object-center"${add_attribute("src", bg?.url ? `${bg?.url}` : "/fiveSteps/hero.png", 0)} alt="">`}
    <div class="absolute top-0 left-0 bg-neutral-focus/50 h-full w-full"><div class="px-[5%] py-10 lg:py-28 xl:px-0 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between"><section class="lg:w-1/2"><h1 class="lg:text-tw-title text-tw-30 font-light leading-none">${escape(hero.description ? hero.description : "Ready to save your consumption?")}</h1>
          <div class="flex gap-x-3 mt-10"><a${add_attribute(
    "href",
    hero.button_link_1 ? `${hero.button_link_1}?lang=${$localeCode}` : `/contact?lang=${$localeCode}`,
    0
  )} class="btn btn-md border-0 rounded-full px-6 text-white capitalize lg:text-lg font-regular bg-tw-orange hover:bg-tw-orange">${escape(hero.button_text_1 ? hero.button_text_1 : "Book a demo")}</a>
            <a${add_attribute(
    "href",
    hero.button_link_2 ? `${hero.button_link_2}?lang=${$localeCode}` : `/contact?lang=${$localeCode}`,
    0
  )} class="btn btn-md btn-outline rounded-full px-6 text-white capitalize lg:text-lg font-regular bg-white/20">${escape(hero.button_text_2 ? hero.button_text_2 : "Get in touch")}</a></div></section>
        <section class="lg:w-1/2 mt-8 lg:mt-0"><p class="text-xl lg:text-tw-2 font- leading-none lg:leading-8 max-w-[18rem]">${escape(hero.text ? hero.text : " Take advantage of our free smart building IoT dashboard for climate control, energy management, and automation, all in a single IoT platform.")}</p></section></div></div></div></div>`;
});
const Steps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { steps } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.steps === void 0 && $$bindings.steps && steps !== void 0)
    $$bindings.steps(steps);
  return `<div class="w-full bg-base-300 mt-20 md:mt-24 xl:mt-28 xl:py-20"><div class="px-[5%] xl:px-0 max-w-7xl mx-auto pt-10 pb-20">
    <div><h1 class="lg:text-tw-title text-tw-30 md:mx-20 md:text-center md:px-14 text-white font-light leading-none max-w-5xl">${escape(title ? title : "Net Zero Your sustainable Business in 5 steps")}</h1></div>
    
    <div class="grid md:grid-cols-3 grid-cols-1 mt-14 gap-y-8 gap-x-10 xl:gap-x-24 text-white">${each(steps, (step, index) => {
    return `<div class="mx-5 md:mx-0"><h3 class="text-tw-30 lg:text-tw-50 font-black">Step ${escape(index + 1)}</h3>
          <h3 class="text-xl lg:text-tw-1 lg:leading-10 font-light">${escape(step.title ?? "")}</h3>
          <p class="lg:text-[21px] mt-6 leading-tight pr-5 font-light lg:font-extralight">${escape(step.description ?? "")}</p>
        </div>`;
  })}</div></div></div>`;
});
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { cards } = $$props;
  let options = {
    rewind: true,
    classes: {
      page: "splide__pagination__page custom-pagination-page"
    }
  };
  if ($$props.cards === void 0 && $$bindings.cards && cards !== void 0)
    $$bindings.cards(cards);
  $$unsubscribe_localeCode();
  return `<div class="relative">${validate_component(Splide_1, "Splide").$$render($$result, { hasTrack: false, options }, {}, {
    default: () => {
      return `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
        default: () => {
          return `${each(cards, (card) => {
            return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex flex-col lg:flex-row-reverse lg:justify-between gap-5 lg:gap-8">${card?.image?.data?.attributes?.ext === ".mp4" ? `
              <video type="video/mp4" autoplay loop muted playsinline class="h-full w-full object-cover"><source data-sveltekit-reload${add_attribute("src", card?.image?.data?.attributes.url ?? "/home/hero-vid.mp4", 0)} type="video/mp4"></video>` : `<img class="w-full lg:w-[44%] xl:w-[50%] max-h-[62vh] object-contain"${add_attribute("src", card?.image?.data?.attributes.url ?? "/default-img.png", 0)} alt="">`}
            <div class="text-primary-content text-start pb-6 lg:w-[45%] xl:w-[40%] xl:mt-8 relative"><h2 class="text-3xl xl:text-tw-title font-medium leading-none drop-shadow-md">${escape(card.title ?? "")}</h2>
              ${card.description ? `<p class="text-sm xl:text-base font-light leading-tight mt-5 mb-3 xl:h-[11rem]">${escape(card.description)}
                </p>` : ``}

              <div class="flex gap-5 mt-6 lg:mt-8 mb-8">${card?.button_text_1 && card?.button_link_1 ? `<a${add_attribute("href", `${card.button_link_1}?lang=${$localeCode}`, 0)} class="btn btn-sm rounded-full border border-white px-6 py-1 text-white hover:text-tw-blue capitalize bg-base-300 hover:bg-tw-orange">${escape(card.button_text_1)}
                  </a>` : ``}
                ${card?.button_text_2 && card?.button_link_2 ? `<a${add_attribute("href", `${card.button_link_2}?lang=${$localeCode}`, 0)} class="btn btn-sm btn-outline rounded-full px-6 py-1 text-primary-content hover:text-white capitalize bg-transparent hover:bg-tw-blue hover:border-tw-blue">${escape(card.button_text_2)}
                  </a>` : ``}</div>
            </div></div>
        `;
              }
            })}`;
          })}`;
        }
      })}
    <div class="absolute bottom-3 w-full lg:w-[30%] flex justify-between splide__arrows"><button class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 md:h-12 md:w-12 text-primary-content splide__arrow splide__arrow--prev"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path></svg></button>
      <ul class="splide__pagination text-primary-content mt-5"></ul>
      <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 md:h-12 md:w-12 text-primary-content splide__arrow splide__arrow--next"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg></button></div>`;
    }
  })}</div>`;
});
export {
  Discover as D,
  Faqs as F,
  Nature as N,
  Plans as P,
  Slider as S,
  Technology as T,
  Sectors as a,
  Steps as b
};
