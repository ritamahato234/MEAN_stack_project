const db = require("../models")
// const productModel = require("../models/productModel")


const product = db.products
const review = db.reviews

const addProduct = async(req,res)=>{
    console.log('req---',req.body)
    let info ={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published?req.body.published:false
    }
   const checkexist = await product.findOne({where:{title:req.body.title}})
   if(checkexist){
    res.status(403).send("alraedy exist")

   }else{

       const getproduct = await product.create(info)
    //    console.log(getproduct,"jkhwf")
       res.status(200).send(getproduct)
   }

}

const getProducts = async(req,res)=>{
let products = await product.findAll({
})

if(products){

    res.status(200).send(products)
}else{
 res.status(403).send("not found")

}

}

const getOneProduct = async(req,res)=>{
    let id = req.params.id;
    let products = await product.findOne({where:{id:id}
    })
   if(products){

       res.status(200).send(products)
   }else{
    res.status(403).send("not found")

   }
}


const updateProduct = async(req,res)=>{
    let id = req.params.id;
    let products = await product.update(req.body,{where:{id:id}} )
    res.status(200).json({ message: "Product edited successfully" });
 
}

const deleteProduct = async(req,res)=>{
    
    try {
        const { id } = req.params;
        await product.destroy({ where: { id:id } });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: "Error occurred while deleting the product" });
    }
}

const getPublishedProduct = async(req,res)=>{
 
    let products = await product.findAll({where:{published:true}})

    res.status(200).send(products)
}


module.exports = {
    addProduct,
    getProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}