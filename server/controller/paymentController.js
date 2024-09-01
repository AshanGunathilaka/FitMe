const OnlineModel = require('../models/OnlinePayments');
const asyncHandler = require("express-async-handler");

 //create online
const createonline = (req, res) => {
    OnlineModel.create(req.body)

    .then((data)=>{
        res.json(data);
    })
    .catch((err) =>{
        res.json(err);
    })
}



const userCtrl = {
  //!Register
  createonline: asyncHandler(async (req, res) => {
   
    const userCreated = await User.create({
      password: hashedPassword,
      email,
    });
    
    console.log("userCreated", userCreated);
    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated.id,
    });
  }),

  //!Login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    console.log("user backend", user);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    
    const token = jwt.sign({ id: user._id }, "anyKey", { expiresIn: "30d" });
    
    res.json({
      message: "Login success",
      token,
      id: user._id,
      email: user.email,
      username: user.username,
    });
  }),

  //!Profile
  profile: asyncHandler(async (req, res) => {    
    const user = await User.findById(req.user).select("-password");
    res.json({ user });
  }),
};

module.exports = userCtrl;