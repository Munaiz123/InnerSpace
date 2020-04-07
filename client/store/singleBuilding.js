import axios from 'axios'

const GET_BUILDING = 'GET_BUILDING'

export const getSingleBuilding = building => ({type: GET_BUILDING, building})

export const fetchSingleBuilding = id => async dispatch =>{
  try {
  let {data} = await axios.get(`/api/buildings/${id}`)
  console.log("res.data from thhunk", data)
  dispatch(getSingleBuilding(data))

  } catch(error){
    console.log(error)
  }

}

const building = {}

export default function ( state = building, action){
  switch(action.type){
    case GET_BUILDING:
      console.log('working here ????', action.building)
      return action.building
    default:
      return state
  }
}
