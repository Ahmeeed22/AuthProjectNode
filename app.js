const express = require("express");
require('dotenv').config()
const connection = require("./configrations/configDB");
let port= process.env.PORT;
const userRouter = require("./module/user/routes/user.route");
const postRouter = require("./module/post/routes/post.route");

const reportRouter = require("./module/report/routes/report.route");
const advertiseRouter = require("./module/advertise/routes/advertise.route");
const app = express();

connection()
app.use(express.json());

app.use(userRouter);
app.use(postRouter);
app.use(advertiseRouter);
app.use(reportRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`); 
});
  