const router = require('express').Router()
const {Ticket, User, Building, Unit} = require('../db/models')

// GET - api/tickets
router.get('/', async (req, res, next) => {
  try {
    res.send(
      await Ticket.findAll({
        where: {ticketLandlordId: req.user.id},
        include: [
          {
            model: Building
          }
        ]
      })
    )
  } catch (error) {
    next(error)
  }
})

// GET - api/tickets/id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(
      await Ticket.findOne({
        where: {id: req.params.id},
        include: [
          {
            model: User,
            as:'ticketTenant'
          },
          {
            model: Unit
          },
          {
            model: Building
          }
        ]
      })
    )
  } catch (error) {
    next(error)
  }
})

// POST - api/tickets/submitTicket
// *** only tenants should be able to submit a ticket ***

router.post('/submitTicket', async(req,res,next)=>{
  try{
    let newTicket ={
      issue: req.user.issue,
      details: req.body.details,
      pending:req.body.pending,
      ticketTenantId:req.user.id,
      unitId:req.body.unitId,
      buildingId:req.body.buildingId

    }

    await Ticket.create(newTicket)
    res.json(newTicket)

  } catch(error){
    next(error)
  }
})

// DELETE - api/tickets/id
// *** tickets shouldn't be ever deleted ? ***

router.delete('/:id', async (req,res, next)=>{
  try{
    await Ticket.destroy({where:{id:req.params.id}})
    res.sendStatus(200)
  } catch(error){
    next(error)
  }
})



// PUT - api/tickets/id/updateStatus
// *** only landlords should be able to toggle status of a ticket ****

router.put('/:id/updateStatus', async (req, res, next) => {
  try {
    let oldTicket = await Ticket.findOne({
      where: {id: req.params.id},
      include: [
        {
          model: User,
          as: 'ticketTenant'
        },
        {
          model: Unit
        },
        {
          model: Building
        }
      ]
    })
    let updatedTicket = await oldTicket.update({
      pending: !oldTicket.pending
    })
    res.status(200).send(updatedTicket)
  } catch (error) {
    next(error)
  }
})




// PUT - api/tickets/id
// *** only tenants should be able to update a ticket ***

router.put('/:id', async (req, res, next) => {
  try {
    let oldTicket = await Ticket.findOne({where: {id: req.params.id}})

    let updatedTicket = await oldTicket.update({
      issue: req.user.issue,
      details: req.body.details,
    })

    res.status(200).send(updatedTicket)
  } catch (error) {
    next(error)
  }
})

module.exports = router
