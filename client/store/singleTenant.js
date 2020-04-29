import axios from 'axios'

const GET_TENANT = 'GET_TENANT'

export const getSingleTenant = tenant =>({type: GET_TENANT, tenant})

export const fetchSingleTenant = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/tenants/${id}`)
    dispatch(getSingleTenant(data))

  } catch (error){
    console.log('ERROR FROM fetchSingleTenant THUNK', error)


  }
}

const tenant = {}

export default function (state = tenant, action){
  switch(action.type){
    case GET_TENANT:
      return action.tenant
    default:
      return state
  }
}
