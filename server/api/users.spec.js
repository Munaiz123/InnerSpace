/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User API routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'
    const firstName = 'cody'
    const lastName = 'boi'


    beforeEach( () => {
      return User.create({
        email: codysEmail,
        firstName:firstName,
        lastName:lastName
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')


    })
  }) // end describe('/api/users')
}) // end describe('User routes')
