const express = require("express");
require('dotenv').config()
const connection = require("./configrations/configDB");
require('dotenv').config();
let port= process.env.PORT;
console.log(port)
const userRouter = require("./module/user/routes/user.route");

const postRouter = require("./module/post/routes/post.route");
const app = express();
connection()
app.use(express.json());

app.use(userRouter);
app.use(postRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`); 
});
  