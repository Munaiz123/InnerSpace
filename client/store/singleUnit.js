import axios from 'axios'

//ACTION TYPES

const GET_UNIT = 'GET_UNIT'
const GET_TENANT_UNIT = 'GET_TENANT_UNIT'

// ACTION CREATORS
export const getSingleUnit = unit =>({type: GET_UNIT, unit})
export const getTenantUnit = unit =>({type:GET_TENANT_UNIT,unit})



// THUNKS
export const fetchSingleUnit = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/units/${id}`)
    dispatch(getSingleUnit(data))
  } catch(error){
    console.log('ERROR FROM fetchSingleUnit THUNK', error)
  }
}

export const fetchTenantUnit = tenId => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/units/tenants/${tenId}`)
    dispatch(getTenantUnit(data))
  } catch(error){
    console.log('ERROR FROM fetechTenantUnit THUNK', error)

  }
}


const unit = {}

export default function (state = unit, action){
  switch(action.type){
    case GET_UNIT:
      return action.unit
    case GET_TENANT_UNIT:
      return action.unit
    default:
      return state
  }
}
