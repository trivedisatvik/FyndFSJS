const express = require("express")
const router = express.Router()
const {
    create_single_product, get_all_products,get_single_product,update_single_product,delete_single_product
} = require("../controllers/product.js")

const checkAuth = require("../middlewares/auth-check.js")
//create a order
router.post("/",create_single_product)
router.get("/",checkAuth,get_all_products)

//get all orders
//router.get("/",get_all_products)

//get single order

router.get("/:productId",get_single_product)

//updated single order
router.patch("/:productId",update_single_product)


//delete single order
router.delete("/:productId",delete_single_product)
module.exports = router