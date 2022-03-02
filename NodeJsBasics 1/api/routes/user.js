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
// router.post("/Satvik",(req,res,next)=>{
//     res.json({
//         message:"This is coming from the /users/route when we use the POST HTTP"
//     })
// })


module.exports = router;