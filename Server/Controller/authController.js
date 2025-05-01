const User = require('../Model/UserSchema')
const jwt = require('jsonwebtoken');

const registerUser = async (req,res)=>{
    const {userName,email,password} = req.body;

    try{
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message:'User Already Exists'});
        }

        const newUser = await User.create({
            userName,
            email,
            password,
            role:'user'
        });
        
        res.status(201).json({
            id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
          });
    }
    catch(error){
        res.status(500).json({message:"Server Error"});
    }
};

const userLogin = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            res.json({
                id: user._id,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
              });
        }else{
            res.status(401).json({message:"Invalid Email or Password"});
        }
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
  };

module.exports = {registerUser,userLogin};