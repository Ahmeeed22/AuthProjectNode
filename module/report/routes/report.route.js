const validationRequest = require("../../../common/middleware/validationRequest");
const { getAllReport, addReport, deleteReport } = require("../controllers/report.control");
const { addReportSchema, deleteReportSchema } = require("../joi/reportValidation");
const router=require("express").Router();
const isAuthorized= require("../../../common/middleware/isAuthoraized");
const { GET_ALL_REPORT, ADD_REPORT, DELETE_REPORT } = require("../endpoints");


router.get('/allReport',isAuthorized(GET_ALL_REPORT), getAllReport);
router.post('/addReport',validationRequest(addReportSchema),isAuthorized(ADD_REPORT),addReport) 
router.delete('/deleteReport/:id',validationRequest(deleteReportSchema),isAuthorized(DELETE_REPORT),deleteReport );



module.exports=router 