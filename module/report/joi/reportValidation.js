const Joi=require("joi");
module.exports={
    addReportSchema:{
        body :Joi.object().required().keys({
            comment :Joi.string().required(),
            postID:Joi.string().required(),
            userID:Joi.string().required(),
                  
    }), 

    },
    
 
    deleteReportSchema:{
        params:Joi.object().required().keys({
            id :Joi.string()
        }),   
        body:Joi.object()
    }
}
