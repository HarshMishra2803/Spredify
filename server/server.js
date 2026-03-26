const express  = require("express");
const connectDB = require("./config/db");
require('dotenv').config()
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("server is running on port 8000")
});

module.exports = app;   