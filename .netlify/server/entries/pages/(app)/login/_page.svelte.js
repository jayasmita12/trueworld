import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { L as Logo } from "../../../../chunks/Logo.js";
import { F as FooterSignup } from "../../../../chunks/FooterSignup.js";
import "devalue";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="w-full h-auto bg-primary pt-36 pb-36 px-4"><div class="flex flex-col justify-center items-center max-w-sm mx-auto bg-secondary rounded-lg shadow-lg "><div class="pt-12"><div class="space-y-2 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content text-lg font-bold">Log in</h3>
        <p class="text-base-100 text-sm ">To access TRUEWORLD</p></div></div>

    <form action="?/verifyEmail" method="POST" class="w-full px-4"><div class="mt-6 mb-32 space-y-4"><input type="email" name="email"${add_attribute("value", form?.email || "", 0)} placeholder="Email" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">

        ${form?.errors?.email ? `<label for="email" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.email)}</label>` : ``}</div>
      <div class="px-5 flex justify-between w-full "><a href="/signup" class="text-neutral-content text-base font-semibold underline">Create account
        </a>
        <button type="submit" class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content">Next
        </button></div></form>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
const PasswordCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="w-full h-auto bg-primary pt-36 pb-36 px-4"><div class="flex flex-col justify-center items-center max-w-sm mx-auto bg-secondary rounded-lg shadow-lg "><div class="pt-12"><div class="space-y-2 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content text-lg font-bold">Welcome</h3>
        <div class="rounded-full bg-transparent text-neutral-content font-semibold border-2 py-1 px-2"><select name="" class="bg-transparent focus:outline-none w-full pr-10"><option value="" class=""><span><img src="signup/user.png" class="w-10 h-10 self-center" alt="">
                <p class="self-center text-neutral-content">${escape(form?.email)}</p></span></option></select></div></div></div>

    <form action="?/verifyPassword" method="POST" class="w-full px-4"><div class="my-10 space-y-4"><div class="relative"><input${add_attribute("type", "password", 0)} name="password" placeholder="Password*" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
          
          <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-3" alt=""></div>

        ${form?.errors?.password ? `<label for="password" class="text-red-500 text-sm mt-2">${escape(form?.errors?.password)}</label>` : ``}

        <div class="flex space-x-1"><input type="radio" class="bg-transparent">
          <p class="text-accent-content text-sm font-medium">Remember me</p></div></div>
      <div class="px-5 flex justify-between w-full space-x-10"><div><a href="/recoveryEmail" class="text-neutral-content text-base font-semibold underline">Reset your password</a>
          <a href="/signup" class="text-neutral-content text-base font-semibold underline">Create account</a></div>
        <div class="self-center"><button type="submit" class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content">Next
          </button></div></div></form>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    console.log(form?.errors);
  }
  return `<main>${form?.isExist ? `${validate_component(PasswordCheck, "PasswordCheck").$$render($$result, { form }, {}, {})}` : `${validate_component(Login, "Login").$$render($$result, { form }, {}, {})}`}</main>`;
});
export {
  Page as default
};
