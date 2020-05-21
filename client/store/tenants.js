import axios from 'axios'

// ACTION TYPES

const GET_TENANTS = 'GET_TENANTS'
const ADD_TENANT = 'ADD_TENANT'


// ACTION CREATORS

export const getTenants = tenants =>({ type: GET_TENANTS, tenants})
export const addTenant = tenant =>({type: ADD_TENANT, tenant})


//THUNKS

export const fetchTenants = () => async dispatch =>{
  try{
    let {data} = await axios.get('/api/tenants')
    dispatch(getTenants(data))

  } catch (error){
    console.log('ERROR FROM fetchTenants THUNK ', error)

  }
}

// --> AllTenants.js + SingleUnitView - my need to add tost to show in the front end that the tenant was assigned to the Unit.
export const addATenant = (tenant, unitId) => async dispatch => {
  try {
    let {data} = await axios.post('/api/tenants/addTenant', tenant)

    if (unitId !== 0) {
      let id = data.id
      await axios.put(`/api/units/assignTenant/${unitId}`, {id})
    }
    dispatch(addTenant(tenant))

  } catch (error) {
    console.log('ERROR FROM addATenant THUNK', error)
  }
}

// INTIAL STATE

const tenants = []


// REDUCER

export default (state = tenants, action) => {
  switch(action.type){
    case GET_TENANTS:
      return action.tenants
    case ADD_TENANT:
      return [...state, action.tenant]
    default:
      return state
  }
}

