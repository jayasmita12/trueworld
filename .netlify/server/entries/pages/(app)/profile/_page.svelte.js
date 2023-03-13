import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                                                          */import "devalue";
import { D as DashboardNav } from "../../../../chunks/DashboardNav.js";
import { w as writable } from "../../../../chunks/index2.js";
const user = writable({
  name: "Micheal Scott",
  password: "",
  email: "m.scott@trueworld.com",
  areaCode: "",
  phoneNumber: "",
  country: "",
  city: "",
  company: "",
  vatNumber: "",
  profilePicture: null,
  progress: 15,
  progressColor: "orange"
});
const colors = writable({
  orange: "text-orange-500",
  blue: "text-blue-500",
  green: "text-green-600"
});
const ProfilePicture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  $$unsubscribe_user();
  $$unsubscribe_colors();
  return `
<div class="${"relative radial-progress " + escape($colors[$user.progressColor], true) + " cursor-pointer"}" style="${"--value:" + escape($user.progress, true) + "; width:7rem; height:7rem; --thickness: 3.5px;"}">${$user.profilePicture ? `<img${add_attribute("src", $user.profilePicture, 0)} class="w-24 h-24 rounded-full " alt="">` : `<div class="w-24 h-24 rounded-full bg-gray-400"></div>`}
  <div class="scale-x-[-1] absolute top-2 left-1 text-secondary bg-neutral-content rounded-full px-1 py-1 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></div>

  <input class="hidden" type="file" accept=".jpg, .jpeg, .png"></div>`;
});
const ProfileDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_user();
  return `<div>${validate_component(DashboardNav, "DashboardNav").$$render($$result, { title: "My profile" }, {}, {})}
  <div class="w-full h-auto bg-primary py-10 px-4"><div class="flex flex-col justify-center items-center max-w-screen-lg mx-auto bg-secondary rounded-lg shadow-lg "><div class="max-w-screen-md flex flex-col px-4 space-y-10 w-full my-10">
        <div class="flex space-x-3">${validate_component(ProfilePicture, "ProfilePicture").$$render($$result, {}, {}, {})}
          <div class="self-center space-y-2"><h2 class="text-base font-semibold text-neutral-content">${escape($user.name)}</h2>
            <div class="text-xs text-accent-content flex space-x-1"><span class="text-secondary bg-neutral-content rounded-full px-1 py-1 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-2 h-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></span>
              <p>${escape($user.email)}</p></div>
            ${$user.city && $user.country ? `<div class="text-xs text-accent-content flex space-x-1"><span class="text-secondary bg-neutral-content rounded-full px-1 py-1 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-2 h-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg></span>
                <p>${escape($user.city)}, ${escape($user.country)}</p></div>` : ``}
            <p class="text-xs text-green-500">${escape($user.progress)}% COMPLETED
            </p></div></div>

        
        <div class="tabs space-x-1 w-full">
          <a class="tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3 border-b-neutral-content font-semibold text-neutral-content">DETAIL</a>
          
          <a class="tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3 border-b-accent-content/60 font-semibold text-accent-content/60">SETTINGS</a>
          
          <a class="tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3 border-b-accent-content/60 font-semibold text-accent-content/60">BILLING</a>
          
          
          <a class="hidden sm:flex tab tab-bordered w-[24%] sm:w-[24.5%] tab-border-3 border-b-accent-content/60 text-accent-content/60"></a></div>

        
        <form action="/profile" method="POST" name="form" class="space-y-10"><div class="flex flex-col sm:flex-row w-full space-x-0 sm:space-x-8 ">
          <div class="w-full space-y-2">
            <div><label for="" class="text-base-100 ml-5 font-medium">Full name</label>
              <input name="name" type="text" placeholder="Enter name" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2"${add_attribute("value", $user.name, 0)}>
              ${form?.errors?.name ? `<label for="name" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.name)}</label>` : ``}</div>
            
            <div class=""><label for="" class="text-base-100 ml-5 font-medium">Password</label>
              <div class="relative"><input${add_attribute("value", $user.password, 0)} name="password"${add_attribute("type", "password", 0)} placeholder="Enter password" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2">
                
                <img src="signup/eye.png" class="w-4 h-4 absolute right-3 top-3 " alt="">
                ${form?.errors?.password ? `<label for="password" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.password)}</label>` : ``}</div></div>

            
            <div class="flex flex-col"><label for="" class="text-base-100 ml-4 font-medium">Country</label>
              <select name="country" id="" class="pr-7 py-2 text-sm text-accent-content/70 border-2 px-3 rounded-full bg-transparent focus:outline-none"><option value="Country">Country</option><option value="">(+91)</option></select>
              ${form?.errors?.country ? `<label for="country" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.country)}</label>` : ``}</div>

            
            <div class="flex flex-col"><label for="" class="text-base-100 ml-4 font-medium">Company</label>
              <select name="company" id="" class="pr-7 py-2 text-sm text-accent-content/70 border-2 px-3 rounded-full bg-transparent focus:outline-none"><option value="Company">Company</option><option value="">(+91)</option></select>

              ${form?.errors?.company ? `<label for="company" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.company)}</label>` : ``}</div></div>
          
          <div class="w-full space-y-2"><div class=""><label for="" class="text-base-100 ml-5 font-medium">Email</label>
              <input name="email" type="email" placeholder="Enter email" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2"${add_attribute("value", $user.email, 0)}>
              ${form?.errors?.email ? `<label for="email" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.email)}</label>` : ``}</div>

            
            <div class="flex flex-row space-x-4"><div class="flex flex-col space-x-2"><span><label for="" class="text-base-100 ml-5 font-medium">Area code</label></span>
                <select name="areaCode" id="" class="pr-6 py-2 text-sm text-accent-content/70 border-2 px-2 rounded-full bg-transparent focus:outline-none"><option value="Code">Code</option><option value="">(+91)</option></select>
                ${form?.errors?.areaCode ? `<label for="areaCode" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.areaCode)}</label>` : ``}</div>
              
              <div class="w-full"><label for="" class="text-base-100 ml-5 font-medium">Phone number</label>
                <input name="phoneNumber" type="number" placeholder="Enter number" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2"${add_attribute("value", $user.phoneNumber, 0)}>
                ${form?.errors?.phoneNumber ? `<label for="phoneNumber" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.phoneNumber)}</label>` : ``}</div></div>

            
            <div class=""><label for="" class="text-base-100 ml-4 font-medium">City</label>
              <input name="city" type="text" placeholder="City" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2"${add_attribute("value", $user.city, 0)}>
              ${form?.errors?.city ? `<label for="city" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.city)}</label>` : ``}</div>

            
            <div class=""><label for="" class="text-base-100 ml-4 font-medium">VAT number</label>
              <input name="vatNumber" type="number" placeholder="VAT number" class="rounded-full bg-transparent py-2 pl-4 text-sm font-normal text-base-100 focus:outline-none w-full border-2"${add_attribute("value", $user.vatNumber, 0)}>
              ${form?.errors?.vatNumber ? `<label for="vatNumber" class="text-red-500 text-sm mt-2 pl-4">${escape(form?.errors?.vatNumber)}</label>` : ``}</div></div></div>
        <div class="flex justify-end "><button type="submit" class="rounded-full bg-transparent disabled:bg-accent-content/70 disabled:text-accent text-sm px-10 py-1 text-secondary bg-base-200 " disabled>Save</button></div></form></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(ProfileDetails, "ProfileDetails").$$render($$result, { form }, {}, {})}`;
});
export {
  Page as default
};
