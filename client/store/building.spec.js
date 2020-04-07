import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

import {getBuildings, fetchBuildings, fetchSingleBuilding} from './building'
import {reducer} from './index'
import {createStore} from 'redux'


const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)


describe('Buildings Store', ()=>{

  let fakeStore;
  let mockAxios;

  let buildings = [
    {buildingName:'Cold building', address:'123 W Winter Street', unitCount:3},
    {buildingName:'Hot building', address:'123 W Summer Street', unitCount:3}
  ]

  const initialState = {
    buildings: []
  }

  beforeEach(()=>{
    mockAxios = new MockAdapter(axios)
    fakeStore = mockStore(initialState)
  })

  afterEach(()=>{
    mockAxios.restore()
    fakeStore.clearActions()
  })

  describe('getBuildings Thunk',()=>{
    it('getBuildings action creator', ()=>{

      expect(getBuildings(buildings)).to.deep.equal({type: "GET_BUILDINGS", buildings})
    })

    it('eventually dispatches the GET_BUILDINGS action type', async ()=>{
      let fakeBuilding1= {buildingName: 'Fake Residence', address:'sike', unitCount:0}
      let fakeBuilding2= {buildingName: 'Fake Place', address:'N/A', unitCount:0}
      let fakeBuildings = [fakeBuilding1, fakeBuilding2]

      mockAxios.onGet('/api/buildings').replyOnce(200, fakeBuildings)
      await fakeStore.dispatch(fetchBuildings())
      let actions = fakeStore.getActions()
      expect(actions[0].type).to.be.equal('GET_BUILDINGS')
      expect(actions[0].buildings).to.be.deep.equal(fakeBuildings)
    })

    // Need to figure out a way for mockAxios.onGet() to work with a changing variable
    // tried using RegExp
    xit('eventually dispatches the GET_BUILDING action type', async ()=>{
      let fakeSingleBuilding = {buildingName:'Fake Single building', address:'123 W Fake Avenue ', unitCount:99}

      let buildAPI = '/api/buildings'

      let path = new RegExp(`${buildAPI}\/id\/*`)

      mockAxios.onGet(path).replyOnce(200, fakeSingleBuilding)
      await fakeStore.dispatch(fetchSingleBuilding())
      let actions = fakeStore.getActions()
      expect(actions[0].type).to.be.equal('GET_BUILDING')
      expect(actions[0].buildings).to.be.deep.equal(fakeSingleBuilding)
    })



  }) // END 'getBuildings Thunk'

  describe('Building Reducer', ()=>{
    let store;

    beforeEach(()=>{
      store = createStore(reducer)
    })

    it('Returns the initial state by default', () => {
      expect(store.getState().building).to.be.an("array")
    })


    it('reduces on GET_BUILDINGS action', () => {
      let action = { type: 'GET_BUILDINGS', buildings }

      let prevState = store.getState()
      store.dispatch(action)
      let newState = store.getState()

      expect(newState.building).to.be.deep.equal(buildings)
      expect(newState.building).to.not.be.equal(prevState.building)
    })


    it('reduces on GET_BUILDING action', () => {
      let singleBuilding = {buildingName:'Single Building', address:'456 W Summer Street', unitCount:3}
      let action = { type: 'GET_BUILDING', singleBuilding }

      let prevState = store.getState()
      store.dispatch(action)
      let newState = store.getState()

      expect(newState.building).to.be.deep.equal(singleBuilding)
      expect(newState.building).to.not.be.equal(prevState.building)
    })

  }) // END describe 'Building Reducer'

}) // END describe 'Buildings Store'
