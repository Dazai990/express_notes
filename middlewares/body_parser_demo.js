const express = require('express');
const bodyParser = require('body-parser')

const router = express.Router();

//create get route handler with json body parser
//json body parser works as request pre-processor middleware
router.post("/person",bodyParser.json(),(req,res)=>{
//fetching request body data
const reqData = req.body;
res.status(200).send(`<h2>Person Name: ${reqData.name} and age :
     ${reqData.age}</h2>`)

})

//create post route handler with urlencoded body parser
//uelEncoded body parser works as request pre-processor middleware
router.post("/user",bodyParser.urlencoded(),(req,res)=>{
     const loginData = req.body;
     console.log(loginData);
     res.status(200).send(`<h2>Username: ${loginData.username}</h2>`)
})

module.exports = router;