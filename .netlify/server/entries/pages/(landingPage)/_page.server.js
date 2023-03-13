async function load({ params, url, locals }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";
  const result = await fetch(
    `${"https://cms.two.eco"}/api/pages?filters[slug][$eq]=/&populate=*&locale=${locale}`
  );
  const data = await result.json();
  return { ...data?.data[0]?.attributes };
}
export {
  load
};
