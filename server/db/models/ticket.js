const Sequelize = require('sequelize')
const db = require('../db')

const Ticket = db.define('ticket', {
  issue: {
    type: Sequelize.ENUM('HEAT/AC', 'PLUMBING', 'ELECTRICAL', 'OTHER'),
    allowNull: false
  },
  details: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  pending:{
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Ticket
