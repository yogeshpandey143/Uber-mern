const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");


app.get("/" ,(req , res) => {
   res.send("hello world");
});


module.exports= app;