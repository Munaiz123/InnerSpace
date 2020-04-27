import axios from 'axios'

// ACTION TYPES

const GET_TENANTS = 'GET_TENANTS'

// ACTION CREATORS

export const getTenants = tenants =>({ type: GET_TENANTS, tenants})

//THUNKS

export const fetchTenants = () => async dispatch =>{
  try{
    let {data} = await axios.get('api/users')
    dispatch(getTenants(data))

  } catch (error){
    console.log('ERROR FROM fetchTenants THUNK ', error)

  }
}

// INTIAL STATE

const tenants = []


// REDUCER

export default (state = tenants, action) => {
  switch(action.type){
    case GET_TENANTS:
      return action.tenants
    default:
      return state
  }
}

