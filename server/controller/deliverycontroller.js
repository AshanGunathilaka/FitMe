const deliveryModel = require('../model/delivery');
const asyncHandler = require("express-async-handler");


const userCtrl = {
  //!Register
  createdelivery: asyncHandler(async (req, res) => {
   
    deliveryModel.create(req.body)

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