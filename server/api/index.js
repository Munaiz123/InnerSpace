const router = require('express').Router()

module.exports = router

router.use('/tenants', require('./tenants'))
router.use('/buildings', require('./buildings'))
router.use('/units', require('./units'))

router.use('/tickets', require('./tickets'))




router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


