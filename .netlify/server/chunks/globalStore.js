import { w as writable } from "./index2.js";
const isLoggedIn = writable(false);
const showProfileModal = writable(false);
const showNotificationsModal = writable(false);
const showNavMenu = writable(false);
const localeCode = writable("en");
const homePageData = writable({});
const navStore = writable(null);
const footerStore = writable(null);
let selectedMenu = writable("");
const isDark = writable(true);
const currentVideoUrl = writable(null);
const getData = async (locale) => {
  const option = {
    method: "POST",
    body: JSON.stringify({ locale }),
    headers: {
      "content-type": "application/json"
    }
  };
  let res = await fetch("/api/getPageData", option);
  const data = await res.json();
  if (data?.data.length > 0)
    homePageData.set(data.data[0].attributes);
  return data;
};
const getNavData = async (locale) => {
  const option = {
    method: "POST",
    body: JSON.stringify({ locale }),
    headers: {
      "content-type": "application/json"
    }
  };
  let res = await fetch("/api/navFooter", option);
  let data = await res.json();
  if (data) {
    navStore.set(data.navData);
    footerStore.set(data.footerData);
    return data;
  }
};
export {
  isLoggedIn as a,
  showNavMenu as b,
  showNotificationsModal as c,
  showProfileModal as d,
  getData as e,
  footerStore as f,
  getNavData as g,
  homePageData as h,
  isDark as i,
  currentVideoUrl as j,
  localeCode as l,
  navStore as n,
  selectedMenu as s
};
