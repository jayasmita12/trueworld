import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from "../../../../chunks/index3.js";
import { L as Logo } from "../../../../chunks/Logo.js";
import { F as FooterSignup } from "../../../../chunks/FooterSignup.js";
import { l as localeCode } from "../../../../chunks/globalStore.js";
const SignupNow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  $$unsubscribe_localeCode();
  return `<div class="w-full h-auto bg-primary pt-36 pb-36 px-4"><div class="flex flex-col justify-center items-center max-w-md mx-auto bg-secondary rounded-lg shadow-lg "><div class="self-end pt-5 pr-5 cursor-pointer text-base-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 "><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></div>

    <div class="space-y-10 pt-12"><div class="space-y-3 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content font-bold">Sign up now</h3></div>

      <div class="flex flex-col space-y-3 w-[15rem]"><a${add_attribute("href", `/signupWithEmail?lang=${$localeCode}`, 0)} class="flex space-x-1 rounded-full border-2 text-neutral-content text-sm font-medium pl-2 py-1"><span><img src="signup/user.png" class="w-5 h-5 self-center" alt=""></span>
          <p class="self-center">Sign up with email</p></a>
        <button class="flex space-x-1 hover:bg-[#3a559f] hover:border-[#3a559f] hover:text-tw-primary rounded-full border-2 text-neutral-content text-sm font-medium pl-2 py-1"><span><img src="signup/facebook.png" class="w-5 h-5 self-center" alt=""></span>
          <p class="self-center">Sign up with Facebook</p></button>
        <button class="flex space-x-1 rounded-full border-2 text-neutral-content text-sm font-medium pl-2 py-1"><span><img src="signup/google.png" class="w-5 h-5 self-center" alt=""></span>
          <p class="self-center">Sign up with Gmail</p></button>
        <button class="flex space-x-1 rounded-full border-2 text-neutral-content text-sm font-medium pl-2 py-1"><span><img src="signup/microsoft.png" class="w-4 h-4 self-center" alt=""></span>
          <p class="self-center">Sign up with Microsoft</p></button>

        <button class="flex space-x-1 rounded-full border-2 text-neutral-content text-sm font-medium pl-2 py-1"><span><img src="signup/apple.png" class="w-5 h-5 self-center" alt=""></span>
          <p class="self-center">Sign up with Apple</p></button>
        <div class="text-center px-4 pt-7"><p class="text-primary-content text-sm font-medium">By joining you agree to our <a href="/" class="text-base-100 font-normal">Terms of Service</a>
            and
            <a href="/" class="text-base-100 font-normal">Privacy Policy</a></p></div></div></div>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(SignupNow, "SignupNow").$$render($$result, {}, {}, {})}
  </main>`;
});
export {
  Page as default
};
