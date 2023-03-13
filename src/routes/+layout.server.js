import { navStore } from "$lib/stores/globalStore";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params, url }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";

  // const navRes = await fetch(
  //   `${
  //     import.meta.env.VITE_STRAPI_BASE_URL
  //   }/api/navbar?populate=*&locale=${locale}`
  // );
  // const navData = await navRes.json();

  // const footerRes = await fetch(
  //   `${
  //     import.meta.env.VITE_STRAPI_BASE_URL
  //   }/api/footer?populate=*&locale=${locale}`
  // );
  // const footerData = await footerRes.json();

  const localesRes = await fetch(
    `${import.meta.env.VITE_STRAPI_BASE_URL}/api/i18n/locales`
  );
  const locales = await localesRes.json();

  return { locales };
}
// console.log("Locals-" + JSON.stringify(locales, 0, 2))
