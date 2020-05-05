const db = require('../db')
const User = require('./user')
const Ticket = require('./ticket')
const Building = require('./building')
const Unit = require('./unit')
const Note = require('./note')



// may need to add unitId's to USER table
// may need to add buildingId to USER table as well

User.hasMany(User, {as:'tenantLandlord', foreignKey:'tenantLandlordId'})

User.hasOne(Building, {as:'landlord', foreignKey:'landlordId'}) //Landlord


//  UNITS-----------------------------------------------
User.hasOne(Unit, {as:'tenant'})
User.hasMany(Unit, {as:'unitLandlord', foreignKey:'unitLandlordId'})
Unit.belongsTo(User, {as:'tenant'})

Building.hasMany(Unit)
Unit.belongsTo(Building)
// -----------------------------------------------------



//  TICKETS ******************************************
Ticket.belongsTo(User)
User.hasMany(Ticket, {as:'ticketLandlord', foreignKey:'ticketLanlordId'})

Unit.hasMany(Ticket)
Ticket.belongsTo(Unit)

Building.hasMany(Ticket)
Ticket.belongsTo(Building)
// *************************************************

Unit.hasMany(Note) // Only landlords should be writing notes
Note.belongsTo(Unit)

// --> need to think about how a landlord can add a note/leave a review for a tenant
// notes(=unit) can be different than reviews  (= tenant)


module.exports = {
  User,
  Ticket,
  Building,
  Unit,
  Note
}
