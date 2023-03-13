import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();
  console.log("api data", data);
  return json(data);
}
