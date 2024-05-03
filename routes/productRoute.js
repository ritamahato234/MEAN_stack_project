const productController = require("../controllers/productController")
let express = require("express");
const router = express.Router()


router.post('/addproduct',productController.addProduct)
router.get('/getallproduct',productController.getProducts)
router.get('/getproduct/:id',productController.getOneProduct)
router.post('/editproduct/:id',productController.updateProduct)
router.post('/deleteproduct/:id',productController.deleteProduct)
router.get('/publishedproduct',productController.getPublishedProduct)

module.exports = router;
