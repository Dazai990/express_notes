const express = require('express');
const router = express.Router();

router.use('/static',express.static("public"))
router.use(express.static("files"))


module.exports = router;