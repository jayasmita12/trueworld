import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { locale } = await request.json();
  const res = await fetch(
    `${
      import.meta.env.VITE_STRAPI_BASE_URL
    }/api/pages?filters[slug][$eq]=/&populate=*&locale=${locale}`
  );
  const data = await res.json();
  return json(data);
}
