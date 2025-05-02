const User = require("../Model/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
 
  try {
    console.log("Request Recieved");

    const userExists = await User.findOne({ email });
    console.log('hello')

    if (userExists) {
    console.log("User check Exists completed");
      return res.status(400).json({ message: "User Already Exists" });
    }
    
    console.log("After Email Exists Check");

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
      role: "user",
    });

    return res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      role: newUser.role,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Login method is called")
    const user = await User.findOne({ email });
    if(!user){
        console.log("User Not Found"); 
        return res.status(401).json({message:"Email Not Found"});
    }

    const status = await bcrypt.compare(password, user.password);

    if (user && status) {
      console.log("User Logged in Successfully.");

        return res.json({
        id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });

    } else {
        console.log("Else part in userSchema");
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (err) {
    console.log("Caught the Error in login.");
    return res.status(500).json({ message: "Server Error" });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const requestOtp = async (req,res)=>{
    try{
        const {email} = req.body;
        const exists = await User.findOne({email});
        
        if(!exists){
            throw new error ("Email Doesn't exists");
        }

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASSWORD
            }
        })
    }catch(error){

    }
}

module.exports = { registerUser, userLogin, requestOtp };
