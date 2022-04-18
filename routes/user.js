const express = require('express')
const route = express.Router()
  const User = require('../Model/User')
        let user=User({
            name:"hanen",
            age:26,
            favoriteFoods:["mloukheya","spaggetti"]
        })
        user.save((err,data)=>{
            err ? console.log(err):console.log("save user")
        })
        User.create([{name:"fatma",age:27,favoriteFoods:["pizza","kosksi","lablebi"]},
{name:"youssef",age:21,favoriteFoods:["loubya", "jelbena ","lazania"]},{name:"mohamed",age:55,favoriteFoods:["kosksi","spagetti","kafteji"]}],(err,data)=>{
    err ? console.log(err):console.log("add users")
})
User.find().limit(4)
.then(doc=>console.log("all users",doc) )
.catch(err=>console.log(err))
User.findOne({name:"hanen"})
.then(doc=>console.log("findone",doc.favoriteFoods))
.catch(err=>console.log(err))
User.findById({_id: "625cd59afcd35e1b54716013"})
.then(doc=>console.log("byid",doc))
.catch(err=>console.log(err))
User.findById({_id: "625cd5cb953af3aaa6d74c64"},(err,data)=>{
    if(err){
        console.log(err)
    } else {
        data.age=20;
        data.save((err,data)=>{
            err ? console.log(err):console.log("updateClassique",data)
        })
    }
})
User.findByIdAndDelete({_id: "625cd323e9d152307e7e6f01"})
.then(doc=>console.log("remove",doc))
.catch(err=>console.log(err))




 module.exports = route