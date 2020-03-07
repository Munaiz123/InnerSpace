const db = require('../db')
const User = require('./user')
const Ticket = require('./ticket')
const Building = require('./building')
const Unit = require('./unit')


User.hasOne(Unit)
Unit.belongsTo(User)

Building.hasMany(Unit)
Unit.belongsTo(Building)

User.hasMany(Ticket)
Ticket.belongsTo(User)

User.belongsToMany(Building, {through:'Tenants'})
Building.belongsToMany(User, {through:'Tenants'})

User.hasOne(Building, {as:'landlord'}) //Landlord

module.exports = {
  User,
  Ticket,
  Building,
  Unit
}
