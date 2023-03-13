import { object, string } from "yup";
import "../../../../chunks/index.js";
const actions = {
  default: async ({ request, fetch }) => {
    const formData = await request.formData();
    formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    formData.get("country");
    formData.get("company");
    formData.get("areaCode");
    formData.get("phoneNumber");
    formData.get("city");
    formData.get("vatNumber");
    const formSchema = object({
      name: string().min(2, "too short").required("Name is required"),
      email: string().required("please enter a valid email").email("please enter a valid email"),
      phoneNumber: string().min(10, "Enter a valid phone number")
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
      };
      return {
        success: true,
        message: "Sign up successfully"
      };
    } catch (error) {
      console.log("error", { error });
      const errors = error?.inner?.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
      if (errors)
        console.log("errors", errors);
      return {
        success: false,
        errors
      };
    }
  }
};
export {
  actions
};
