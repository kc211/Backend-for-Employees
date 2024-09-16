import Joi from "joi";

export const PostEmployeeValidation = (data)=>{
    const schema = Joi.object({
        // f_Image: Joi.string().uri().required(), 
        f_Name: Joi.string().min(3).required(),
        f_Email: Joi.string().email().required(),
        f_Mobile: Joi.string().min(10).max(15).required(),
        f_Designation: Joi.string().required(),
        f_Gender: Joi.string().valid('Male', 'Female', 'Other').required(),
        f_Course: Joi.string().required(),
      });
      return schema.validate(data);
};