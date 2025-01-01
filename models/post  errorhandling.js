
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
app.listen(8080,()=>{
    console.log("App is listening on port 8080");
})

const orderschema=new schema({
    item:String,
    price:Number,
})
let customerschema=new schema({
    name:String,
    orders:[
         {
            type:schema.Types.ObjectId,
            ref:"order",

         }
    ]
});



customerschema.post("findOneAndDelete", async function (doc) {
    if (!doc) {
        console.log("No customer document found for deletion.");
        return; // Exit early if no document is found
    }
    try {
        let res = await order.deleteMany({ _id: { $in: doc.orders } });
        console.log("Deleted orders:", res);
    } catch (err) {
        console.error("Error deleting orders:", err);
    }
});

let order=mongoose.model("order",orderschema);
let customer=mongoose.model("customer",customerschema);

let addcustomer=async()=>{
    let newcustomer=new customer({
        name:"luqman",
     });

      let neworder=new order({
          item:"apple",
          price:453,
      });
    newcustomer.orders.push(neworder);
   await neworder.save();
   await newcustomer.save();
   console.log("added new customer")
}

const delcutomer=async()=>{
    let data=await customer.findByIdAndDelete('6746df9b0b62f0da40e78499');
     console.log(data);
}
// addcustomer();
delcutomer();
