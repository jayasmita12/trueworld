/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url, locals }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";

  const result = await fetch(
    `${
      import.meta.env.VITE_STRAPI_BASE_URL
    }/api/pages?filters[slug][$eq]=/&populate=*&locale=${locale}`
  );
  const data = await result.json();
  // console.log(JSON.stringify(data, 0, 2))
  return { ...data?.data[0]?.attributes };
}
