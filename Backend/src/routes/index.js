const router = require('express').Router()

//users
router.use('/users', require('./userRoute'))


module.exports = router