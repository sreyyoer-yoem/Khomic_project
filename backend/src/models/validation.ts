import joi from "joi";

export const registerValidation = joi.object({
    first_name:joi.string().min(3).max(20).required(),
    last_name:joi.string().min(3).max(20).required(),
    email:joi.string().email().required(),
    password:joi.string().min(3).max(8).required(),

});
export const loginValidation = joi.object({
    
    email:joi.string().email().required(),
    password:joi.string().min(3).max(8).required(),
})