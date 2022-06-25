const {Router} = require('express');
const Product = require('../models/Product');

const router = Router();

router.get('/getproducts', async (req,res) =>{
    try{
        const data = await Product.find();
        res.json(data);
    } catch(e){
        res.status(500).json({message: 'Something went wrong'});
    }
})

module.exports = router;
