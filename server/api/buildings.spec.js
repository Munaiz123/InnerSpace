
const {expect} = require('chai')
const sinon = require('sinon')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = request.agent(app)
const Building = db.model('building')

describe('Building API Routes', ()=>{



  describe('GET /api/buildings/', ()=>{

    let buildings = [
      {buildingName:'First Building', address:'789 Main Street', unitsCount:3},
      {buildingName:'Second Building', address:'456 Main Street', unitsCount:3},
      {buildingName:'Third Building', address:'123 Main Street', unitsCount:3},
    ]

    if (!Building.findAll) Building.findAll = ()=>{}
    let fakeFindAll = sinon.fake.resolves(buildings)

    beforeEach(()=>{
      sinon.replace(Building, 'findAll', fakeFindAll)
      return db.sync({force: true})
    })

    afterEach(()=>{
      sinon.restore()
    })

    it('responds with all buildings in an array and should be called once', async () => {
      const res = await request(app)
        .get('/api/buildings')
        .timeout({deadline:20})
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body).to.deep.equal(buildings)
      expect(Building.findAll.calledOnce).to.be.equal(true)

    })

  }) // End describe(' GET /api/buildings')


  describe('POST /api/buildings', () => {

    let newBuilding = {
      buildingName: 'New Building',
      address:'780 W Sesame Street',
      unitsCount:2
    }

    // using sinon's fakes to replace .create + .findOne express.js methods
    // & have them resolve to a particular newUser obj.

    if(!Building.create) Building.create = ()=>{}
    let fakeCreate = sinon.fake.resolves(newBuilding)

    if(!Building.findOne) Building.findOne = () =>{}
    let fakeFindOne = sinon.fake.resolves(newBuilding)

    beforeEach(()=>{  //express.js methods are being replaced here

      sinon.replace(Building, 'create', fakeCreate)
      sinon.replace(Building, 'findOne', fakeFindOne)

      return db.sync({force: true})
    })

    afterEach(()=>{  // restoring sinon here
      sinon.restore()
    })

    it('creates new Building', async () => {
      const res = await agent
        .post('/api/buildings/addBuilding')
        .send(newBuilding)
        .expect(201)

      expect(res.body).to.be.an('object')
      expect(res.body).to.deep.equal(newBuilding)
      expect(Building.create.calledOnce).to.be.equal(true)

      let testBuilding = await Building.findOne({
        where: {address: '780 W Sesame Street'}
      })

      expect(testBuilding).to.be.an('object')
      expect(testBuilding.unitsCount).to.be.equal(2)
    })



  }) // end describe(' POST /api/buildings')


})
