import axios from 'axios'

// ACTION TYPES

const GET_TICKET = 'GET_TICKET'

// ACTION CREATORS

export const getSingleTicket = ticket =>({type:GET_TICKET, ticket})


//THUNKS

export const fetchSingleTicket = id => async dispatch =>{
  try{
    let {data} = await axios.get(`/api/tickets/${id}`)
    dispatch(getSingleTicket(data))


  } catch(error){
    console.log('ERROR FROM fetchSingleTicket THUNK', error)
  }
}


// INITIAL STATE
const singleTicket = {}


// REDUCER

export default function (state = singleTicket,action){
  switch(action.type){
    case GET_TICKET:
      return action.ticket
    default:
      return state
  }
}
