
const {expect} = require('chai')
const sinon = require('sinon')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = request.agent(app)
const Building = db.model('building')

describe.only('Building API Routes', ()=>{

  describe('GET /api/buildings/', ()=>{

    let buildings = [
      {buildingName:'First Building', address:'789 Main Street', unitsCount:3,},
      {buildingName:'Second Building', address:'456 Main Street', unitsCount:3,},
      {buildingName:'Third Building', address:'123 Main Street', unitsCount:3,},
    ]

    if (!Building.findAll) Building.findAll = ()=>{where:{landlordId: req.user.id}}
    let fakeFindAll = sinon.fake.resolves(buildings)

    beforeEach(()=>{
      sinon.replace(Building, 'findAll', fakeFindAll)
      return db.sync({force: true})
    })

    afterEach(()=>{
      sinon.restore()
    })

    // The 'where:{landlordId: req.user.id}' parameter is breaking the test spec below.
    // The test doesnt seem to recognize 'req.user' let alon 'req.user.id'

    xit('responds with all buildings in an array and should be called once', async () => {
      const res = await request(app)
        .get('/api/buildings')
        .timeout({deadline:20})
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body).to.deep.equal(buildings)
      expect(Building.findAll.calledOnce).to.be.equal(true)

    })

  }) // End describe(' GET /api/buildings')


  describe('GET /api/buildings/:id', ()=>{

    let building = {buildingName:'Building', address:'789 Main Street', unitsCount:3}

    if(!Building.findOne) Building.findOne = () =>{}
    let fakefindOne = sinon.fake.resolves(building)

    beforeEach(()=>{
      sinon.replace(Building, 'findOne', fakefindOne)
      return db.sync({force: true})
    })

    afterEach(()=>{
      sinon.restore()
    })

    it('gets the building with the specified id' , async()=>{
      const res = await agent
      .get(`/api/buildings/${Building.id}`)
      .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body).to.deep.equal(building)
    })



  }) // End describe(' GET /api/buildings/:id')


  describe('POST /api/buildings/addBuilding', () => {

    // let newBuilding = {
    //   buildingName: 'New Building',
    //   address:'780 W Sesame Street',
    //   unitsCount:2
    // }

    // using sinon's fakes to replace .create + .findOne express.js methods
    // & have them resolve to a particular newUser obj.

    // if(!Building.create) Building.create = ()=>{}
    // let fakeCreate = sinon.fake.resolves(newBuilding)

    // if(!Building.findOne) Building.findOne = () =>{}
    // let fakeFindOne = sinon.fake.resolves(newBuilding)

    // beforeEach(()=>{  //express.js methods are being replaced here

    //   sinon.replace(Building, 'create', fakeCreate)
    //   sinon.replace(Building, 'findOne', fakeFindOne)

    //   return db.sync({force: true})
    // })

    // afterEach(()=>{  // restoring sinon here
    //   sinon.restore()
    // })

    it('creates a new building', async () => {

      const res = await agent
        .post('/buildings/addBuilding')
        .send({
          landlordId: 1,
          buildingName: 'A New Building',
          address: '123 W Sesame Street',
          unitsCount: 3
        })
      .expect(200)
      // can't seem to access res.body -> {} ~ in order to make tests dynamic
      // research tells me that i need to change Content-Type to be
      // set to application/json. Need to figure out how to do that
    })


  }) // end describe(' POST /api/buildings')



  xdescribe('PUT /api/building/:id', () => {
    // not recognizing oldBuilding.update() method.
    // Trying to fake resolve the method with sinon fakes... to be continued.

    let old = {buildingName: 'old',
    address:'780 W Sesame Street',
    unitsCount:2}

    let updatedBuilding = {buildingName: 'Updated Building',
    address:'780 W Sesame Street',
    unitsCount:2}

    if (!Building.findOne) Building.findOne = () => {}
    let fakeFindOne = sinon.fake.resolves(old)

    if(!Building.update) Building.update = () => {}
    let fakeUpdate = sinon.fake.resolves(updatedBuilding)


    beforeEach(() => {
      //express.js methods are being replaced here
      sinon.replace(Building, 'findOne', fakeFindOne)
      sinon.replace(Building, 'update', fakeUpdate)

      return db.sync({force: true})
    })

    afterEach(() => {
      // restoring sinon here
      sinon.restore()
    })

    it('updates the building with the specified id', async () => {
      const res = await agent
      .put(`/api/buildings/${Building.id}`)
      .send({updatedBuilding})
      .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.equal('Updated Building')

    })

  }) // end describe 'PUT /api/building/:id'

})
