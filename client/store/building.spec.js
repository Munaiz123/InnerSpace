import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

import {getBuildings, fetchBuildings} from './building'


const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)


describe('Buildings Store', ()=>{

  let fakeStore;
  let mockAxios;

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
    it('eventually dispatches the GET_BUILDINGS action type', ()=>{
      let fakeBuilding1= {buildingName: 'Fake Residence', address:'sike', unitCount:0}
      let fakeBuilding2= {buildingName: 'Fake Place', address:'N/A', unitCount:0}
      let fakeBuildings = [fakeBuilding1, fakeBuilding2]

      mockAxios.onGet('/api/buildings').replyOnce(200, fakeBuildings)
      let actions = fakeStore.getActions()
      expect(actions[0].type).to.be.equal('GET_BUILDINGS')
      expect(actions[0].buildings).to.be.deep.equal(fakeBuildings)

    })


  }) // END 'getBuildings Thunk'

}) // END describe 'Buildings Store'
