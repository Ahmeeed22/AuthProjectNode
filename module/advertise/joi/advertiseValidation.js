const Joi=require("joi");
module.exports={
    addAdvertiseSchema:{
        body :Joi.object().required().keys({
            title :Joi.string().required(),
            desc:Joi.string().required(),
            userID:Joi.string().required(),
                  
    }), 

    },
    
    updateAdvertiseSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),
        body:Joi.object().required().keys({
            title :Joi.string().required(),
            desc:Joi.string().required(),
            userID:Joi.string().required(),
        })
    },
    deleteAdvertiseSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),   
        body:Joi.object()
    }
}
