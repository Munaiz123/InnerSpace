const db = require('../db')
const User = require('./user')
const Ticket = require('./ticket')
const Building = require('./building')
const Unit = require('./unit')


User.hasOne(Unit)

// Ticket.belongsTo(User)

// Building.hasMany(Unit, {as:'unitId'})
// Unit.belongsTo(Building)

// Unit.hasOne(User)


const TicketsSubmited = db.model('TicketsSubmited')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Ticket,
  Building,
  Unit
}
