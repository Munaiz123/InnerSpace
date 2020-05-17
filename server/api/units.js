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


// api/units/addUnit
// need to think about how assinging a tenant to a unit looks like
// as well as how assigning a unit to building looks like.

router.post('/addUnit', async (req, res, next) => {
  try {
    let newUnit = await Unit.create({
      unitNumber: req.body.unitNumber,
      bedroomCount: req.body.bedroomCount,
      bathroomCount: req.body.bathroomCount,
      rent: req.body.rent,
      unitLandlordId: req.user.id
    })
    res.json(newUnit)
  } catch (error) {
    next(error)
  }
})

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
