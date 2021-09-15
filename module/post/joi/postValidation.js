const Joi=require("joi");
module.exports={
    addPostSchema:{
        body :Joi.object().required().keys({
            title :Joi.string().required(),
            content:Joi.string().required(),
            userID:Joi.string().required(),
                  
    }), 

    },
    
    updatePostSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),
        body:Joi.object().required().keys({
            title :Joi.string().required(),
            content:Joi.string().required(),
            userID:Joi.string().required(),
        })
    },
    deletePostSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),   
        body:Joi.object()
    }
}
