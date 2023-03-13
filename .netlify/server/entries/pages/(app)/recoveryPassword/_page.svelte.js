import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { C as CongratulationCard } from "../../../../chunks/CongratulationCard.js";
import "devalue";
import { L as Logo } from "../../../../chunks/Logo.js";
import { F as FooterSignup } from "../../../../chunks/FooterSignup.js";
const RecoveryPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="w-full h-auto bg-primary pt-36 pb-36 px-4"><div class="flex flex-col justify-center items-center max-w-sm mx-auto bg-secondary rounded-lg shadow-lg "><div class="pt-12"><div class="space-y-2 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content text-lg font-bold">Change password</h3>
        <p class="text-base-100 text-sm ">Enter your new password</p></div></div>

    <form class="w-full px-4 grid grid-cols-1" action="?/recoveryPassword" method="POST" name="form" accept-charset="UTF-8"><div class="mt-6 mb-10 space-y-4"><div class="relative"><input${add_attribute("value", form?.password || "", 0)} name="password"${add_attribute("type", "password", 0)} placeholder="New pasword*" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          
          <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-3 cursor-pointer" alt="">

          ${form?.errors?.password ? `<label for="password" class="text-error mt-1 ml-3">${escape(form?.errors?.password)}</label>` : ``}</div>
        <div class="relative"><input${add_attribute("value", form?.confirmPassword || "", 0)} name="confirmPassword"${add_attribute("type", "password", 0)} placeholder="Repeat New pasword*" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          
          <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-3 cursor-pointer" alt="">

          ${form?.errors?.confirmPassword ? `<label for="confirmPassword" class="text-error mt-1 ml-3">${escape(form?.errors?.confirmPassword)}</label>` : ``}</div>

        <div class="flex justify-end pt-7 ">
          <button type="submit" class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content ">Confirm</button></div></div></form>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<main>${form?.isExist ? `${validate_component(CongratulationCard, "CongratulationCard").$$render(
    $$result,
    {
      title: "Succesfully changed password",
      button: "Log in"
    },
    {},
    {}
  )}` : `${validate_component(RecoveryPassword, "RecoveryPassword").$$render($$result, { form }, {}, {})}`}</main>`;
});
export {
  Page as default
};
