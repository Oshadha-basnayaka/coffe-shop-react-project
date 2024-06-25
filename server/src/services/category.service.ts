import categoryModel from "../model/category.model";
import repl from 'repl'

export async function saveCategory(req,res) {

    const cat1 = await categoryModel.create([
        {
            categoryName: "cofee"
        },
        {
            categoryName: "cake"
        },
        {
            categoryName: "tea"
        },
    ])

    await categoryModel.bulkSave(cat1);
    res.end();
}

export async function getAllCategory(req,res) {
    try {
        const cateforyList = await categoryModel.find();
        res.send({ data: cateforyList })
    } catch (e) {
        res.status(500).json({ error: "internal server error" }).send()
    }
}

// repl.start({prompt:">", eval:saveCategory}).context.saveCategory = saveCategory;