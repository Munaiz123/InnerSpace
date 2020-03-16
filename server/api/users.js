const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let allUsers = await User.findAll({
      attributes: ['id','firstName','lastName', 'email','isLandlord']
    })
    res.send(allUsers).status(200)
  } catch (err) {
    next(err)
  }
})
