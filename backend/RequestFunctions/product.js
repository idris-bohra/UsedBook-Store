const { ObjectID } = require('mongodb');
const Products = require('../Schema/ProductSchema');

exports.addProducts = (req , res)=>{
    
    const { name, price,author, description,userId, sellerId,count, category} = req.body;
    let productImg ;    

    if (req.files.length > 0) {

        productImg = req.files.map((file) => {
        return ({ img: file });
        });
    }

    const products = new Products({
        name,
        price,
        author,
        description,
        userId,
        sellerId,
        productImg,
        count,
        category
    });

    
    products.save((error, product) => {
        if (error) return res.status(400).json({ "save-error" : error });
        if (product) {
        res.status(201).json({ product, files: req.files });
        }
    });

}

exports.getProductsofseller = async (req, res) => {

    Products.find({ createdBy: req.body.id }).exec((err, products)=>{
        if(err)
        {
            res.status(500).json({"error from getporduct" : err});
        }
        else
        {
            res.status(200).json({ products });
        }
    })
      
  
};

exports.getproductbyid = async (req,res)=>{

    let id = req.params.id;

    Products.find({ _id : id }).exec((err, products)=>{
        if(err)
        {
            res.status(500).json({"error from getporduct" : err});
        }
        else
        {
            res.status(200).json({ products });
        }
    })

}

exports.getAllProducts = async (req, res) => {
    console.log('getallproducts')
    Products.find({}).exec((err, products)=>{
        if(err)
        {
            res.status(500).json({"error from getporduct" : err})
        }
        else
        {
            res.status(200).json({ products });
        }
    })
      
  
};

exports.getcategoryProducts = async (req, res) => {

    console.log("slug = ", req.params.slug)
    console.log("params = ", req.params)
    const slug = req.params.slug
    Products.find({'category' : slug}).exec((err, products)=>{
        if(err)
        {
            res.status(500).json({"error from getporduct" : err})
        }
        else
        {
            res.status(200).json({ products });
        }
    })
      
  
};

exports.getunsoldProducts = async (req, res) => {

    const sellerId = req.body.sellerId;
    console.log("unsold = ",req.body)

    Products.find({sellerId}).exec((err, products)=>{
        if(err)
        {
            res.status(500).json({"error from getporduct" : err})
        }
        else
        {
            res.status(200).json({ products });
        }
    })
      
  
};

exports.removeOneProduct = async (req, res) => {

    const sellerId = req.body.sellerid;
    const productid = req.body.productid;
    console.log("removing product = ",req.body)

    Products.deleteOne({_id : productid}).exec((err, products)=>{
        if(err)
        {
            res.status(500).json({"error from getporduct" : err})
        }
        else
        {
            res.status(200).json({ products });
        }
    })
      
  
};

