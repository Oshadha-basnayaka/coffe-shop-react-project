import categoryModel from "../model/category.model";
import repl from 'repl'

export async function saveCategory(req, res) {

    try{
        const cat1 = await categoryModel.create([
            {
                categoryName: "coffee"
            },
            {
                categoryName: "juice"
            },
            {
                categoryName: "dessert"
            },
        ])
    
        await categoryModel.bulkSave(cat1);
        res.end();

    }catch(e){
        console.log(e);
        res.status().send({error:"internal server error"});
    }
   
}

export async function getAllCategory(req,res) {
    try {
        const cateforyList = await categoryModel.find();
        res.json({ data: cateforyList }).send()
    } catch (e) {
        res.status(500).send({ error: "internal server error" })
    }
}

export async function getCategoryByCategoryName(req,res){
    try{

    const {categoryName} = req.params;
    const category = await categoryModel.findOne({categoryName});
    console.log(category)
    return category;
    }catch(e){
        console.log(e);
        
        res.status(500).send({error:"internal server error"})
    }
    
}

// repl.start({prompt:">", eval:saveCategory}).context.saveCategory = saveCategory;