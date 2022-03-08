const express = require("express")
const router = express.Router()
const {
    create_single_order, get_all_orders,get_single_order,update_single_order,delete_single_order
} = require("../controllers/order.js")

//create a product
router.post("/",create_single_order)

//get all products
router.get("/",get_all_orders)

//get single product

router.get("/:orderId",get_single_order)

//updated single product
router.patch("/:orderId",update_single_order)


//delete single product
router.delete("/:orderId",delete_single_order)
module.exports = router