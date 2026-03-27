
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require('dotenv').config()

const register = async (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
        message: "User already exists",
      });
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({ name, email, password: hashedPassword })


  const token = jwt.sign(
    { id: user._id },           // payload
    process.env.JWT_SECRET,     // secret key
    { expiresIn: "30d" }        // kitne din vali
  )

  if(token){
    return res.status(201).json({
        message: "Registered successfully",
        token
      })
  }

};

const login =  async(req,res) =>{

  const email = req.body.email;
  const password = req.body.password;

  const existUser =  await User.findOne({email});


  if(!existUser) {
    return res.status(404).json({
      message: "User not found!"
    })
  }

  const isMatch = await bcrypt.compare(password, existUser.password)


  if(isMatch) {
    const token = jwt.sign({
      id: existUser._id
    }, process.env.JWT_SECRET, {
      expiresIn: "30d"
    })
   
    return res.status(200).json({
      message: "Login successful",
      token
    })
  }
  
  else{
    return res.status(400).json({
      message:"User not found !"
    })
  }

}

module.exports = { register ,login};
