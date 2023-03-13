import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const { locale } = await request.json();
  console.log("local is" + locale);
  const navRes = await fetch(
    `${"https://cms.two.eco"}/api/navbar?populate=*&locale=${locale}`
  );
  const navData = await navRes.json();
  const footerRes = await fetch(
    `${"https://cms.two.eco"}/api/footer?populate=*&locale=${locale}`
  );
  const footerData = await footerRes.json();
  return json({ navData, footerData });
}
export {
  POST
};
