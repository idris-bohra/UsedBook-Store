const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
var cors = require('cors');
const multer = require('multer');
const upload = multer();
const path = require('path')
require('dotenv').config();

app.use(cors());
app.use(bodyparser.json());

app.use("/public", express.static(path.join(__dirname, "uploads")));


//Routes
const authRoutes = require("./Routes/auth");
const authCategory = require("./Routes/category");
const authProducts = require("./Routes/product");
const authCart = require("./Routes/cart");
const authOtp = require("./Routes/otp");
const sellerRoutes = require("./Routes/sellerAccount");



async function fun()
{
    try
    {
        mongoose.connect(process.env.MONGO_DATABASE_URL, {
            useFindAndModify: false, 
            useNewUrlParser: true, 
            useUnifiedTopology: true}).then(() => console.log("Database connected!")).catch(err => console.log(err));
            
    }
    catch(err)
    {
        console.log(err)
    }
}

fun();

app.use("/", authRoutes);
app.use("/", authCategory);
app.use("/", authProducts);
app.use("/", authCart);
app.use("/" , authOtp);
app.use("/" , sellerRoutes);



app.listen(process.env.PORT , ()=>{
    console.log(`Running at ${process.env.PORT }`);
})
