'use strict'
/* global describe it */

const {expect,assert} = require('chai')
const seed = require('./seed')

const {User,Unit,Ticket, Building, Note} = require('../server/db/models')

describe('seed File', () => {
  let allUsers, allUnits, allTickets, allBuildings, allNotes;

  beforeEach( async ()=>{
    await seed()
    allUsers = await User.findAll()
    allUnits = await Unit.findAll({
      include: [{model: Building}, {model: User, as: 'tenant'}]
    })
    allTickets = await Ticket.findAll({include:[Unit]})
    allBuildings = await Building.findAll({include:[User]})
    allNotes = await Note.findAll({include:[Unit]})
  })

  describe('Users', ()=>{
    it('Should seed atleast 30 users',()=>{
      expect(allUsers).to.have.lengthOf.above(29)
    })
  })

  describe('Units', ()=>{
    it('Should seed atleast 30 units',()=>{
      expect(allUnits).to.have.lengthOf.above(29)
    })
    it('Each unit should should have a building associated with it', ()=>{
      const unitsWithoutBuilding = allUnits
      .filter( unit => !unit.buildingId)
      expect(unitsWithoutBuilding).to.have.lengthOf(0)
    })
    it('Each unit should should have a tenant associated with it', ()=>{
      const unitsWithoutTenant = allUnits
      .filter( unit => !unit.tenantId)
      expect(unitsWithoutTenant).to.have.lengthOf(0)
    })
  })

  describe('Tickets', ()=>{

    it('Should seed atleast 45 tickets',()=>{
      expect(allTickets).to.have.lengthOf.above(44)
    })

    it('Each ticket should should have a unit associated with it',()=>{
      const ticketsWithoutUnit = allTickets
      .filter( ticket => !ticket.unitId)
      expect(ticketsWithoutUnit).to.have.lengthOf(0)
    })
  })

  describe('Buildings', ()=>{

    it('Should seed atleast 5 buildings',()=>{
      expect(allBuildings).to.have.lengthOf.above(5)
    })

    it('All buildings should have a landlord user associated with it.', () => {
      const buildingWithoutLandlord = allBuildings
        .filter(building => !building.landlordId)
      expect(buildingWithoutLandlord).to.have.lengthOf(0)
    })

  })

  describe('Notes', () => {

    it('Should seed atleast 20 notes', () => {
      expect(allNotes).to.have.lengthOf.above(20)
    })

    it('All notes should have a unit associated with it', () => {
      let notesWithoutUnits = allNotes.filter(note => !note.unitId)
      expect(notesWithoutUnits).to.have.lengthOf(0)
    })
  })

})
