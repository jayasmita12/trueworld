import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "./index3.js";
import "devalue";
import "./Contact.svelte_svelte_type_style_lang.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { labelFor } = $$props;
  let { type } = $$props;
  let { placeholder } = $$props;
  let { fieldType } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelFor === void 0 && $$bindings.labelFor && labelFor !== void 0)
    $$bindings.labelFor(labelFor);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.fieldType === void 0 && $$bindings.fieldType && fieldType !== void 0)
    $$bindings.fieldType(fieldType);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div><label class="text-sm"${add_attribute("for", labelFor, 0)}>${escape(label)}</label>

  <input${add_attribute("value", value, 0)} class="mt-1 text-lg border-b border-gray-200 bg-transparent w-full focus:outline-none"${add_attribute("id", labelFor, 0)}${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("fieldtype", fieldType, 0)}${add_attribute("name", name, 0)}></div>`;
});
const css = {
  code: "input.svelte-71r37y.svelte-71r37y:focus{outline:none}select.svelte-71r37y option.svelte-71r37y{margin:40px;background:#05324d;color:#fff;text-shadow:0 1px 0 rgba(0, 0, 0, 0.4)}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { privacyCheck = true } = $$props;
  let { contactData } = $$props;
  const inputs = contactData[1]?.input ? contactData[1]?.input : [];
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.privacyCheck === void 0 && $$bindings.privacyCheck && privacyCheck !== void 0)
    $$bindings.privacyCheck(privacyCheck);
  if ($$props.contactData === void 0 && $$bindings.contactData && contactData !== void 0)
    $$bindings.contactData(contactData);
  $$result.css.add(css);
  return `




<form action="/contact" method="POST" name="form" id="contact-form" accept-charset="UTF-8"><div id="contact" class="px-[5%] xl:px-0 py-10 pb-[8rem] bg-base-300 text-white "><div class="mb-8 md:mb-10 max-w-7xl mx-auto h-fit">${form?.success ? `<div class="alert alert-success shadow-lg mb-5"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Your message has been submited!</span>
            <p class="success">${escape(form?.status || "")}</p></div></div>` : ``}
      ${contactData[0] ? `<h1 class="text-3xl xl:text-tw-title font-medium leading-tight drop-shadow-md">${escape(contactData[0]?.title ?? "")}</h1>
        <p class="text-sm md:text-tw-2 mt-3">${escape(contactData[0]?.description ?? "")}</p>` : ``}</div>
    <div class="max-w-7xl mx-auto xl:px-0 text-tw-4 grid grid-cols-1 md:grid-cols-2 gap-x-14">${inputs[0] ? `<div class="h-20">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "name",
      fieldType: "1",
      label: inputs[0]?.text,
      labelFor: "name",
      type: "text",
      placeholder: inputs[0]?.placeholder,
      value: form?.name || ""
    },
    {},
    {}
  )}
          
          ${form?.errors?.name ? `<p class="text-red-500 mt-1">${escape(form?.errors?.name)}</p>` : ``}</div>` : ``}
      ${inputs[1] ? `<div class="h-20">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "organization",
      fieldType: "9",
      label: inputs[1]?.text,
      labelFor: "organization",
      type: "text",
      placeholder: inputs[1]?.placeholder,
      value: form?.organization || ""
    },
    {},
    {}
  )}
          ${form?.errors?.organization ? `<p class="text-red-500 mt-1">${escape(form?.errors?.organization)}</p>` : ``}</div>` : ``}
      ${inputs[2] ? `<div class="h-20">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "email",
      label: inputs[2]?.text,
      labelFor: "email",
      type: "email",
      placeholder: inputs[2]?.placeholder,
      value: form?.email || ""
    },
    {},
    {}
  )}
          ${form?.errors?.email ? `<p class="text-red-500 mt-1">${escape(form?.errors?.email)}</p>` : ``}</div>` : ``}
      ${inputs[3] ? `<div class="h-20">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "phone",
      label: inputs[3]?.text,
      labelFor: "phone",
      type: "tel",
      placeholder: inputs[3]?.placeholder,
      value: form?.phone || ""
    },
    {},
    {}
  )}
          ${form?.errors?.phone ? `<p class="text-red-500 mt-1">${escape(form?.errors?.phone)}</p>` : ``}</div>` : ``}

      ${contactData[2]?.__component === "block.dropdown" ? `<div class="h-20"><label class="text-sm" for="reason">${escape(contactData[2]?.subtitle ?? "")}</label>
          <div class="mt-1 p-1 border border-gray-200 rounded-sm"><select form="contact-form" name="reason" class="border-none outline-none bg-transparent text-lg w-full svelte-71r37y" id="reason"${add_attribute("value", form?.reason || contactData[2]?.dropdown_texts[0]?.text, 0)}>${each(contactData[2]?.dropdown_texts, (option) => {
    return `<option${add_attribute("value", option.text, 0)} class="svelte-71r37y">${escape(option.text)}</option>`;
  })}</select></div>
          ${form?.errors?.reason ? `<p class="text-red-500 mt-1">${escape(form?.errors?.reason)}</p>` : ``}</div>` : ``}

      ${contactData[3]?.__component === "block.dropdown" ? `<div class="h-20">${contactData[3]?.subtitle ? `<label class="text-sm" for="department">${escape(contactData[3]?.subtitle ?? "")}</label>` : ``}
          <div class="${escape(contactData[3]?.subtitle ? "mt-1" : "mt-6", true) + " p-1 border border-gray-200 rounded-sm"}"><select form="contact-form"${add_attribute("value", form?.department || contactData[3]?.dropdown_texts[0]?.text, 0)} name="department" class="border-none outline-none bg-transparent text-lg w-full svelte-71r37y">${each(contactData[3]?.dropdown_texts, (option) => {
    return `<option${add_attribute("value", option.text, 0)} class="svelte-71r37y">${escape(option.text)}</option>`;
  })}</select></div>
          ${form?.errors?.department ? `<p class="text-red-500 mt-1">${escape(form?.errors?.department)}</p>` : ``}</div>` : ``}

      ${contactData[4]?.__component === "block.textarea" ? `<div class="md:col-span-2 h-32"><label class="text-sm pb-2" for="message">${escape(contactData[4]?.text ?? "")}</label>
          <textarea class="bg-transparent text-base w-full border-b border-white focus:outline-none p-0"${add_attribute("placeholder", contactData[4]?.placeholder ?? "", 0)} name="message"${add_attribute("label", contactData[4]?.text ?? "", 0)} id="" cols="30" rows="3">${escape(form?.message || "", true)}</textarea>
          ${form?.errors?.message ? `<p class="text-red-500 mt-1">${escape(form?.errors?.message)}</p>` : ``}</div>` : ``}

      
      <div class="md:col-span-2 flex flex-col lg:flex-row items-start gap-x-12">${contactData[5]?.__component === "block.check-box" ? `<div class="flex flex-col h-14"><div class="flex items-center gap-x-2"><input id="privacyConditions" class="h-5 w-5 rounded-full checkbox checkbox-primary border-white hover:border-white svelte-71r37y" type="checkbox"${add_attribute("checked", privacyCheck, 1)}>
              <label for="privacyConditions"><span>${escape(contactData[5]?.text ?? "")}</span>
                <a class="underline"${add_attribute("href", contactData[5]?.link ?? "", 0)} target="_blank" rel="noreferrer">${escape(contactData[5]?.link_text ?? "")}</a></label></div>
            ${!privacyCheck ? `<p class="text-red-500 mt-1">please accept our privacy policy</p>` : ``}</div>` : ``}

        ${contactData[6]?.__component === "block.check-box" ? `<div class="flex items-center gap-x-2"><input id="receiveEmail" class="h-5 w-5 rounded-full checkbox checkbox-primary border-white hover:border-white svelte-71r37y" type="checkbox">
            <label for="receiveEmail">${escape(contactData[6]?.text ?? "")}</label></div>` : ``}</div>
      <div class="flex flex-col mt-7 lg:mt-0 h-14">
        
        

        

        ${contactData[7]?.text ? `<button type="submit" class="btn btn-sm btn-outline rounded-full px-8 text-white hover:bg-white hover:text-tw-blue g-recaptcha capitalize text-base font-base bg-transparent w-fit mt-3">${escape(contactData[7]?.text ? contactData[7]?.text : "Send")}</button>` : ``}</div></div></div>
</form>`;
});
export {
  Contact as C
};
