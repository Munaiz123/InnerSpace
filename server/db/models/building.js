const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('building', {
  buildingName: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.TEXT
  },
  unitsCount: {
    type: Sequelize.INTEGER
  }
})

module.exports = Building
