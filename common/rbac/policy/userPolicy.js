const { GET_ALL_POSTS,DELETE_POST,UPDATE_POST,ADD_POST, GET_THIER_POST } = require("../../../module/post/endpoints");
const { GET_ALL_USERS, UPDATE_USER ,ADD_USER} = require("../../../module/user/endpoints");
const { GET_ALL_ADVERTISE } = require("../../../module/advertise/endpoints");
const {ADD_REPORT}=require("../../../module/report/endpoints")

module.exports=[GET_ALL_USERS,UPDATE_USER,GET_ALL_POSTS,DELETE_POST,UPDATE_POST,ADD_POST,ADD_USER,GET_THIER_POST,GET_ALL_ADVERTISE,ADD_REPORT] 