const OnlineModel = require('../model/OnlinePayments');
const asyncHandler = require("express-async-handler");

 //create online
const createonline = (req, res) => {
   

   
}



const userCtrl = {
  //!Register
  createonline: asyncHandler(async (req, res) => {
   
    OnlineModel.create(req.body)

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