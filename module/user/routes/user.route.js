const { getAllUsers, signIn,updateUser,signUp, addAdmin, deleteAdmin, blockUser  } = require("../controllers/user.control");
const {addUserSchema, updateUserSchema, signinSchema}=require("../../user/joi/userValidation");
const validationRequest = require("../../../common/middleware/validationRequest");
const router=require("express").Router();
const isAuthorized= require("../../../common/middleware/isAuthoraized");
const { GET_ALL_USERS, UPDATE_USER,   ADD_ADMIN, DELETE_ADMIN_USER, BLOCK_USER } = require("../endpoints");

router.get('/allUsers/:typeUser',isAuthorized(GET_ALL_USERS), getAllUsers);
router.delete('/deleteAdmin/:id',isAuthorized(DELETE_ADMIN_USER),deleteAdmin); 
router.put('/updateUser/:id',validationRequest(updateUserSchema), isAuthorized(UPDATE_USER),updateUser);
router.post('/register',validationRequest(addUserSchema),signUp);
router.post('/signIn',validationRequest(signinSchema),signIn);

// get list of admin by only super admin
router.get('/allUsers/:typeUser',isAuthorized(GET_ALL_USERS), getAllUsers);
// add admin by only super admin
router.post('/addAdmin',validationRequest(addUserSchema),isAuthorized(ADD_ADMIN),addAdmin);
//block user by admin , super admin and user deactive thier account
router.put('/blockUser/:id',isAuthorized(BLOCK_USER),blockUser);

module.exports=router   