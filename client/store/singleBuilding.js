import axios from 'axios'

const GET_BUILDING = 'GET_BUILDING'

export const getSingleBuilding = singleBuilding =>({type: GET_BUILDING, singleBuilding})

export const fetchSingleBuilding = id => async dispatch =>{
  try{
    let res = await axios.get(`/api/buildings/${id}`)
    console.log("res.data from thhunk", res.data)
    dispatch(getSingleBuilding(res.data))

  } catch(error){
    console.log('ERROR FROM fetchSingleBuilding THUNK ', error)
  }
}

const singleBuilding = {}

export default function ( state = singleBuilding, action){
  switch(action.type){
    case GET_BUILDING:
      console.log('FROM REDUCER', action.singleBuilding)
      return action.singleBuilding
    default:
      return state
  }
}
