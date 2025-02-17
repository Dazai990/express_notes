const express = require('express')
const router = express.Router()

//create post route handler using express.json() middleware
//to parse incoming json data on server side
//and convert it into js format on server side
router.post("/car",express.json(),(req,res)=>{
    // const carData = req.body;
 const {model,brand,price}= req.body;
 res.status(200).json({
    "model":model,
    "brand":brand,
    "price":price
 })

    //sending json response
    // res.status(200).json({
    //     "model":carData.model,
    //     "brand":carData.brand,
    //     "price":carData.price
    //})
})

//create post handler using express.urlencoded() middleware
//to parse incoming form data on server side
//and convert it into js format
router.post("/bike",express.urlencoded(),(req,res)=>{
    res.status(200).json({
        "model":req.body.model,
        "brand":req.body.brand,
        "price":req.body.price
    })
})

module.exports = router;