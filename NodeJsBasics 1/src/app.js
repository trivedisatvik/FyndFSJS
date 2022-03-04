const express = require("express");
const app = express();
const userRouter = require("../api/routes/user.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://trivedisatvik:Qazwsxedc12345@cluster0.dc296.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true
}).then(
    ()=>console.log("Mongodb is successfully connected")
).catch(
    (err)=>console.log(err)
)











//configuring body parser(accepts key value from request and parses)
app.use(bodyParser.urlencoded({extended:true}));
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