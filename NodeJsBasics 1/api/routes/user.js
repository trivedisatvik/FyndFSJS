const express = require("express")
const router = express.Router();
const {create_user,get_all_users,get_single_user} = require("../controllers/user.js");



router.post("/",create_user);
router.get("/",get_all_users);

//get single user
router.get("/:userId",get_single_user);


module.exports = router;