const router = require('express').Router()
const {Building} = require('../db/models')
module.exports = router

// api/buildings/

router.get('/', async(req, res, next)=>{
  try{
    let allBuildings = await Building.findAll({
      where:{landlordId: req.user.id}
    })
    console.log('REQ', req.params)
    res.send(allBuildings).status(200)

  } catch(error){
    next(error)
  }
})

// api/buildings/addBuilding

router.post('/addBuilding', async(req,res,next)=>{
  try{
    let newBuilding = await Building.create({
      buildingName: req.body.buildingName,
      address:req.body.address,
      unitsCount:req.body.unitsCount
    })
    res.status(201).send(newBuilding)

  } catch(error){
    next(error)
  }
})


