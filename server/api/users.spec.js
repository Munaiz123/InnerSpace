/* global describe beforeEach it */

const {expect} = require('chai')
const sinon = require('sinon')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = request.agent(app)
const User = db.model('user')


describe('User API routes', () => {

  describe('GET /api/users/', () => {
    let users = [
      {id:1, email: 'user1@email.com',firstName:'User', lastName:'One'},
      {id:2,email: 'user2@email.com',firstName:'User', lastName:'Two'},
      {id:3,email: 'user3@email.com',firstName:'User', lastName:'Three'}
    ]

    if(!User.findAll) User.findAll = ()=>{}
    let fakeFindAll = sinon.fake.resolves(users)

    beforeEach(() => {
      sinon.replace(User, 'findAll', fakeFindAll)
      return db.sync({force: true})
    })
    afterEach(()=>{
      sinon.restore()
    })

    it('responds with all users in an array and should be called once', async () => {
      const res = await request(app)
        .get('/api/users')
        .timeout({deadline:20})
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body).to.deep.equal(users)
      expect(User.findAll.calledOnce).to.be.equal(true)

    })

  }) // end describe(' GET /api/users')


  describe('POST /api/users', () => {
    let newUser = {
      email:'user1@email.com',
      firstName:'User',
      lastName:'One',
      isLandlord: true
    }
    if(!User.create) User.create = ()=>{}
    let fakeCreate = sinon.fake.resolves(newUser)

    beforeEach(()=>{
      sinon.replace(User, 'create', fakeCreate)
      return db.sync({force: true})

    })
    afterEach(()=>{
      sinon.restore()
    })

    it('creates new user', async ()=>{

      const res = await agent
      .post('/api/users/addUser')
      .expect(201)
    })


  }) // end describe(' POST /api/users')


}) // end describe('User routes')
