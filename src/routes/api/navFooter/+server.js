import { localeCode } from "$lib/stores/globalStore";
import { json } from "@sveltejs/kit";
import { get } from "svelte/store";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { locale } = await request.json();
  console.log("local is" + locale);

  const navRes = await fetch(
    `${
      import.meta.env.VITE_STRAPI_BASE_URL
    }/api/navbar?populate=*&locale=${locale}`
  );
  const navData = await navRes.json();

  const footerRes = await fetch(
    `${
      import.meta.env.VITE_STRAPI_BASE_URL
    }/api/footer?populate=*&locale=${locale}`
  );
  const footerData = await footerRes.json();

  return json({ navData: navData, footerData: footerData });
}
