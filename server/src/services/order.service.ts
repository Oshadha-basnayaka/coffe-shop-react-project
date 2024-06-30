import orderModel from "../model/order.model";

export async function SaveOrder(req,res){

    try{

        const {
            customerId,
            address,
            name,
            orderItems
        } = req.body;

       const order = await orderModel.create({customerId,address,name,orderItems});
       await order.save();

       res.status(201).send()



    }catch(e){
        console.log(e);
        res.status().send({error:"internal server error"})
    }

}