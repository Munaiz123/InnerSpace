const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// /api/users/
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


// /api/users/id
router.get('/:id', async (req, res, next)=>{
  try{
    let user = await User.findOne({where:{id: req.params.id}})
    console.log(req.params)
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
