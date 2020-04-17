import axios from "axios"

// ACTION TYPES
const GET_UNITS = 'GET_UNITS'

//ACTION CREATORS

export const getUnits = units =>({type: GET_UNITS, units})


//THUNKS

export const fetchUnits = () => async dispatch =>{
  try{
    let {data} = await axios.get('api/units')
    dispatch(getUnits(data))

  } catch(error){
    console.log('ERROR FORM fetchUnits THUNK', error)
  }
}

// INITIAL STATE
const units = []

// REDUCER

export default function (state = units, action){
  switch(action.type){
    case GET_UNITS:
      return action.units
    default:
      return state
  }
}
