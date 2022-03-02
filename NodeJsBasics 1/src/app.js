const express = require("express");
const app = express();
const userRouter = require("../api/routes/user.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//configuring body parser(accepts key value from request and parses)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//configuring morgan(logger)
app.use(morgan("dev"));

// app.use((req,res,next)=>{
//     console.log("first use all middleware ran");
//     next();
// },(req,res,next)=>{
//     console.log("second use all middleware ran");
//     next();
// });

app.get("/",(req,res,next)=>{
    res.json({message:"This works, thankyou"})
    next();
});
app.use("/users",userRouter);


// app.get("/Satvik",(req,res,next)=>{
//     res.json({message:"This is coming from get request /Satvik"})
//     next();
// });
// app.post("/Satvik",(req,res,next)=>{
//     res.json({message:"This is coming from post request /Satvik"})
//     next();
// });


module.exports = app;