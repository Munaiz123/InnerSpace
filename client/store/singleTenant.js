import axios from 'axios'

// ACTION TYPES

const GET_TENANT = 'GET_TENANT'
const UPDATE_TENANT = 'UPDATE_TENANT'


//ACTION CREATORS

export const getSingleTenant = tenant =>({type: GET_TENANT, tenant})

export const updateTenant = tenant =>({type:UPDATE_TENANT, tenant})


//THUNKS

export const fetchSingleTenant = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/tenants/${id}`)
    dispatch(getSingleTenant(data))

  } catch (error){
    console.log('ERROR FROM fetchSingleTenant THUNK', error)


  }
}

export const updateATenant = (tenant,id) => async dispatch =>{
  try{
    let {data} = await axios.put(`/api/tenants/${id}`, tenant)
    dispatch(updateTenant(data))

  } catch(error){
    console.log('ERROR FROM updateATenant THUNK', error)
  }
}



const tenant = {}

export default function (state = tenant, action){
  switch(action.type){
    case GET_TENANT:
      return action.tenant
    case UPDATE_TENANT:
      return action.tenant
    default:
      return state
  }
}
