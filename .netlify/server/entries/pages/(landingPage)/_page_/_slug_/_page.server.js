import "yup";
import { e as error } from "../../../../../chunks/index.js";
async function load({ params, url, fetch }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";
  const result = await fetch(
    `${"https://cms.two.eco"}/api/pages?filters[slug][$eq]=${params.slug}&populate=*&locale=${locale}`
  );
  const data = await result.json();
  if (data.data.length > 0) {
    return { ...data?.data[0]?.attributes };
  } else {
    throw error(401, "no such data");
  }
}
export {
  load
};
