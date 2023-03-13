import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="h-screen p-10"><div class="rouned-xl p-5 bg-white flex items-center flex-col"><img class="h-[35rem]" src="/401/not-found.jpg" alt="">
            <div class="flex flex-col text-tw-blue">
                <p class="mt-8">It seems your lost</p>
                <a class="p-2 border rounded-md" href="/">Go back to home</a>
                <h1>${escape($page.status)}: ${escape($page.error.message)}</h1></div></div></div>`;
});
export {
  Error as default
};
