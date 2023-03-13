import { browser } from "$app/environment";
import { derived, get, writable } from "svelte/store";

export const element = writable(null);
export const isLoggedIn = writable(false);
export const showMainFooter = writable(false);
export const showProfileModal = writable(false);
export const showNotificationsModal = writable(false);
export const showNavMenu = writable(false);
export const baseUrl = writable(import.meta.env.VITE_STRAPI_BASE_URL);
export const updatedAt = writable(null);

// const storedLocale = browser && localStorage.getItem("locale");
export const localeCode = writable("en");

export const allPagesData = writable([]);
export const homePageData = writable({});

export const navStore = writable(null);

export const footerStore = writable(null);

export let selectedMenu = writable("");
export const isDark = writable(true);
export const currentVideoUrl = writable(null);

export const getAllPagesData = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_STRAPI_BASE_URL}/api/pages?populate=*&locale=${get(
      localeCode
    )}`
  );
  const allData = await res.json();
  // console.log(allData);
  allPagesData.set(allData.data);
  // console.log(get(allPagesData));
};

export const getData = async (locale) => {
  const option = {
    method: "POST",
    body: JSON.stringify({ locale: locale }),
    headers: {
      "content-type": "application/json",
    },
  };

  let res = await fetch("/api/getPageData", option);
  const data = await res.json();
  if (data?.data.length > 0) homePageData.set(data.data[0].attributes);
  return data;
};

export const getNavData = async (locale) => {
  const option = {
    method: "POST",
    body: JSON.stringify({ locale: locale }),
    headers: {
      "content-type": "application/json",
    },
  };

  let res = await fetch("/api/navFooter", option);
  let data = await res.json();

  // $navStore = data.navData.data
  // console.log("navstore-" +$navStore)
  // $footerStore = data.footerData.data
  // console.log("fotoerStore" + $footerStore)
  // console.log("nav and footer data" + JSON.stringify(data.navData.data, 0 , 2))

  if (data) {
    navStore.set(data.navData);
    // console.log($navStore);
    footerStore.set(data.footerData);
    // console.log("footer store" + JSON.stringify($footerStore, 0, 2));
    return data;
  }
};
