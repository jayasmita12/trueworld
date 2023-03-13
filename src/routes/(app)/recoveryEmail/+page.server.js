import { object, string, number, date, InferType, boolean } from "yup";

export const actions ={
  verifyEmail: async({request})=>{
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
            return {
                email,
                isExist: true,
                status: "Form is submitted",
              };
            } 
        catch (error) {
              
              const errors = error.inner.reduce((acc, err) => {
                return { ...acc, [err.path]: err.message };
              }, {});
        
              return { errors, email };
            }
             
    },

    varifyOtp: async({request})=>{
      const formData = await request.formData();
      const otpinput = formData.get("otpinput")
      console.log(otpinput)
      const formSchema = object({
          otpinput:string().required("*Plese varify your otp")
          .nullable()
      })
      try {
        
        const result = await formSchema.validate(
            { otpinput },
            { abortEarly: false },
            
          );
          return {
              isExist:true,
              status: "OTP varified successfully",
            };
          } 
      catch (error) {
            
            const errors = error.inner.reduce((acc, err) => {
              return { ...acc, [err.path]: err.message };
            }, {});
      
            return { errors , otpinput};
          }
           
  }
}