const {expect} = require('chai')
const sinon = require('sinon')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = request.agent(app)
const Unit = db.model('units')


describe.only('Unit API Routes', ()=>{
  describe('GET /api/units/', ()=>{
    let units = []
  })
})
