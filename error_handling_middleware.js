const express = require('express')
const router = express.Router();

router.get('/hello',(req,res,next)=>{
    throw Error('Server Error')
})

//error handling post processor logic
router.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})

module.exports = router;