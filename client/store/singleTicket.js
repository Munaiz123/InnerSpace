import axios from 'axios'

// ACTION TYPES

const GET_TICKET = 'GET_TICKET'
const TOGGLE_TICKET_STATUS = 'TOGGLE_TICKET_STATUS'

// ACTION CREATORS

export const getSingleTicket = ticket =>({type:GET_TICKET, ticket})
export const toggleTicketStatus = ticket =>({type:TOGGLE_TICKET_STATUS,ticket})


//THUNKS

export const fetchSingleTicket = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/tickets/${id}`)
    dispatch(getSingleTicket(data))


  } catch(error){
    console.log('ERROR FROM fetchSingleTicket THUNK', error)
  }
}

export const toggleStatus = id => async dispatch =>{
  try {
    let {data} = await axios.put(`/api/tickets/${id}/updateStatus`)
    dispatch(toggleTicketStatus(data))

  } catch(error){
    console.log('ERROR FROM toggleStatus THUNK', error)
  }
}


// INITIAL STATE
const singleTicket = {}


// REDUCER

export default function (state = singleTicket,action){
  switch(action.type){
    case GET_TICKET:
      return action.ticket
    case TOGGLE_TICKET_STATUS:
      return action.ticket
    default:
      return state
  }
}
