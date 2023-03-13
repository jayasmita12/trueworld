import "yup";
async function load({ params, url }) {
  let lang = url.searchParams.get("lang");
  const result = await fetch(
    `${"https://cms.two.eco"}/api/pages?filters[slug][$eq]=test&populate=*&locale=${lang}`
  );
  const data = await result.json();
  return { ...data?.data[0]?.attributes };
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    return {
      name,
      email
    };
  }
};
export {
  actions,
  load
};
