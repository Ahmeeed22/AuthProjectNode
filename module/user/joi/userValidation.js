const Joi=require("joi");
module.exports={
    addUserSchema:{
        body :Joi.object().required().keys({
            name :Joi.string().required(),
            email:Joi.string().required().email(), 
            password:Joi.string(),
            password_confirmation: Joi.any().valid(Joi.ref('password')).required().label('Confirm password')
            .messages({ 'any.only': 'Cpassword does not match to password' }),
            phone:Joi.string(),
            location:Joi.string(),
            role:Joi.string().default('user'), 
            status:Joi.string()         
    }),

    },
    signinSchema:{
        body:Joi.object().required().keys({
            email:Joi.string().required().email(),
            password:Joi.string().required(),
        })
    },
    updateUserSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),
        body:Joi.object().required().keys({
            name:Joi.string(),
            email:Joi.string().email(),
            password:Joi.string(),
            password_confirmation: Joi.any().valid(Joi.ref('password')).required().label('Confirm password')
            .messages({ 'any.only': 'Cpassword does not match to password' }),
            phone:Joi.number(),
            location:Joi.string(),
            role:Joi.string(), 
            status:Joi.string()       
        })
    }
}
