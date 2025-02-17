const express = require('express');
const router = express.Router();

//create and add router level middleware
router.use(function(req,res,next){
    //logging each request which enters in router
    // console.log(`Request received at ${Date.now()}`)
    console.log(`Response is sent at ${Date()}`)

    next();
})

//create get route handler
router.get('/welcome',(req,res,next)=>{

    //sending response after delay of 2000 ms
    setTimeout(()=>{
        res.send("Get hello from route handler");
        next(); //actual route handler forwards request
        //  response to post-processor middleware
    },2000 );
})
router.post('/new-user',(req,res,next)=>{
    setTimeout(()=>{
        res.send('<h2>Congrats! new user created successfully</h2>');
        next();
    },3000 )
})

//requst post-processor middleware
router.use((req,res,next)=>{
    // console.log(`Response is sent at ${Date.now()}`)
    console.log(`Response is sent at ${Date()}`)

})

module.exports = router;