const Cart = require("../Schema/CartSchema");
const Products = require("../Schema/ProductSchema");
const Mongoose = require('mongoose')


exports.addItemToCart = (req, res) => {

    Cart.findOne({ userid: req.body.userid }).exec(async (error, cart) => {

      if (error) return res.status(400).json({ error });

      if (cart)
      {
          const exist = await cart.cartItems.find(cartItem => cartItem._id == req.body.productid)

          if(!exist)
          {
                Products.find({ _id : req.body.productid }).exec((err, products)=>{
                    if(err)
                    {
                        res.status(500).json({"error from getporduct" : err});
                    }
                    else
                    {
                        Cart.findOneAndUpdate({ userid: req.body.userid } , {
                            "$push"  : {    // $set function is used for updating data of object in an array
                                "cartItems" : products[0]
                            }
                        }).exec((err , _cart)=>{
                            if(err)
                            {
                                return res.status(500).json({err})
                            }
                            else
                            {
                                return res.status(201).json({_cart})
                            }
                        })
                    }
                })
          }
          else
          {
              res.status(400).json({"messege" : "item already present"})
          }
            
      }
      else
      {
          console.log("req.body" , req.body)

          Products.find({ _id : req.body.productid }).exec((err, products)=>{
            if(err)
            {
                res.status(500).json({"error from getporduct" : err});
            }
            else
            {
                let obj = products[0];
                console.log("obj",obj)
                const carts = new Cart({
                    userid: req.body.userid,
                    cartItems : [obj]
                })
        
                carts.save((error , cart)=>{
                    if(error)
                    {
                        res.status(400).json({"error" : error})
                    }
                    else
                    {
                        res.status(200).json({cart})
                    }
                })
            }
        })
          
        
      }

    })
        
}

exports.getCart =((req,res)=>{
    Cart.findOne({userid : req.params.montu}).exec((error , result)=>{
        if(error)
        {
            console.log("error of cart = ",error)
            res.status(400).json({error});
        }
        else
        {
            res.status(200).json({result})
        }
    })
})

exports.removeCartItems = (req, res) => {

    console.log("removing item = ",req.body)
    const  productId  = req.body.productId;
    console.log("productId = ",productId)

    Cart.findOneAndUpdate({ userid: req.body.userid } , {
        "$pull": {
                cartItems: {
                     "_id" : Mongoose.Types.ObjectId(productId)
                }
            }
    }).exec((err , _cart)=>{
        if(err)
        {
            return res.status(500).json({err})
        }
        else
        {
            console.log(_cart)
            return res.status(201).json({_cart})
        }
    })
   
    
};