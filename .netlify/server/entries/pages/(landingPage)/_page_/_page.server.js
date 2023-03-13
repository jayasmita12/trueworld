async function load({ params, url, fetch }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";
  console.log(params.page);
  const result = await fetch(
    ` ${"https://cms.two.eco"}/api/pages?filters[slug][$eq]=${params.page}&populate=*&locale=${locale}`
  );
  const data = await result.json();
  return { ...data?.data[0]?.attributes };
}
export {
  load
};
