const express = require("express")
const router = express.Router();

let users = [
    {
        name:"Satvik Trivedi",
        id:1
    },
    {
        name:"Vedansh",
        id:2
    }
]
router.get("/",(req,res,next)=>{
    
    res.json({
        heading:"This is the users data",
        users:users
    })
});
router.post("/",(req,res,next)=>{
    users.push(req.body);
    res.json({
        
        message:"Successfully added",
    })
})


module.exports = router;