const router = require('express').Router()
const {Unit} = require('../db/models')
const {isLandlord} = require('./middleware')

module.exports = router

router.get('/', async(req, res, next)=>{
  try{
    let allUnits = await Unit.findAll()
    res.send(allUnits).status(200)

  } catch(error){
    next(error)
  }
})
