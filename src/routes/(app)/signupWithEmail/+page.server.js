import { object, string, ref } from "yup";
// import * as Yup from "yup";
import { fail } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, fetch }) => {
    const formData = await request.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const formSchema = object({
      firstName: string()
        .min(2, "too short")
        .required("First name is required"),
      lastName: string().min(2, "too short").required("Last name is required"),
      email: string()
        .required("please enter a valid email")
        .email("please enter a valid email"),
      password: string()
        .min(6, "password should contain at least 6 characters")
        .required("please enter a password"),
      confirmPassword: string()
        .required("please enter the same password")
        .oneOf([ref("password")], "please enter the same password"),
    });

    try {
      const result = await formSchema.validate(
        { firstName, lastName, email, password, confirmPassword },
        { abortEarly: false }
      );
      console.log("result", result);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      };

      const response = await fetch("/api/signupWithEmail", options);
      const res = await response.json();
      console.log(res);

      return {
        success: true,
        message: "Sign up successfully",
      };
    } catch (error) {
      console.log("error", { error });
      const errors = error?.inner?.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
      if (errors) console.log("errors", errors);

      return {
        success: false,
        errors,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
    }
  },
};
