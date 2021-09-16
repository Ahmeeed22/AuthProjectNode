const { ADD_USER, UPDATE_USER, } = require("../../../module/user/endpoints");
const { GET_ALL_ADVERTISE ,DELETE_ADVERTISE,UPDATE_ADVERTISE,ADD_ADVERTISE} = require("../../../module/advertise/endpoints");
const { DELETE_POST,UPDATE_POST } = require("../../../module/post/endpoints");

module.exports=[ADD_USER,UPDATE_USER,GET_ALL_ADVERTISE ,DELETE_ADVERTISE,UPDATE_ADVERTISE,ADD_ADVERTISE  ,DELETE_POST,UPDATE_POST,] 