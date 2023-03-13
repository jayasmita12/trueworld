import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

    const { token } = await request.json();

    // return json({token, secret});
    const secret_key = '6Lee2iskAAAAAMaYWsDJPRmtjj5pG6KeYj8L0YvU'

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    const res = await fetch(url, { method: 'post' })

    const data = await res.json()

    console.log("get called")

    return json({ data });
}