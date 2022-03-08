const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    OrderName:{type:String,required:true},
    UserName:{type:String,required:true},
    Products:{type:String},
    Address:{type:String,required:true},
   
    addedOn:{type:Number,required:true,default:new Date().getTime()},



})





module.exports = mongoose.model("Order",orderSchema);