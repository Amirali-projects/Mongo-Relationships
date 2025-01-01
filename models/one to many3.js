// const express=require("express");
// const mongoose=require("mongoose");
// const app=express();
// let schema=mongoose.Schema;
// main()
// .then(()=>{
//     console.log("connection Successful");
// })
// .catch(err => console.log(err));
// async function main() 
// {
//   await mongoose.connect('mongodb://127.0.0.1:27017/mongorelation');
// }
// app.listen(8080,(req,res)=>{
//     console.log("App is listening on port 8080");
// })
// const userschema=new schema({
// username:String,
// email:String,
// });
// const postschema=new schema({
//     content:String,
//     likes:Number,
//     user:{
//         type:schema.Types.ObjectId,
//         ref:"user",
//     }
// })
// const user=mongoose.model("user",userschema);
// const post=mongoose.model("post",postschema);

// const addData=async()=>{
// let user1=new user({
//     username:"AmirAli",
//     email:"rahul@gmail.com"
// });
// let user2=new user({
//     username:"Hussnain",
//     email:"hussnain@gmail.com",
// });
// let post1= new post({
//     content:"Hello this is my first post",
//     likes:645,
// })
// let post2=new post({
//     constent:"Hello Second Post",
//     likes:"456",
// });

// // post1.user=user1;
// // await user1.save();
// // await post1.save();
// post2.user=user2;
// await user2.save();
// await post2.save();

// }
// addData();



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
    email:String,
})
const postschema=new schema({
    content:String,
    like:Number,
    user:{
        type:schema.Types.ObjectId,
        ref:"user",
    }
})
const user=mongoose.model("user",userschema);
const post=mongoose.model("post",postschema);
const addData=async()=>{
    let user1 =new user({
    name:"Amir Ali",
    email:"amir@gmail.com",
    })
    let post1=new post({
        content:"Hello My name is Amir Ali and My father name is Muhammad Khan Also I want to be a Full stack developer",
        like:10,
    })
    post1.user=user1;
    await user1.save();
    await post1.save();
    
}
addData();

