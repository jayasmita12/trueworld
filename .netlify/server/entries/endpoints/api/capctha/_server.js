import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const { token } = await request.json();
  const secret_key = "6Lee2iskAAAAAMaYWsDJPRmtjj5pG6KeYj8L0YvU";
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
  const res = await fetch(url, { method: "post" });
  const data = await res.json();
  console.log("get called");
  return json({ data });
}
export {
  POST
};
