const validationRequest = require("../../../common/middleware/validationRequest");
const { getAllposts, addPost, deletePost, updateUserPost, getPost } = require("../controllers/post.control");
const {  updatePostSchema, deletePostSchema ,addPostSchema} = require("../joi/postValidation");
const router=require("express").Router();
const isAuthorized= require("../../../common/middleware/isAuthoraized");
const { GET_ALL_POSTS, GET_THIER_POST ,DELETE_POST,UPDATE_POST, ADD_POST,} = require("../endpoints");

// get all posts
router.get('/allPosts', isAuthorized(GET_ALL_POSTS),getAllposts);
// get profile posts
router.get('/userPosts/:userID',isAuthorized(GET_THIER_POST),getPost)
//add posts
router.post('/addPost',validationRequest(addPostSchema),isAuthorized(ADD_POST),addPost) 
// delete post
router.delete('/deletePost/:id',validationRequest(deletePostSchema),isAuthorized(DELETE_POST),deletePost );
//update post
router.put('/updatePost/:id',validationRequest(updatePostSchema),isAuthorized(UPDATE_POST), updateUserPost);



module.exports=router 