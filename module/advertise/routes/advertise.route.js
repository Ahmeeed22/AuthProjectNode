const validationRequest = require("../../../common/middleware/validationRequest");
const { getAllAdvertise, addAdvertise, deleteAdvertse, updateAdvertise } = require("../controllers/advertise.control");
const { addAdvertiseSchema, deleteAdvertiseSchema, updateAdvertiseSchema } = require("../joi/advertiseValidation");
const router=require("express").Router();
const isAuthorized= require("../../../common/middleware/isAuthoraized");
const { GET_ALL_ADVERTISE, ADD_ADVERTISE, UPDATE_ADVERTISE } = require("../endpoints");


router.get('/allAdvertise', isAuthorized(GET_ALL_ADVERTISE),getAllAdvertise);
router.post('/addAdvertise',validationRequest(addAdvertiseSchema),isAuthorized(ADD_ADVERTISE),addAdvertise) 
router.delete('/deleteAdvertise/:id',validationRequest(deleteAdvertiseSchema),isAuthorized(ADD_ADVERTISE),deleteAdvertse );
router.put('/updateAdvertise/:id',validationRequest(updateAdvertiseSchema),isAuthorized(UPDATE_ADVERTISE), updateAdvertise);



module.exports=router 