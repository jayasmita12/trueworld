import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const { locale } = await request.json();
  const res = await fetch(
    `${"https://cms.two.eco"}/api/pages?filters[slug][$eq]=/&populate=*&locale=${locale}`
  );
  const data = await res.json();
  return json(data);
}
export {
  POST
};
