import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component, d as each, j as compute_rest_props, k as createEventDispatcher, l as spread, o as escape_attribute_value, p as escape_object } from "./index3.js";
import "devalue";
import { l as localeCode } from "./globalStore.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bg;
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { hero } = $$props;
  if ($$props.hero === void 0 && $$bindings.hero && hero !== void 0)
    $$bindings.hero(hero);
  bg = hero?.bg?.data?.attributes;
  $$unsubscribe_localeCode();
  return `<div class="bg-cover bg-center flex h-[82vh] relative ">
  
  ${bg ? `${bg?.ext === ".mp4" ? `<video poster="/default-poster.png"${add_attribute("src", hero?.bg?.data?.attributes.url ?? "/home/hero-vid.mp4", 0)} type="video/mp4" autoplay loop muted playsinline class="h-full w-full object-cover"></video>` : `<img class="h-full w-full object-cover object-center"${add_attribute("src", bg?.url ?? "/home/hero.png", 0)} alt="">`}` : ``}
  <div class="${"absolute top-0 left-0 " + escape(bg ? "" : "bg-[#242424]", true) + " flex flex-col w-full h-full"}">
    <div class="flex-grow overflow-hidden grid place-items-center px-[5%] xl:px-0 w-full max-w-7xl mx-auto relative"><div class="w-full text-white"><h1 class="text-tw-1 lg:text-tw-60 leading-none font-medium drop-shadow-md md:max-w-lg lg:max-w-4xl">${escape(hero.title ? hero.title : "Our Software")}</h1>
        <h2 class="text-tw-1 lg:text-tw-60 font-light leading-none mt-2">${escape(hero.description ? hero.description : "Accelerate Your Transition To Net Zero")}</h2>
        <p class="xl:text-tw-2 font-light leading-tight md:max-w-sm xl:max-w-3xl mt-5">${escape(hero.text ? hero.text : "As part of our mission to democratize carbon management, we offer easy-to-use solutions to define nature-based climate strategies traced in Blockchain that")}</p>

        <div class="flex gap-x-5 mt-6 md:mt-10">${hero?.button_text_1 && hero?.button_link_1 ? `<a${add_attribute("href", `${hero.button_link_1}?lang=${$localeCode}`, 0)} class="btn btn-sm btn-outline rounded-full px-6 hover:bg-white hover:text-tw-blue text-white capitalize text-base font-base bg-transparent">${escape(hero.button_text_1)}</a>` : ``}
          ${hero?.button_text_2 && hero?.button_link_2 ? `<a${add_attribute("href", `${hero.button_link_2}?lang=${$localeCode}`, 0)} class="btn btn-sm btn-outline rounded-full px-6 hover:bg-white hover:text-tw-blue text-white capitalize text-base font-base bg-transparent">${escape(hero.button_text_2)}</a>` : ``}</div></div></div></div></div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { service } = $$props;
  let { imageUrl } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { buttonText } = $$props;
  let { buttonLink } = $$props;
  if ($$props.service === void 0 && $$bindings.service && service !== void 0)
    $$bindings.service(service);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.buttonLink === void 0 && $$bindings.buttonLink && buttonLink !== void 0)
    $$bindings.buttonLink(buttonLink);
  $$unsubscribe_localeCode();
  return `<div class="rounded-md border border-accent bg-neutral overflow-hidden group relative">${imageUrl ? `<div style="${"background-image: url(" + escape(imageUrl ? `${imageUrl}` : "/default-img.png", true) + ")"}" class="h-44 w-full bg-cover"><div class="h-full w-full bg-tw-secondary/30"></div></div>` : ``}

  <div class="p-5 md:p-6 flex flex-col justify-between group-hover:bg-accent/50 h-full"><div class="flex flex-col space-y-1 md:space-y-4 text-start"><p class="md:hidden text-[10px] text-primary-content font-medium uppercase ">${escape(service ?? "")}</p>
      <div class="flex items-center md:space-x-5"><div class="hidden h-16 w-16 rounded-full border border-secondary-content text-primary-content text-sm md:text-tw-2 font-bold md:grid place-items-center flex-shrink-0"><span>${escape(title?.charAt(0).concat(title?.substr(title?.indexOf(" ") + 1, 1)))}</span></div>
        <p class="text-neutral-content text-lg md:text-[25px] font-medium ">${escape(title ?? "")}</p></div>
      <div class="pt-2 pb-12 md:pb-16"><p class="text-neutral-content text-xs md:text-lg font-light leading-tight ">${escape(description ?? "")}</p></div></div></div>

  <div class="absolute bottom-3 w-full"><div class="px-4"><hr class="border border-accent-content/20"></div>
    <div class="flex w-full justify-end pr-5"><div class="mt-3"><a${add_attribute("href", `${buttonLink}?lang=${$localeCode}`, 0)} class="btn btn-sm btn-outline rounded-full px-7 text-white hover:text-base-300 text-tw-4 capitalize font-base bg-base-300 hover:bg-white ring-2 ring-secondary border hover:border-0 border-white shadow-md">${escape(buttonText ?? "More info")} +
        </a></div></div></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { title } = $$props;
  let { description } = $$props;
  let { buttonText } = $$props;
  let { buttonLink } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.buttonLink === void 0 && $$bindings.buttonLink && buttonLink !== void 0)
    $$bindings.buttonLink(buttonLink);
  $$unsubscribe_localeCode();
  return `<div class="hidden md:block text-center max-w-5xl mx-auto"><h2 class="text-3xl md:text-tw-title text-primary-content leading-tight md:leading-[45px] drop-shadow-md">${escape(title ?? "")}</h2>
  <p class="text-primary-content text-sm md:text-tw-2 font-extralight leading-none mt-5">${escape(description ?? "")}</p>
  <a${add_attribute("href", `${buttonLink}?lang=${$localeCode}`, 0)} class="text-base-100 text-xs md:text-xl font-bold flex items-center hover:text-primary-content gap-x-1 hover:underline w-fit mx-auto mt-5"><span>+</span>
    <span>${escape(buttonText ?? "")}</span></a></div>`;
});
const ConsultingServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { cards = [] } = $$props;
  let { header } = $$props;
  if ($$props.cards === void 0 && $$bindings.cards && cards !== void 0)
    $$bindings.cards(cards);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  $$unsubscribe_localeCode();
  return `<div class="px-[5%] xl:px-0 max-w-7xl mx-auto mt-10 xl:mt-16">${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: header?.title ?? "Consulting Services",
      description: header?.description ?? "Our ecosystem of solutions based on science, technological innovation and Blockchain technology help businesses on their journey towards mitigating their environmental impact and becoming carbon neutral.",
      buttonText: header?.button_text ?? "check all consulting solutions",
      buttonLink: header?.button_link ?? "/consulting"
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
        service: header?.title ? header?.title : "Consulting Services",
        imageUrl,
        title: card?.title,
        description: card?.description,
        buttonText: card.button_text_1 ?? "More info",
        buttonLink: card.button_link_1 ?? "/consulting"
      },
      {},
      {}
    )}`;
  })}</section></div>
  <a${add_attribute(
    "href",
    header?.button_link ? `${header?.button_link}?lang=${$localeCode}` : `/consulting?lang=${$localeCode}`,
    0
  )} class="md:hidden text-xs md:text-xl font-bold flex items-center text-primary-content gap-x-1 hover:underline w-fit mx-auto mt-5"><span>+</span>
    <span>${escape(header?.button_text ?? "check all consulting solutions")}</span></a></div>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
export {
  Card as C,
  Header as H,
  Splide_1 as S,
  SplideSlide as a,
  Hero as b,
  ConsultingServices as c,
  SplideTrack as d
};
