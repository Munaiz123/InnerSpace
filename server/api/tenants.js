const router = require('express').Router()
const {User, Unit} = require('../db/models')
const faker = require('faker')


// /api/users/
router.get('/', async (req, res, next) => {
  try {
    let allUsers = await User.findAll({
      where:{tenantLandlordId:req.user.id},
      attributes: ['id','firstName','lastName', 'email','isLandlord']
    })
    res.send(allUsers).status(200)
  } catch (err) {
    next(err)
  }
})


// /api/users/id
router.get('/:id', async (req, res, next)=>{
  try{
    let user = await User.findOne({where:{id: req.params.id}})
    res.send(user).status(200)
  } catch (error){
    next (error)
  }
})



// api/user/addTenantToUnit --> AddTenantForm.js located in SingleUnitView.js
// router.post(`/addTenantToUnit`, async(req,res,next)=>{
//   try{


//   } catch(error){
//     next(error)
//   }
// })


// /api/users/addTenant ~ --> AddTenantForm.js located in AllTenant.js
router.post('/addTenant', async (req, res, next) => {
  try {
    let pass, newUser;
    if (!req.body.tenant.password) {
      pass = faker.internet.password()

      newUser = await User.create({
        email: req.body.tenant.email,
        password: pass,
        firstName: req.body.tenant.firstName,
        lastName: req.body.tenant.lastName,
        isLandlord: req.body.tenant.isLandlord,
        unhashedPasswordForTesting: pass,
        tenantLandlordId: req.user.id
      })
    } else {
      newUser = await User.create({
        email: req.body.tenant.email,
        password: req.body.tenant.password,
        firstName: req.body.tenant.firstName,
        lastName: req.body.tenant.lastName,
        isLandlord: req.body.tenant.isLandlord,
        unhashedPasswordForTesting: req.body.tenant.unhashedPasswordForTesting,
        tenantLandlordId: req.user.id
      })
    }

    if(req.body.unitId > 0){
      let aUnit = await Unit.findOne({where:{id:unitId}})
      await aUnit.update({tenantId:newUser.id})
    }
    res.json(newUser)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async(req,res,next)=>{
  try{
    let oldUser = await User.findOne({where:{id:req.params.id}})
    let updatedUser = await oldUser.update({
      email:req.body.email,
      firstName:req.body.firstName,
      lastName: req.body.lastName,
    })

    res.status(200).send(updatedUser)
  } catch(error){
    next(error)
  }
})

router.delete('/:id', async (req, res, next)=>{
  try{
    await User.destroy({where:{id:req.params.id}})
    res.sendStatus(200)
  } catch(error){
    next(error)
  }
})


module.exports = router
