// import { localeCode } from "$lib/stores/globalStore";
// import { get } from "svelte/store";
// import { object, string, number, date, InferType } from "yup";

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   const result = await fetch(
//     `${
//       import.meta.env.VITE_STRAPI_BASE_URL
//     }/api/pages?filters[slug][$eq]=home&populate=*&locale=${get(localeCode)}`
//   );
//   const data = await result.json();
//   // console.log(JSON.stringify(data, 0, 2))
//   return { ...data?.data[0]?.attributes };
// }