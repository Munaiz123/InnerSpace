const {expect} = require('chai')
const db = require('../index')
const Unit = db.model('unit')

describe('Unit Model', () => {
  let unit1, unit2, unit3

  before(() => db.sync({force: true}))
  beforeEach(async () => {
    unit1 = await Unit.create({
      unitNumber: '3D',
      bedroomCount: 2,
      bathroomCount: 1,
      rent: 1200
    })

    unit2 = await Unit.create({
      unitNumber: '1A',
      bedroomCount: 3,
      bathroomCount: 2,
      rent: 1630
    })

    unit3 = await Unit.create({
      unitNumber: '2B',
      bedroomCount: 2,
      bathroomCount: 1,
      rent: 1200
    })
  })

  it('has fields: unitNumber, bedroomCount, bathroomCount & rent', () => {
    expect(unit1.unitNumber).to.equal('3D')
    expect(unit2.bedroomCount).to.equal(3)
    expect(unit3.bathroomCount).to.equal(1)
    expect(unit1.rent).to.equal(1200)
  })

  it('The unitNumber is a STRING', () => {
    expect(unit1.unitNumber).to.be.a('string')
    expect(unit2.unitNumber).to.be.a('string')
    expect(unit3.unitNumber).to.be.a('string')
  })

  it('The fields bedroomCount, bathroomCount & rent should all be INTEGERS', () => {
    expect(unit1.bedroomCount).to.be.a('number')
    expect(unit1.bathroomCount).to.be.a('number')
    expect(unit1.rent).to.be.a('number')

    expect(unit2.bedroomCount).to.be.a('number')
    expect(unit2.bathroomCount).to.be.a('number')
    expect(unit2.rent).to.be.a('number')

    expect(unit3.bedroomCount).to.be.a('number')
    expect(unit3.bathroomCount).to.be.a('number')
    expect(unit3.rent).to.be.a('number')
  })
})
