const router = require('express').Router()
const {Unit, Building, User} = require('../db/models')
const {isLandlord} = require('./middleware')



// api/units
router.get('/', async (req, res, next) => {
  try {
    let allUnits = await Unit.findAll({
      where: {unitLandlordId: req.user.id},
      include: [
        {
          model: Building
        },
        {model:User, as:'tenant'}
      ]
    })
    res.send(allUnits).status(200)
  } catch (error) {
    next(error)
  }
})


// api/units/id
router.get('/:id', async (req, res, next) => {
  try {
    let singleUnit = await Unit.findOne({where: {id: parseInt(req.params.id)},
    include:[
      {
        model: Building
      },
      {
        model: User,
        as: 'tenant'
      }
    ]
  })
    res.send(singleUnit).status(200)
  } catch (error) {
    next(error)
  }
})

// api/units/tenants/tenId --> SingleTenantView.js
router.get('/tenants/:tenId', async (req, res, next) => {
  try {
    let tenantUnit = await Unit.findOne({
      where: {tenantId: req.params.tenId},
      include: [
        {
          model: Building
        }
      ]
    })
    res.send(tenantUnit).status(200)
  } catch (error) {
    next(error)
  }
})

// api/units/building/buildingId --> SingleBuildingView.js
router.get('/building/:buildingId', async (req, res, next) => {
  try {
    res.send(
      await Unit.findAll({
        where: {buildingId: req.params.buildingId},
        include: [{model: User, as: 'tenant'}]
      })
    )
  } catch (error) {
    next(error)
  }
})

// api/units/addUnit
router.post('/addUnit', async (req, res, next) => {
  try {
    console.log('REQ..BODY:::::', req.body)
    console.log('REQ..params:::::', req.params)

    let newUnit = await Unit.create({
      unitNumber: req.body.unit.unitNumber,
      bedroomCount: req.body.unit.bedroomCount,
      bathroomCount: req.body.unit.bathroomCount,
      rent: req.body.unit.rent,
      unitLandlordId: req.user.id,
      buildingId: req.body.buildId
    })
    res.json(newUnit)
  } catch (error) {
    next(error)
  }
})

// --> AddATenant THUNK in store/tenants.js
// PUT - api/units/assignTenant/unitId
router.put(`/assignTenant/:unitId`, async(req,res,next)=>{
  try{
    let oldUnit = await Unit.findOne({where:{id:req.params.unitId}})
    await oldUnit.update({tenantId:req.body.id})

  } catch(error){
    next(error)
  }
})

// PUT - api/units/id
router.put('/:id', async (req, res, next) => {
  try {
    let oldUnit = await Unit.findOne({where: {id: req.params.id}})

    let updatedUnit = await oldUnit.update({
      unitNumber: req.body.unitNumber,
      bedroomCount: parseInt(req.body.bedroomCount),
      bathroomCount: parseInt(req.body.bathroomCount),
      rent: parseInt(req.body.rent),
      unitLandlordId: req.user.id
    })

    res.status(200).send(updatedUnit)

  } catch (error) {
    next(error)
  }
})


router.delete('/:id', async(req,res,next)=>{
  try{
    await Unit.destroy({where:{id:req.params.id}})
    res.sendStatus(200)

  } catch(error){
    next(error)
  }
})


module.exports = router
