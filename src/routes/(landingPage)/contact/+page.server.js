import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType, boolean } from "yup";
import "yup-phone";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url, fetch }) {
  let lang = url.searchParams.get("lang");
  const locale = lang ? lang : "en";

  const result = await fetch(
    `${
      import.meta.env.VITE_STRAPI_BASE_URL
    }/api/pages?filters[slug][$eq]=contact&populate=*&locale=${locale}`
  );
  const data = await result.json();
  return { ...data?.data[0]?.attributes };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const organization = formData.get("organization");
    const reason = formData.get("reason");
    const department = formData.get("department");
    // const privacy = formData.get("privacyConditions")
    // console.log(privacy)

    const contactFormSchema = object({
      name: string().min(2, "too short").required("please enter a valid name"),
      email: string().required("please enter a valid email").email(),
      message: string().required("please enter a message"),
      organization: string().min(2, "too short"),
      reason: string(),
      department: string(),
      // privacy: boolean().required('please accept our privacy policy'),
      phone: string().min(9, "please enter a valid phone number"),
    });

    try {
      const result = await contactFormSchema.validate(
        { name, email, message, organization, reason, department, phone },
        { abortEarly: false }
      );

      // console.log(result)

      const options = {
        method: "POST",
        headers: {
          mode: "no-cors",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: name,
            },
            {
              objectTypeId: "0-1",
              name: "comapny",
              value: organization,
            },
            {
              objectTypeId: "0-1",
              name: "email",
              value: email,
            },
            {
              objectTypeId: "0-1",
              name: "mobilephone",
              value: phone,
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: message,
            },
          ],
        }),
      };

      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/26890770/019cfa9d-ee17-4227-a9b5-939db090912a",
        options
      );
      const res = await response.json();

      return {
        res,
        success: true,
        status: "Form is submitted",
      };
    } catch (error) {
      console.log({ error });
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message,
        organization,
        reason,
        department,
        phone,
      };
    }
  },
};
