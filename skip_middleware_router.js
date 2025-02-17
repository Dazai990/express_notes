const express = require('express');
const router = express.Router();

router.get('/profile/:id',(req,res,next)=>{
    if(req.params.id==='0'){
        res.send(`Sorry!, id with value ${req.params.id} not allowed`)
        next('router'); //skipping the next middleware
    }else{
        res.send(`Welcome your profile id ${req.params.id} allowed`)
        next(); //forwarding request to next middleware
    }
}, (req,res,next)=>{
    console.log("Post processor middleware for get request")
})



module.exports = router;