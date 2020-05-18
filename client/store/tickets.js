import axios from 'axios'

/* *************** ACTION TYPES **************** */

const GET_TICKETS = 'GET_TICKETS'
const GET_TENANT_TICKETS = 'GET_TENANT_TICKETS'
const GET_UNIT_TICKETS = 'GET_UNIT_TICKETS'

/* *************** ACTION CREATORS **************** */

export const getTickets = tickets =>({type: GET_TICKETS, tickets})
export const getTenantTickets = tickets =>({type:GET_TENANT_TICKETS,tickets})
export const getUnitTickets = tickets =>({type:GET_UNIT_TICKETS, tickets})


/* **************** THUNKS **************** */

// --> AllTickets.js ~ fetches all of the tickets that pertains to landlord (ticketLandlordId)
export const fetchTickets = () => async dispatch =>{
  try{
    let {data} = await axios.get('/api/tickets')
    dispatch(getTickets(data))

  } catch(error){
    console.log('ERROR FROM fetchTickets THUNK', error)
  }
}

// --> SingleTenantView.js ~ fetches all tickets that a tenant submits (ticketTenantId)
export const fetchTenantTickets = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/tickets/tenant/${id}`)
    dispatch(getTenantTickets(data))
  } catch(error){
    console.log('ERROR FROM fetchTenantTickets THUNK', error)
  }
}

// --> SingleUnitView.js ~ fetches all tickets related to a unit (unitId)
export const fetchUnitTickets = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/tickets/unit/${id}`)
    dispatch(getUnitTickets(data))
  } catch(error){
    console.log('ERROR FROM fetchTenantTickets THUNK', error)
  }
}




const tickets = []

export default function(state = tickets, action){
  switch(action.type){
    case GET_TICKETS:
      return action.tickets
    case GET_TENANT_TICKETS:
      return action.tickets
    case GET_UNIT_TICKETS:
      return action.tickets
    default:
      return state
  }
}
