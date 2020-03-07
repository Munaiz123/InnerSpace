const Sequelize = require('sequelize')
const db = require('../db')

const Ticket = db.define('ticket', {
  issue: {
    type: Sequelize.ENUM('HEAT/AC', 'PLUMBING', 'ELECTRICAL', 'OTHER'),
    allowNull: false
  },
  comments: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Ticket
