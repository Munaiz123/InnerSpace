import axios from 'axios'

const GET_BUILDING = 'GET_BUILDING'

export const getSingleBuilding = singleBuilding =>({type: GET_BUILDING, singleBuilding})

export const fetchSingleBuilding = id => async dispatch =>{
  try{
    let res = await axios.get(`/api/buildings/${id}`)
    console.log("res.data from THUNK", res.data)
    dispatch(getSingleBuilding(res.data))

  } catch(error){
    console.log('ERROR FROM fetchSingleBuilding THUNK ', error)
  }
}

const building = {}

export default function ( state = building, action){
  switch(action.type){
    case GET_BUILDING:
      return action.singleBuilding
    default:
      return state
  }
}
