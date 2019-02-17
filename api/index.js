var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use('/formdata',require('./formdata'));


module.exports = router