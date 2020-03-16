
const {expect} = require('chai')
const db = require('../index')
const Unit = db.model('unit')

describe('Unit Model', () => {
  let unit1, unit2, unit3;

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
      bedroomCount: 2,
      bathroomCount: 1,
      rent: 1200
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
    expect(unit2.unitNumber).to.equal('1A')
    expect(unit3.unitNumber).to.equal('2B')
  })

  it("The unitNumber is a STRING",()=>{
    expect(unit1.unitNumber).to.be.a('string')
    expect(unit2.unitNumber).to.be.a('string')
    expect(unit3.unitNumber).to.be.a('string')

  })

})
