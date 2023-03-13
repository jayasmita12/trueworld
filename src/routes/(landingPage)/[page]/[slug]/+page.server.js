import { locale } from "$lib/stores/globalStore";
import { get } from "svelte/store";
import { object, string, number, date, InferType } from "yup";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url, fetch }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";

  const result = await fetch(
    `${import.meta.env.VITE_STRAPI_BASE_URL}/api/pages?filters[slug][$eq]=${
      params.slug
    }&populate=*&locale=${locale}`
  );

  const data = await result.json();

  // console.log('data is' + JSON.stringify(data, 0, 2))

  if (data.data.length > 0) {
    return { ...data?.data[0]?.attributes };
  } else {
    throw error(401, "no such data");
  }
}
