import Joi from "joi";

export const PostLoginValidation = (data)=>{
    const schema = Joi.object({
        f_userName:Joi.string().min(5).required(),
        f_password:Joi.string().min(6).required()
      });
      return schema.validate(data);
};