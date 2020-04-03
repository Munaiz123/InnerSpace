import axios from 'axios'

// ACTION TYPES

const GET_BUILDINGS = 'GET_BUILDINGS'
const GET_BUILDING = 'GET_BUILDING'
const ADD_BUILDING = 'ADD_BUILDING'
const UPDATE_BUILDING = 'UPDATE_BUILDING'
const DELETE_BUILDING = 'DELETE_BUILDING'


// ACTION CREATORS

export const getBuildings = buildings =>({type: GET_BUILDINGS, buildings})

export const getSingleBuilding = singleBuilding =>({type: GET_BUILDING, singleBuilding})

export const addBuilding = building => ({type: ADD_BUILDING, building})

export const updateBuilding = building =>({type: UPDATE_BUILDING, building})

export const deleteBuilding = buidldingId =>({ type: DELETE_BUILDING, buidldingId})

//THUNKS

export const fetchBuildings = () => async dispatch =>{
  try{
    let res = await axios.get('/api/buildings')
    dispatch(getBuildings(res.data))
  }catch(error){
    console.log('ERROR FROM fetchBuildings THUNK ', error)
  }
}

//INITIAL STATE
const buildings =  []

// const initialState = {
//   buildings: [],
//   filter:null
// }

//REDUCER

export default function(state = buildings, action){
  switch(action.type){
    case GET_BUILDINGS:
      return action.buildings
    default:
      return state
  }
}
