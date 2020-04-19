import axios from 'axios'

const GET_UNIT = 'GET_UNIT'

export const getSingleUnit = unit =>({type: GET_UNIT, unit})

export const fetchSingleUnit = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/units/${id}`)
    dispatch(getSingleUnit(data))
  } catch(error){
    console.log('ERROR FROM fetchSingleUnit THUNK', error)
  }
}

const unit = {}

export default function (state = unit, action){
  switch(action.type){
    case GET_UNIT:
      return action.unit
    default:
      return state
  }
}
