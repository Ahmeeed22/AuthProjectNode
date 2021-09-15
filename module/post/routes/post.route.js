const validationRequest = require("../../../common/middleware/validationRequest");
const { getAllposts, addPost, deletePost, updateUserPost, getPost } = require("../controllers/post.control");
const {  updatePostSchema, deletePostSchema } = require("../joi/postValidation");
const router=require("express").Router();
// const isAuthorized= require("../../../common/middleware/isAuthoraized");
// const { GET_ALL_USERS } = require("../endpoints");

router.get('/allPosts', getAllposts);
router.get('/userPosts/:userID',getPost)
router.post('/addPost',addPost) 

router.delete('/deletePost/:id',validationRequest(deletePostSchema),deletePost );
router.put('/updatePost/:id',validationRequest(updatePostSchema), updateUserPost);



module.exports=router 