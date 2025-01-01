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
app.listen(8080,(req,res)=>{
    console.log("App is listening on port 8080");
})
// const orderschema=new schema({
//  item:String,
//  price:String,
// });
// const customerschema=new schema({
//     name:String,
//     orders:[
//         {
//         type:schema.Types.ObjectId,
//         ref:"order",
//     },
// ],

// });

// const order=mongoose.model("order",orderschema);
// const customer=mongoose.model("customer",customerschema);
// const addcustomer=async()=>{
//     //   let cust1=new customer(
//     //     {
//     //     name:"Amir ALi",
//     //   });
//     //   let order1=await order.findOne({item:"pakora"});
//     //   let order2=await order.findOne({item:"chocolate"});
//     //   cust1.orders.push(order1);
//     //   cust1.orders.push(order2);

//     //   let result=await cust1.save();
//  let res=await customer.find({}).populate("orders");
//      console.log(res[0]);
// }
// addcustomer();

// // const addorder=async()=>{
// //    let result= await order.insertMany([
// //        { item:"samosa",price:456},
// //        { item:"pakora",price:787},
// //        {item:"chocolate",price:40},

// // ])
// // console.log(result);
// // }
// // addorder();
//Practice


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
// app.listen(8080,()=>{
//     console.log("App is listening on port 8080");
// })

// const orderschema=new schema({
//     item:String,
//     price:Number,
// })
// let customerschema=new schema({
//     name:String,
//     orders:[
//          {
//             type:schema.Types.ObjectId,
//             ref:"order",

//          }
//     ]
// });
// let order=mongoose.model("order",orderschema);
// let customer=mongoose.model("customer",customerschema);
// /* let addorder=async()=>{
//    let res=await order.insertMany([
//         {item:"chips",price:446},
//         {item:"pakora",price:446},
//         {item:"samosa",price:446},
//     ])
//     console.log(res);
// }
// addorder();
// */
// let addcustomer=async()=>{
// //    let cust1=new customer({
// //     name:"Amir Ali",
   
// //    })
// //    let order1=await order.findOne({item:"pakora"});
// //    let order2=await order.findOne({item:"samosa"});
// //     cust1.orders.push(order1);
// //     cust1.orders.push(order2);


    
// //     let result=await cust1.save();
// //     console.log(result);


// let res=await customer.find({}).populate("orders");
// console.log(res[0]);

// }
// addcustomer();


// Practice

const orderschema=new schema({
    item:String,
    price:Number,
});

const customerschema=new schema({
    name:String,
    orders:[{
        type:schema.Types.ObjectId,
        ref:"order",
    }]

})

const order=mongoose.model("order",orderschema);
const customer=mongoose.model("customer",customerschema);
// const addorder=async()=>{
//       let res=await order.insertMany([
//         {
//             item:"Biryani",
//             price:70,
//         },
//         {
//             item:"sandwitch",
//             price:80,
//         },
//         {
//             item:"haleem",
//             price:678,
//         },
//       ])
// }
// addorder();



let addcustomer=async()=>{
    // let cust1=new customer({
    //     name:"Amir Ali",
    // })
    // let order1=await order.findOne({item:"sandwitch"});
    // let order2=await order.findOne({item:"haleem"});
    //  cust1.orders.push(order1);
    //  cust1.orders.push(order2);
    //  let res=await cust1.save();
    // console.log(res);
   let findCustomer=await customer.find({}).populate("orders");  // It does not return only id but the whole data.
   console.log(findCustomer[0]);
}
addcustomer();
