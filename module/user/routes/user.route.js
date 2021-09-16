const { getAllUsers, signIn,getUser,deleteUser,updateUser,signUp  } = require("../controllers/user.control");
const {addUserSchema, updateUserSchema, signinSchema}=require("../../user/joi/userValidation");
const validationRequest = require("../../../common/middleware/validationRequest");
const router=require("express").Router();
const isAuthorized= require("../../../common/middleware/isAuthoraized");
const { GET_ALL_USERS, UPDATE_USER, ADD_USER, DELETE_USER } = require("../endpoints");

router.get('/allUsers',isAuthorized(GET_ALL_USERS), getAllUsers);
router.get('/user/:id',getUser)
router.delete('/deleteUser/:id',isAuthorized(DELETE_USER),deleteUser ); 
router.put('/updateUser/:id',validationRequest(updateUserSchema), isAuthorized(UPDATE_USER),updateUser);
router.post('/addUser',validationRequest(addUserSchema),isAuthorized(ADD_USER),signUp);
router.post('/signIn',validationRequest(signinSchema),signIn)

module.exports=router  