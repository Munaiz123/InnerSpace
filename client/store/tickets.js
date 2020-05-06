import axios from 'axios'

// ACTION TYPES

const GET_TICKETS = 'GET_TICKETS'

// ACTION CREATORS

export const getTickets = tickets =>({type: GET_TICKETS, tickets})

//THUNKS

export const fetchTickets = () => async dispatch =>{
  try{
    let {data} = await axios.get('/api/tickets')
    dispatch(getTickets(data))

  } catch(error){
    console.log('ERROR FROM fetchTickets THUNK', error)
  }
}

const tickets = []

export default function(state = tickets, action){
  switch(action.type){
    case GET_TICKETS:
      return action.tickets
    default:
      return state
  }
}
