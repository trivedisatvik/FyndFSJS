const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    productName:{type:String,required:true},
    productCategory:{type:String},
    productPrice:{type:Number,required : true},
    productImage:[mongoose.Schema.Types.Mixed],
    addedOn:{type:Number,required:true,default:new Date().getTime()},
    



})





module.exports = mongoose.model("Product",productSchema);