const express = require('express');

const app = express();

//create and add app level middleware function
app.use(function(req,res,next){
    //logging middleware which logs or record request entry in server application 
console.log(`Request received at ${Date.now()}`)
next(); //calling next middleware in the chain or intended request handler

});
//actual get request handler
app.get("/hello",(req,res)=>{
    res.send("Hello World")
})

app.listen(4000,()=>console.log("App Level middleware server started..."))