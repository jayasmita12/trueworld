import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const data = await request.json();
  console.log("api data", data);
  return json({ ...data, success: true });
}
export {
  POST
};
