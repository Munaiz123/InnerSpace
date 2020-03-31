import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

import {getBuildings, fetchBuildings} from './building'


const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const initialState = {
  buildings: []
}

describe('Buildings Store', ()=>{

  let fakeStore;

  const buildings = [
    {buildingName:'firstBuilding', address: '321 This Street', unitsCount: 6},
    {buildingName:'secondBuilding', address: '123 That Street', unitsCount: 4}
  ]

  beforeEach(()=>{
    fakeStore = mockStore(initialState)
  })

 describe(' get/fetch buildings', ()=>{
   it('getBuildings action creator', ()=>{
     expect(getBuildings(buildings).to.deep.equal({
       type:'GET_BUILDINGS',
       buldings
     }))

   })

   it('fetchBuildings thunk', async () => {

    await fakeStore.dispatch(fetchBuildings())
    const actions = fakeStore.getActions()
    expect(actions[0].type).to.equal('GET_BUILDINGS')
    expect(actions[0].buildings).to.deep.equal(buildings)
  })


 }) //END describe 'get/fetch buildings'

}) // END describe 'Buildings Store'
