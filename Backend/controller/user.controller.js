const User = require("../model/user.model.js");
const bcrypt = require("bcryptjs")

const signup = async (req, res) =>{
    try {
        const {fullName, email, password} = req.body;
        const user = await User.findOne({email}); 
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullName: fullName,
            email: email,
            password: hashPassword
        })
        await createdUser.save();
        res.status(201).json({
            message: "User create successfully",
            user:{
                _id: createdUser._id,
                fullName: createdUser.fullName,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = signup;



const login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid username or password"});
        }else{
            res.status(200).json({message: "Login Successful", user:{
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = login;