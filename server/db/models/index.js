const db = require('../db')
const User = require('./user')
const Ticket = require('./ticket')
const Building = require('./building')
const Unit = require('./unit')
const Note = require('./notes')


User.hasOne(Building, {as:'landlord'}) //Landlord

User.hasOne(Unit, {as:'tenant'})
// Unit.belongsTo(User)

Building.hasMany(Unit)
Unit.belongsTo(Building)

User.hasMany(Ticket)
Unit.hasMany(Ticket,{as:'tenant'})


// User.belongsTo(Building, {through:'Tenants'})
// Building.belongsToMany(User, {through:'Tenants'})

Unit.hasMany(Note)
// Note.belongsTo(Unit)


module.exports = {
  User,
  Ticket,
  Building,
  Unit,
  Note
}
