async function load({ params, url }) {
  url.searchParams.get("lang");
  const localesRes = await fetch(
    `${"https://cms.two.eco"}/api/i18n/locales`
  );
  const locales = await localesRes.json();
  return { locales };
}
export {
  load
};
