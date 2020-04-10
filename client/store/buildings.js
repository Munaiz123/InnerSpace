import axios from 'axios'

// ACTION TYPES

const GET_BUILDINGS = 'GET_BUILDINGS'
const ADD_BUILDING = 'ADD_BUILDING'
const UPDATE_BUILDING = 'UPDATE_BUILDING'
const DELETE_BUILDING = 'DELETE_BUILDING'


// ACTION CREATORS

export const getBuildings = buildings =>({type: GET_BUILDINGS, buildings})

export const addBuilding = building => ({type: ADD_BUILDING, building})

export const updateBuildingInfo = building =>({type: UPDATE_BUILDING, building})

export const deleteBuildingId = buidldingId =>({ type: DELETE_BUILDING, buidldingId})

//THUNKS

export const fetchBuildings = () => async dispatch =>{
  try{
    let res = await axios.get('/api/buildings')
    dispatch(getBuildings(res.data))
  }catch(error){
    console.log('ERROR FROM fetchBuildings THUNK ', error)
  }
}

export const addBuild = building => async dispatch =>{
  try{
    console.log("BUILDINGS addBUilding thunk", building)
    let {data} = await axios.post(`/api/buildings/addBuilding`, building)
    dispatch(addBuilding(building))

  } catch(error){
    console.log('ERROR FROM addBuild THUNK ', error)
  }
}

export const updateBuilding = (building, id) => async dispatch =>{
  try{
    let {data} = await axios.put(`/api/buildings/${id}`, {building})
    dispatch(updateBuildingInfo(data))

  } catch(error){
    console.log('ERROR FROM updateBuilding THUNK ', error)
  }
}

export const deleteBuilding = id => async dispatch =>{
  try{
    await axios.delete(`/api/buildings/${id}`)
    dispatch(deleteBuildingId(id))

  } catch(error){
    console.log('ERROR FROM deleteBuilding THUNK ', error)


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
  switch (action.type){
    case GET_BUILDINGS:
      return action.buildings
    case ADD_BUILDING:
      console.log("action.building", action.building)
      return [...state, action.building]
    case UPDATE_BUILDING:
      return [...state].map(build =>{
        if(build.id === action.building.id) return action.building
      })
    case DELETE_BUILDING:
      return [...state].filter( build => action.buidldingId !== build.id)
    default:
      return state
  }
}
