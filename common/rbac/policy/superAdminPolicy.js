const { GET_ALL_ADVERTISE ,DELETE_ADVERTISE,UPDATE_ADVERTISE,ADD_ADVERTISE} = require("../../../module/advertise/endpoints");
const { UPDATE_POST,DELETE_POST } = require("../../../module/post/endpoints");
const { DELETE_REPORT,GET_ALL_REPORT } = require("../../../module/report/endpoints");
const { ADD_USER, UPDATE_USER, DELETE_USER} = require("../../../module/user/endpoints");

module.exports=[ADD_USER,UPDATE_USER, GET_ALL_ADVERTISE , DELETE_ADVERTISE ,UPDATE_ADVERTISE,ADD_ADVERTISE, ,DELETE_POST,UPDATE_POST,GET_ALL_REPORT,DELETE_REPORT,DELETE_USER] 