import { localeCode } from "$lib/stores/globalStore";
import { get } from "svelte/store";
import { object, string, number, date, InferType } from "yup";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {

  // console.log(url.searchParams.get('lang'))

  let lang = url.searchParams.get('lang')

  const result = await fetch(
    `${
      import.meta.env.VITE_STRAPI_BASE_URL
    }/api/pages?filters[slug][$eq]=test&populate=*&locale=${lang}`
  );
  const data = await result.json();
  // console.log(JSON.stringify(data, 0, 2))
  return { ...data?.data[0]?.attributes };
}

export const actions = {
  default: async ({ request }) => {
      
      const formData = await request.formData();

      const name = formData.get("name");
      const email = formData.get("email");

      // console.log(name, email)

      return {
        name,
        email,
       
      };

  }
}

