const sequelize = require('sequelize')
const db = require('../db')

// This model will hold all the notes the landlord made regarding a particular unit

const Note = db.define('note', {
  header: {
    type: sequelize.TEXT,
    allowNull: false
  },
  body: {
    type: sequelize.TEXT,
    allowNull: false
  },
  date: {
    type: sequelize.DATE,
    allowNull: false
  }
})

module.exports = Note
