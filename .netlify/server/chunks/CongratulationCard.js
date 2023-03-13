import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./index3.js";
import { F as FooterSignup } from "./FooterSignup.js";
import { L as Logo } from "./Logo.js";
const CongratulationCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { button } = $$props;
  let { link } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="w-full h-auto bg-primary py-36 px-4"><div class="flex flex-col justify-center items-center max-w-md mx-auto bg-secondary rounded-lg shadow-tw-btn "><div class="pt-12"><div class="space-y-10 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-base-100 w-[10rem] text-lg font-bold">${escape(title)}</h3></div>
      <div class="w-full mt-7 flex justify-center "><img src="signup/check.png" class="w-12" alt=""></div>

      <div class="flex justify-center pt-14 pb-16"><a${add_attribute("href", link, 0)} class="rounded-full text-sm px-7 py-1 text-secondary bg-base-200">${escape(button)}</a></div></div>
    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  CongratulationCard as C
};
