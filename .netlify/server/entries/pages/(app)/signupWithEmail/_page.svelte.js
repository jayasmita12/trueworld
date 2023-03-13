import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { C as CongratulationCard } from "../../../../chunks/CongratulationCard.js";
import { w as writable } from "../../../../chunks/index2.js";
import "devalue";
import { B as BlockchainLogo } from "../../../../chunks/BlockchainLogo.js";
import { L as Logo } from "../../../../chunks/Logo.js";
import { F as FooterSignup } from "../../../../chunks/FooterSignup.js";
const hasSignedUp = writable(false);
const NewUserAccount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_hasSignedUp;
  $$unsubscribe_hasSignedUp = subscribe(hasSignedUp, (value) => value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_hasSignedUp();
  return `<div class="w-full min-h-[93vh] bg-primary grid place-items-center px-4 py-16"><div class="flex flex-col justify-center items-center max-w-2xl mx-auto bg-secondary rounded-lg shadow-lg "><div class="pt-12"><div class="space-y-3 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content font-bold">Create your user account</h3></div></div>

    <form action="/signupWithEmail" method="POST" name="form" id="signup-form" accept-charset="UTF-8"><div class="w-full px-4 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 my-20"><div><div><input${add_attribute("value", form?.firstName || "", 0)} name="firstName" type="text" placeholder="First name" class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
            ${form?.errors?.firstName ? `<label for="firstName" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.firstName)}</label>` : ``}</div></div>
        <div><input${add_attribute("value", form?.lastName || "", 0)} name="lastName" type="text" placeholder="Last name" class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          ${form?.errors?.lastName ? `<label for="lastName" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.lastName)}</label>` : ``}</div>
        <div class="sm:col-span-2"><input${add_attribute("value", form?.email || "", 0)} name="email" type="email" placeholder="Email*" class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          ${form?.errors?.email ? `<label for="email" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.email)}</label>` : ``}</div>
        <div class="relative"><input${add_attribute("value", form?.password || "", 0)} name="password"${add_attribute("type", "password", 0)} placeholder="Pasword*" class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          
          <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-2 cursor-pointer" alt="">

          ${form?.errors?.password ? `<label for="password" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.password)}</label>` : ``}</div>
        <div class="relative"><input${add_attribute("value", form?.confirmPassword || "", 0)} name="confirmPassword"${add_attribute("type", "password", 0)} placeholder="Confirm Password*" class="rounded-full bg-transparent py-1 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          
          <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-2 cursor-pointer" alt="">

          ${form?.errors?.confirmPassword ? `<label for="confirmPassword" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.confirmPassword)}</label>` : ``}</div></div>

      <div class="px-5 flex justify-between space-x-14"><div class="hidden sm:flex w-[70%] self-end h-16 space-x-2">
          <div class="">${validate_component(BlockchainLogo, "BlockchainLogo").$$render($$result, {}, {}, {})}</div>
          <span class="max-h-fit overflow-hidden"><p class="text-accent-content text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing
              elit.consectetur adipisicing elit.rrrrrrrrrrrrrrrrrrrrrrr
              rrrrrrrrrrrr
            </p></span></div>
        <div class="flex flex-col space-y-3 w-full justify-end items-end"><div class="flex text-right space-x-1 justify-end "><div><input type="radio" class="accent-base-200 bg-transparent w-4 h-4" name="" id=""></div>
            <p class="text-primary-content self-center text-xs font-medium">I agree to the <a href="/" class="text-base-100 font-normal">Terms of Service</a>
              and
              <a href="/" class="text-base-100 font-normal">Privacy Policy</a></p></div>
          <div><button class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content" type="submit">Send
            </button></div></div></div></form>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hasSignedUp, $$unsubscribe_hasSignedUp;
  $$unsubscribe_hasSignedUp = subscribe(hasSignedUp, (value) => $hasSignedUp = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_hasSignedUp();
  return `<main>${$hasSignedUp ? `${validate_component(CongratulationCard, "CongratulationCard").$$render(
    $$result,
    {
      title: "Congratulation, Start your jurney!",
      button: "My Profile",
      link: "/profile"
    },
    {},
    {}
  )}` : `${validate_component(NewUserAccount, "NewUserAccount").$$render($$result, { form }, {}, {})}`}</main>`;
});
export {
  Page as default
};
