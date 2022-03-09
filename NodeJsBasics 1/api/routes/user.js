const express = require("express")
const router = express.Router();
const {create_user,get_all_users,get_single_user,delete_single_user,update_user,user_login} = require("../controllers/user.js");



router.post("/",create_user);
router.get("/",get_all_users);

//get single user
router.get("/:userId",get_single_user);
router.delete("/:userId",delete_single_user);
router.patch("/:userId",update_user)
router.post("/login",user_login)


module.exports = router;