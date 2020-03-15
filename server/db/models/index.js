const db = require('../db')
const User = require('./user')
const Ticket = require('./ticket')
const Building = require('./building')
const Unit = require('./unit')
const Note = require('./notes')


User.hasOne(Building, {as:'landlord'}) //Landlord
Building.belongsTo(User)

User.hasOne(Unit, {as:'tenant'})
Unit.belongsTo(User)

Building.hasMany(Unit)
Unit.belongsTo(Building)

Unit.hasMany(Ticket)


// User.belongsTo(Building, {through:'Tenants'})
// Building.belongsToMany(User, {through:'Tenants'})

Unit.hasMany(Note) // Only landlords should be writing notes


module.exports = {
  User,
  Ticket,
  Building,
  Unit,
  Note
}
