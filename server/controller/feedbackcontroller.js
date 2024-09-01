const feedbackModel = require('../model/feedback');
const asyncHandler = require("express-async-handler");


const userCtrl = {
  //!Register
  createfeedback: asyncHandler(async (req, res) => {
   
    feedbackModel.create(req.body)

    .then((data)=>{
      res.json(data);
    })
    .catch((err) =>{
        res.json(err);
    })
    
  
  }),

  //!Login
  
};

module.exports = userCtrl;