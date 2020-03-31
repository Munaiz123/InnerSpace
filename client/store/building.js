import axios from 'axios'

// ACTION TYPES

const GET_BUILDINGS = 'GET_BUILDINGS'



// ACTION CREATORS

export const getBuildings = buildings =>({type: GET_BUILDINGS, buildings})

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
