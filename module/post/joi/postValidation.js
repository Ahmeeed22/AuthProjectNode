const Joi=require("joi");
module.exports={
    addPostSchema:{
        body :Joi.object().required().keys({
            title :Joi.string().required(),
            content:Joi.string().required(),
            userID:Joi.string().required(),
            status:Joi.string()  
                  
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
            status:Joi.string()  
        })
    },
    deletePostSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),   
        body:Joi.object()
    }
}
