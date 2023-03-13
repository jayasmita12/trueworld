import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component } from "./index3.js";
import { p as page } from "./stores.js";
import { i as isDark, s as selectedMenu, l as localeCode, a as isLoggedIn, n as navStore, b as showNavMenu, c as showNotificationsModal, d as showProfileModal } from "./globalStore.js";
import { L as Logo } from "./Logo.js";
import { B as BlockchainLogo } from "./BlockchainLogo.js";
/* empty css                                         */const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDark, $$unsubscribe_isDark;
  $$unsubscribe_isDark = subscribe(isDark, (value) => $isDark = value);
  $$unsubscribe_isDark();
  return `<div class="flex space-x-0.5 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[0.95rem] h-[0.95rem] md:w-5 md:h-5 text-primary-content"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path></svg>

  <input data-toggle-theme="light,dark" data-act-class="ACTIVECLASS" type="checkbox" class="toggle toggle-sm bg-primary"${add_attribute("checked", $isDark, 1)}>
  
  <svg class="w-[0.95rem] h-[0.95rem] md:w-5 md:h-5 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg></div>`;
});
const NavLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedMenu, $$unsubscribe_selectedMenu;
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_selectedMenu = subscribe(selectedMenu, (value) => $selectedMenu = value);
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { navData } = $$props;
  if ($$props.navData === void 0 && $$bindings.navData && navData !== void 0)
    $$bindings.navData(navData);
  $$unsubscribe_selectedMenu();
  $$unsubscribe_localeCode();
  return `<ul class="hidden ml-10 lg:flex items-center gap-x-10">
  ${navData.menu.length > 0 ? `${each(navData.menu, (menu) => {
    return `<div class="flex space-x-1 items-center text-primary-content font-bold cursor-pointer relative"><span class="leading-none capitalize">${escape(menu.title ?? "")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd"></path></svg>

        ${$selectedMenu === menu.title ? `<div class="absolute top-9 -left-10 w-[16rem] bg-primary mx-5 py-2 shadow-md z-20"><div class="text-accent-content text-[14px] font-medium w-full flex flex-col space-y-2">${each(menu.links, (menuLink) => {
      return `<a${add_attribute("href", `${menuLink.link}?lang=${$localeCode}`, 0)} data-sveltekit-prefetch class="px-5 py-3 border-b border-accent-content/20 w-full "><p>${escape(menuLink.text ?? "")}</p>
                </a>`;
    })}</div>
          </div>` : ``}
      </div>`;
  })}` : ``}

  ${navData.link?.length > 0 ? `${each(navData.link, (link) => {
    return `<li class="flex space-x-1 items-center text-primary-content font-bold"><a class="leading-none capitalize"${add_attribute("href", `${link.link}?lang=${$localeCode}`, 0)}>${escape(link.text ?? "")}</a>
      </li>`;
  })}` : ``}</ul>`;
});
const css = {
  code: "@keyframes svelte-h6m6zl-details-show{from{opacity:0;transform:var(--details-translate, translateY(-0.5em))}}details[open].svelte-h6m6zl>.svelte-h6m6zl:not(summary){animation:svelte-h6m6zl-details-show 200ms ease-in-out}details.svelte-h6m6zl summary.svelte-h6m6zl{list-style:none}details.svelte-h6m6zl summary .closed.svelte-h6m6zl{display:none}details[open].svelte-h6m6zl summary .closed.svelte-h6m6zl{display:block}details[open].svelte-h6m6zl summary .open.svelte-h6m6zl{display:none}details.svelte-h6m6zl summary.svelte-h6m6zl::-webkit-details-marker{display:none}",
  map: null
};
const NavMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $localeCode, $$unsubscribe_localeCode;
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  let { navData } = $$props;
  if ($$props.navData === void 0 && $$bindings.navData && navData !== void 0)
    $$bindings.navData(navData);
  $$result.css.add(css);
  $$unsubscribe_localeCode();
  return `<div class="lg:hidden absolute z-50 left-0 top-16 min-h-[70vh] w-[96%] bg-primary shadow-md pl-8 sm:pl-10 pr-5 pb-10"><div class="flex items-center bg-white rounded-md border border-accent-content/20 text-black px-2 sm:px-4 py-3 mt-5 mb-3"><input class="flex-1 bg-transparent outline-none font-medium" type="text" placeholder="Search">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></div>

  ${each(navData?.menu, (menu) => {
    return `<details class="cursor-pointer svelte-h6m6zl"><summary class="flex items-center justify-between py-3 border-b-2 border-accent-content/20 svelte-h6m6zl"><span class="text-primary-content font-medium">${escape(menu.title ?? "")}</span>
        <svg class="open w-5 h-5 text-base-200 rotate-90 svelte-h6m6zl" fill="none" stroke="currentColor" stroke-width="3.00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
        <svg class="closed w-5 h-5 text-base-200 svelte-h6m6zl" fill="none" stroke="currentColor" stroke-width="3.00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path></svg></summary>
      <div class="pl-4 mt-3 space-y-4 svelte-h6m6zl">${each(menu.links, (link) => {
      return `<li class="cursor-pointer list-none"><a class="font-light text-primary-content"${add_attribute("href", `${link.link}?lang=${$localeCode}`, 0)}>${escape(link.text ?? "")}</a>
          </li>`;
    })}</div>
    </details>`;
  })}

  ${navData.link?.length > 0 ? `${each(navData.link, (link) => {
    return `<div class="py-3 border-b-2 border-accent-content/20"><a class="text-primary-content font-medium"${add_attribute("href", `${link.link}?lang=${$localeCode}`, 0)}>${escape(link.text ?? "")}</a>
      </div>`;
  })}` : ``}

  <div class="py-3 border-b-2 border-accent-content/20"><a class="text-primary-content font-medium"${add_attribute("href", `/faq?lang=${$localeCode}`, 0)}>FAQ&#39;S</a></div>

  <div class="flex items-center space-x-5 mt-2"><a${add_attribute("href", `/?lang=${$localeCode}`, 0)}>${validate_component(BlockchainLogo, "BlockchainLogo").$$render($$result, {}, {}, {})}</a>
    <p class="text-primary-content font-medium">Technology to figth the climate change
    </p></div>
  <div class="flex items-center space-x-1 text-primary-content text-xs mt-2"><a href="https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad" target="_blank" rel="noreferrer">Privacy Policy
    </a>
    <span>|</span>
    <a href="https://www.trueworldorganization.com/pol%C3%ADtica-de-privacidad" target="_blank" rel="noreferrer">Terms of use
    </a>

    <span>|</span>
    <a${add_attribute("href", `/?lang=${$localeCode}`, 0)}>Legal</a>
    <span>|</span>
    <a${add_attribute("href", `/?lang=${$localeCode}`, 0)}>Sitemap</a></div>
</div>`;
});
const NotificationsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="absolute z-50 top-14 right-2 w-72 rounded-xl bg-tw-primary text-tw-secondary max-h-[92vh] pt-8 pb-3"><div class="mx-3"><h4 class="text-sm font-[900]">Notifications</h4>
    <div class="h-[1px] bg-[#CAD6F0] my-4"></div></div>

  <section class="px-1.5 max-h-[74vh] overflow-y-scroll">${each(Array(10), (notification) => {
    return `<div class="px-1.5 pr-4 py-2 rounded-xl hover:bg-[#DFEBF2] flex items-center gap-x-10"><div class="flex-1 flex gap-x-1"><div class="h-2 w-2 rounded-full bg-tw-orange mt-1 flex-shrink-0"></div>
          <div><p class="text-tw-4 font-extrabold">Your password has been successfully changed.
            </p>
            <p class="text-[10px]">Jul 23, 2021 at 09:15 am</p>
          </div></div>
        <div class="flex-shrink-0"><img class="h-7 w-7 object-contain" src="/nav/lock.svg" alt="">
        </div></div>
      <div class="h-[1px] bg-[#CAD6F0] mt-1 mx-1.5"></div>`;
  })}</section>

  <div class="mt-3 px-3 flex items-center justify-between"><p class="text-tw-4">8 notifications</p>
    <button class="btn btn-xs rounded-full border-none px-8 py-1 text-[10px] text-white capitalize font-base bg-tw-secondary hover:text-white hover:bg-tw-blue">Clear all</button></div></div>`;
});
const ProfileModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_isLoggedIn();
  return `<div class="absolute z-50 top-14 right-2 w-72 rounded-xl bg-tw-primary flex flex-col items-center py-8"><img class="h-[4.188rem] w-[4.188rem] rounded-full object-cover" src="/user.png" alt="">
  <p class="mt-3 text-tw-secondary text-sm font-semibold leading-none">Michael Scott
  </p>
  <p class="mt-2 text-xs text-[#8799BF] leading-none">m.scott@trueworld.org</p>
  <button class="mt-3 w-40 py-2 rounded-full bg-tw-primary shadow-md text-xs text-tw-secondary font-medium">Manage your Account</button>
  <button class="mt-6 w-40 py-2 rounded-full bg-tw-secondary shadow-md text-xs text-white font-medium">Sign Out</button></div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $navStore, $$unsubscribe_navStore;
  let $showNavMenu, $$unsubscribe_showNavMenu;
  let $$unsubscribe_selectedMenu;
  let $localeCode, $$unsubscribe_localeCode;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $showNotificationsModal, $$unsubscribe_showNotificationsModal;
  let $showProfileModal, $$unsubscribe_showProfileModal;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navStore = subscribe(navStore, (value) => $navStore = value);
  $$unsubscribe_showNavMenu = subscribe(showNavMenu, (value) => $showNavMenu = value);
  $$unsubscribe_selectedMenu = subscribe(selectedMenu, (value) => value);
  $$unsubscribe_localeCode = subscribe(localeCode, (value) => $localeCode = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_showNotificationsModal = subscribe(showNotificationsModal, (value) => $showNotificationsModal = value);
  $$unsubscribe_showProfileModal = subscribe(showProfileModal, (value) => $showProfileModal = value);
  let { showNavLinks = false } = $$props;
  let navData = $navStore.data?.attributes;
  $page.url.pathname;
  navData.logo?.data?.attributes?.url;
  if ($$props.showNavLinks === void 0 && $$bindings.showNavLinks && showNavLinks !== void 0)
    $$bindings.showNavLinks(showNavLinks);
  $$unsubscribe_page();
  $$unsubscribe_navStore();
  $$unsubscribe_showNavMenu();
  $$unsubscribe_selectedMenu();
  $$unsubscribe_localeCode();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_showNotificationsModal();
  $$unsubscribe_showProfileModal();
  return `<nav class="relative bg-primary py-4 shadow-lg lg:shadow-md shadow-secondary-content/40 z-50"><div class="max-w-7xl mx-auto px-[5%] xl:px-0 flex items-center justify-between w-full"><div class="flex items-center flex-grow lg:flex-grow-0"><div class="flex items-center w-full"><label class="lg:hidden btn-sm swap swap-rotate bg-transparent border-0 px-0 hover:bg-transparent">
          <input type="checkbox"${add_attribute("checked", $showNavMenu, 1)}>

          
          <svg class="swap-off text-primary-content" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path class="fill-primary-content" d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path></svg>

          
          <svg class="swap-on fill-primary-content" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon></svg></label>
        <button class="ml-2 lg:ml-0 lg:hidden bg-transparent text-primary-content text-xs font-semibold">Login
        </button>
        <a class="mx-auto lg:mx-0"${add_attribute("href", `/?lang=${$localeCode}`, 0)}>${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

          </a></div>

      ${showNavLinks ? `${validate_component(NavLinks, "NavLinks").$$render($$result, { navData: $navStore.data.attributes }, {}, {})}` : ``}</div>

    <div class="flex items-center"><div class="lg:mr-6 flex xl:space-x-4">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})}
        ${!isLoggedIn ? `<div class="hidden lg:block bg-primary leading-normal border rounded-full shadow-md text-secondary px-3 py-1 hover:bg-accent cursor-pointer"><span class="font-bold">0,008 t</span> CO2 e
          </div>
          <div class="flex space-x-1 items-center bg-primary leading-normal border rounded-full shadow-md text-secondary px-3 py-1 hover:bg-accent cursor-pointer"><img src="./nav/hand.svg" alt="">
            <span class="font-bold">0</span></div>` : ``}</div>

      ${!$isLoggedIn ? `<div class="hidden lg:flex space-x-3"><a${add_attribute("href", `/login?lang=${$localeCode}`, 0)} class="px-6 py-1 bg-base-300 rounded-full text-white border border-white text-xs font-semibold">Login
          </a>
          </div>` : ``}

      <div class="flex items-center space-x-3 lg:space-x-6 text-neutral ">${$isLoggedIn ? `
          <div class="relative"><img class="w-5" src="./nav/bell.svg" alt="">
            <span class="text-[8px] font-bold text-white w-3 h-3 flex justify-center rounded-full bg-tw-orange absolute top-0 -right-1">2
            </span></div>
          <div class="flex p-1 rounded-full bg-white "><div class="flex justify-center bg-primary shadow-tw-btn p-2 rounded-full"><img src="./nav/icon-apps.svg" alt=""></div></div>
          
          <div class="relative cursor-pointer"><img class="w-8" src="./nav/profile-pic.png" alt="">
            <span class="w-3 h-3 flex justify-center rounded-full bg-tw-green absolute top-0 -right-1"></span></div>` : ``}</div></div>

    ${$showNavMenu ? `${validate_component(NavMobile, "NavMobile").$$render($$result, { navData: $navStore.data?.attributes }, {}, {})}` : ``}

    ${$showProfileModal ? `${validate_component(ProfileModal, "ProfileModal").$$render($$result, {}, {}, {})}` : ``}
    ${$showNotificationsModal ? `${validate_component(NotificationsModal, "NotificationsModal").$$render($$result, {}, {}, {})}` : ``}</div></nav>`;
});
export {
  Nav as N
};
