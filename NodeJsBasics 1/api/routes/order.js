const express = require("express")
const router = express.Router()
const {
    create_single_order, get_all_orders,get_single_order,update_single_order,delete_single_order
} = require("../controllers/order.js")

//create a order
router.post("/",create_single_order)

//get all orders
router.get("/",get_all_orders)

//get single order

router.get("/:orderId",get_single_order)

//updated single order
router.patch("/:orderId",update_single_order)


//delete single order
router.delete("/:orderId",delete_single_order)
module.exports = router