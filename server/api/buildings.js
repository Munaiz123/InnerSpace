const router = require('express').Router()
const {Building} = require('../db/models')
const {isLandlord} = require('./middleware')

// api/buildings/

router.get('/', async(req, res, next)=>{
  try{
    let allBuildings = await Building.findAll({
      where:{landlordId: req.user.id}
    })

    res.send(allBuildings)

  } catch(error){
    next(error)
  }
})

// api/buildings/id

router.get('/:id', async(req, res, next)=>{
  try{
    let singleBuilding = await Building.findOne({where:{id:req.params.id}})
    res.send(singleBuilding)

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

router.put('/:id', async (req, res, next) => {
  try {
    let oldBuilding = await Building.findOne({where: {id: req.params.id}})

    await oldBuilding.update({
      buildingName: req.body.buildingName,
      address: req.body.address,
      unitsCount: req.body.unitsCount
    })

    res.status(200).send(oldBuilding)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req,res, next)=>{
  try{
    await Building.destroy({where:{id:req.body.id}})
    res.sendStatus(200)
  } catch(error){
    next(error)
  }
})


module.exports = router



