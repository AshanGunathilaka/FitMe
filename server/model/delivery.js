const mongoose = require('mongoose');

const deliveryschema = new mongoose.Schema({
    customername:'String',
    address: 'String',
    phonenumber: 'Number',
    pdate: 'Date', 
    ptime: 'String',
    note: 'String',
        

});

const deliveryModel = mongoose.model('Delivery' ,deliveryschema)

module.exports = deliveryModel;