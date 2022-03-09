const User = require("../models/user.js");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");


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
            });
        }else{
            //creating a hash salting and hashing the incoming password
            bcryptjs.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error:err
                    })
                }
                else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hash,
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
        const responseObject={

            count:users.length,
            message:"Got all users successfully",
            users:users.map(user=>{
                return{
                    user,
                    request:{
                        type:"GET",
                        url:`http://localhost:7000/users/${user._id}`,
                    }
                }
            })

        }
        
        res.status(200).json(responseObject)
    })
    .catch(
        err=>console.log(err)
    )

}
const get_single_user=(req,res,next)=>{
let userId=req.params.userId;


User.find({
    _id:userId
}).exec()
.then(
    user=>{
        if(user.length>=1){
        res.status(200).json({
            message:"The api ran successfully",
            userId,
            user,

        })
        console.log("this is the found user");
        console.log(user);
    }
}

)
.catch(err=>{
    res.status(500).json({
        merror:"There has been an error",
        error:err
    })
})





}
const delete_single_user = (req,res,next)=>{
    let userId = req.params.userId
    User.remove({
        _id:userId
    })
    .exec()
    .then(
        result=>(
            res.status(200).json({
                message:"User successfully removed"
            })

            

        )
    )
    .catch(err=>{
        res.status(500).json({
            merror:"There has been an error",
            error:err
        })
    })
   

}
const update_user=(req,res,next)=>{
    const userId = req.params.userId
    const updateOps={}

    for(const [key, value] of Object.entries(req.body)){
        updateOps[key] = value
    }
    

    User.update({_id:userId},{$set:updateOps})
    .exec()
    .then(successResult=>{
        
        res.status(200).json({
            message:"User Updated successfully"
        })
    })
    .catch(err=>{
        res.status(500).json({
            merror:"There has been an error",
            error:err
        })
    })



    

   


}
const user_login=(req,res,next)=>{
    User.find({
        email:req.body.email.toLowerCase()
    })
    .exec()
    .then(user=>{
        if(user.length<1){
            return res.status(401).json({
                message:"Auth failed"
            })
        }
        bcryptjs.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                res.status(401).json({
                    message:"Auth failed"
                })
            }
                if(result){
                    //generate jwt token here

                   const token = jsonwebtoken.sign(
                        {
                            email:user[0].email,
                            accessLevel:user[0].accessLevel
                        },
                        "satvik",
                        {
                            expiresIn:"1h"
                        }
                    )








                    return res.status(200).json({
                        message:"Login Successfull",
                        token
                    })
                }

        })
    })
    .catch(err=>{
        res.status(500).json({
            merror:"There has been an error",
            error:err
        })
    })
}
module.exports = {create_user,get_all_users,get_single_user,delete_single_user,update_user,user_login};