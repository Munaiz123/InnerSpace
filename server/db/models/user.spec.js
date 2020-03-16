/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  let user1, user2, user3;

  before(() => db.sync({force: true}))
  beforeEach(()=>{

    user1 = {
      email:"user1@email.com",
      firstName: "user1",
      lastName:"doe",
      isLandlord:false,
      password:'123'
    }
    user2 = {
      email:"user2@email.com",
      firstName: "user2",
      lastName:"smith",
      isLandlord:true,
      password:'456'
    }
    user3 = {
      email:"user3@email.com",
      firstName: "user3",
      lastName:"yesterrow",
      isLandlord:false,
      password:'789'
    }
  })


  it('has fields:  firstName, lastName, isLandlord, password', async () => {

    const savedUser1 = await User.create(user1)
    const savedUser2 = await User.create(user2)
    const savedUser3 = await User.create(user3)

    expect(savedUser1.email).to.equal('user1@email.com')
    expect(savedUser1.firstName).to.equal('user1')
    expect(savedUser1.lastName).to.equal('doe')
    expect(savedUser1.isLandlord).to.equal(false)

    expect(savedUser2.email).to.equal('user2@email.com')
    expect(savedUser2.firstName).to.equal('user2')
    expect(savedUser2.lastName).to.equal('smith')
    expect(savedUser2.isLandlord).to.equal(true)


    expect(savedUser3.email).to.equal('user3@email.com')
    expect(savedUser3.firstName).to.equal('user3')
    expect(savedUser3.lastName).to.equal('yesterrow')
    expect(savedUser3.isLandlord).to.equal(false)
  })

  it('The email, firstName & lastName fields cannot be null or empty string', async () => {
    try {
      const savedUser1 = await User.create(user1)
      const savedUser2 = await User.create(user2)
      const savedUser3 = await User.create(user3)

      expect(savedUser1.email).to.not.equal(null)
      expect(savedUser1.email).to.not.equal('')
      expect(savedUser1.firstName).to.not.equal(null)
      expect(savedUser1.firstName).to.not.equal('')
      expect(savedUser1.lastName).to.not.equal(null)
      expect(savedUser1.lastName).to.not.equal('')

      expect(savedUser2.email).to.not.equal(null)
      expect(savedUser2.email).to.not.equal('')
      expect(savedUser2.firstName).to.not.equal(null)
      expect(savedUser2.firstName).to.not.equal('')
      expect(savedUser1.lastName).to.not.equal(null)
      expect(savedUser1.lastName).to.not.equal('')

      expect(savedUser3.email).to.not.equal(null)
      expect(savedUser3.email).to.not.equal('')
      expect(savedUser3.firstName).to.not.equal(null)
      expect(savedUser3.firstName).to.not.equal('')
      expect(savedUser1.lastName).to.not.equal(null)
      expect(savedUser1.lastName).to.not.equal('')
    } catch (error) {}
  })



  // describe('correctPassword', () => {
  //   let cody
  //   beforeEach(async () => {
  //     cody = await User.create({
  //       email: 'cody@puppybook.com',
  //       password: 'bones'
  //     })
  //   })

  //   it('returns true if the password is correct', () => {
  //     expect(cody.correctPassword('bones')).to.be.equal(true)
  //   })

  //   it('returns false if the password is incorrect', () => {
  //     expect(cody.correctPassword('bonez')).to.be.equal(false)
  //   })
  // }) // end describe('correctPassword')
}) // end describe('User model')
