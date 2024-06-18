import customerModel from "../model/customer.model";


export async function saveCustomer(req,res){
    const {contactNumber,name,userName,password,email} = req.body;

    const customer = await customerModel.create({contactNumber,name,userName,password,email})
    const savedCustomer = await customer.save()

    res.json(savedCustomer).send()
}