const mongoose = require("mongoose")
const Order = require("../models/order.js");

const create_single_order =(req,res,next)=>{
const order = new Order({
    _id:mongoose.Types.ObjectId(),
    OrderName : req.body.OrderName,
    UserName : req.body.UserName,
    Address: req.body.Address,

})
order.save()
    .then(
        result =>{
            console.log("This is the result from creating single order");
            console.log(result);
            res.status(201).json({
                message:"Order created",
                order:result
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
const get_all_orders =(req,res,next)=>{

    Order.find()
    .exec()
    .then(result =>{
        console.log("This is the result from getting all Orders");
        console.log(result);
        res.status(201).json({
            message:"getting all Orders",
            order:result
        })
    })
    .catch(error=>{
        res.status(500).json({
            message:"some error occurred",
            error
        })
    })

}
const get_single_order =(req,res,next)=>{
const {orderId} = req.params;
Order.find({
    _id:orderId
})
.exec()
.then(order=>{
    if(order.length>=1){
    res.status(200).json({
        message:"The api ran successfully",
        orderId,
        order,

    })
    console.log("this is the found order");
    console.log(order);
}
})
.catch(error=>{
    res.status(500).json({
        message:"some error occurred",
        error
    })
})



}
const update_single_order =(req,res,next)=>{
    const {orderId} = req.params;
    const updateOps={}

    for(const [key, value] of Object.entries(req.body)){
        updateOps[key] = value
    }
    Order.update({_id:orderId},{$set:updateOps})
    .exec()
.then(successResult=>{
        
    res.status(200).json({
        message:"Order Updated successfully"
    })
})
.catch(error=>{
    res.status(500).json({
        message:"some error occurred",
        error
    })
})



}
const delete_single_order = (req,res,next)=>{
    let orderId = req.params.orderId
    Order.remove({
        _id:orderId
    })
    .exec()
    .then(
        result=>(
            res.status(200).json({
                message:"order successfully removed",
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
    create_single_order, get_all_orders,get_single_order,update_single_order,delete_single_order
}