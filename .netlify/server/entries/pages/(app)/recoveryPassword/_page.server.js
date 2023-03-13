import { object, string } from "yup";
import "../../../../chunks/index.js";
const actions = {
  recoveryPassword: async ({ request }) => {
    const formData = await request.formData();
    console.log(">>", formData);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const formSchema = object({
      password: string().min(6, "*Password should contain at least 6 characters").required("*Please enter a password"),
      confirmPassword: string().min(6, "*Passwords do not match").required("*Passwords do not match")
    });
    try {
      const result = await formSchema.validate(
        { password, confirmPassword },
        { abortEarly: false }
      );
      console.log("result", result);
      return {
        isExist: true,
        status: "Form is submitted"
      };
    } catch (error) {
      const errors = error?.inner?.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
      if (errors)
        console.log("errors", errors);
      return { errors, password, confirmPassword };
    }
  }
};
export {
  actions
};
