import { c as create_ssr_component, e as escape, f as null_to_empty, b as add_attribute, d as each, v as validate_component } from "../../../../chunks/index3.js";
import { L as Logo } from "../../../../chunks/Logo.js";
import { F as FooterSignup } from "../../../../chunks/FooterSignup.js";
import "devalue";
const OtpItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".default-input.svelte-qrtlgz{width:30px;height:40px;text-align:center;border:1px solid black;margin:0}",
  map: null
};
const OtpItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { input = null } = $$props;
  let { index } = $$props;
  let { value } = $$props;
  let { codes } = $$props;
  let { inputs } = $$props;
  let { nostyle } = $$props;
  let { className } = $$props;
  let { num } = $$props;
  let { style } = $$props;
  let { placeholder } = $$props;
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.codes === void 0 && $$bindings.codes && codes !== void 0)
    $$bindings.codes(codes);
  if ($$props.inputs === void 0 && $$bindings.inputs && inputs !== void 0)
    $$bindings.inputs(inputs);
  if ($$props.nostyle === void 0 && $$bindings.nostyle && nostyle !== void 0)
    $$bindings.nostyle(nostyle);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.num === void 0 && $$bindings.num && num !== void 0)
    $$bindings.num(num);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$1);
  return `<input class="${escape(null_to_empty(`${nostyle ? "" : "default-input"} ${className}`), true) + " svelte-qrtlgz"}"${add_attribute("style", style, 0)}${add_attribute("value", value, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("this", input, 0)}>`;
});
const SvelteOtp_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-kwpu2{display:flex;gap:0.5rem;align-items:center}",
  map: null
};
const SvelteOtp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let placeholders;
  let { numOfInputs = 6 } = $$props;
  let { value = "" } = $$props;
  let { separator = "" } = $$props;
  let { disableDefaultStyle = false } = $$props;
  let { inputClass = "" } = $$props;
  let { wrapperClass = "" } = $$props;
  let { separatorClass = "" } = $$props;
  let { inputStyle = "" } = $$props;
  let { wrapperStyle = "" } = $$props;
  let { separatorStyle = "" } = $$props;
  let { numberOnly = false } = $$props;
  let { placeholder = "" } = $$props;
  let { onlyShowMiddleSeparator = false } = $$props;
  let codes = [
    ...value.slice(0, numOfInputs).split(""),
    ...Array(numOfInputs <= value.length ? 0 : numOfInputs - value.length).fill("")
  ];
  let inputs = Array(numOfInputs).fill(null);
  if ($$props.numOfInputs === void 0 && $$bindings.numOfInputs && numOfInputs !== void 0)
    $$bindings.numOfInputs(numOfInputs);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.separator === void 0 && $$bindings.separator && separator !== void 0)
    $$bindings.separator(separator);
  if ($$props.disableDefaultStyle === void 0 && $$bindings.disableDefaultStyle && disableDefaultStyle !== void 0)
    $$bindings.disableDefaultStyle(disableDefaultStyle);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0)
    $$bindings.wrapperClass(wrapperClass);
  if ($$props.separatorClass === void 0 && $$bindings.separatorClass && separatorClass !== void 0)
    $$bindings.separatorClass(separatorClass);
  if ($$props.inputStyle === void 0 && $$bindings.inputStyle && inputStyle !== void 0)
    $$bindings.inputStyle(inputStyle);
  if ($$props.wrapperStyle === void 0 && $$bindings.wrapperStyle && wrapperStyle !== void 0)
    $$bindings.wrapperStyle(wrapperStyle);
  if ($$props.separatorStyle === void 0 && $$bindings.separatorStyle && separatorStyle !== void 0)
    $$bindings.separatorStyle(separatorStyle);
  if ($$props.numberOnly === void 0 && $$bindings.numberOnly && numberOnly !== void 0)
    $$bindings.numberOnly(numberOnly);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.onlyShowMiddleSeparator === void 0 && $$bindings.onlyShowMiddleSeparator && onlyShowMiddleSeparator !== void 0)
    $$bindings.onlyShowMiddleSeparator(onlyShowMiddleSeparator);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    placeholders = placeholder.length < numOfInputs ? [
      ...placeholder.split(""),
      ...Array(numOfInputs - placeholder.length).fill("")
    ] : placeholder.split("");
    value = codes.join("");
    $$rendered = `<div class="${escape(null_to_empty(`${disableDefaultStyle ? "" : "wrapper"} ${wrapperClass}`), true) + " svelte-kwpu2"}"${add_attribute("style", wrapperStyle, 0)}>${each(codes, (value2, i) => {
      return `${validate_component(OtpItem, "OtpItem").$$render(
        $$result,
        {
          num: numberOnly,
          index: i,
          inputs,
          nostyle: disableDefaultStyle,
          className: inputClass,
          style: inputStyle,
          placeholder: placeholders[i],
          input: inputs[i],
          value: value2,
          codes
        },
        {
          input: ($$value) => {
            inputs[i] = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            value2 = $$value;
            $$settled = false;
          },
          codes: ($$value) => {
            codes = $$value;
            $$settled = false;
          }
        },
        {}
      )}
		${separator && i !== codes.length - 1 && (!onlyShowMiddleSeparator || onlyShowMiddleSeparator && i === codes.length / 2 - 1 && numOfInputs % 2 === 0) ? `<span class="${escape(null_to_empty(separatorClass), true) + " svelte-kwpu2"}"${add_attribute("style", separatorStyle, 0)}>${escape(separator)}</span>` : ``}`;
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const OTPvarify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="w-full h-auto bg-primary pt-36 pb-36 px-4"><div class="flex flex-col justify-center items-center max-w-md mx-auto bg-secondary rounded-lg shadow-lg "><div class="pt-12"><div class="space-y-2 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content text-lg font-bold">Check your email</h3>
        <p class="text-base-100 max-w-xs text-base font-medium pt-9">To keep your account safe , please check your email and introduce the
          code.
        </p></div></div>

    
    <form action="?/verifyOtp" name="form" method="POST" class="flex flex-col space-y-8 justify-center space-x-2 my-5"><div class="self-center">${validate_component(SvelteOtp, "SvelteOtp").$$render(
    $$result,
    {
      inputClass: "border-accent-content border-b-2 w-10 h-10 bg-transparent text-center  focus:outline-none  text-neutral-content ",
      wrapperClass: "flex flex-row  space-x-2",
      name: "otpinput",
      value: form?.otpinput || "",
      disableDefaultStyle: "false"
    },
    {},
    {}
  )}
        ${form?.errors ? `
          <label for="otpinput" class="text-error mt-1 text-center">${escape(form?.errors.otpinput || "")}</label>` : ``}</div>
      <div class="space-y-8"><p class="text-accent-content text-xs text-center px-5 ">We have sent an email to <a href="/" class="text-base-100">I.ferrer@trueworld.org</a> to validate your account
        </p>

        <div class="px-5 flex justify-end w-full "><a href="/recoveryPassword"><button type="submit" class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content ">Confirm</button></a></div></div></form>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const RecoveryEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="w-full h-auto bg-primary pt-36 pb-36 px-4"><div class="flex flex-col justify-center items-center max-w-sm mx-auto bg-secondary rounded-lg shadow-lg "><div class="pt-12"><div class="space-y-2 text-center"><div class="flex justify-center">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
        <h3 class="text-neutral-content text-lg font-bold">Find your email</h3>
        <p class="text-base-100 text-sm ">Enter your recovery email</p></div></div>

    
    <form class="w-full px-4" action="?/verifyEmail" name="form" method="POST"><div class="mt-6 mb-32 space-y-4"><input type="email"${add_attribute("value", form?.email || "", 0)} name="email" placeholder="Email" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">

        ${form?.errors?.email ? `<label for="email" class="text-error mt-1 ml-3">${escape(form?.errors?.email)}</label>` : ``}</div>
      <div class="px-2 flex justify-between w-full "><a href="/signup" class="text-neutral-content text-base font-semibold underline">Create account</a>
        
        <button class="rounded-full disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-primary-content" type="submit">Next</button></div></form>

    ${validate_component(FooterSignup, "FooterSignup").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    console.log(form);
  }
  return `<main>${form?.isExist ? `${validate_component(OTPvarify, "OTPvarify").$$render($$result, { form }, {}, {})}` : `${validate_component(RecoveryEmail, "RecoveryEmail").$$render($$result, { form }, {}, {})}`}</main>`;
});
export {
  Page as default
};
