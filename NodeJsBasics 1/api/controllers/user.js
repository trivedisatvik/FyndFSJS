const User = require("../models/user.js");
const mongoose = require("mongoose");

const create_user = (req,res,next)=>{
    // users.push(req.body);
    // res.json({message:"This is coming from api/routes/user.js but through post"});
    User.find({
        email:req.body.email
    }).exec()
    .then(user=>{
        console.log("This is the user");
        console.log(user);

        if(user.length>=1){
            return res.status(409).json({
                message:"email already exist"
            })
        }else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                accessLevel: req.body.accessLevel,
            })
            user.save()
            .then(result=>{
                console.log("This is the result from saving");
                console.log(result);
                res.status(201).json({
                    message:"User created",
                    user:result
                })
            })

        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })    
};
const get_all_users = (req,res,next)=>{
    User.find()
    .exec()
    .then((users)=>{
        console.log(users)
        res.status(200).json({
            message:"Got all users successfully",
            users
        })
    })
    .catch(
        err=>console.log(err)
    )

}
module.exports = {create_user,get_all_users};