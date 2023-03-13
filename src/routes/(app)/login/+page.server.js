import { object, string, number, date, InferType, boolean } from "yup";
import { fail } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  verifyEmail: async ({ request, fetch }) => {
    const formData = await request.formData();

    const email = formData.get("email");

    const formSchema = object({
      email: string()
        .required("*please enter a valid email")
        .email("*please enter a valid email"),
    });

    try {
      const result = await formSchema.validate(
        { email },
        { abortEarly: false }
      );

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      };

      const response = await fetch("/api/verifyEmail", options);
      const res = await response.json();
      console.log(res);

      return {
        email: res.email,
        isExist: true,
        status: "Form is submitted",
      };
    } catch (error) {
      console.log("error", { error });
      const errors = error?.inner?.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return { errors, email };
    }
  },

  verifyPassword: async ({ request, fetch }) => {
    const formData = await request.formData();
    console.log(">>", formData);

    const password = formData.get("password");

    const formSchema = object({
      password: string().required("*please enter a password"),
    });

    try {
      const result = await formSchema.validate(
        { password },
        { abortEarly: false }
      );

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      };

      const response = await fetch("/api/verifyPassword", options);
      const res = await response.json();
      console.log(res);

      return {
        success: res.success,
        status: "Form is submitted",
      };
    } catch (error) {
      console.log("error", { error });
      const errors = error?.inner?.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return { errors, password };
    }
  },
};
