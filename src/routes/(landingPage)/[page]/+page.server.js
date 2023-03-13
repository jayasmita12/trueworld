/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url, fetch }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";

  console.log(params.page);
  const result = await fetch(
    ` ${import.meta.env.VITE_STRAPI_BASE_URL}/api/pages?filters[slug][$eq]=${
      params.page
    }&populate=*&locale=${locale}`
  );
  const data = await result.json();
  return { ...data?.data[0]?.attributes };
}
