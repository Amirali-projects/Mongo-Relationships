/* In MongoDB, a one-to-few relationship is used when a single document (one) is related to a small number of other documents (few). This is typically modeled using embedded documents because the "few" related items are limited in number and tightly associated with the parent document.*/

const express=require("express");
const mongoose=require("mongoose");
const app=express();
let schema=mongoose.Schema;
main()
.then(()=>{
    console.log("connection Successful");
})
.catch(err => console.log(err));
async function main() 
{
  await mongoose.connect('mongodb://127.0.0.1:27017/mongorelation');
}

const userschema=new schema({
    name:String,
    addreses:[
        {
            location:String,
            country:String,
        },
    ],
})
let user=mongoose.model("user",userschema);
let user1=new user({
    name:"Amir ALi",
    addreses:({location:"Pasrur",country:"Pakistan"})
})
 user1.addreses.push({location:"Islamabad",country:"USA"});
let result=user1.save();
console.log(user1);


app.listen(8080,(req,res)=>{
    console.log("App is listening on Port 8080");
})