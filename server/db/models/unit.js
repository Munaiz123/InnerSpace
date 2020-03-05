const Sequelize = require('sequelize')
const db = require('../db')

const Unit = db.define('unit', {
  unitNumber: {
    type: Sequelize.STRING
  },
  bedroomCount: {
    type: Sequelize.INTEGER
  },
  bathroomCount: {
    type: Sequelize.INTEGER
  }
})

module.exports = Unit
