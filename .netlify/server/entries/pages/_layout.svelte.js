import { c as create_ssr_component, a as subscribe, i as is_promise, n as noop } from "../../chunks/index3.js";
import { g as getNavData, l as localeCode } from "../../chunks/globalStore.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navPromise;
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  navPromise = getNavData($localeCode);
  $$unsubscribe_localeCode();
  return `
<main class="bg-secondary min-h-screen">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    <div class="h-screen grid place-items-center bg-base-300"><div class="loader"></div></div>
  `;
    }
    return function(data2) {
      return `
    
    ${slots.default ? slots.default({}) : ``}
    
  `;
    }();
  }(navPromise)}</main>`;
});
export {
  Layout as default
};
