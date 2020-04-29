const router = require('express').Router()
const {User} = require('../db/models')

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


// /api/users/addUser
router.post('/addUser', async( req, res, next)=>{
  try{
    let newUser = await User.create({
      email:req.body.email,
      password:req.body.password,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      isLandlord:req.body.isLandlord,
    })
    res.status(201).send(newUser)
  } catch(error){
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
