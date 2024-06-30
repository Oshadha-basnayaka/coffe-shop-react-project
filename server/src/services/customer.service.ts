
import bcrypt from 'bcryptjs'
import customerModel from '../model/customer.model';

export async function saveCustomer(req,res){

    try{
        
    const {contactNumber,name,userName,password,email} = req.body;

    const customer = await customerModel.create({contactNumber,name,userName,password:bcrypt.hashSync(password,4),email})
    const savedCustomer = await customer.save()

    res.json(savedCustomer).send()
    }catch(e){
        console.log(e)
        res.status(500).send({error:"internal server error"})
    }
}