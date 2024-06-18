import categoryModel from "../model/category.model";
// import repl from 'repl'

export async function saveCategory(res,req){

    const cat1 = await categoryModel.create([
        {
            categoryName:"cofee"
        },
        {
            categoryName:"cake"
        },
        {
            categoryName:"tea"
        },
    ])

    await categoryModel.bulkSave(cat1); 
    res.end();   
}

// repl.start({prompt:">", eval:saveCategory}).context.saveCategory = saveCategory;