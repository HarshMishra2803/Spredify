const express  = require("express");
const connectDB = require("./config/db");
require('dotenv').config()
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json())

connectDB();

app.use('/api/auth', authRoutes)



app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("server is running on port 8000")
});

module.exports = app;   