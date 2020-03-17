/* global describe beforeEach it */

const {expect} = require('chai')
const sinon = require('sinon')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = request.agent(app)
const User = db.model('user')


describe('User API routes', () => {
  let users = [
    {id:1, email: 'user1@email.com',firstName:'User', lastName:'One'},
    {id:2,email: 'user2@email.com',firstName:'User', lastName:'Two'},
    {id:3,email: 'user3@email.com',firstName:'User', lastName:'Three'}
  ]

  describe('GET /api/users/', () => {

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

    // it('should be able to add a user to the data base', async ()=>{
    //   const res = await request(app)
    //     .post('/api/users/')
    //     .timeout({deadline:20})
    //     .expect(200)

    // })
  }) // end describe(' GET /api/users')


  describe('POST /api/users', () => {

    it('creates a new user and sends back the newly created user', async ()=>{
      const res = await agent
        .post('/api/users')
        .send({
          email: 'user4@email.com',
          firstName: 'User',
          lastName: 'Four'
        })
        .expect(201)

      // expect(res.body).to.be.an('object')
      // expect(res.body.lastName).to.equal('Four')

      // const newUser = await User.findOne({
      //   where:{
      //     lastName:'Four'
      //   }
      // })

      // expect(newUser).to.be.an('object')
      // expect(newUser.lastName).to.equal('Four')

    })

  }) // end describe(' POST /api/users')



}) // end describe('User routes')
