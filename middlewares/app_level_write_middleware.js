const express = require('express');
const fs = require('fs');

const app = express();

app.use(function(req,res,next){
const data = (`Request received ${Date()}`)
fs.writeFile('../file/welcome',data,(err)=>{
    next();
    if (err)
    throw err;
    res.write('<h2>Data saved successfully</h2>');
    return res.end();
})
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
});
app.listen(4000,()=>console.log('server started'))