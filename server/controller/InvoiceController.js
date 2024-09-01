const Invoicemodel = require('../model/Invoice');
const asyncHandler = require("express-async-handler");

 //create online
const createinvoice = (req, res) => {
   

   
}



const userCtrl = {
  //!Register
  createinvoice: asyncHandler(async (req, res) => {
   
    Invoicemodel.create(req.body)

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