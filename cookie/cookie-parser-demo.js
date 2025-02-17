const express = require('express');
const cookieParser = require('cookie-parser');

const router = express.Router();
//using cookie-parser third party middleware
//to parse incoming cookies if any
router.use(cookieParser() );

//create get route handler to set and send cookies
router.get("/hello", (req,res)=>{
    // creating or setting cookies in form of name-value pair
    res.cookie("person_name","Kamlesh Kumar")

    // setting cookies with expiry 
    res.cookie("email_Id","kamlesh.kumar@pheonix.com",{
        expires:new Date( Date.now()+(60*60*1000))
    })

    res.cookie("contact_no",8940393234,{
        maxAge:15000
    })

    // sending response
    res.send("Hello")
} )

// get router handler to parse incoming cookies
router.get("/person" , (req,res)=>{

    // get all cookies from http request
    const cookieArr = req.cookies
    console.log(req.cookies)

    res.status(200).send(`<h2>Person Name: ${cookieArr.person_name}</h2>`)

} )

module.exports = router;