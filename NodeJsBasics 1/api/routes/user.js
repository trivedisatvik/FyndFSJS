const express = require("express")
const router = express.Router();
const {create_user,get_all_users} = require("../controllers/user.js");


router.get("/",get_all_users);
router.post("/",create_user);


module.exports = router;