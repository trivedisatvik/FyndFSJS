const mongoose = require("mongoose")
const Product = require("../models/product.js");
const users = require("../models/user.js")

const create_single_product =(req,res,next)=>{
const product = new Product({
    _id:mongoose.Types.ObjectId(),
    productName : req.body.productName,
    productCategory : req.body.productCategory,
    productPrice:req.body.productPrice,
    users:(req.body.users)

})
product.save()
    .then(
        result =>{
            console.log("This is the result from creating single product");
            console.log(result);
            res.status(201).json({
                message:"Product created",
                product:result
            })
        }
    )
    .catch(error=>{
        res.status(500).json({
            message:"some error occurred",
            error
        })
    })



}
const get_all_products =(req,res,next)=>{

    Product.find()
    .select("users productName")
    .populate("users","first_name email")
    .exec()
    .then(result =>{
        console.log("This is the result from getting all Products");
        console.log(result);
        res.status(201).json({
            message:"getting all Orders",
            products:result.map(product=>{
                return {
                    _id:product.id,
                    productName:product.productName,
                    Price:product.productPrice,
                    user:product.users
                }
            })
        })
    })
    .catch(error=>{
        res.status(500).json({
            message:"some error occurred",
            error
        })
    })

}
const get_single_product =(req,res,next)=>{
const {productId} = req.params;
Product.find({
    _id:productId
})
.exec()
.then(product=>{
    if(product.length>=1){
    res.status(200).json({
        message:"The api ran successfully",
        productId,
        product,

    })
    console.log("this is the found order");
    console.log(product);
}
})
.catch(error=>{
    res.status(500).json({
        message:"some error occurred",
        error
    })
})



}
const update_single_product =(req,res,next)=>{
    const {productId} = req.params;
    const updateOps={}

    for(const [key, value] of Object.entries(req.body)){
        updateOps[key] = value
    }
    Product.update({_id:productId},{$set:updateOps})
    .exec()
.then(successResult=>{
        
    res.status(200).json({
        message:"Product Updated successfully"
    })
})
.catch(error=>{
    res.status(500).json({
        message:"some error occurred",
        error
    })
})



}
const delete_single_product = (req,res,next)=>{
    let productId = req.params.productId
    Product.remove({
        _id:productId
    })
    .exec()
    .then(
        result=>(
            res.status(200).json({
                message:"product successfully removed",
                result
            })

            

        )
    )
    .catch(err=>{
        res.status(500).json({
            merror:"There has been an error",
            error:err
        })
    })
   

}

module.exports = {
    create_single_product, get_all_products,get_single_product,update_single_product,delete_single_product
}