const db = require('../db')
const User = require('./user')
const Ticket = require('./ticket')
const Building = require('./building')
const Unit = require('./unit')
const Note = require('./note')




User.hasMany(User, {as:'tenantLandlord', foreignKey:'tenantLandlordId'})

User.hasOne(Building, {as:'landlord', foreignKey:'landlordId'}) //Landlord
Building.belongsTo(User)

User.hasOne(Unit, {as:'tenant'})
User.hasMany(Unit, {as:'unitLandlord', foreignKey:'unitLandlordId'})
Unit.belongsTo(User, {as:'tenant'})

Building.hasMany(Unit)
Unit.belongsTo(Building)

Unit.hasMany(Ticket)
Ticket.belongsTo(Unit)


// User.belongsTo(Building, {through:'Tenants'})
// Building.belongsToMany(User, {through:'Tenants'})

Unit.hasMany(Note) // Only landlords should be writing notes
Note.belongsTo(Unit)


module.exports = {
  User,
  Ticket,
  Building,
  Unit,
  Note
}
