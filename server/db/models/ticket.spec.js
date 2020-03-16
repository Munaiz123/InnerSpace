const {expect} = require('chai')
const db = require('../index')
const Ticket = db.model('ticket')

describe('Ticket Model', () => {
  let ticket1, ticket2

  before(async () => {
    ticket1 = await Ticket.create({
      issue: 'OTHER',
      details: 'here is an issue that needs to be fixed'
    })

    ticket2 = await Ticket.create({
      issue: 'ELECTRICAL',
      details: 'here is an issue that needs to be fixed'
    })
  })

  it('Issue & details cannot be null or empty string', () => {
    expect(ticket1.issue).to.be.a('string')
    expect(ticket1.issue).to.not.equal(null)
    expect(ticket1.issue).to.not.equal('')

    expect(ticket1.details).to.be.a('string')
    expect(ticket1.details).to.not.equal(null)
    expect(ticket1.details).to.not.equal('')

    expect(ticket2.issue).to.be.a('string')
    expect(ticket2.issue).to.not.equal(null)
    expect(ticket2.issue).to.not.equal('')

    expect(ticket2.details).to.be.a('string')
    expect(ticket2.details).to.not.equal(null)
    expect(ticket2.details).to.not.equal('')
  })
})
